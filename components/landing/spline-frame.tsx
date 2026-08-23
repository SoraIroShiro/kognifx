'use client';

import { useSplineActivation } from '@/lib/spline-activation';
import { afterNextPaint, shouldEnableHeavy3D } from '@/lib/spline-scheduling';
import {
  Component,
  type ComponentType,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

type InViewMarginValue = `${number}px` | `${number}%`;
type InViewMargin =
  | InViewMarginValue
  | `${InViewMarginValue} ${InViewMarginValue}`
  | `${InViewMarginValue} ${InViewMarginValue} ${InViewMarginValue}`
  | `${InViewMarginValue} ${InViewMarginValue} ${InViewMarginValue} ${InViewMarginValue}`;

interface SplineFrameProps {
  scene: string;
  className?: string;
  /** Hero requires explicit user activation; side loads after activation + in-view. */
  variant?: 'hero' | 'side';
  inViewAmount?: number;
  inViewMargin?: InViewMargin;
}

type SplineViewerComponent = ComponentType<{
  scene: string;
  onLoad?: () => void;
}>;

type HeroPhase = 'idle' | 'loading' | 'ready';

class SplineErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function Placeholder() {
  return (
    <div className='absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(255,130,92,0.18),transparent_28%),radial-gradient(circle_at_72%_38%,rgba(118,225,255,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%)]' />
  );
}

function SplineLoadingStatus() {
  return (
    <div
      role='status'
      aria-live='polite'
      aria-busy='true'
      className='pointer-events-none absolute inset-0 z-10 m-auto flex h-fit w-fit items-center justify-center rounded-full border border-white/10 bg-background/60 px-5 py-2.5 text-sm font-medium tracking-tight text-foreground/90 backdrop-blur-sm'
    >
      Loading interactive 3D…
    </div>
  );
}

function isSplineRelatedFailure(reason: unknown) {
  const message =
    reason instanceof Error
      ? `${reason.name} ${reason.message} ${reason.stack ?? ''}`
      : String(reason ?? '');

  return /draco_decoder|gstatic\.com\/draco|draco|webgl|wasm|spline/i.test(
    message
  );
}

function useLazyInView(
  ref: React.RefObject<HTMLDivElement | null>,
  enabled: boolean,
  amount: number,
  margin: InViewMargin
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsInView(false);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: amount,
        rootMargin: margin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, amount, margin, ref]);

  return isInView;
}

function useSplineRuntime(shouldLoad: boolean) {
  const [Viewer, setViewer] = useState<SplineViewerComponent | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    if (!shouldLoad) {
      setIsLoaded(false);
      return;
    }

    if (hasFailed || Viewer) return;

    let cancelled = false;

    import('./spline-viewer')
      .then((mod) => {
        if (!cancelled) setViewer(() => mod.SplineViewer);
      })
      .catch(() => {
        if (!cancelled) setHasFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, [shouldLoad, hasFailed, Viewer]);

  useEffect(() => {
    if (!shouldLoad || hasFailed) return;

    const markFailed = () => setHasFailed(true);

    const onRejection = (event: PromiseRejectionEvent) => {
      if (isSplineRelatedFailure(event.reason)) {
        markFailed();
      }
    };

    const onError = (event: ErrorEvent) => {
      if (
        isSplineRelatedFailure(
          event.error ?? `${event.message} ${event.filename ?? ''}`
        )
      ) {
        markFailed();
      }
    };

    window.addEventListener('unhandledrejection', onRejection);
    window.addEventListener('error', onError);

    return () => {
      window.removeEventListener('unhandledrejection', onRejection);
      window.removeEventListener('error', onError);
    };
  }, [shouldLoad, hasFailed]);

  return { Viewer, isLoaded, hasFailed, setIsLoaded, setHasFailed };
}

function SplineFrameHero({
  scene,
  className = '',
}: {
  scene: string;
  className?: string;
}) {
  const { isActivated } = useSplineActivation();
  const [canOffer3D, setCanOffer3D] = useState(false);
  const [phase, setPhase] = useState<HeroPhase>('idle');
  const [canImport, setCanImport] = useState(false);

  useEffect(() => {
    setCanOffer3D(shouldEnableHeavy3D());
  }, []);

  // Sync hero phase with header toggle: on = load, off = unload to placeholder.
  useEffect(() => {
    if (!isActivated) {
      setPhase('idle');
      setCanImport(false);
      return;
    }

    if (!canOffer3D || phase !== 'idle') return;
    setPhase('loading');
  }, [isActivated, canOffer3D, phase]);

  // Stage 2: only after loading UI has painted, allow heavy import.
  useEffect(() => {
    if (phase !== 'loading' || canImport) return;

    let cancelled = false;

    afterNextPaint().then(() => {
      if (!cancelled) setCanImport(true);
    });

    return () => {
      cancelled = true;
    };
  }, [phase, canImport]);

  const shouldLoad = isActivated && canImport && canOffer3D;
  const { Viewer, isLoaded, hasFailed, setIsLoaded, setHasFailed } =
    useSplineRuntime(shouldLoad);

  useEffect(() => {
    if (isLoaded && phase === 'loading') {
      setPhase('ready');
    }
  }, [isLoaded, phase]);

  const showLoading =
    (phase === 'loading' || phase === 'ready') && !hasFailed && !isLoaded;
  const shouldRender = shouldLoad && !hasFailed && Viewer;
  const showPlaceholder = !isLoaded || hasFailed || !shouldLoad;

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          showPlaceholder ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden='true'
      >
        <Placeholder />
      </div>

      {showLoading ? <SplineLoadingStatus /> : null}

      {shouldRender && Viewer ? (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden='true'
        >
          <SplineErrorBoundary onError={() => setHasFailed(true)}>
            <Viewer scene={scene} onLoad={() => setIsLoaded(true)} />
          </SplineErrorBoundary>
        </div>
      ) : null}
    </div>
  );
}

function SplineFrameSide({
  scene,
  className = '',
  inViewAmount = 0.35,
  inViewMargin = '120px 0px',
}: {
  scene: string;
  className?: string;
  inViewAmount?: number;
  inViewMargin?: InViewMargin;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isActivated } = useSplineActivation();
  const [canOffer3D, setCanOffer3D] = useState(false);

  useEffect(() => {
    setCanOffer3D(shouldEnableHeavy3D());
  }, []);

  const shouldObserve = isActivated && canOffer3D;
  const isInView = useLazyInView(ref, shouldObserve, inViewAmount, inViewMargin);
  const shouldLoad = shouldObserve && isInView;

  const { Viewer, isLoaded, hasFailed, setIsLoaded, setHasFailed } =
    useSplineRuntime(shouldLoad);

  const shouldRender = shouldLoad && !hasFailed && Viewer;
  const showPlaceholder = !isLoaded || hasFailed || !shouldLoad;

  return (
    <div
      ref={ref}
      className={`relative h-full w-full overflow-hidden ${className}`}
      aria-hidden='true'
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          showPlaceholder ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Placeholder />
      </div>

      {shouldRender && Viewer ? (
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <SplineErrorBoundary onError={() => setHasFailed(true)}>
            <Viewer scene={scene} onLoad={() => setIsLoaded(true)} />
          </SplineErrorBoundary>
        </div>
      ) : null}
    </div>
  );
}

export function SplineFrame({
  variant = 'hero',
  scene,
  className,
  inViewAmount,
  inViewMargin,
}: SplineFrameProps) {
  if (variant === 'side') {
    return (
      <SplineFrameSide
        scene={scene}
        className={className}
        inViewAmount={inViewAmount}
        inViewMargin={inViewMargin}
      />
    );
  }

  return <SplineFrameHero scene={scene} className={className} />;
}

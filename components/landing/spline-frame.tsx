'use client';

import { scheduleAfterLoadAndIdle, shouldEnableHeavy3D } from '@/lib/spline-scheduling';
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
  lazy?: boolean;
  /** Minimum delay after window load before mount/import, then idle scheduling. */
  deferMs?: number;
  className?: string;
  inViewAmount?: number;
  inViewMargin?: InViewMargin;
}

type SplineViewerComponent = ComponentType<{
  scene: string;
  onLoad?: () => void;
}>;

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
    <>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(255,130,92,0.18),transparent_28%),radial-gradient(circle_at_72%_38%,rgba(118,225,255,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%)]' />
      <div className='absolute inset-0 animate-pulse bg-background/70' />
    </>
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
  const [isInView, setIsInView] = useState(!enabled);

  useEffect(() => {
    if (!enabled) {
      setIsInView(true);
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

export function SplineFrame({
  scene,
  lazy = false,
  deferMs = 600,
  className = '',
  inViewAmount = 0.15,
  inViewMargin = '200px 0px',
}: SplineFrameProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useLazyInView(ref, lazy, inViewAmount, inViewMargin);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);
  const [canMount, setCanMount] = useState(false);
  const [Viewer, setViewer] = useState<SplineViewerComponent | null>(null);

  const inViewReady = !lazy || isInView;

  useEffect(() => {
    if (!shouldEnableHeavy3D()) {
      setIsSkipped(true);
    }
  }, []);

  useEffect(() => {
    if (!inViewReady || hasFailed || isSkipped) return;

    return scheduleAfterLoadAndIdle(deferMs, () => {
      setCanMount(true);
    });
  }, [inViewReady, deferMs, hasFailed, isSkipped]);

  useEffect(() => {
    if (!canMount || hasFailed || isSkipped || Viewer) return;

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
  }, [canMount, hasFailed, isSkipped, Viewer]);

  useEffect(() => {
    if (!canMount || hasFailed || isSkipped) return;

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
  }, [canMount, hasFailed, isSkipped]);

  const shouldRender =
    canMount && inViewReady && !hasFailed && !isSkipped && Viewer;
  const showPlaceholder = !isLoaded || hasFailed || isSkipped;

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

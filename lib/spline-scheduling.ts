export function shouldEnableHeavy3D(): boolean {
  if (typeof window === 'undefined') return false;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  const connection = (
    navigator as Navigator & {
      connection?: { saveData?: boolean };
    }
  ).connection;

  if (connection?.saveData) {
    return false;
  }

  if (!hasWebGL()) {
    return false;
  }

  return true;
}

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      canvas.getContext('webgl2') || canvas.getContext('webgl')
    );
  } catch {
    return false;
  }
}

/**
 * Schedule heavy 3D work after document load, a minimum defer, and idle time.
 */
export function scheduleAfterLoadAndIdle(
  deferMs: number,
  callback: () => void
): () => void {
  let cancelled = false;
  let idleId: number | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const runWhenIdle = () => {
    if (cancelled || document.visibilityState !== 'visible') return;

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(
        () => {
          if (!cancelled && document.visibilityState === 'visible') {
            callback();
          }
        },
        { timeout: 2000 }
      );
    } else {
      callback();
    }
  };

  const startDefer = () => {
    if (cancelled) return;

    timeoutId = setTimeout(() => {
      if (cancelled) return;

      if (document.visibilityState !== 'visible') {
        const onVisible = () => {
          if (document.visibilityState === 'visible') {
            document.removeEventListener('visibilitychange', onVisible);
            runWhenIdle();
          }
        };
        document.addEventListener('visibilitychange', onVisible);
        return;
      }

      runWhenIdle();
    }, Math.max(deferMs, 0));
  };

  if (document.readyState === 'complete') {
    startDefer();
  } else {
    window.addEventListener('load', startDefer, { once: true });
  }

  return () => {
    cancelled = true;
    if (
      idleId !== undefined &&
      typeof window !== 'undefined' &&
      'cancelIdleCallback' in window
    ) {
      window.cancelIdleCallback(idleId);
    }
    if (timeoutId) clearTimeout(timeoutId);
  };
}

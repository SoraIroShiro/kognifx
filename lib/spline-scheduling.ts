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

/**
 * Resolves after the browser has painted the current frame.
 * Double rAF yields past style/layout/paint so INP handlers can
 * update UI before heavy work begins.
 */
export function afterNextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
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

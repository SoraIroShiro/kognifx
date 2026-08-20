'use client';

import Spline from '@splinetool/react-spline';

interface SplineViewerProps {
  scene: string;
  onLoad?: () => void;
}

export function SplineViewer({ scene, onLoad }: SplineViewerProps) {
  return <Spline scene={scene} onLoad={onLoad} />;
}

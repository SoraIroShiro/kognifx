'use client';

import { useSplineActivation } from '@/lib/spline-activation';
import { shouldEnableHeavy3D } from '@/lib/spline-scheduling';
import { getLocaleFromPathname } from '@/lib/marketing-navigation';
import { cn } from '@/lib/utils';
import { Box } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const copy = {
  en: {
    idle: 'Explore interactive 3D',
    active: 'Interactive 3D enabled',
  },
  id: {
    idle: 'Jelajahi 3D interaktif',
    active: '3D interaktif aktif',
  },
} as const;

export function SplineHeaderTrigger({
  className,
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const { isActivated, activate } = useSplineActivation();
  const [canOffer3D, setCanOffer3D] = useState(false);

  // English homepage is the only route that mounts Spline.
  const isSplineHome = pathname === '/';

  useEffect(() => {
    if (!isSplineHome) {
      setCanOffer3D(false);
      return;
    }
    setCanOffer3D(shouldEnableHeavy3D());
  }, [isSplineHome]);

  if (!isSplineHome || !canOffer3D) {
    return null;
  }

  const labels = copy[locale];

  return (
    <button
      type='button'
      onClick={() => {
        if (!isActivated) activate();
      }}
      disabled={isActivated}
      aria-pressed={isActivated}
      aria-label={isActivated ? labels.active : labels.idle}
      title={isActivated ? labels.active : labels.idle}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-default disabled:opacity-100 disabled:text-foreground',
        className
      )}
    >
      <Box className='h-4 w-4' aria-hidden='true' strokeWidth={1.75} />
    </button>
  );
}

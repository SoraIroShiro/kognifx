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
    enable: 'Enable interactive 3D',
    disable: 'Disable interactive 3D',
  },
  id: {
    enable: 'Aktifkan 3D interaktif',
    disable: 'Nonaktifkan 3D interaktif',
  },
} as const;

export function SplineHeaderTrigger({
  className,
}: {
  className?: string;
}) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const { isActivated, toggle } = useSplineActivation();
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
  const label = isActivated ? labels.disable : labels.enable;

  return (
    <button
      type='button'
      onClick={toggle}
      aria-pressed={isActivated}
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        isActivated
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
    >
      <Box className='h-4 w-4' aria-hidden='true' strokeWidth={1.75} />
    </button>
  );
}

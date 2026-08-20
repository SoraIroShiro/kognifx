'use client';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

export function SiteHeader() {
  return (
    <>
      <header className='fixed left-0 top-0 z-50 w-full border-b backdrop-blur-[12px] border'>
        <div className='container flex h-[3.5rem] items-center justify-between'>
          <span className='text-md flex items-center font-bold'>KOGNIFX</span>
          <AnimatedThemeToggler />
        </div>
      </header>
    </>
  );
}

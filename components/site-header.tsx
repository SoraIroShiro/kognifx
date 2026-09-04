'use client';

import { LanguageSwitcher } from '@/components/language-switcher';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';
import {
  getHomeHrefForLocale,
  getLocaleFromPathname,
  getNavItemsForLocale,
} from '@/lib/marketing-navigation';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function SiteHeader() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const navItems = getNavItemsForLocale(locale);
  const homeHref = getHomeHrefForLocale(locale);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className='fixed left-0 top-0 z-50 w-full border-b backdrop-blur-[12px] border'>
      <div className='container flex h-[3.5rem] items-center justify-between gap-4'>
        <Link
          href={homeHref}
          className='flex shrink-0 items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          aria-label='Kognifx home'
        >
          <Image
            src='/kognifx-logo.png'
            alt=''
            width={28}
            height={28}
            className='h-7 w-7 rounded-sm object-contain'
            priority
          />
          <span className='text-sm font-bold tracking-[0.18em]'>KOGNIFX</span>
        </Link>

        <nav
          aria-label='Primary'
          className='hidden items-center gap-6 md:flex'
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== homeHref && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className='text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className='flex items-center gap-2 sm:gap-3'>
          <LanguageSwitcher />
          <AnimatedThemeToggler />
          <button
            type='button'
            className='inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-sm md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
            aria-expanded={mobileOpen}
            aria-controls='mobile-primary-nav'
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span aria-hidden='true'>{mobileOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id='mobile-primary-nav'
          aria-label='Primary mobile'
          className='border-t border-border/60 md:hidden'
        >
          <ul className='container flex flex-col gap-1 py-3'>
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className='block rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

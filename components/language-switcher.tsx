'use client';

import { getEquivalentRoute, type Locale } from '@/lib/language-routes';
import {
  getHomeHrefForLocale,
  getLocaleFromPathname,
} from '@/lib/marketing-navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales: Locale[] = ['en', 'id'];

function getSwitchHref(pathname: string, targetLocale: Locale): string {
  return getEquivalentRoute(pathname, targetLocale) ?? getHomeHrefForLocale(targetLocale);
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname);

  return (
    <nav aria-label='Language selection' className='flex items-center gap-1'>
      {locales.map((locale, index) => {
        const isActive = locale === currentLocale;
        const href = getSwitchHref(pathname, locale);

        return (
          <span key={locale} className='flex items-center gap-1'>
            {index > 0 ? (
              <span aria-hidden='true' className='text-muted-foreground'>
                /
              </span>
            ) : null}
            {isActive ? (
              <span
                aria-current='true'
                className='rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide text-foreground'
              >
                {locale}
              </span>
            ) : (
              <Link
                href={href}
                className='rounded px-2 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
                lang={locale === 'id' ? 'id' : 'en'}
              >
                {locale}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

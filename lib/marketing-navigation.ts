import type { Locale } from '@/lib/language-routes';

export type MarketingNavItem = {
  label: string;
  href: string;
};

export const englishNavItems: MarketingNavItem[] = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const indonesianNavItems: MarketingNavItem[] = [
  { label: 'Solusi', href: '/id/solusi' },
  { label: 'Insight', href: '/id/insight' },
  { label: 'Tentang', href: '/id/tentang' },
  { label: 'Studi Kasus', href: '/id/studi-kasus' },
  { label: 'Kontak', href: '/id/kontak' },
];

export function getNavItemsForLocale(locale: Locale): MarketingNavItem[] {
  return locale === 'id' ? indonesianNavItems : englishNavItems;
}

export function getHomeHrefForLocale(locale: Locale): string {
  return locale === 'id' ? '/id' : '/';
}

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === '/id' || pathname.startsWith('/id/') ? 'id' : 'en';
}

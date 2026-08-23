import { siteUrl } from '@/lib/seo';

export function absoluteUrl(path: string): string {
  if (path === '/') return `${siteUrl}/`;
  return `${siteUrl}${path}`;
}

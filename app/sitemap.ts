import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

/**
 * Public, indexable routes only.
 * Add a path here when a real public page ships — do not invent URLs.
 * lastModified is omitted until a reliable content-change timestamp exists.
 */
const publicRoutes: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
}> = [
  {
    path: '/',
    changeFrequency: 'weekly',
    priority: 1,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}

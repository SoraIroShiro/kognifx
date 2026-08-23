import type { MetadataRoute } from 'next';
import { languageRoutePairs } from '@/lib/language-routes';
import { absoluteUrl } from '@/lib/absolute-url';

/**
 * Public, indexable Phase 1 marketing routes.
 * lastModified is omitted until a reliable content-change timestamp exists.
 * Page-level hreflang remains authoritative for language relationships.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = languageRoutePairs.flatMap((pair) => [pair.en, pair.id]);

  return paths.map((path) => ({
    url: absoluteUrl(path),
  }));
}

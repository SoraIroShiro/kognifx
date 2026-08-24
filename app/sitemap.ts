import type { MetadataRoute } from 'next';
import { languageRoutePairs } from '@/lib/language-routes';
import { indonesianSolutionDetailPaths } from '@/lib/indonesian-solution-routes';
import { absoluteUrl } from '@/lib/absolute-url';

/**
 * Public, indexable marketing routes.
 * lastModified is omitted until a reliable content-change timestamp exists.
 * Paired routes use page-level hreflang; unpaired ID solution pages self-canonicalize only.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const pairedPaths = languageRoutePairs.flatMap((pair) => [pair.en, pair.id]);
  const paths = [...pairedPaths, ...indonesianSolutionDetailPaths];

  return paths.map((path) => ({
    url: absoluteUrl(path),
  }));
}

import {
  getRoutePair,
  isIndonesianRoute,
  type MarketingRoute,
} from '@/lib/language-routes';
import { absoluteUrl } from '@/lib/absolute-url';
import { seoDefaults } from '@/lib/seo';
import type { Metadata } from 'next';

type CreateMarketingMetadataInput = {
  path: MarketingRoute;
  title: string;
  description: string;
};

type CreateUnpairedIndonesianMetadataInput = {
  path: string;
  title: string;
  description: string;
  /** Optional Open Graph / Twitter image path (absolute site path). */
  image?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
};

export function createMarketingMetadata({
  path,
  title,
  description,
}: CreateMarketingMetadataInput): Metadata {
  const pair = getRoutePair(path);

  if (!pair) {
    throw new Error(`Missing language route pair for path: ${path}`);
  }

  const canonical = absoluteUrl(path);
  const englishUrl = absoluteUrl(pair.en);
  const indonesianUrl = absoluteUrl(pair.id);
  const isIndonesian = isIndonesianRoute(path);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
      languages: {
        en: englishUrl,
        'id-ID': indonesianUrl,
        'x-default': indonesianUrl,
      },
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: seoDefaults.siteName,
      locale: isIndonesian ? 'id_ID' : 'en_US',
      images: [
        {
          url: '/showgoogle.png',
          width: 3310,
          height: 1908,
          alt: 'Kognifx brand preview',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/showgoogle.png'],
    },
  };
}

/**
 * Indonesian-only marketing routes without an English language pair.
 * Self-canonical only — no fabricated hreflang alternates.
 */
export function createUnpairedIndonesianMetadata({
  path,
  title,
  description,
  image,
}: CreateUnpairedIndonesianMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = {
    url: image?.url ?? '/showgoogle.png',
    width: image?.width ?? 3310,
    height: image?.height ?? 1908,
    alt: image?.alt ?? 'Kognifx brand preview',
  };

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: seoDefaults.siteName,
      locale: 'id_ID',
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage.url],
    },
  };
}

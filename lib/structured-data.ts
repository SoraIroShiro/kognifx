import { absoluteUrl } from '@/lib/absolute-url';
import type { MarketingRoute } from '@/lib/language-routes';
import { seoDefaults, siteUrl } from '@/lib/seo';

export const organizationId = `${siteUrl}/#organization`;
export const websiteId = `${siteUrl}/#website`;

export function getHomepageStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: seoDefaults.siteName,
        url: siteUrl,
        description: seoDefaults.description,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: seoDefaults.siteName,
        publisher: {
          '@id': organizationId,
        },
      },
    ],
  };
}

type PageStructuredDataInput = {
  path: MarketingRoute;
  type: 'AboutPage' | 'CollectionPage' | 'ContactPage' | 'WebPage';
  name: string;
  description: string;
  inLanguage: 'en' | 'id-ID';
};

export function getPageStructuredData({
  path,
  type,
  name,
  description,
  inLanguage,
}: PageStructuredDataInput) {
  const pageUrl = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    inLanguage,
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': organizationId,
    },
  };
}

import { seoDefaults, siteUrl } from '@/lib/seo';

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

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

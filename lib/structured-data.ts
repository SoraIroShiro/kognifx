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

type ServicePageStructuredDataInput = {
  path: string;
  name: string;
  description: string;
  inLanguage?: 'id-ID';
};

export function getServicePageStructuredData({
  path,
  name,
  description,
  inLanguage = 'id-ID',
}: ServicePageStructuredDataInput) {
  const pageUrl = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
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
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name,
        description,
        url: pageUrl,
        provider: {
          '@id': organizationId,
        },
      },
    ],
  };
}

type UnpairedWebPageStructuredDataInput = {
  path: string;
  type?: 'WebPage' | 'CollectionPage';
  name: string;
  description: string;
  inLanguage?: 'id-ID';
};

export function getUnpairedWebPageStructuredData({
  path,
  type = 'WebPage',
  name,
  description,
  inLanguage = 'id-ID',
}: UnpairedWebPageStructuredDataInput) {
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
    publisher: {
      '@id': organizationId,
    },
  };
}

type ArticleStructuredDataInput = {
  path: string;
  headline: string;
  description: string;
  inLanguage?: 'id-ID';
};

export function getArticleStructuredData({
  path,
  headline,
  description,
  inLanguage = 'id-ID',
}: ArticleStructuredDataInput) {
  const pageUrl = absoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: headline,
        description,
        inLanguage,
        isPartOf: {
          '@id': websiteId,
        },
      },
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        headline,
        description,
        inLanguage,
        url: pageUrl,
        mainEntityOfPage: {
          '@id': `${pageUrl}#webpage`,
        },
        publisher: {
          '@id': organizationId,
        },
      },
    ],
  };
}

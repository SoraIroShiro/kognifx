import { getHomepageStructuredData } from '@/lib/structured-data';

export function HomepageJsonLd() {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getHomepageStructuredData()),
      }}
    />
  );
}

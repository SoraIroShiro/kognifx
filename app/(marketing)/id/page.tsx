import { IndonesianHomepageContent } from '@/components/landing/indonesian-homepage-content';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createMarketingMetadata } from '@/lib/page-metadata';
import { getPageStructuredData } from '@/lib/structured-data';

const title = 'Kognifx — Software House & Solusi AI untuk Bisnis';
const description =
  'Kognifx membantu bisnis membangun software custom, sistem enterprise, AI agent, automation, dan IoT untuk menyelesaikan kebutuhan operasional hingga masalah bisnis yang kompleks.';

export const metadata = createMarketingMetadata({
  path: '/id',
  title,
  description,
});

export default function IndonesianHomePage() {
  return (
    <>
      <JsonLd
        data={getPageStructuredData({
          path: '/id',
          type: 'WebPage',
          name: title,
          description,
          inLanguage: 'id-ID',
        })}
      />
      <IndonesianHomepageContent />
    </>
  );
}

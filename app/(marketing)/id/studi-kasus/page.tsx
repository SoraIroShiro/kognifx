import {
  MarketingInsightCard,
  MarketingInsightGrid,
  MarketingPageHero,
  MarketingPageShell,
} from '@/components/marketing/marketing-page-shell';
import { JsonLd } from '@/components/structured-data/json-ld';
import {
  indonesianCaseStudyHubPath,
  indonesianCaseStudies,
} from '@/lib/indonesian-case-study-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getUnpairedWebPageStructuredData } from '@/lib/structured-data';
import Link from 'next/link';

const title = 'Studi Kasus Platform Enterprise | Kognifx';
const description =
  'Lihat bagaimana Kognifx membangun platform enterprise custom yang menghubungkan operasional bisnis, CRM, automation, dan workflow dalam satu sistem.';

export const metadata = createUnpairedIndonesianMetadata({
  path: indonesianCaseStudyHubPath,
  title,
  description,
});

const inlineLinkClass =
  'text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function StudiKasusPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getUnpairedWebPageStructuredData({
          path: indonesianCaseStudyHubPath,
          type: 'CollectionPage',
          name: title,
          description,
        })}
      />

      <MarketingPageHero eyebrow='Studi Kasus' title='Proyek Nyata, Masalah Nyata'>
        Kognifx mendokumentasikan cara kami membantu organisasi mengubah
        operasional yang terfragmentasi menjadi platform enterprise custom,
        dari arsitektur sampai delivery.
      </MarketingPageHero>

      <MarketingInsightGrid>
        {indonesianCaseStudies.map((study) => (
          <MarketingInsightCard key={study.path} title={study.h1}>
            <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>
              {study.industry}
            </p>
            <p>{study.shortDescription}</p>
            <p className='pt-1'>
              <Link href={study.path} className={inlineLinkClass}>
                Baca studi kasus
              </Link>
            </p>
          </MarketingInsightCard>
        ))}
      </MarketingInsightGrid>
    </MarketingPageShell>
  );
}

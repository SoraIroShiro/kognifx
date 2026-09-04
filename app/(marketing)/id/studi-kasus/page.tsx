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

const title = 'Enterprise Platform Case Studies | Kognifx';
const description =
  'See how Kognifx builds custom enterprise platforms that connect business operations, customer lifecycle, automation, and intelligence.';

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

      <MarketingPageHero eyebrow='Case Studies' title='Real Projects, Real Complexity'>
        Kognifx documents how we help organizations turn fragmented operations
        into custom enterprise platforms — from architecture through delivery.
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
                Read case study
              </Link>
            </p>
          </MarketingInsightCard>
        ))}
      </MarketingInsightGrid>
    </MarketingPageShell>
  );
}

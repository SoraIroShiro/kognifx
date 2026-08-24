import { InsightBreadcrumb } from '@/components/marketing/insight-breadcrumb';
import {
  MarketingCtaPanel,
  MarketingInsightCard,
  MarketingInsightGrid,
  MarketingPageHero,
  MarketingPageShell,
} from '@/components/marketing/marketing-page-shell';
import { JsonLd } from '@/components/structured-data/json-ld';
import {
  indonesianInsightArticles,
  indonesianInsightHubPath,
  insightCategoryOrder,
} from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getUnpairedWebPageStructuredData } from '@/lib/structured-data';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const title = 'Insight Software, AI & Automation untuk Bisnis | Kognifx';
const description =
  'Pelajari software custom, AI automation, ERP, integrasi sistem, API, IoT, dan teknologi bisnis melalui insight praktis dari Kognifx.';

export const metadata = createUnpairedIndonesianMetadata({
  path: indonesianInsightHubPath,
  title,
  description,
});

const inlineLinkClass =
  'text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export default function InsightHubPage() {
  return (
    <>
      <JsonLd
        data={getUnpairedWebPageStructuredData({
          path: indonesianInsightHubPath,
          type: 'CollectionPage',
          name: title,
          description,
        })}
      />
      <MarketingPageShell>
        <InsightBreadcrumb />

        <MarketingPageHero
          eyebrow='Insight'
          title='Insight Software, AI & Teknologi Bisnis'
        >
          Kognifx menulis materi praktis tentang software, AI, automation,
          sistem enterprise, integrasi, dan IoT. Tujuannya membantu tim
          memahami konsep dan trade-off sebelum memutuskan pendekatan teknis —
          bukan menggantikan halaman solusi.
        </MarketingPageHero>

        {insightCategoryOrder.map((category) => {
          const articles = indonesianInsightArticles.filter(
            (article) => article.category === category
          );

          return (
            <section key={category} className='mt-16'>
              <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
                {category}
              </h2>
              <MarketingInsightGrid>
                {articles.map((article) => (
                  <MarketingInsightCard key={article.path} title={article.h1}>
                    <p>{article.shortDescription}</p>
                    <p className='pt-1'>
                      <Link href={article.path} className={inlineLinkClass}>
                        Baca artikel
                      </Link>
                    </p>
                  </MarketingInsightCard>
                ))}
              </MarketingInsightGrid>
            </section>
          );
        })}

        <MarketingCtaPanel
          title='Punya kebutuhan yang lebih spesifik?'
          action={
            <Link
              href='/id/solusi'
              className={cn(
                buttonVariants({ size: 'lg' }),
                'inline-flex rounded-full'
              )}
            >
              Lihat Solusi Kognifx
            </Link>
          }
        >
          Jika Anda sudah punya masalah operasional yang jelas, halaman solusi
          menjelaskan layanan yang dapat dibangun. Insight tetap menjadi tempat
          untuk memahami konsepnya.
        </MarketingCtaPanel>
      </MarketingPageShell>
    </>
  );
}

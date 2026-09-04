import {
  MarketingCtaPanel,
  MarketingInsightCard,
  MarketingInsightGrid,
  MarketingPageHero,
  MarketingPageShell,
  MarketingProcessTimeline,
} from '@/components/marketing/marketing-page-shell';
import { WhatsAppConsultationLink } from '@/components/marketing/whatsapp-consultation-link';
import { JsonLd } from '@/components/structured-data/json-ld';
import { buttonVariants } from '@/components/ui/button';
import { indonesianCaseStudyHubPath } from '@/lib/indonesian-case-study-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getUnpairedWebPageStructuredData } from '@/lib/structured-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const title =
  'Studi Kasus Pengembangan Software & Enterprise Platform | Kognifx';
const description =
  'Lihat bagaimana Kognifx membangun custom software, enterprise platform, automation system, dan solusi digital untuk kebutuhan bisnis yang kompleks.';

export const metadata = createUnpairedIndonesianMetadata({
  path: indonesianCaseStudyHubPath,
  title,
  description,
});

const inlineLinkClass =
  'text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const featuredCaseStudy = {
  path: '/id/studi-kasus/platform-enterprise-terintegrasi',
  title: 'Enterprise Platform Terintegrasi',
  description:
    'Platform enterprise custom yang menghubungkan CRM, operasional bisnis, commerce, event management, automation, dan AI dalam satu sistem.',
  overview: [
    { label: 'Industry', value: 'Professional Organization' },
    { label: 'Project Type', value: 'Custom Enterprise Platform' },
    { label: 'Timeline', value: 'March 2026 – July 2026' },
  ],
};

const capabilityItems = [
  {
    title: 'Custom Software Development',
    description:
      'Membangun aplikasi sesuai workflow dan kebutuhan operasional bisnis.',
  },
  {
    title: 'Enterprise Platform',
    description:
      'Menghubungkan berbagai proses bisnis dalam satu platform terintegrasi.',
  },
  {
    title: 'System Integration',
    description:
      'Menghubungkan sistem yang sudah ada melalui architecture dan API.',
  },
  {
    title: 'AI & Automation',
    description:
      'Mengurangi pekerjaan manual melalui workflow automation dan AI.',
  },
];

const approachSteps = [
  {
    title: 'Understand',
    description: 'Memahami proses bisnis dan kebutuhan sistem.',
  },
  {
    title: 'Design',
    description: 'Menyusun architecture dan pengalaman pengguna.',
  },
  {
    title: 'Build',
    description:
      'Mengembangkan platform yang dapat digunakan dan dikembangkan.',
  },
];

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

      <MarketingPageHero
        eyebrow='Studi Kasus'
        title='Studi Kasus Pengembangan Platform Digital Kognifx'
      >
        Lihat bagaimana Kognifx membantu organisasi membangun custom software,
        enterprise platform, dan sistem digital yang sesuai dengan proses bisnis
        mereka.
      </MarketingPageHero>

      <div className='mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
        <WhatsAppConsultationLink
          locale='id'
          className={cn(buttonVariants({ size: 'lg' }), 'rounded-full px-6')}
        >
          Diskusikan proyek Anda
        </WhatsAppConsultationLink>
        <Link
          href='/id/solusi'
          className={cn(
            buttonVariants({ size: 'lg', variant: 'outline' }),
            'rounded-full px-6'
          )}
        >
          Lihat solusi kami
        </Link>
      </div>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Studi Kasus Pilihan
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Proyek yang menunjukkan cara Kognifx merancang dan membangun platform
          untuk kebutuhan operasional yang kompleks.
        </p>

        <article className='mt-8 rounded-2xl border border-border/70 bg-background/50 p-6 shadow-sm backdrop-blur-sm md:p-8'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground'>
            Featured
          </p>
          <h3 className='mt-3 text-xl font-medium tracking-tight text-foreground sm:text-2xl'>
            {featuredCaseStudy.title}
          </h3>
          <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
            {featuredCaseStudy.description}
          </p>

          <dl className='mt-6 grid gap-3 sm:grid-cols-3'>
            {featuredCaseStudy.overview.map((item) => (
              <div
                key={item.label}
                className='rounded-xl border border-border/60 bg-muted/20 px-4 py-3'
              >
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground'>
                  {item.label}
                </dt>
                <dd className='mt-1.5 text-sm text-foreground'>{item.value}</dd>
              </div>
            ))}
          </dl>

          <p className='mt-6'>
            <Link href={featuredCaseStudy.path} className={inlineLinkClass}>
              Lihat studi kasus
            </Link>
          </p>
        </article>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Jenis Solusi yang Kami Bangun
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Setiap studi kasus biasanya berkaitan dengan satu atau beberapa area
          solusi berikut.
        </p>
        <MarketingInsightGrid>
          {capabilityItems.map((item) => (
            <MarketingInsightCard key={item.title} title={item.title}>
              <p>{item.description}</p>
            </MarketingInsightCard>
          ))}
        </MarketingInsightGrid>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Cara Kami Membangun Solusi
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Pendekatan yang sama dipakai di hampir semua proyek: pahami dulu,
          rancang, baru bangun.
        </p>
        <MarketingProcessTimeline steps={approachSteps} />
      </section>

      <MarketingCtaPanel
        title='Punya Proses Bisnis yang Kompleks?'
        action={
          <WhatsAppConsultationLink
            locale='id'
            className={cn(
              buttonVariants({ size: 'lg' }),
              'inline-flex rounded-full'
            )}
          >
            Diskusikan kebutuhan Anda
          </WhatsAppConsultationLink>
        }
      >
        Kognifx membantu organisasi membangun platform digital yang sesuai
        dengan cara bisnis mereka berjalan.
      </MarketingCtaPanel>
    </MarketingPageShell>
  );
}

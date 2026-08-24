import {
  MarketingCtaPanel,
  MarketingInsightCard,
  MarketingInsightGrid,
  MarketingPageHero,
  MarketingPageShell,
  MarketingSection,
  MarketingTagList,
} from '@/components/marketing/marketing-page-shell';
import { WhatsAppConsultationLink } from '@/components/marketing/whatsapp-consultation-link';
import { SolutionBreadcrumb } from '@/components/marketing/solution-breadcrumb';
import type { RelatedSolutionLink } from '@/lib/indonesian-solution-routes';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type SolutionDetailSection = {
  title: string;
  children: ReactNode;
};

type SolutionDetailPageProps = {
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  intro: ReactNode;
  sections: SolutionDetailSection[];
  capabilityTags?: string[];
  relatedSolutions: RelatedSolutionLink[];
  relatedInsights?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
  ctaTitle: string;
  ctaDescription: ReactNode;
  ctaLabel: string;
};

const inlineLinkClass =
  'text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export function SolutionInlineLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={inlineLinkClass}>
      {children}
    </Link>
  );
}

export function SolutionDetailPage({
  breadcrumbLabel,
  eyebrow,
  h1,
  intro,
  sections,
  capabilityTags,
  relatedSolutions,
  relatedInsights,
  ctaTitle,
  ctaDescription,
  ctaLabel,
}: SolutionDetailPageProps) {
  return (
    <MarketingPageShell>
      <SolutionBreadcrumb current={breadcrumbLabel} />

      <MarketingPageHero eyebrow={eyebrow} title={h1}>
        {intro}
      </MarketingPageHero>

      {sections.map((section) => (
        <MarketingSection key={section.title} title={section.title}>
          {section.children}
        </MarketingSection>
      ))}

      {capabilityTags && capabilityTags.length > 0 ? (
        <section className='mt-16'>
          <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
            Contoh area yang sering dibangun
          </h2>
          <p className='mt-4 max-w-3xl text-muted-foreground'>
            Daftar berikut bukan katalog produk siap pakai. Setiap proyek
            disesuaikan setelah kebutuhan dan proses bisnis dipahami.
          </p>
          <MarketingTagList items={capabilityTags} />
        </section>
      ) : null}

      {relatedSolutions.length > 0 ? (
        <section className='mt-16'>
          <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
            Solusi terkait
          </h2>
          <MarketingInsightGrid>
            {relatedSolutions.map((item) => (
              <MarketingInsightCard key={item.href} title={item.label}>
                <p>{item.description}</p>
                <p className='pt-1'>
                  <Link href={item.href} className={inlineLinkClass}>
                    Pelajari {item.label}
                  </Link>
                </p>
              </MarketingInsightCard>
            ))}
          </MarketingInsightGrid>
          <p className='mt-6 text-sm text-muted-foreground'>
            Kembali ke{' '}
            <Link href='/id/solusi' className={inlineLinkClass}>
              halaman Solusi
            </Link>
            .
          </p>
        </section>
      ) : null}

      {relatedInsights && relatedInsights.length > 0 ? (
        <section className='mt-16'>
          <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
            Insight terkait
          </h2>
          <p className='mt-4 max-w-3xl text-muted-foreground'>
            Materi berikut membahas konsep dan pertimbangan, bukan penawaran
            jasa.
          </p>
          <ul className='mt-5 max-w-3xl space-y-3 text-muted-foreground'>
            {relatedInsights.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={inlineLinkClass}>
                  {item.label}
                </Link>
                {item.description ? (
                  <span className='mt-1 block text-sm'>{item.description}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <MarketingCtaPanel
        title={ctaTitle}
        action={
          <WhatsAppConsultationLink
            locale='id'
            className={cn(
              buttonVariants({ size: 'lg' }),
              'inline-flex rounded-full'
            )}
          >
            {ctaLabel}
          </WhatsAppConsultationLink>
        }
      >
        {ctaDescription}
      </MarketingCtaPanel>
    </MarketingPageShell>
  );
}

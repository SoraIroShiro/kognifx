import {
  MarketingCtaPanel,
  MarketingPageHero,
  MarketingPageShell,
  MarketingSection,
} from '@/components/marketing/marketing-page-shell';
import { InsightBreadcrumb } from '@/components/marketing/insight-breadcrumb';
import { getRelatedInsightArticles } from '@/lib/indonesian-insight-routes';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type InsightArticleSection = {
  title: string;
  children: ReactNode;
};

type InsightArticlePageProps = {
  path: string;
  category: string;
  h1: string;
  intro: ReactNode;
  sections: InsightArticleSection[];
  commercialHref: string;
  commercialCtaTitle: string;
  commercialCtaDescription: ReactNode;
  commercialCtaLabel: string;
};

const inlineLinkClass =
  'text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export function InsightInlineLink({
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

export function InsightArticlePage({
  path,
  category,
  h1,
  intro,
  sections,
  commercialHref,
  commercialCtaTitle,
  commercialCtaDescription,
  commercialCtaLabel,
}: InsightArticlePageProps) {
  const relatedArticles = getRelatedInsightArticles(path);

  return (
    <MarketingPageShell>
      <InsightBreadcrumb current={h1} />

      <article>
        <p className='mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground'>
          {category}
        </p>

        <MarketingPageHero title={h1}>{intro}</MarketingPageHero>

        {sections.map((section) => (
          <MarketingSection key={section.title} title={section.title}>
            {section.children}
          </MarketingSection>
        ))}
      </article>

      {relatedArticles.length > 0 ? (
        <section className='mt-16'>
          <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
            Baca juga
          </h2>
          <ul className='mt-5 max-w-3xl space-y-3 text-muted-foreground'>
            {relatedArticles.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className={inlineLinkClass}>
                  {item.h1}
                </Link>
                <span className='mt-1 block text-sm'>
                  {item.shortDescription}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <MarketingCtaPanel
        title={commercialCtaTitle}
        action={
          <Link
            href={commercialHref}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'inline-flex rounded-full'
            )}
          >
            {commercialCtaLabel}
          </Link>
        }
      >
        {commercialCtaDescription}
      </MarketingCtaPanel>
    </MarketingPageShell>
  );
}

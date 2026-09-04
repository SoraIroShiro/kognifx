import { CaseStudyBreadcrumb } from '@/components/marketing/case-study-breadcrumb';
import { CaseStudyVisual } from '@/components/marketing/case-study-visual';
import {
  MarketingCtaPanel,
  MarketingInsightCard,
  MarketingInsightGrid,
  MarketingPageHero,
  MarketingPageShell,
  MarketingProcessTimeline,
  MarketingTagList,
} from '@/components/marketing/marketing-page-shell';
import { WhatsAppConsultationLink } from '@/components/marketing/whatsapp-consultation-link';
import { JsonLd } from '@/components/structured-data/json-ld';
import { buttonVariants } from '@/components/ui/button';
import { getCaseStudyByPath } from '@/lib/indonesian-case-study-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const path = '/id/studi-kasus/platform-enterprise-terintegrasi';

const study = getCaseStudyByPath(path)!;

const IMAGE = {
  journey: '/images/case-study/maxwell/gambar1.jpg',
  platform: '/images/case-study/maxwell/gambar2.jpg',
  architecture: '/images/case-study/maxwell/gambar3.jpg',
} as const;

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title: study.title,
  description: study.description,
  image: {
    url: IMAGE.architecture,
    width: 1600,
    height: 1000,
    alt: 'Enterprise platform architecture visualization by Kognifx',
  },
});

const inlineLinkClass =
  'text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const overviewItems = [
  {
    label: 'Industry',
    value: 'Professional Leadership Organization Ecosystem',
  },
  {
    label: 'Project Type',
    value: 'Custom Enterprise Platform Development',
  },
  {
    label: 'Timeline',
    value: 'March 2026 – July 2026',
  },
  {
    label: 'Validation',
    value: '120+ early beta members',
  },
];

const challengeItems = [
  {
    title: 'Fragmented operational workflows',
    description:
      'Customer relationships, transactions, events, and internal processes lived in separate tools with little shared context.',
  },
  {
    title: 'Growing customer ecosystem',
    description:
      'As the customer base expanded, teams needed a clearer way to manage lifecycle stages across acquisition, engagement, and retention.',
  },
  {
    title: 'Limited centralized visibility',
    description:
      'Leaders and operators lacked a single view of business activity across CRM, commerce, events, and finance.',
  },
  {
    title: 'Manual repetitive processes',
    description:
      'Routine work relied on handoffs and spreadsheet-style coordination instead of structured automation.',
  },
];

const approachItems = [
  {
    title: 'Business Process Understanding',
    description:
      'Analyze workflows and operational requirements before defining the system shape.',
  },
  {
    title: 'Custom Platform Engineering',
    description:
      'Build solutions aligned with how the business actually works — not forced into a generic template.',
  },
  {
    title: 'Integrated Enterprise Architecture',
    description:
      'Connect multiple business capabilities into one scalable platform foundation.',
  },
];

const capabilityItems = [
  {
    title: 'CRM & Customer Lifecycle Management',
    description:
      'Manage customer relationships, profiles, and lifecycle activities through a centralized platform.',
  },
  {
    title: 'Commerce & Transaction Management',
    description:
      'Support business transactions and operational processes through integrated commerce workflows.',
  },
  {
    title: 'Event Management',
    description:
      'Manage registration, access, participation, and operational event activities.',
  },
  {
    title: 'Content Management',
    description:
      'Deliver structured digital content and communication experiences.',
  },
  {
    title: 'Automation & AI Capabilities',
    description:
      'Automate workflows and generate intelligent operational insights where automation adds real value.',
  },
];

const impactItems = [
  {
    title: 'Centralized Operations',
    description: 'Connected business information across workflows.',
  },
  {
    title: 'Operational Visibility',
    description: 'Improved understanding of business activities.',
  },
  {
    title: 'Structured Processes',
    description: 'More consistent and scalable workflows.',
  },
  {
    title: 'Future-ready Platform',
    description: 'Flexible foundation for future expansion.',
  },
];

const timelineSteps = [
  {
    title: 'March 2026',
    description: 'Business Discovery',
  },
  {
    title: 'April 2026',
    description: 'System Architecture & Design',
  },
  {
    title: 'May – June 2026',
    description: 'Platform Development',
  },
  {
    title: 'July 2026',
    description: 'Beta Testing & Validation — 120+ early members',
  },
];

export default function PlatformEnterpriseTerintegrasiCaseStudyPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getArticleStructuredData({
          path,
          headline: study.h1,
          description: study.description,
        })}
      />

      <CaseStudyBreadcrumb current='Enterprise Platform' />

      <MarketingPageHero
        eyebrow='Case Study · Enterprise Platform'
        title={study.h1}
      >
        Kognifx designed and developed a scalable digital ecosystem that
        connects customer lifecycle management, business operations, automation,
        and intelligence into one unified platform.
      </MarketingPageHero>

      <div className='mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
        <WhatsAppConsultationLink
          locale='en'
          className={cn(buttonVariants({ size: 'lg' }), 'rounded-full px-6')}
        >
          Discuss Your Enterprise Project
        </WhatsAppConsultationLink>
        <Link
          href='/id/solusi'
          className={cn(
            buttonVariants({ size: 'lg', variant: 'outline' }),
            'rounded-full px-6'
          )}
        >
          Explore Our Solutions
        </Link>
      </div>

      <CaseStudyVisual
        className='mt-12'
        src={IMAGE.architecture}
        alt='Enterprise architecture visualization for an integrated custom platform'
        caption='Enterprise architecture — connecting operational domains into one platform foundation.'
        priority
        objectFit='contain'
      />

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Project Overview
        </h2>
        <dl className='mt-6 grid gap-4 sm:grid-cols-2'>
          {overviewItems.map((item) => (
            <div
              key={item.label}
              className='rounded-2xl border border-border/70 bg-background/50 p-5'
            >
              <dt className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
                {item.label}
              </dt>
              <dd className='mt-2 text-sm leading-relaxed text-foreground'>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Managing Complex Operations Across Multiple Business Processes
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Organizations with growing ecosystems often face challenges when
          customer relationships, transactions, events, and operational
          workflows are managed through disconnected processes.
        </p>
        <MarketingInsightGrid>
          {challengeItems.map((item) => (
            <MarketingInsightCard key={item.title} title={item.title}>
              <p>{item.description}</p>
            </MarketingInsightCard>
          ))}
        </MarketingInsightGrid>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Transforming Business Complexity Into an Integrated Platform
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Kognifx approaches enterprise work from the business problem first —
          clarifying workflows, designing architecture, then building a platform
          teams can actually operate.
        </p>
        <MarketingInsightGrid>
          {approachItems.map((item) => (
            <MarketingInsightCard key={item.title} title={item.title}>
              <p>{item.description}</p>
            </MarketingInsightCard>
          ))}
        </MarketingInsightGrid>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          End-to-End Business Journey
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          The platform supports the complete lifecycle from customer
          acquisition, engagement, transaction, experience, growth, and
          intelligent automation.
        </p>
        <CaseStudyVisual
          className='mt-8'
          src={IMAGE.journey}
          alt='End-to-end business journey visualization across customer lifecycle stages'
          caption='Business journey — from acquisition and engagement through transactions, experience, and automation.'
          objectFit='contain'
        />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          A Unified Enterprise Platform Architecture
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Multiple business capabilities are connected through one scalable
          platform architecture, enabling structured workflows and operational
          visibility.
        </p>
        <CaseStudyVisual
          className='mt-8'
          src={IMAGE.architecture}
          alt='Unified enterprise platform architecture connecting CRM, commerce, events, and operations'
          caption='Platform architecture — one foundation for multiple connected business capabilities.'
          objectFit='contain'
        />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          A Centralized Platform for Daily Operations
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          The platform provides operational teams with centralized capabilities
          across CRM, commerce, event management, finance, automation, and
          intelligence.
        </p>
        <CaseStudyVisual
          className='mt-8'
          src={IMAGE.platform}
          alt='Enterprise platform interface for centralized daily business operations'
          caption='Platform experience — a centralized workspace for day-to-day operational work.'
        />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Key Platform Capabilities
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Capabilities were shaped around real operational domains — not as
          isolated apps, but as connected parts of one enterprise platform.
        </p>
        <div className='mt-10 space-y-10'>
          {capabilityItems.map((item) => (
            <div key={item.title} className='max-w-3xl'>
              <h3 className='text-xl font-medium tracking-tight text-foreground sm:text-2xl'>
                {item.title}
              </h3>
              <p className='mt-3 leading-relaxed text-muted-foreground'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Technology Foundation
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          The stack supports a scalable API-driven platform. Technology choices
          serve the architecture — they are not the primary selling point.
        </p>
        <dl className='mt-6 grid gap-4 sm:grid-cols-2'>
          {[
            { label: 'Frontend', value: 'React' },
            { label: 'Backend', value: 'NestJS' },
            {
              label: 'Architecture',
              value: 'Scalable API-driven Platform',
            },
            {
              label: 'Intelligence',
              value: 'AI-powered Automation',
            },
          ].map((item) => (
            <div
              key={item.label}
              className='rounded-2xl border border-border/70 bg-background/50 p-5'
            >
              <dt className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
                {item.label}
              </dt>
              <dd className='mt-2 text-sm leading-relaxed text-foreground'>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
        <MarketingTagList
          items={[
            'React',
            'NestJS',
            'API-driven Architecture',
            'Workflow Automation',
            'AI Capabilities',
          ]}
        />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Project Timeline
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          From discovery to beta validation across a five-month delivery cycle.
        </p>
        <MarketingProcessTimeline steps={timelineSteps} />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Business Impact
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Impact is described in operational terms. No unsupported percentage
          claims — the focus is on how the platform changes day-to-day work.
        </p>
        <MarketingInsightGrid>
          {impactItems.map((item) => (
            <MarketingInsightCard key={item.title} title={item.title}>
              <p>{item.description}</p>
            </MarketingInsightCard>
          ))}
        </MarketingInsightGrid>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Related Solutions
        </h2>
        <MarketingInsightGrid>
          <MarketingInsightCard title='Software Custom'>
            <p>
              Custom platforms shaped around business processes — not generic
              product templates.
            </p>
            <p className='pt-1'>
              <Link href='/id/solusi/software-custom' className={inlineLinkClass}>
                Explore Software Custom
              </Link>
            </p>
          </MarketingInsightCard>
          <MarketingInsightCard title='Integrasi Sistem'>
            <p>
              Connect modules and existing tools so operations share one
              coherent workflow.
            </p>
            <p className='pt-1'>
              <Link
                href='/id/solusi/integrasi-sistem'
                className={inlineLinkClass}
              >
                Explore Systems Integration
              </Link>
            </p>
          </MarketingInsightCard>
          <MarketingInsightCard title='AI & Automation'>
            <p>
              Add automation and AI where they reduce manual work and improve
              operational decisions.
            </p>
            <p className='pt-1'>
              <Link href='/id/solusi/ai-automation' className={inlineLinkClass}>
                Explore AI & Automation
              </Link>
            </p>
          </MarketingInsightCard>
        </MarketingInsightGrid>
        <p className='mt-6 text-sm text-muted-foreground'>
          Back to{' '}
          <Link href='/id/studi-kasus' className={inlineLinkClass}>
            Case Studies
          </Link>
          .
        </p>
      </section>

      <MarketingCtaPanel
        title='Have Complex Business Processes That Need a Digital Solution?'
        action={
          <WhatsAppConsultationLink
            locale='en'
            className={cn(
              buttonVariants({ size: 'lg' }),
              'inline-flex rounded-full'
            )}
          >
            Start Your Enterprise Project
          </WhatsAppConsultationLink>
        }
      >
        Kognifx helps organizations transform operational complexity into
        scalable enterprise platforms.
      </MarketingCtaPanel>
    </MarketingPageShell>
  );
}

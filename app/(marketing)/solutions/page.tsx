import {
  MarketingPageIntro,
  MarketingPageShell,
} from '@/components/marketing/marketing-page-shell';
import { JsonLd } from '@/components/structured-data/json-ld';
import { buttonVariants } from '@/components/ui/button';
import { createMarketingMetadata } from '@/lib/page-metadata';
import { getPageStructuredData } from '@/lib/structured-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const title = 'Software, AI & Technology Solutions | Kognifx';
const description =
  'Explore Kognifx solutions across custom software, enterprise systems, AI automation, digital commerce, platforms, IoT, and systems integration.';

export const metadata = createMarketingMetadata({
  path: '/solutions',
  title,
  description,
});

type SolutionGroup = {
  title: string;
  description: string;
  items: string[];
};

const solutionGroups: SolutionGroup[] = [
  {
    title: 'Custom Software',
    description:
      'Purpose-built applications for teams that need software shaped around their process, users, and business rules.',
    items: [
      'Company Profile',
      'Landing Page',
      'Portal',
      'Dashboard',
      'CMS',
      'Document Management',
      'SaaS',
      'Custom Business Applications',
    ],
  },
  {
    title: 'Enterprise & Operations',
    description:
      'Systems that support core business operations, internal workflows, and day-to-day management across departments.',
    items: [
      'ERP',
      'CRM',
      'HRIS',
      'HRMS',
      'POS',
      'Inventory Management System',
      'WMS',
      'Accounting System',
      'Procurement System',
      'SCM',
      'PIM',
      'OMS',
      'BPM System',
      'Workflow Management System',
    ],
  },
  {
    title: 'AI & Automation',
    description:
      'Intelligent workflows and automation layers that reduce manual effort and improve decision speed where AI adds real value.',
    items: [
      'AI Agents',
      'Agentic AI',
      'Workflow Automation',
      'n8n Integration',
      'Document Intelligence',
      'AI Assistants',
      'Knowledge Systems',
      'Decision Support',
    ],
  },
  {
    title: 'Commerce & Customer Platforms',
    description:
      'Customer-facing platforms for sales, service, booking, and ongoing engagement across digital channels.',
    items: [
      'E-Commerce',
      'Marketplace',
      'Booking System',
      'Reservation System',
      'Ticketing System',
      'Helpdesk System',
      'Subscription Platform',
      'Membership Platform',
    ],
  },
  {
    title: 'Digital Platforms',
    description:
      'Multi-user or multi-tenant platforms designed for communities, learning, finance, or broader digital ecosystems.',
    items: [
      'Social Platform',
      'Community Platform',
      'Fintech',
      'Multi-Tenant Platform',
      'Super App',
      'LMS',
    ],
  },
  {
    title: 'IoT & Integration',
    description:
      'Connected systems and integration work that links devices, APIs, data sources, and operational tools into one flow.',
    items: [
      'IoT Systems',
      'Device Integration',
      'Monitoring Systems',
      'API Integration',
      'Data Integration',
      'System-to-System Automation',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getPageStructuredData({
          path: '/solutions',
          type: 'CollectionPage',
          name: title,
          description,
          inLanguage: 'en',
        })}
      />
      <h1 className='max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl'>
        Technology Built Around Your Business.
      </h1>

      <MarketingPageIntro>
        We do not force every problem into the same product. Kognifx designs
        and builds systems around your requirements, workflows, and
        operational reality.
      </MarketingPageIntro>

      <div className='mt-14 space-y-12'>
        {solutionGroups.map((group) => (
          <section
            key={group.title}
            className='border-t border-border/60 pt-10'
          >
            <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
              {group.title}
            </h2>
            <p className='mt-3 max-w-3xl text-muted-foreground leading-relaxed'>
              {group.description}
            </p>
            <ul className='mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
              {group.items.map((item) => (
                <li
                  key={item}
                  className='rounded-md border border-border/60 px-3 py-2 text-sm text-foreground/90'
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className='mt-16 border-t border-border/60 pt-10'>
        <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
          Can&apos;t find the system you need?
        </h2>
        <p className='mt-4 max-w-2xl text-muted-foreground'>
          That&apos;s usually where custom software begins.
        </p>
        <Link
          href='/contact'
          className={cn(buttonVariants({ size: 'lg' }), 'mt-6 inline-flex rounded-full')}
        >
          Discuss Your Requirement
        </Link>
      </section>
    </MarketingPageShell>
  );
}

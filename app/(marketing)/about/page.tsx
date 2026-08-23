import {
  MarketingPageIntro,
  MarketingPageShell,
  MarketingSection,
} from '@/components/marketing/marketing-page-shell';
import { JsonLd } from '@/components/structured-data/json-ld';
import { buttonVariants } from '@/components/ui/button';
import { createMarketingMetadata } from '@/lib/page-metadata';
import { getPageStructuredData } from '@/lib/structured-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const title = 'About Kognifx — Software, AI & Systems Engineering';
const description =
  'Learn how Kognifx combines software engineering, AI, automation, and systems thinking to turn business problems into practical working systems.';

export const metadata = createMarketingMetadata({
  path: '/about',
  title,
  description,
});

const processSteps = [
  {
    title: 'Understand',
    description:
      'We clarify the business problem, constraints, and outcomes that matter before choosing tools or architecture.',
  },
  {
    title: 'Structure',
    description:
      'We map workflows, data, roles, and decision points so the solution reflects how work actually happens.',
  },
  {
    title: 'Design',
    description:
      'We define the system shape, interfaces, and technical approach around the structured problem.',
  },
  {
    title: 'Build',
    description:
      'We implement the software, integrations, and AI components needed to deliver usable capability.',
  },
  {
    title: 'Integrate',
    description:
      'We connect the system to existing tools, data sources, and operational processes so it can be adopted.',
  },
  {
    title: 'Improve',
    description:
      'We refine the system based on real usage, feedback, and changing business needs.',
  },
];

export default function AboutPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getPageStructuredData({
          path: '/about',
          type: 'AboutPage',
          name: title,
          description,
          inLanguage: 'en',
        })}
      />
      <h1 className='text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl'>
        About Kognifx
      </h1>

      <MarketingPageIntro>
        Kognifx is an AI-first software house and technology partner focused
        on turning business problems into practical, scalable systems.
      </MarketingPageIntro>

      <MarketingSection title='Why Kognifx Exists'>
        <p>
          Many business problems do not fit cleanly into an off-the-shelf
          product. Teams often end up forcing workflows into generic tools,
          patching gaps with spreadsheets, or maintaining systems that no
          longer match how the business operates.
        </p>
        <p>
          Kognifx exists to build around the real problem: the process, the
          decision, the data flow, and the operational outcome that needs to
          improve. That may mean custom software, integrated enterprise
          systems, automation, or AI-assisted workflows depending on what the
          situation actually requires.
        </p>
      </MarketingSection>

      <MarketingSection title='We Start With the Problem'>
        <p>
          We begin by understanding what is broken, slow, unclear, or
          difficult to scale before recommending a technology stack. That
          keeps projects grounded in business reality instead of starting
          from a predefined product category.
        </p>
        <p>
          A landing page, an internal dashboard, an ERP extension, a workflow
          automation layer, and a connected IoT setup can all be valid
          answers—but only after the problem is understood clearly.
        </p>
      </MarketingSection>

      <MarketingSection title='Software + AI by Default'>
        <p>
          AI is part of how Kognifx approaches modern systems, but it is not
          treated as decoration. We integrate AI where it creates practical
          value: reducing manual work, improving decision quality, or making
          complex information easier to act on.
        </p>
        <p>
          That can include AI assistants, AI agents, intelligent workflows,
          document intelligence, and decision support—applied in context
          rather than added as a generic feature layer.
        </p>
      </MarketingSection>

      <MarketingSection title='What We Can Build'>
        <p>
          Kognifx works across software and systems engineering for business
          use cases, including custom software, enterprise and operational
          systems, AI and automation, web and commerce platforms, IoT, and
          system integration.
        </p>
        <p>
          The focus is always on building something that can be used in real
          operations—not a prototype that looks complete but cannot support
          day-to-day work.
        </p>
      </MarketingSection>

      <MarketingSection title='From Simple to Complex'>
        <p>
          Not every engagement starts with a large platform. Some projects
          begin with a focused website, portal, or internal tool. Others
          require ERP-related systems, workflow platforms, connected devices,
          or fully custom multi-system architectures.
        </p>
        <p>
          Kognifx is structured to move from simpler digital needs to more
          complex operational systems when the business problem demands it.
        </p>
      </MarketingSection>

      <MarketingSection title='How We Work'>
        <p>
          Our working model follows a clear sequence from understanding the
          problem to improving the system after it is in use.
        </p>
        <ol className='mt-6 space-y-4'>
          {processSteps.map((step, index) => (
            <li key={step.title} className='flex gap-4'>
              <span
                aria-hidden='true'
                className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium text-foreground'
              >
                {index + 1}
              </span>
              <div>
                <h3 className='font-medium text-foreground'>{step.title}</h3>
                <p className='mt-1'>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </MarketingSection>

      <section className='mt-16 border-t border-border/60 pt-10'>
        <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
          Ready to discuss your project?
        </h2>
        <p className='mt-4 max-w-2xl text-muted-foreground'>
          Tell us what you are trying to solve and we can explore the right
          technical direction together.
        </p>
        <Link
          href='/contact'
          className={cn(buttonVariants({ size: 'lg' }), 'mt-6 inline-flex rounded-full')}
        >
          Talk to Kognifx
        </Link>
      </section>
    </MarketingPageShell>
  );
}

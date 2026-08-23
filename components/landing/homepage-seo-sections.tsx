import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const capabilityAreas = [
  'Custom Software',
  'Enterprise Systems',
  'AI & Automation',
  'Digital Commerce',
  'Digital Platforms',
  'IoT & Integration',
];

export function HomepageSeoSections() {
  return (
    <div className='mx-auto w-full max-w-screen-xl px-6 py-16 md:px-8 lg:py-20'>
      <section className='border-t border-border/60 pt-12'>
        <h2 className='max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl'>
          Software Built Around the Problem, Not the Template.
        </h2>
        <p className='mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground'>
          Kognifx designs and builds systems around real operational needs.
          That can include custom software, enterprise systems, AI and
          automation, digital commerce, digital platforms, and IoT and
          integration work—chosen because they fit the problem, not because
          they are the default offering.
        </p>
        <ul className='mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
          {capabilityAreas.map((area) => (
            <li
              key={area}
              className='rounded-md border border-border/60 px-3 py-2 text-sm text-foreground/90'
            >
              {area}
            </li>
          ))}
        </ul>
        <Link
          href='/solutions'
          className={cn(
            buttonVariants({ variant: 'outline', size: 'lg' }),
            'mt-8 inline-flex rounded-full'
          )}
        >
          Explore All Solutions
        </Link>
      </section>

      <section className='mt-16 border-t border-border/60 pt-12'>
        <h2 className='max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl'>
          AI Is Not an Add-On.
        </h2>
        <p className='mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground'>
          When it creates practical value, AI can be integrated into the
          systems Kognifx builds—helping teams reduce manual work, clarify
          information, and support better decisions.
        </p>
        <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
          That may include AI assistants, intelligent workflows, AI agents,
          document intelligence, decision support, and automation applied in
          context rather than added as a marketing layer.
        </p>
      </section>

      <section className='mt-16 border-t border-border/60 pt-12'>
        <h2 className='max-w-3xl text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl'>
          Start With the Problem.
        </h2>
        <p className='mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground'>
          Sometimes the right solution is a simple website. Sometimes it is
          an ERP connecting multiple workflows. Sometimes the problem does
          not fit any off-the-shelf system.
        </p>
        <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
          Kognifx starts from the problem, structures it clearly, and builds
          the technology that makes sense. Learn more about how we work on
          our{' '}
          <Link
            href='/about'
            className='text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          >
            About
          </Link>{' '}
          page, or{' '}
          <Link
            href='/contact'
            className='text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
          >
            discuss your project
          </Link>{' '}
          with us.
        </p>
      </section>
    </div>
  );
}

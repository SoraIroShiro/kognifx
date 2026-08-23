import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function MarketingPageShell({ children }: { children: ReactNode }) {
  return (
    <article className='relative mx-auto w-full max-w-screen-xl px-6 py-24 md:px-8 lg:py-28'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 top-0 h-[28rem] overflow-hidden'
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,130,92,0.12),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(118,225,255,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_70%)]' />
      </div>
      <div className='relative'>{children}</div>
    </article>
  );
}

export function MarketingPageHero({
  title,
  children,
  eyebrow,
}: {
  title: string;
  children: ReactNode;
  eyebrow?: string;
}) {
  return (
    <header className='max-w-4xl'>
      {eyebrow ? (
        <p className='mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground'>
          {eyebrow}
        </p>
      ) : null}
      <h1 className='bg-gradient-to-br from-foreground from-30% to-foreground/45 bg-clip-text text-4xl font-medium leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl'>
        {title}
      </h1>
      <p className='mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground'>
        {children}
      </p>
    </header>
  );
}

export function MarketingPageIntro({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground',
        className
      )}
    >
      {children}
    </p>
  );
}

export function MarketingSection({
  title,
  children,
  className = '',
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('mt-16', className)}>
      <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
        {title}
      </h2>
      <div className='mt-5 max-w-3xl space-y-4 leading-relaxed text-muted-foreground'>
        {children}
      </div>
    </section>
  );
}

export function MarketingInsightGrid({ children }: { children: ReactNode }) {
  return (
    <div className='mt-10 grid gap-4 md:grid-cols-2'>{children}</div>
  );
}

export function MarketingInsightCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className='rounded-2xl border border-border/70 bg-background/50 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-border'>
      <h3 className='text-lg font-medium tracking-tight text-foreground'>
        {title}
      </h3>
      <div className='mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground'>
        {children}
      </div>
    </div>
  );
}

export function MarketingTagList({ items }: { items: string[] }) {
  return (
    <ul className='mt-6 flex flex-wrap gap-2'>
      {items.map((item) => (
        <li
          key={item}
          className='rounded-full border border-border/70 bg-muted/30 px-3 py-1.5 text-sm text-foreground/90'
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

type ProcessStep = {
  title: string;
  description: string;
};

export function MarketingProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className='mt-8 grid gap-4 md:grid-cols-2'>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className='relative rounded-2xl border border-border/70 bg-background/50 p-5 backdrop-blur-sm'
        >
          <div className='mb-3 flex items-center gap-3'>
            <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-muted/40 text-sm font-semibold text-foreground'>
              {index + 1}
            </span>
            <h3 className='font-medium text-foreground'>{step.title}</h3>
          </div>
          <p className='text-sm leading-relaxed text-muted-foreground'>
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function MarketingCtaPanel({
  title,
  children,
  action,
}: {
  title: string;
  children: ReactNode;
  action: ReactNode;
}) {
  return (
    <section className='mt-20 overflow-hidden rounded-3xl border border-border/70 bg-[radial-gradient(circle_at_top_left,rgba(255,130,92,0.08),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(118,225,255,0.08),transparent_35%)] p-8 md:p-10'>
      <h2 className='max-w-2xl text-2xl font-medium tracking-tight sm:text-3xl'>
        {title}
      </h2>
      <p className='mt-4 max-w-2xl text-muted-foreground'>{children}</p>
      <div className='mt-6'>{action}</div>
    </section>
  );
}

export type SolutionGroup = {
  title: string;
  description: string;
  items: string[];
};

const solutionAccents = [
  'from-[rgba(255,130,92,0.35)] to-transparent',
  'from-[rgba(118,225,255,0.35)] to-transparent',
  'from-[rgba(255,130,92,0.25)] to-[rgba(118,225,255,0.15)]',
  'from-[rgba(118,225,255,0.25)] to-transparent',
  'from-[rgba(255,130,92,0.2)] to-transparent',
  'from-[rgba(118,225,255,0.2)] to-[rgba(255,130,92,0.12)]',
];

export function SolutionsCategoryGrid({
  groups,
  itemsLabel = 'areas',
}: {
  groups: SolutionGroup[];
  itemsLabel?: string;
}) {
  return (
    <div className='mt-14 grid gap-6 lg:grid-cols-2'>
      {groups.map((group, index) => (
        <section
          key={group.title}
          className='group overflow-hidden rounded-3xl border border-border/70 bg-background/50 shadow-sm backdrop-blur-sm transition-transform hover:-translate-y-0.5'
        >
          <div
            className={cn(
              'h-1.5 w-full bg-gradient-to-r',
              solutionAccents[index % solutionAccents.length]
            )}
          />
          <div className='p-6 md:p-7'>
            <div className='flex items-start justify-between gap-4'>
              <h2 className='text-xl font-medium tracking-tight sm:text-2xl'>
                {group.title}
              </h2>
              <span className='rounded-full border border-border/70 px-2.5 py-1 text-xs font-medium text-muted-foreground'>
                {group.items.length} {itemsLabel}
              </span>
            </div>
            <p className='mt-3 text-sm leading-relaxed text-muted-foreground'>
              {group.description}
            </p>
            <ul className='mt-5 flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <li
                  key={item}
                  className='rounded-full border border-border/60 bg-muted/20 px-3 py-1.5 text-xs text-foreground/90 transition-colors group-hover:border-border group-hover:bg-muted/35 sm:text-sm'
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}

export function ContactChannelsPanel({
  locale,
}: {
  locale: 'en' | 'id';
}) {
  const copy =
    locale === 'id'
      ? {
          title: 'Cara terhubung',
          whatsapp: 'WhatsApp',
          whatsappHint: 'Respon lebih cepat untuk diskusi awal proyek.',
          email: 'Email',
          emailHint: 'Kirim brief atau dokumen pendukung lewat email.',
          note: 'Pilih channel yang paling nyaman. Form di samping akan menyiapkan pesan WhatsApp dari input Anda.',
        }
      : {
          title: 'How to reach us',
          whatsapp: 'WhatsApp',
          whatsappHint: 'Best for a quick first conversation about your project.',
          email: 'Email',
          emailHint: 'Useful if you want to send a brief or supporting documents.',
          note: 'Choose the channel that works best. The form prepares a WhatsApp message from your input.',
        };

  return (
    <aside className='space-y-4'>
      <div className='rounded-2xl border border-border/70 bg-background/50 p-5 backdrop-blur-sm'>
        <h2 className='text-lg font-medium tracking-tight'>{copy.title}</h2>
        <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
          {copy.note}
        </p>
      </div>

      <div className='rounded-2xl border border-border/70 bg-background/50 p-5 backdrop-blur-sm'>
        <h3 className='font-medium text-foreground'>{copy.whatsapp}</h3>
        <p className='mt-2 text-sm text-muted-foreground'>{copy.whatsappHint}</p>
        <p className='mt-3 text-sm font-medium text-foreground'>
          +62 859-2735-1745
        </p>
      </div>

      <div className='rounded-2xl border border-border/70 bg-background/50 p-5 backdrop-blur-sm'>
        <h3 className='font-medium text-foreground'>{copy.email}</h3>
        <p className='mt-2 text-sm text-muted-foreground'>{copy.emailHint}</p>
        <a
          href='mailto:panparci.id@gmail.com'
          className='mt-3 inline-flex text-sm font-medium text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background'
        >
          panparci.id@gmail.com
        </a>
      </div>
    </aside>
  );
}

export function ContactFormPanel({ children }: { children: ReactNode }) {
  return (
    <div className='rounded-3xl border border-border/70 bg-background/60 p-6 shadow-sm backdrop-blur-sm md:p-8'>
      {children}
    </div>
  );
}

export function ContactPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className='mt-12 grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]'>
      {children}
    </div>
  );
}

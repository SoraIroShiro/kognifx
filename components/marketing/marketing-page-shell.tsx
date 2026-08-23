import type { ReactNode } from 'react';

export function MarketingPageShell({ children }: { children: ReactNode }) {
  return (
    <article className='mx-auto w-full max-w-screen-xl px-6 py-24 md:px-8 lg:py-28'>
      {children}
    </article>
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
      className={`mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground ${className}`}
    >
      {children}
    </p>
  );
}

export function MarketingSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className='mt-14 border-t border-border/60 pt-10'>
      <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>{title}</h2>
      <div className='mt-4 max-w-3xl space-y-4 text-muted-foreground leading-relaxed'>
        {children}
      </div>
    </section>
  );
}

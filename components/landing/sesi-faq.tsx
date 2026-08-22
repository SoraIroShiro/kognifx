'use client';

import { FAQSection } from '@/components/faq-session';
import { homepageFaqItems } from '@/lib/homepage-faq';

export default function FAQPage() {
  return (
    <section className='mx-auto w-full max-w-screen-xl bg-background'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          <div className='flex flex-col justify-start'>
            <h2 className='bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-5xl'>
              Still exploring the idea? Here is the core model.
            </h2>
            <p className='text-lg text-muted-foreground mb-8'>
              Kognifx turns complexity into clarity and clarity into working
              systems.
            </p>
          </div>
          <div>
            <FAQSection items={homepageFaqItems} />
          </div>
        </div>
      </div>
    </section>
  );
}

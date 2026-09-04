'use client';

import { WhatsAppConsultationLink } from '@/components/marketing/whatsapp-consultation-link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='relative mx-auto max-w-[80rem] px-6 pb-16 pt-32 text-center md:px-8 md:pb-20'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 top-0 h-[28rem] overflow-hidden sm:h-[32rem]'
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_28%_28%,rgba(255,130,92,0.18),transparent_28%),radial-gradient(circle_at_72%_38%,rgba(118,225,255,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_45%)]' />
        <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent' />
      </div>

      <div className='relative z-10 mx-auto max-w-5xl pt-16 sm:pt-20'>
        <h1 className='overflow-visible bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-4xl font-medium leading-[1.15] tracking-tighter text-transparent text-balance sm:text-5xl md:text-6xl lg:text-7xl'>
          Turning Complexity
          <br className='hidden md:block' />
          into Working Systems.
        </h1>
        <p className='mx-auto mb-10 max-w-3xl text-lg tracking-tight text-gray-400 md:text-xl text-balance'>
          Kognifx is an AI-first software house and technology partner that
          builds custom software, enterprise systems, automation, AI agents,
          and integration solutions for real-world business problems.
        </p>

        <div className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4'>
          <WhatsAppConsultationLink
            locale='en'
            className={cn(buttonVariants({ size: 'lg' }), 'rounded-full px-6')}
          >
            Discuss Your Project
          </WhatsAppConsultationLink>
          <Link
            href='/solutions'
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'rounded-full px-6'
            )}
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}

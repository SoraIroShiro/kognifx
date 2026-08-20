'use client';

import { BorderBeam } from '@/components/magicui/border-beam';
import { SplineFrame } from '@/components/landing/spline-frame';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section
      id='hero'
      className='relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8'
    >
      <div className='pointer-events-none md:pointer-events-auto absolute inset-x-0 top-0 h-[36rem] overflow-hidden sm:h-[40rem] md:h-[44rem] lg:h-[46rem]'>
        <div className='absolute inset-x-0 top-0 h-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_42%,transparent_72%)]'>
          <div className='h-full w-full scale-[1.02] translate-y-[-1rem] sm:scale-[1.04] sm:translate-y-[-1.5rem] md:scale-[1.08] md:translate-y-[-2.5rem]'>
            <SplineFrame
              scene='https://prod.spline.design/GnVCcsZDFwuyvsaX/scene.splinecode'
              deferMs={1200}
            />
          </div>
        </div>
        <div className='pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background via-background/80 to-transparent sm:h-36 md:h-44' />
        <div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background via-background to-transparent sm:w-32 md:w-48' />
      </div>

      <div className='pointer-events-none relative z-10 mx-auto max-w-5xl pt-[8rem] sm:pt-[9rem] md:pt-[11.5rem]'>
        <h1 className='bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl'>
          Turning Complexity
          <br className='hidden md:block' />
          into Working Systems.
        </h1>
        <p className='mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance'>
          Kognifx helps organizations solve complex operational and decision
          problems by turning fragmented thinking into structured systems,
          <br className='hidden md:block' /> accelerated by AI.
        </p>

        <a
          href='#'
          aria-label='Start a strategic conversation'
          className='pointer-events-auto relative z-20 inline-flex'
        >
          <InteractiveHoverButton>
            Start Strategic Discussion
          </InteractiveHoverButton>
        </a>
      </div>
      <div
        ref={ref}
        className='hidden relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]'
      >
        <div
          className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${
            inView ? 'before:animate-image-glow' : ''
          }`}
        >
          <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom='var(--color-one)'
            colorTo='var(--color-two)'
          />

          <Image
            src='/sectionshow.png'
            alt='Kognifx hero preview'
            width={1600}
            height={900}
            priority
            className='relative w-full h-full rounded-[inherit] border object-contain'
            sizes='(min-width: 1024px) 960px, 100vw'
          />
        </div>
      </div>
    </section>
  );
}

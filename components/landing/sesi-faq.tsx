'use client';

import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/faq-session';
import { Mail } from 'lucide-react';

export default function FAQPage() {
  const faqItems = [
    {
      id: '1',
      question: 'What is Kognifx?',
      answer:
        'Kognifx is a cognitive build collective that helps organizations convert complexity into structured, working systems.',
    },
    {
      id: '2',
      question: 'What problems does Kognifx solve?',
      answer:
        'We solve unclear problem structures, inconsistent decisions, and execution bottlenecks that prevent ideas from becoming scalable solutions.',
    },
    {
      id: '3',
      question: 'Where does Kognifx add value?',
      answer:
        'We add value in operational systems, procurement optimization, workflow automation, and decision-support tools.',
    },
  ];

  return (
    <main className='mx-auto w-full max-w-screen-xl bg-background'>
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
          <div className='flex flex-col justify-start'>
            <h1 className='bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-5xl'>
              Still exploring the idea? Here is the core model.
            </h1>
            <p className='text-lg text-muted-foreground mb-8'>
              Kognifx turns complexity into clarity and clarity into working
              systems.
            </p>
          </div>
          <div>
            <FAQSection items={faqItems} />
          </div>
        </div>
      </div>
    </main>
  );
}

import { ContactInquiryForm } from '@/components/contact/contact-inquiry-form';
import {
  MarketingPageIntro,
  MarketingPageShell,
} from '@/components/marketing/marketing-page-shell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Talk to Kognifx — Discuss Your Software or AI Project',
  },
  description:
    'Tell Kognifx about your business problem, software requirement, automation idea, or technology project and explore the right solution together.',
};

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <h1 className='max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl'>
        Let&apos;s Understand the Problem First.
      </h1>

      <MarketingPageIntro>
        You don&apos;t need to know exactly what technology you need. Tell us
        what is happening, what needs to improve, or what you want to build.
      </MarketingPageIntro>

      <ContactInquiryForm locale='en' />
    </MarketingPageShell>
  );
}

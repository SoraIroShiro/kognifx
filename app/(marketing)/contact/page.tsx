import { ContactInquiryForm } from '@/components/contact/contact-inquiry-form';
import {
  MarketingPageIntro,
  MarketingPageShell,
} from '@/components/marketing/marketing-page-shell';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createMarketingMetadata } from '@/lib/page-metadata';
import { getPageStructuredData } from '@/lib/structured-data';

const title = 'Talk to Kognifx — Discuss Your Software or AI Project';
const description =
  'Tell Kognifx about your business problem, software requirement, automation idea, or technology project and explore the right solution together.';

export const metadata = createMarketingMetadata({
  path: '/contact',
  title,
  description,
});

export default function ContactPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getPageStructuredData({
          path: '/contact',
          type: 'ContactPage',
          name: title,
          description,
          inLanguage: 'en',
        })}
      />
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

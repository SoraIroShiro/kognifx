import { ContactInquiryForm } from '@/components/contact/contact-inquiry-form';
import {
  ContactChannelsPanel,
  ContactFormPanel,
  ContactPageLayout,
  MarketingPageHero,
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

      <MarketingPageHero eyebrow='Contact' title="Let's Understand the Problem First.">
        You don&apos;t need to know exactly what technology you need. Tell us
        what is happening, what needs to improve, or what you want to build.
      </MarketingPageHero>

      <ContactPageLayout>
        <ContactChannelsPanel locale='en' />
        <ContactFormPanel>
          <ContactInquiryForm locale='en' />
        </ContactFormPanel>
      </ContactPageLayout>
    </MarketingPageShell>
  );
}

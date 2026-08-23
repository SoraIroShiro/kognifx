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

const title = 'Hubungi Kognifx — Konsultasikan Proyek Software atau AI';
const description =
  'Ceritakan masalah bisnis, kebutuhan software, ide automation, atau proyek teknologi Anda kepada Kognifx untuk merancang solusi yang tepat bersama.';

export const metadata = createMarketingMetadata({
  path: '/id/kontak',
  title,
  description,
});

export default function KontakPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getPageStructuredData({
          path: '/id/kontak',
          type: 'ContactPage',
          name: title,
          description,
          inLanguage: 'id-ID',
        })}
      />

      <MarketingPageHero
        eyebrow='Kontak'
        title='Ceritakan Masalah yang Ingin Anda Selesaikan.'
      >
        Anda tidak harus sudah mengetahui teknologi apa yang dibutuhkan.
        Ceritakan proses, masalah, atau ide yang ingin dikembangkan, dan
        Kognifx akan membantu menyusun solusi yang tepat.
      </MarketingPageHero>

      <ContactPageLayout>
        <ContactChannelsPanel locale='id' />
        <ContactFormPanel>
          <ContactInquiryForm locale='id' />
        </ContactFormPanel>
      </ContactPageLayout>
    </MarketingPageShell>
  );
}

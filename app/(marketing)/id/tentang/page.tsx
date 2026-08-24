import {
  MarketingCtaPanel,
  MarketingInsightCard,
  MarketingInsightGrid,
  MarketingPageHero,
  MarketingPageShell,
  MarketingProcessTimeline,
  MarketingTagList,
} from '@/components/marketing/marketing-page-shell';
import { WhatsAppConsultationLink } from '@/components/marketing/whatsapp-consultation-link';
import { JsonLd } from '@/components/structured-data/json-ld';
import { buttonVariants } from '@/components/ui/button';
import { createMarketingMetadata } from '@/lib/page-metadata';
import { getPageStructuredData } from '@/lib/structured-data';
import { cn } from '@/lib/utils';

const title = 'Tentang Kognifx — Software House, AI & Systems Engineering';
const description =
  'Kenali Kognifx, software house berbasis AI yang membantu bisnis merancang dan membangun sistem digital dari kebutuhan sederhana hingga masalah operasional yang kompleks.';

export const metadata = createMarketingMetadata({
  path: '/id/tentang',
  title,
  description,
});

const capabilityTags = [
  'Custom Software',
  'Sistem Enterprise',
  'AI & Automation',
  'Web & Commerce',
  'IoT',
  'System Integration',
];

const processSteps = [
  {
    title: 'Understand',
    description:
      'Kami memahami masalah bisnis, batasan operasional, dan hasil yang ingin dicapai sebelum menentukan teknologi.',
  },
  {
    title: 'Structure',
    description:
      'Kami memetakan alur kerja, data, peran, dan titik keputusan agar solusi sesuai dengan cara tim bekerja.',
  },
  {
    title: 'Design',
    description:
      'Kami merancang bentuk sistem, antarmuka, dan pendekatan teknis berdasarkan masalah yang sudah distrukturkan.',
  },
  {
    title: 'Build',
    description:
      'Kami membangun software, integrasi, dan komponen AI yang diperlukan agar sistem bisa digunakan.',
  },
  {
    title: 'Integrate',
    description:
      'Kami menghubungkan sistem dengan tools, data, dan proses yang sudah ada agar mudah diadopsi.',
  },
  {
    title: 'Improve',
    description:
      'Kami menyempurnakan sistem berdasarkan penggunaan nyata, feedback, dan perubahan kebutuhan bisnis.',
  },
];

export default function TentangPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getPageStructuredData({
          path: '/id/tentang',
          type: 'AboutPage',
          name: title,
          description,
          inLanguage: 'id-ID',
        })}
      />

      <MarketingPageHero eyebrow='Tentang' title='Tentang Kognifx'>
        Kognifx adalah software house dan technology partner berbasis AI yang
        membantu bisnis mengubah permasalahan menjadi sistem digital yang
        dapat digunakan secara nyata.
      </MarketingPageHero>

      <MarketingInsightGrid>
        <MarketingInsightCard title='Mengapa Kognifx Ada'>
          <p>
            Banyak masalah bisnis tidak cocok dengan produk siap pakai. Tim
            sering kali terpaksa menyesuaikan proses ke tools generik,
            menambal kekurangan dengan spreadsheet, atau mempertahankan sistem
            yang sudah tidak selaras dengan operasional.
          </p>
          <p>
            Kognifx hadir untuk membangun solusi dari masalah yang sebenarnya:
            proses, keputusan, alur data, dan outcome operasional yang perlu
            diperbaiki.
          </p>
        </MarketingInsightCard>

        <MarketingInsightCard title='Kami Memulai dari Masalah'>
          <p>
            Kami mulai dengan memahami apa yang tidak efisien, tidak jelas, atau
            sulit diskalakan. Baru setelah itu kami menentukan stack teknologi.
            Cara ini menjaga proyek tetap relevan dengan kondisi bisnis, bukan
            sekadar mengikuti kategori produk.
          </p>
          <p>
            Landing page, dashboard internal, perluasan ERP, layer automation,
            maupun sistem IoT bisa menjadi jawaban yang tepat, asal masalahnya
            sudah dipahami dengan baik.
          </p>
        </MarketingInsightCard>

        <MarketingInsightCard title='Software + AI sebagai Pendekatan'>
          <p>
            AI menjadi bagian dari cara Kognifx merancang sistem modern, tetapi
            bukan sekadar label marketing. Kami mengintegrasikan AI ketika
            memberi nilai praktis: mengurangi pekerjaan manual, meningkatkan
            kualitas keputusan, atau membuat informasi kompleks lebih mudah
            ditindaklanjuti.
          </p>
          <p>
            Contoh penerapannya meliputi AI assistant, AI agent, intelligent
            workflow, document intelligence, dan decision support, disesuaikan
            dengan konteks bisnis, bukan ditambahkan secara generik.
          </p>
        </MarketingInsightCard>

        <MarketingInsightCard title='Dari Kebutuhan Sederhana hingga Kompleks'>
          <p>
            Tidak setiap proyek dimulai dari platform besar. Ada kebutuhan yang
            diawali dari website, portal, atau tool internal sederhana. Di sisi
            lain, ada proyek yang membutuhkan sistem ERP, workflow platform,
            perangkat terhubung, atau arsitektur multi-sistem yang fully custom.
          </p>
          <p>
            Kognifx dirancang untuk bergerak dari kebutuhan digital sederhana
            menuju sistem operasional yang lebih kompleks ketika masalah bisnis
            menuntutnya.
          </p>
        </MarketingInsightCard>
      </MarketingInsightGrid>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
          Apa yang Dapat Kami Bangun
        </h2>
        <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
          Kognifx bekerja di software engineering dan systems engineering
          untuk kebutuhan bisnis. Fokus kami adalah membangun sistem yang
          benar-benar dipakai dalam operasional harian, bukan prototype yang
          terlihat lengkap tetapi tidak mendukung pekerjaan sehari-hari.
        </p>
        <MarketingTagList items={capabilityTags} />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
          Cara Kami Bekerja
        </h2>
        <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
          Model kerja kami mengikuti urutan yang jelas: dari pemahaman masalah
          hingga perbaikan sistem setelah digunakan.
        </p>
        <MarketingProcessTimeline steps={processSteps} />
      </section>

      <MarketingCtaPanel
        title='Siap mendiskusikan kebutuhan Anda?'
        action={
          <WhatsAppConsultationLink
            locale='id'
            className={cn(
              buttonVariants({ size: 'lg' }),
              'inline-flex rounded-full'
            )}
          >
            Konsultasikan dengan Kognifx
          </WhatsAppConsultationLink>
        }
      >
        Ceritakan masalah atau ide yang ingin dikembangkan, dan kami akan
        bantu menentukan arah teknis yang paling sesuai.
      </MarketingCtaPanel>
    </MarketingPageShell>
  );
}

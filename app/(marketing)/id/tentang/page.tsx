import {
  MarketingPageIntro,
  MarketingPageShell,
  MarketingSection,
} from '@/components/marketing/marketing-page-shell';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    absolute: 'Tentang Kognifx — Software House, AI & Systems Engineering',
  },
  description:
    'Kenali Kognifx, software house berbasis AI yang membantu bisnis merancang dan membangun sistem digital dari kebutuhan sederhana hingga masalah operasional yang kompleks.',
};

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
      <h1 className='text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl'>
        Tentang Kognifx
      </h1>

      <MarketingPageIntro>
        Kognifx adalah software house dan technology partner berbasis AI yang
        membantu bisnis mengubah permasalahan menjadi sistem digital yang
        dapat digunakan secara nyata.
      </MarketingPageIntro>

      <MarketingSection title='Mengapa Kognifx Ada'>
        <p>
          Banyak masalah bisnis tidak cocok dengan produk siap pakai. Tim
          sering kali terpaksa menyesuaikan proses ke tools generik,
          menambal kekurangan dengan spreadsheet, atau mempertahankan sistem
          yang sudah tidak selaras dengan operasional.
        </p>
        <p>
          Kognifx hadir untuk membangun solusi dari masalah yang sebenarnya:
          proses, keputusan, alur data, dan outcome operasional yang perlu
          diperbaiki. Bisa berupa software custom, sistem enterprise,
          automation, atau workflow berbasis AI—tergantung kebutuhan nyata.
        </p>
      </MarketingSection>

      <MarketingSection title='Kami Memulai dari Masalah'>
        <p>
          Kami mulai dengan memahami apa yang tidak efisien, tidak jelas, atau
          sulit diskalakan—baru setelah itu menentukan stack teknologi. Cara
          ini menjaga proyek tetap relevan dengan kondisi bisnis, bukan
          sekadar mengikuti kategori produk.
        </p>
        <p>
          Landing page, dashboard internal, perluasan ERP, layer automation,
          maupun sistem IoT bisa menjadi jawaban yang tepat—asal masalahnya
          sudah dipahami dengan baik.
        </p>
      </MarketingSection>

      <MarketingSection title='Software + AI sebagai Pendekatan'>
        <p>
          AI menjadi bagian dari cara Kognifx merancang sistem modern, tetapi
          bukan sekadar label marketing. Kami mengintegrasikan AI ketika
          memberi nilai praktis: mengurangi pekerjaan manual, meningkatkan
          kualitas keputusan, atau membuat informasi kompleks lebih mudah
          ditindaklanjuti.
        </p>
        <p>
          Contoh penerapannya meliputi AI assistant, AI agent, intelligent
          workflow, document intelligence, dan decision support—disesuaikan
          dengan konteks bisnis, bukan ditambahkan secara generik.
        </p>
      </MarketingSection>

      <MarketingSection title='Apa yang Dapat Kami Bangun'>
        <p>
          Kognifx bekerja di software engineering dan systems engineering
          untuk kebutuhan bisnis: custom software, sistem enterprise dan
          operasional, AI & automation, platform web/commerce, IoT, serta
          system integration.
        </p>
        <p>
          Fokus kami adalah membangun sistem yang benar-benar dipakai dalam
          operasional harian, bukan prototype yang terlihat lengkap tetapi
          tidak mendukung pekerjaan sehari-hari.
        </p>
      </MarketingSection>

      <MarketingSection title='Dari Kebutuhan Sederhana hingga Kompleks'>
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
      </MarketingSection>

      <MarketingSection title='Cara Kami Bekerja'>
        <p>
          Model kerja kami mengikuti urutan yang jelas: dari pemahaman masalah
          hingga perbaikan sistem setelah digunakan.
        </p>
        <ol className='mt-6 space-y-4'>
          {processSteps.map((step, index) => (
            <li key={step.title} className='flex gap-4'>
              <span
                aria-hidden='true'
                className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sm font-medium text-foreground'
              >
                {index + 1}
              </span>
              <div>
                <h3 className='font-medium text-foreground'>{step.title}</h3>
                <p className='mt-1'>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </MarketingSection>

      <section className='mt-16 border-t border-border/60 pt-10'>
        <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
          Siap mendiskusikan kebutuhan Anda?
        </h2>
        <p className='mt-4 max-w-2xl text-muted-foreground'>
          Ceritakan masalah atau ide yang ingin dikembangkan, dan kami akan
          bantu menentukan arah teknis yang paling sesuai.
        </p>
        <Link
          href='/id/kontak'
          className={cn(buttonVariants({ size: 'lg' }), 'mt-6 inline-flex rounded-full')}
        >
          Konsultasikan dengan Kognifx
        </Link>
      </section>
    </MarketingPageShell>
  );
}

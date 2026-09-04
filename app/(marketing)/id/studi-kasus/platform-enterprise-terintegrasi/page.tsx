import { CaseStudyBreadcrumb } from '@/components/marketing/case-study-breadcrumb';
import { CaseStudyVisual } from '@/components/marketing/case-study-visual';
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
import { getCaseStudyByPath } from '@/lib/indonesian-case-study-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const path = '/id/studi-kasus/platform-enterprise-terintegrasi';

const study = getCaseStudyByPath(path)!;

const IMAGE = {
  journey: '/images/case-study/maxwell/gambar1.jpg',
  platform: '/images/case-study/maxwell/gambar2.jpg',
  architecture: '/images/case-study/maxwell/gambar3.jpg',
} as const;

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title: study.title,
  description: study.description,
  image: {
    url: IMAGE.architecture,
    width: 1600,
    height: 1000,
    alt: 'Visualisasi arsitektur platform enterprise yang dibangun Kognifx',
  },
});

const inlineLinkClass =
  'text-foreground underline underline-offset-4 decoration-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const overviewItems = [
  {
    label: 'Industri',
    value: 'Organisasi leadership profesional',
  },
  {
    label: 'Jenis Proyek',
    value: 'Platform enterprise custom',
  },
  {
    label: 'Timeline',
    value: 'Maret 2026 – Juli 2026',
  },
  {
    label: 'Validasi',
    value: '120+ pengguna pada fase beta testing',
  },
];

const challengeItems = [
  {
    title: 'Workflow operasional terfragmentasi',
    description:
      'CRM, pembayaran, event, dan pekerjaan admin tersebar di tools yang berbeda. Tim tidak punya satu sumber data yang sama.',
  },
  {
    title: 'Basis pelanggan yang terus tumbuh',
    description:
      'Seiring jumlah pelanggan bertambah, semakin sulit melacak aktivitas, transaksi, dan engagement.',
  },
  {
    title: 'Visibilitas operasional terbatas',
    description:
      'Manajer tidak bisa melihat aktivitas CRM, commerce, event, dan finance dalam satu tempat.',
  },
  {
    title: 'Proses manual yang berulang',
    description:
      'Pekerjaan rutin masih berjalan lewat chat, serah terima, dan spreadsheet, bukan workflow yang terdefinisi.',
  },
];

const approachItems = [
  {
    title: 'Memahami proses bisnis',
    description:
      'Kami memahami alur kerja dan kebutuhan operasional sebelum menentukan struktur platform yang dibangun.',
  },
  {
    title: 'Pengembangan platform custom',
    description:
      'Platform dikembangkan mengikuti proses bisnis yang berjalan, bukan membatasi kebutuhan melalui template yang sudah ada.',
  },
  {
    title: 'Arsitektur enterprise terintegrasi',
    description:
      'Setiap modul dirancang agar dapat berbagi data dan terhubung melalui arsitektur platform yang sama.',
  },
];

const capabilityItems = [
  {
    title: 'CRM & Customer Lifecycle Management',
    description:
      'Profil pelanggan, riwayat, dan status dikelola di satu lapisan CRM yang dipakai modul lain di platform.',
  },
  {
    title: 'Commerce & Transaction Management',
    description:
      'Pesanan dan pembayaran berjalan lewat workflow commerce yang terhubung ke data pelanggan dan finance.',
  },
  {
    title: 'Event Management',
    description:
      'Menangani registrasi event, kontrol akses, dan pencatatan kehadiran dalam sistem yang sama dengan data membership.',
  },
  {
    title: 'Content Management',
    description:
      'Konten dan komunikasi dipublikasikan tanpa CMS terpisah yang tidak saling terhubung.',
  },
  {
    title: 'Automation & Intelligent Insights',
    description:
      'Workflow otomatis dan fitur AI membantu mengurangi pekerjaan berulang serta memberikan insight berdasarkan data operasional.',
  },
];

const impactItems = [
  {
    title: 'Operasional lebih terpusat',
    description:
      'Data inti dan workflow berada di satu sistem, bukan tersebar di banyak tools.',
  },
  {
    title: 'Visibilitas operasional',
    description:
      'Tim mendapatkan gambaran aktivitas bisnis melalui satu sumber data yang lebih terstruktur.',
  },
  {
    title: 'Proses lebih terstruktur',
    description:
      'Approval dan serah terima mengikuti workflow yang jelas, bukan chat ad-hoc.',
  },
  {
    title: 'Mudah dikembangkan lebih lanjut',
    description:
      'Modul baru bisa ditambahkan di platform yang sama tanpa membangun ulang inti sistem.',
  },
];

const timelineSteps = [
  {
    title: 'Maret 2026',
    description: 'Discovery & Requirement Mapping',
  },
  {
    title: 'April 2026',
    description: 'System Architecture Design',
  },
  {
    title: 'Mei – Juni 2026',
    description: 'Platform Development',
  },
  {
    title: 'Juli 2026',
    description: 'Beta testing bersama 120+ pengguna',
  },
];

export default function PlatformEnterpriseTerintegrasiCaseStudyPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getArticleStructuredData({
          path,
          headline: study.h1,
          description: study.description,
        })}
      />

      <CaseStudyBreadcrumb current='Platform Enterprise' />

      <MarketingPageHero
        eyebrow='Studi Kasus · Enterprise Platform'
        title={study.h1}
      >
        Ketika proses bisnis berkembang, kebutuhan akan sistem yang saling
        terhubung menjadi semakin penting.
        <br />
        <br />
        Kognifx membangun platform enterprise custom yang mengintegrasikan CRM,
        operasional, commerce, event, automation, dan AI dalam satu ekosistem.
      </MarketingPageHero>

      <div className='mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
        <WhatsAppConsultationLink
          locale='id'
          className={cn(buttonVariants({ size: 'lg' }), 'rounded-full px-6')}
        >
          Diskusikan proyek serupa
        </WhatsAppConsultationLink>
        <Link
          href='/id/solusi'
          className={cn(
            buttonVariants({ size: 'lg', variant: 'outline' }),
            'rounded-full px-6'
          )}
        >
          Lihat solusi kami
        </Link>
      </div>

      <CaseStudyVisual
        className='mt-12'
        src={IMAGE.architecture}
        alt='Visualisasi arsitektur platform enterprise custom yang terintegrasi'
        caption='Ringkasan arsitektur: bagaimana domain operasional utama terhubung dalam satu platform.'
        priority
        objectFit='contain'
      />

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Ringkasan Proyek
        </h2>
        <dl className='mt-6 grid gap-4 sm:grid-cols-2'>
          {overviewItems.map((item) => (
            <div
              key={item.label}
              className='rounded-2xl border border-border/70 bg-background/50 p-5'
            >
              <dt className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
                {item.label}
              </dt>
              <dd className='mt-2 text-sm leading-relaxed text-foreground'>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Ketika proses inti berjalan di tools yang terpisah
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Saat proses bisnis berkembang, data pelanggan, transaksi, event, dan
          workflow internal sering berada di sistem yang berbeda.
        </p>
        <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
          Kondisi ini membuat tim membutuhkan lebih banyak waktu untuk menyatukan
          informasi sebelum mengambil keputusan.
        </p>
        <MarketingInsightGrid>
          {challengeItems.map((item) => (
            <MarketingInsightCard key={item.title} title={item.title}>
              <p>{item.description}</p>
            </MarketingInsightCard>
          ))}
        </MarketingInsightGrid>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Pendekatan kami dalam membangun sistem
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Kami mulai dari model operasional: petakan workflow, rancang
          arsitektur, lalu bangun platform yang bisa dipakai tim setiap hari.
        </p>
        <MarketingInsightGrid>
          {approachItems.map((item) => (
            <MarketingInsightCard key={item.title} title={item.title}>
              <p>{item.description}</p>
            </MarketingInsightCard>
          ))}
        </MarketingInsightGrid>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Alur bisnis end-to-end dalam satu platform
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Platform menghubungkan proses dari akuisisi pelanggan, engagement,
          transaksi, event, hingga automation dalam satu alur yang saling
          terhubung.
        </p>
        <CaseStudyVisual
          className='mt-8'
          src={IMAGE.journey}
          alt='Visualisasi alur bisnis end-to-end dalam platform enterprise'
          caption='Alur bisnis yang menghubungkan perjalanan pelanggan, transaksi, event, hingga proses automation dalam satu platform.'
          objectFit='contain'
        />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Arsitektur platform
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          CRM, commerce, event, finance, dan kebutuhan operasional internal
          berjalan dalam satu arsitektur yang sama sehingga data dan workflow
          dapat digunakan lintas modul.
        </p>
        <p className='mt-4 max-w-3xl leading-relaxed text-muted-foreground'>
          Setiap modul dirancang agar dapat berbagi data melalui sistem dan API
          yang sama.
        </p>
        <CaseStudyVisual
          className='mt-8'
          src={IMAGE.architecture}
          alt='Arsitektur platform yang menghubungkan CRM, commerce, event, dan operasional'
          caption='Arsitektur tingkat tinggi dari modul-modul yang saling terhubung.'
          objectFit='contain'
        />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Platform operasional untuk aktivitas bisnis harian
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Antarmuka ini membantu tim melihat aktivitas pelanggan, transaksi,
          event, dan proses internal melalui satu sistem terpusat.
        </p>
        <CaseStudyVisual
          className='mt-8'
          src={IMAGE.platform}
          alt='Antarmuka platform enterprise untuk aktivitas bisnis harian'
          caption='Antarmuka operasional utama yang dipakai tim internal.'
        />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Kapabilitas utama platform
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Setiap modul mengikuti domain operasional yang nyata. Semua berada di
          satu platform agar data dan workflow tetap terhubung.
        </p>
        <div className='mt-10 space-y-10'>
          {capabilityItems.map((item) => (
            <div key={item.title} className='max-w-3xl'>
              <h3 className='text-xl font-medium tracking-tight text-foreground sm:text-2xl'>
                {item.title}
              </h3>
              <p className='mt-3 leading-relaxed text-muted-foreground'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Fondasi teknologi
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Platform dibangun menggunakan teknologi modern berbasis API dengan
          fokus pada skalabilitas, maintainability, dan pengembangan
          berkelanjutan.
        </p>
        <dl className='mt-6 grid gap-4 sm:grid-cols-2'>
          {[
            { label: 'Frontend', value: 'React' },
            { label: 'Backend', value: 'NestJS' },
            {
              label: 'Arsitektur',
              value: 'Platform berbasis API',
            },
            {
              label: 'Automation',
              value: 'Workflow automation + AI selektif',
            },
          ].map((item) => (
            <div
              key={item.label}
              className='rounded-2xl border border-border/70 bg-background/50 p-5'
            >
              <dt className='text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground'>
                {item.label}
              </dt>
              <dd className='mt-2 text-sm leading-relaxed text-foreground'>
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
        <MarketingTagList
          items={[
            'React',
            'NestJS',
            'API-driven Architecture',
            'Workflow Automation',
            'Selective AI',
          ]}
        />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Timeline proyek
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Lima bulan dari discovery sampai beta bersama pengguna awal.
        </p>
        <MarketingProcessTimeline steps={timelineSteps} />
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Dampak bagi bisnis
        </h2>
        <p className='mt-5 max-w-3xl leading-relaxed text-muted-foreground'>
          Klaim dampak kami sampaikan secara kualitatif, bukan metrik yang
          dibuat-buat.
        </p>
        <MarketingInsightGrid>
          {impactItems.map((item) => (
            <MarketingInsightCard key={item.title} title={item.title}>
              <p>{item.description}</p>
            </MarketingInsightCard>
          ))}
        </MarketingInsightGrid>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-medium leading-snug tracking-tight sm:text-3xl'>
          Solusi terkait
        </h2>
        <MarketingInsightGrid>
          <MarketingInsightCard title='Software Custom'>
            <p>
              Platform custom yang dibangun sesuai cara bisnis berjalan, bukan
              mengikuti template produk generik.
            </p>
            <p className='pt-1'>
              <Link href='/id/solusi/software-custom' className={inlineLinkClass}>
                Pelajari Software Custom
              </Link>
            </p>
          </MarketingInsightCard>
          <MarketingInsightCard title='Integrasi Sistem'>
            <p>
              Menghubungkan modul dan tools yang sudah ada agar operasional
              berjalan dalam satu alur yang koheren.
            </p>
            <p className='pt-1'>
              <Link
                href='/id/solusi/integrasi-sistem'
                className={inlineLinkClass}
              >
                Pelajari Integrasi Sistem
              </Link>
            </p>
          </MarketingInsightCard>
          <MarketingInsightCard title='AI & Automation'>
            <p>
              Menambahkan automation dan AI jika membantu mengurangi kerja
              manual dan memperjelas keputusan operasional.
            </p>
            <p className='pt-1'>
              <Link href='/id/solusi/ai-automation' className={inlineLinkClass}>
                Pelajari AI & Automation
              </Link>
            </p>
          </MarketingInsightCard>
        </MarketingInsightGrid>
        <p className='mt-6 text-sm text-muted-foreground'>
          Kembali ke{' '}
          <Link href='/id/studi-kasus' className={inlineLinkClass}>
            Studi Kasus
          </Link>
          .
        </p>
      </section>

      <MarketingCtaPanel
        title='Operasional bisnis masih tersebar di berbagai tools?'
        action={
          <WhatsAppConsultationLink
            locale='id'
            className={cn(
              buttonVariants({ size: 'lg' }),
              'inline-flex rounded-full'
            )}
          >
            Diskusikan kebutuhan proyek Anda
          </WhatsAppConsultationLink>
        }
      >
        Kognifx membantu membangun platform enterprise custom yang sesuai dengan
        proses bisnis dan kebutuhan operasional Anda.
      </MarketingCtaPanel>
    </MarketingPageShell>
  );
}

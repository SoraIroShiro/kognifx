import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/integrasi-sistem';

const title = 'Jasa Integrasi Sistem & API untuk Perusahaan | Kognifx';
const description =
  'Kognifx membantu menghubungkan aplikasi, API, data, ERP, CRM, dan sistem lama agar informasi serta workflow dapat berjalan lebih terintegrasi dan otomatis.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function IntegrasiSistemPage() {
  return (
    <>
      <JsonLd
        data={getServicePageStructuredData({
          path,
          name: title,
          description,
        })}
      />
      <SolutionDetailPage
        breadcrumbLabel='Integrasi Sistem'
        eyebrow='Solusi'
        h1='Jasa Integrasi Sistem & API'
        intro={
          <>
            Ketika tim copy-paste data antar aplikasi, laporan tidak pernah
            sinkron, atau proses berhenti di “titik putus” antar sistem,{' '}
            <strong className='font-medium text-foreground'>
              integrasi sistem
            </strong>{' '}
            sering menjadi langkah paling pragmatis — sebelum membangun ulang
            software dari nol.
          </>
        }
        sections={[
          {
            title: 'Mengapa sistem terputus membebani operasional',
            children: (
              <>
                <p>
                  Banyak perusahaan memakai kombinasi ERP, CRM, spreadsheet,
                  marketplace, payment gateway, WhatsApp, dan tools legacy.
                  Masing-masing bisa berfungsi, tetapi data tidak mengalir
                  dengan konsisten.
                </p>
                <p>
                  Akibatnya muncul duplikasi input, delay laporan, dan
                  keputusan berdasarkan angka yang sudah usang.{' '}
                  <strong className='font-medium text-foreground'>
                    System integration
                  </strong>{' '}
                  ditujukan untuk mengurangi friksi ini secara terukur.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi aplikasi dan API',
            children: (
              <>
                <p>
                  Kognifx membantu menghubungkan aplikasi melalui REST API,
                  webhook, message queue, atau middleware ringan — tergantung
                  kebutuhan latensi, volume, dan keandalan.
                </p>
                <p>
                  Jika API belum ada, tim dapat merancang{' '}
                  <strong className='font-medium text-foreground'>
                    custom API development
                  </strong>{' '}
                  sebagai lapisan integrasi, bukan sekadar wrapper tanpa
                  dokumentasi.
                </p>
              </>
            ),
          },
          {
            title: 'Sinkronisasi data dan legacy system',
            children: (
              <>
                <p>
                  Integrasi data tidak selalu berarti real-time. Kadang batch
                  sync, event-driven update, atau reconciliation periodik lebih
                  realistis — tergantung sistem sumber dan target.
                </p>
                <p>
                  Legacy system sering tetap critical untuk operasi. Kognifx
                  merancang integrasi yang menghormati constraint sistem lama
                  sambil membuka jalan migrasi bertahap bila diperlukan.
                </p>
              </>
            ),
          },
          {
            title: 'ERP, CRM, dan integrasi pihak ketiga',
            children: (
              <>
                <p>
                  Integrasi ERP atau CRM dapat mencakup sinkronisasi master
                  data, order, inventory, invoice, atau status fulfillment.
                  Vendor disebut sebagai kemampuan integrasi umum — bukan
                  partnership resmi kecuali memang tercatat di masa depan.
                </p>
                <p>
                  WhatsApp API, payment gateway, logistics partner, atau
                  marketplace juga sering menjadi bagian dari alur integrasi
                  end-to-end.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi vs rebuild: kapan memilih apa',
            children: (
              <>
                <p>
                  Tidak setiap masalah perlu software baru. Kadang integrasi +
                  automation sudah cukup. Kadang data model sudah terlalu
                  terfragmentasi sehingga{' '}
                  <SolutionInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </SolutionInlineLink>{' '}
                  atau{' '}
                  <SolutionInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </SolutionInlineLink>{' '}
                  lebih masuk akal.
                </p>
                <p>
                  Untuk workflow otomatis antar sistem, lihat juga{' '}
                  <SolutionInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </SolutionInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        capabilityTags={[
          'API Integration',
          'Data Synchronization',
          'Middleware',
          'Legacy Integration',
          'ERP / CRM Sync',
          'System-to-System Automation',
        ]}
        relatedSolutions={[
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description:
              'Ketika integrasi saja tidak cukup dan perlu sistem baru.',
          },
          {
            label: 'AI Automation',
            href: '/id/solusi/ai-automation',
            description: 'Workflow otomatis setelah sistem terhubung.',
          },
          {
            label: 'ERP Custom',
            href: '/id/solusi/erp-custom',
            description: 'Sistem operasional yang menjadi pusat integrasi.',
          },
        ]}
        relatedInsights={[
          {
            label: 'Studi Kasus Pengembangan Platform Digital',
            href: '/id/studi-kasus',
            description:
              'Pelajari studi kasus platform enterprise terintegrasi yang menyatukan CRM, commerce, event, dan automation.',
          },
          {
            label: 'Apa Itu System Integration?',
            href: '/id/insight/apa-itu-system-integration',
            description:
              'Cara menghubungkan aplikasi, data, dan workflow tanpa membangun ulang semua sistem.',
          },
          {
            label: 'Manfaat Integrasi API untuk Bisnis',
            href: '/id/insight/manfaat-integrasi-api',
            description:
              'Mengapa API membantu sinkronisasi data, otomasi, dan koneksi antar aplikasi.',
          },
          {
            label: 'Cara Mengatasi Data Bisnis yang Tersebar',
            href: '/id/insight/cara-mengatasi-data-bisnis-tersebar',
            description:
              'Silo data, duplikasi, dan pilihan antara integrasi vs sentralisasi.',
          },
        ]}
        ctaTitle='Sistem perusahaan perlu disatukan?'
        ctaDescription='Ceritakan aplikasi, data, dan workflow yang saat ini terputus. Kami bantu menilai pendekatan integrasi yang paling realistis.'
        ctaLabel='Konsultasikan Integrasi Sistem Anda'
      />
    </>
  );
}

import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/crm';

const title = 'Jasa Pembuatan CRM Custom untuk Bisnis | Kognifx';
const description =
  'Kognifx membangun CRM custom untuk mengelola leads, pipeline penjualan, data pelanggan, follow-up, integrasi, dan workflow sesuai proses bisnis perusahaan.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function CrmPage() {
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
        breadcrumbLabel='CRM'
        eyebrow='Solusi'
        h1='Jasa Pembuatan CRM Custom untuk Bisnis'
        intro={
          <>
            Data pelanggan sering tersebar di spreadsheet, inbox, chat, dan
            catatan pribadi sales. Kognifx membantu merancang{' '}
            <strong className='font-medium text-foreground'>
              CRM custom
            </strong>{' '}
            agar leads, pipeline, riwayat interaksi, dan follow-up bisa dilacak
            sesuai cara tim penjualan benar-benar bekerja.
          </>
        }
        sections={[
          {
            title: 'Ketika data pelanggan tidak punya satu sumber kebenaran',
            children: (
              <>
                <p>
                  Masalah yang paling sering muncul bukan kurangnya tools,
                  melainkan data yang tidak bertemu: lead masuk dari beberapa
                  channel, status deal hanya diketahui oleh satu orang, dan
                  riwayat pelanggan hilang saat handover antar tim.
                </p>
                <p>
                  CRM yang berguna mencatat siapa prospeknya, di tahap mana
                  mereka berada, kapan terakhir dihubungi, dan apa yang sudah
                  dijanjikan — tanpa memaksa proses penjualan ke template yang
                  tidak cocok.
                </p>
              </>
            ),
          },
          {
            title: 'Pipeline, follow-up, dan histori yang bisa ditelusuri',
            children: (
              <>
                <p>
                  Sistem dapat dirancang untuk mengelola lead, opportunity,
                  aktivitas follow-up, dan catatan pelanggan. Tahapan pipeline
                  disesuaikan dengan siklus penjualan Anda, bukan sebaliknya.
                </p>
                <p>
                  Role-based access berguna ketika sales, supervisor, dan
                  manajemen membutuhkan tampilan yang berbeda. Dashboard dan
                  laporan bisa menampilkan funnel, aging deal, atau aktivitas
                  tim — tergantung indikator yang benar-benar dipakai.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi dan otomasi yang relevan',
            children: (
              <>
                <p>
                  CRM jarang berdiri sendiri. Bila diperlukan, sistem dapat
                  dihubungkan ke email, form inbound, API, atau channel
                  percakapan seperti WhatsApp sebagai contoh integrasi — bukan
                  sebagai kemitraan resmi dengan vendor tertentu.
                </p>
                <p>
                  Otomasi follow-up, assignment lead, atau reminder bisa
                  ditambahkan bila alurnya sudah jelas. Untuk orkestrasi
                  workflow yang lebih luas, lihat{' '}
                  <SolutionInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </SolutionInlineLink>
                  . Untuk koneksi ke sistem lain, lihat{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </SolutionInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'CRM custom versus produk generik',
            children: (
              <>
                <p>
                  Produk CRM siap pakai cocok jika proses penjualan relatif
                  standar. Custom menjadi relevan ketika field, approval,
                  pembagian wilayah, atau relasi ke operasional sudah terlalu
                  spesifik untuk dipaksakan ke paket generik.
                </p>
                <p>
                  Jika kebutuhan justru mengarah ke operasional lintas divisi
                  seperti sales, inventory, dan finance dalam satu sistem,
                  evaluasi juga{' '}
                  <SolutionInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </SolutionInlineLink>
                  . CRM tetap fokus pada relasi pelanggan dan proses penjualan,
                  bukan menjadi ERP yang disamarkan.
                </p>
              </>
            ),
          },
        ]}
        capabilityTags={[
          'Lead Management',
          'Sales Pipeline',
          'Customer History',
          'Follow-up Workflow',
          'Sales Dashboard',
          'CRM Integration',
        ]}
        relatedSolutions={[
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description:
              'Ketika CRM perlu menjadi bagian dari aplikasi internal yang lebih luas.',
          },
          {
            label: 'AI Automation',
            href: '/id/solusi/ai-automation',
            description:
              'Otomasi follow-up, klasifikasi lead, atau asisten penjualan.',
          },
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'Menghubungkan CRM dengan email, API, WhatsApp, atau sistem existing.',
          },
          {
            label: 'ERP Custom',
            href: '/id/solusi/erp-custom',
            description:
              'Jika penjualan perlu terhubung ke stok, invoice, dan operasional.',
          },
        ]}
        ctaTitle='Proses penjualan masih sulit dilacak?'
        ctaDescription='Ceritakan bagaimana lead masuk, bagaimana follow-up dilakukan, dan data pelanggan mana yang paling sering hilang. Kami bantu menilai apakah CRM custom adalah langkah yang tepat.'
        ctaLabel='Konsultasikan Sistem CRM Anda'
      />
    </>
  );
}

import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/erp-custom';

const title = 'Jasa Pembuatan ERP Custom untuk Perusahaan | Kognifx';
const description =
  'Kognifx merancang ERP custom untuk menghubungkan proses operasional, penjualan, procurement, inventory, finance, dan workflow perusahaan dalam satu sistem.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function ErpCustomPage() {
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
        breadcrumbLabel='ERP Custom'
        eyebrow='Solusi'
        h1='Jasa Pembuatan ERP Custom untuk Perusahaan'
        intro={
          <>
            Ketika operasional perusahaan sudah melampaui spreadsheet dan
            aplikasi terpisah, tim sering membutuhkan satu{' '}
            <strong className='font-medium text-foreground'>
              sistem ERP custom
            </strong>{' '}
            yang menghubungkan proses penjualan, pengadaan, inventory,
            keuangan, dan approval — disesuaikan dengan cara bisnis benar-benar
            berjalan.
          </>
        }
        sections={[
          {
            title: 'Mengapa ERP custom kadang diperlukan',
            children: (
              <>
                <p>
                  ERP siap pakai bisa menjadi titik awal yang baik. Namun
                  banyak perusahaan menemukan celah: workflow approval tidak
                  cocok, modul tidak selaras dengan operasi multi cabang, atau
                  tim terpaksa menambal dengan file Excel di luar sistem.
                </p>
                <p>
                  <strong className='font-medium text-foreground'>
                    Pengembangan ERP custom
                  </strong>{' '}
                  masuk akal ketika proses bisnis sudah unik dan integrasi
                  antar divisi menjadi prioritas operasional.
                </p>
              </>
            ),
          },
          {
            title: 'Arsitektur modular sesuai kebutuhan',
            children: (
              <>
                <p>
                  ERP tidak harus “semua modul sekaligus”. Kognifx merancang
                  arsitektur modular: mulai dari area yang paling urgent,
                  lalu berkembang seiring kebutuhan.
                </p>
                <p>
                  Modul yang sering dibahas tergantung konteks proyek, misalnya
                  sales & purchasing, inventory, finance/accounting,
                  procurement, CRM ringan, HR terbatas, workflow approval,
                  reporting, atau integrasi SCM/OMS — tanpa mengklaim setiap
                  modul sebagai produk paket standar.
                </p>
              </>
            ),
          },
          {
            title: 'Multi cabang, peran, dan approval',
            children: (
              <>
                <p>
                  Perusahaan dengan beberapa cabang atau gudang sering
                  membutuhkan visibilitas stok, penjualan, dan keuangan yang
                  konsisten. Peran pengguna (admin, manager, staff operasional)
                  perlu dibatasi sesuai tanggung jawab.
                </p>
                <p>
                  Workflow approval — dari purchase request hingga
                  pengeluaran — dapat dirancang agar jejak keputusan terekam
                  dengan jelas.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi dan pelaporan',
            children: (
              <>
                <p>
                  ERP custom biasanya perlu berbicara dengan sistem lain: POS,
                  marketplace, payment, logistics partner, atau legacy system.
                  Untuk kebutuhan koneksi yang luas, lihat{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    jasa integrasi sistem
                  </SolutionInlineLink>
                  .
                </p>
                <p>
                  Dashboard dan laporan operasional dirancang agar manajemen
                  melihat indikator yang relevan — bukan hanya export data
                  mentah.
                </p>
              </>
            ),
          },
          {
            title: 'AI dan automation dalam konteks ERP',
            children: (
              <>
                <p>
                  Setelah proses operasional terstruktur, area seperti
                  klasifikasi dokumen, notifikasi otomatis, atau assistive
                  workflow dapat ditambahkan melalui{' '}
                  <SolutionInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </SolutionInlineLink>{' '}
                  — hanya jika memberi nilai nyata di titik proses yang sudah
                  jelas.
                </p>
              </>
            ),
          },
        ]}
        capabilityTags={[
          'Sales & Purchasing',
          'Inventory',
          'Finance',
          'Procurement',
          'Approval Workflow',
          'Multi Cabang',
        ]}
        relatedSolutions={[
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description:
              'Untuk kebutuhan aplikasi di luar ruang lingkup ERP inti.',
          },
          {
            label: 'AI Automation',
            href: '/id/solusi/ai-automation',
            description: 'Otomasi workflow di dalam proses operasional.',
          },
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'Menghubungkan ERP dengan CRM, payment, atau sistem legacy.',
          },
        ]}
        relatedInsights={[
          {
            label: 'Apa Itu ERP?',
            href: '/id/insight/apa-itu-erp',
            description:
              'Pengertian ERP, modul umum, dan kapan perusahaan mulai membutuhkan sistem terpusat.',
          },
          {
            label: 'ERP Custom vs ERP Siap Pakai',
            href: '/id/insight/erp-custom-vs-erp-siap-pakai',
            description:
              'Kerangka keputusan antara ERP paket dan ERP yang menyesuaikan proses bisnis.',
          },
          {
            label: 'Tanda Excel Tidak Lagi Cukup untuk Operasional Bisnis',
            href: '/id/insight/tanda-excel-tidak-lagi-cukup',
            description:
              'Kapan spreadsheet masih tepat, dan kapan operasional butuh sistem yang lebih terstruktur.',
          },
        ]}
        ctaTitle='Evaluasi kebutuhan ERP perusahaan Anda'
        ctaDescription='Ceritakan proses operasional yang ingin disatukan. Kami bantu menilai apakah ERP custom, perluasan sistem existing, atau pendekatan modular bertahap yang paling tepat.'
        ctaLabel='Konsultasikan Sistem ERP Anda'
      />
    </>
  );
}

import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/software-custom';

const title = 'Jasa Pembuatan Software Custom untuk Bisnis | Kognifx';
const description =
  'Kognifx membangun software custom, aplikasi web, sistem internal, portal, dashboard, dan platform bisnis sesuai proses kerja dan kebutuhan operasional perusahaan.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function SoftwareCustomPage() {
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
        breadcrumbLabel='Software Custom'
        eyebrow='Solusi'
        h1='Jasa Pembuatan Software Custom untuk Bisnis'
        intro={
          <>
            Banyak tim terpaksa menyesuaikan proses kerja ke software generik.
            Kognifx membantu perusahaan membangun{' '}
            <strong className='font-medium text-foreground'>
              software custom
            </strong>{' '}
            yang mengikuti alur bisnis, peran pengguna, dan aturan operasional
            yang sebenarnya — dari aplikasi web hingga sistem internal yang
            mendukung pekerjaan harian.
          </>
        }
        sections={[
          {
            title: 'Kapan software custom lebih tepat',
            children: (
              <>
                <p>
                  Software siap pakai sering cukup untuk kebutuhan standar.
                  Namun ketika proses bisnis sudah spesifik, data perlu
                  disesuaikan dengan cara kerja tim, atau beberapa divisi
                  harus berbagi satu alur kerja,{' '}
                  <strong className='font-medium text-foreground'>
                    pengembangan software custom
                  </strong>{' '}
                  biasanya lebih masuk akal.
                </p>
                <p>
                  Contoh situasi yang sering muncul: spreadsheet dan chat
                  dipakai untuk menggantikan sistem, portal internal tidak
                  cocok dengan struktur organisasi, atau tim operasional
                  membutuhkan dashboard yang mencerminkan KPI nyata — bukan
                  template bawaan vendor.
                </p>
              </>
            ),
          },
          {
            title: 'Jenis sistem yang dapat dibangun',
            children: (
              <>
                <p>
                  Ruang lingkup proyek bisa berbeda-beda. Yang penting,
                  sistem dibangun untuk masalah operasional yang jelas,
                  bukan sekadar menambah fitur karena tersedia.
                </p>
                <p>
                  Termasuk di antaranya portal perusahaan, dashboard
                  manajemen, CMS khusus, aplikasi operasional, platform
                  internal, atau fondasi SaaS multi-pengguna jika bisnis
                  membutuhkan model tersebut di fase berikutnya.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi dengan sistem yang sudah ada',
            children: (
              <>
                <p>
                  Software custom jarang berdiri sendiri. Biasanya perlu
                  terhubung ke ERP, CRM, payment gateway, file storage, atau
                  tools yang sudah dipakai tim.
                </p>
                <p>
                  Kognifx merancang integrasi sejak awal bila diperlukan,
                  atau bekerja sama dengan tim internal Anda. Untuk kebutuhan
                  koneksi antar aplikasi yang lebih luas, lihat juga{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    jasa integrasi sistem
                  </SolutionInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'AI dan automation jika relevan',
            children: (
              <>
                <p>
                  AI bukan wajib di setiap proyek software custom. Tetapi
                  ketika ada pekerjaan repetitif, klasifikasi dokumen, atau
                  kebutuhan asisten internal, capability{' '}
                  <SolutionInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </SolutionInlineLink>{' '}
                  dapat ditambahkan sebagai bagian dari sistem — bukan
                  lapisan marketing terpisah.
                </p>
              </>
            ),
          },
          {
            title: 'Pendekatan problem-first Kognifx',
            children: (
              <>
                <p>
                  Proyek dimulai dari pemahaman masalah: proses apa yang
                  lambat, data apa yang tidak konsisten, dan outcome operasional
                  apa yang ingin diperbaiki. Baru setelah itu dipilih bentuk
                  sistem, antarmuka, dan stack teknis yang paling masuk akal.
                </p>
                <p>
                  Cara ini menjaga software custom tetap bisa dipakai dalam
                  operasional harian, bukan prototype yang terlihat lengkap
                  tetapi sulit diadopsi tim.
                </p>
              </>
            ),
          },
        ]}
        capabilityTags={[
          'Portal Internal',
          'Dashboard Operasional',
          'Aplikasi Web Custom',
          'CMS Khusus',
          'Sistem Internal',
          'Platform Bisnis',
        ]}
        relatedSolutions={[
          {
            label: 'AI Automation',
            href: '/id/solusi/ai-automation',
            description:
              'Ketika software custom perlu workflow otomatis atau AI assistant yang terintegrasi.',
          },
          {
            label: 'ERP Custom',
            href: '/id/solusi/erp-custom',
            description:
              'Untuk kebutuhan operasional lintas divisi yang lebih terstruktur.',
          },
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'Menghubungkan software baru dengan aplikasi dan data yang sudah ada.',
          },
        ]}
        relatedInsights={[
          {
            label: 'Studi Kasus Pengembangan Platform Digital',
            href: '/id/studi-kasus',
            description:
              'Lihat bagaimana kami membangun platform enterprise custom untuk operasional bisnis yang kompleks.',
          },
          {
            label: 'Apa Itu Software Custom?',
            href: '/id/insight/apa-itu-software-custom',
            description:
              'Pengertian, kapan dibutuhkan, dan contoh penggunaan di operasional bisnis.',
          },
          {
            label: 'Software Custom vs Software Siap Pakai',
            href: '/id/insight/software-custom-vs-software-siap-pakai',
            description:
              'Kerangka keputusan build vs buy tanpa mengubah halaman jasa ini menjadi artikel perbandingan.',
          },
          {
            label: 'Tahapan Pengembangan Software Custom',
            href: '/id/insight/tahapan-pengembangan-software-custom',
            description:
              'Dari discovery sampai maintenance — termasuk catatan bahwa proyek nyata sering iteratif.',
          },
          {
            label: 'Kapan Bisnis Membutuhkan Software Custom?',
            href: '/id/insight/kapan-bisnis-butuh-software-custom',
            description:
              'Tanda diagnostik kapan custom masuk akal — dan kapan software jadi masih cukup.',
          },
        ]}
        ctaTitle='Butuh software yang mengikuti proses bisnis Anda?'
        ctaDescription='Ceritakan masalah operasional atau ide sistem yang ingin dibangun. Kami bantu menentukan apakah software custom adalah jawaban yang tepat.'
        ctaLabel='Konsultasikan Kebutuhan Software Anda'
      />
    </>
  );
}

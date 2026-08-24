import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/hris';

const title = 'Jasa Pembuatan HRIS & HRMS Custom | Kognifx';
const description =
  'Kognifx membangun HRIS dan HRMS custom untuk data karyawan, absensi, payroll, approval, performance, dan workflow HR sesuai kebutuhan perusahaan.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function HrisPage() {
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
        breadcrumbLabel='HRIS / HRMS'
        eyebrow='Solusi'
        h1='Jasa Pembuatan HRIS & HRMS Custom'
        intro={
          <>
            Data karyawan, absensi, cuti, dan administrasi HR sering tersebar
            di file terpisah. Kognifx merancang{' '}
            <strong className='font-medium text-foreground'>
              HRIS dan HRMS custom
            </strong>{' '}
            agar catatan karyawan, approval, dan workflow internal mengikuti
            kebijakan perusahaan — bukan sebaliknya.
          </>
        }
        sections={[
          {
            title: 'Administrasi HR yang masih terfragmentasi',
            children: (
              <>
                <p>
                  Tim HR sering mengelola data karyawan, kontrak, absensi, dan
                  permintaan cuti di tempat yang berbeda. Onboarding dan
                  offboarding menjadi checklist manual. Informasi yang dibutuhkan
                  atasan tidak selalu tersedia dengan akses yang tepat.
                </p>
                <p>
                  Sistem HR internal berguna ketika proses sudah ada, tetapi
                  eksekusinya masih bergantung pada spreadsheet, email, dan
                  pengingat pribadi.
                </p>
              </>
            ),
          },
          {
            title: 'Karyawan, absensi, cuti, dan payroll sesuai kebutuhan',
            children: (
              <>
                <p>
                  Ruang lingkup dapat mencakup master data karyawan, absensi,
                  cuti, approval atasan, dan catatan kepegawaian. Payroll dapat
                  menjadi bagian dari sistem bila proses perhitungan dan alur
                  persetujuan sudah dipahami — tanpa mengklaim kepatuhan hukum
                  atau pajak secara otomatis.
                </p>
                <p>
                  Performance management, onboarding, atau self-service karyawan
                  ditambahkan hanya jika workflow-nya jelas. Tidak setiap
                  perusahaan membutuhkan seluruh modul sekaligus.
                </p>
              </>
            ),
          },
          {
            title: 'Akses peran, pelaporan, dan integrasi',
            children: (
              <>
                <p>
                  HR, atasan, finance, dan karyawan membutuhkan tampilan yang
                  berbeda. Role-based access membantu membatasi data sensitif.
                  Laporan dapat menampilkan headcount, kehadiran, atau status
                  pengajuan sesuai indikator yang dipakai operasional.
                </p>
                <p>
                  Integrasi ke sistem absensi, finance, atau aplikasi existing
                  dibahas setelah kebutuhan data dipetakan. Lihat juga{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </SolutionInlineLink>{' '}
                  bila HRIS harus berbicara dengan software lain.
                </p>
              </>
            ),
          },
          {
            title: 'HRIS custom versus HR SaaS generik',
            children: (
              <>
                <p>
                  Produk HR SaaS sering cukup untuk kebijakan standar. Custom
                  lebih relevan ketika struktur organisasi, pola shift,
                  approval berlapis, atau kebutuhan laporan tidak muat di paket
                  generik.
                </p>
                <p>
                  Jika kebutuhan HR hanya satu bagian dari operasional yang
                  lebih besar, evaluasi juga{' '}
                  <SolutionInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </SolutionInlineLink>
                  . Automation untuk pengingat, klasifikasi dokumen, atau
                  workflow repetitif dapat dibahas di{' '}
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
          'Employee Records',
          'Attendance',
          'Leave Approval',
          'Payroll Workflow',
          'Performance Review',
          'HR Reporting',
        ]}
        relatedSolutions={[
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description:
              'Portal internal atau aplikasi HR yang berdiri di luar paket ERP.',
          },
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'Menghubungkan HRIS dengan absensi, finance, atau sistem existing.',
          },
          {
            label: 'ERP Custom',
            href: '/id/solusi/erp-custom',
            description:
              'Ketika data karyawan perlu terhubung ke operasional lintas divisi.',
          },
          {
            label: 'AI Automation',
            href: '/id/solusi/ai-automation',
            description:
              'Pengingat, klasifikasi dokumen, atau workflow HR yang berulang.',
          },
        ]}
        ctaTitle='Proses HR masih bergantung pada file terpisah?'
        ctaDescription='Ceritakan alur absensi, cuti, data karyawan, atau payroll yang ingin dirapikan. Kami bantu menilai lingkup HRIS/HRMS yang realistis — tanpa menjanjikan kepatuhan hukum otomatis.'
        ctaLabel='Diskusikan Kebutuhan HRIS Anda'
      />
    </>
  );
}

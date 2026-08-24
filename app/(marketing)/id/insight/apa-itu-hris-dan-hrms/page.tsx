import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-hris-dan-hrms')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuHrisDanHrmsPage() {
  return (
    <>
      <JsonLd
        data={getArticleStructuredData({
          path: article.path,
          headline: article.h1,
          description: article.description,
        })}
      />
      <InsightArticlePage
        path={article.path}
        category={article.category}
        h1={article.h1}
        intro={
          <>
            HRIS dan HRMS adalah istilah untuk sistem yang membantu mengelola
            data karyawan dan workflow HR — dari absensi hingga proses yang
            lebih luas di siklus kerja. Artikel ini menjelaskan pengertian
            keduanya, modul umum, dan kapan perusahaan membutuhkan sistem HR
            terpusat.
          </>
        }
        sections={[
          {
            title: 'Definisi HRIS',
            children: (
              <>
                <p>
                  HRIS (Human Resource Information System) biasanya menekankan
                  pencatatan dan pengelolaan informasi karyawan: data master,
                  dokumen, status kepegawaian, dan laporan dasar. Fokusnya
                  sering pada data yang akurat dan mudah diakses tim HR.
                </p>
              </>
            ),
          },
          {
            title: 'Definisi HRMS',
            children: (
              <>
                <p>
                  HRMS (Human Resource Management System) sering digambarkan
                  lebih luas: mencakup proses manajemen SDM di luar pencatatan,
                  misalnya performance, learning, atau workflow yang lebih
                  kompleks. Dalam praktik, batas istilah ini tumpang tindih —
                  detail ada di{' '}
                  <InsightInlineLink href='/id/insight/hris-vs-hrms'>
                    HRIS vs HRMS
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Data karyawan',
            children: (
              <>
                <p>
                  Data karyawan mencakup identitas kerja, kontrak, posisi, dan
                  riwayat perubahan. Tanpa sumber tunggal, file tersebar dan
                  update terlambat. Sistem terpusat membantu, asalkan hak akses
                  dan proses update jelas.
                </p>
              </>
            ),
          },
          {
            title: 'Absensi dan cuti',
            children: (
              <>
                <p>
                  Absensi dan leave management mencatat kehadiran, pengajuan
                  cuti, dan persetujuan. Alur ini sering jadi titik nyeri
                  pertama karena melibatkan banyak orang dan aturan yang
                  berbeda per lokasi atau tipe karyawan.
                </p>
              </>
            ),
          },
          {
            title: 'Payroll sebagai salah satu modul',
            children: (
              <>
                <p>
                  Payroll sering menjadi modul di sekitar sistem HR, bukan
                  seluruh arti HRIS/HRMS. Perhitungan gaji bergantung pada
                  data absensi, tunjangan, dan aturan perusahaan. Artikel ini
                  tidak mengklaim kepatuhan hukum otomatis — aturan payroll
                  harus divalidasi oleh pihak yang berwenang di organisasi.
                </p>
              </>
            ),
          },
          {
            title: 'Approval workflow',
            children: (
              <>
                <p>
                  Banyak proses HR bersifat berjenjang: cuti, mutasi, atau
                  permintaan data. Workflow approval membuat status terlihat
                  dan mengurangi chat berantai, selama eskalasi dan pengecualian
                  ikut dirancang.
                </p>
              </>
            ),
          },
          {
            title: 'Performance management',
            children: (
              <>
                <p>
                  Beberapa sistem mencakup siklus review, tujuan, atau feedback.
                  Modul ini berguna jika prosesnya sudah ada; memaksa template
                  review tanpa kesepakatan organisasi biasanya menghasilkan
                  formality tanpa dampak.
                </p>
              </>
            ),
          },
          {
            title: 'Reporting HR',
            children: (
              <>
                <p>
                  Laporan headcount, turnover, atau status cuti hanya bermakna
                  jika definisi data konsisten. Dashboard mengikuti kualitas
                  pencatatan, bukan sebaliknya.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi',
            children: (
              <>
                <p>
                  Sistem HR sering perlu terhubung ke absensi perangkat, finance,
                  atau portal karyawan. Integrasi mengurangi entri ganda —
                  konteks lebih luas ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-system-integration'>
                    system integration
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kapan perusahaan membutuhkan sistem HR terpusat',
            children: (
              <>
                <p>
                  Sinyal umum: jumlah karyawan naik, multi lokasi, atau proses
                  cuti/absensi tidak tertelusuri. Mulai dari workflow yang paling
                  sering macet, bukan dari daftar fitur terpanjang.
                </p>
                <p>
                  Pendekatan pengerjaan sistem HR yang menyesuaikan proses
                  perusahaan dijelaskan di{' '}
                  <InsightInlineLink href='/id/solusi/hris'>
                    solusi HRIS
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/hris'
        commercialCtaTitle='Data dan workflow HR masih tersebar?'
        commercialCtaDescription='Halaman HRIS membahas pendekatan modular untuk data karyawan dan proses HR — tanpa janji kepatuhan hukum otomatis.'
        commercialCtaLabel='Lihat solusi HRIS'
      />
    </>
  );
}

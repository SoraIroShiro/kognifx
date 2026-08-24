import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/hris-vs-hrms')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function HrisVsHrmsPage() {
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
            HRIS dan HRMS sering dipakai bergantian di pasar. Perbedaannya
            berguna sebagai kerangka diskusi, tetapi bukan hukum universal —
            vendor bisa memakai label berbeda untuk cakupan yang mirip. Fokus
            yang lebih aman: workflow mana yang harus ditangani sistem.
          </>
        }
        sections={[
          {
            title: 'Terminology overlap',
            children: (
              <>
                <p>
                  Dalam literatur dan marketing produk, HRIS, HRMS, dan kadang
                  HCM saling tumpang tindih. Satu produk bisa disebut HRIS
                  meski punya modul performance; yang lain disebut HRMS meski
                  inti fungsinya pencatatan. Bandingkan kemampuan, bukan hanya
                  nama.
                </p>
              </>
            ),
          },
          {
            title: 'Fokus HRIS',
            children: (
              <>
                <p>
                  Secara konseptual, HRIS sering dikaitkan dengan fondasi data:
                  employee records, status kepegawaian, dan laporan operasional
                  HR. Ini cocok sebagai titik awal jika masalah utama adalah
                  data yang berantakan.
                </p>
              </>
            ),
          },
          {
            title: 'Fokus HRMS',
            children: (
              <>
                <p>
                  HRMS sering digambarkan mencakup manajemen proses yang lebih
                  luas di siklus karyawan — misalnya performance, development,
                  atau workflow yang lebih kompleks. Dalam praktik, cakupan
                  nyata ditentukan modul yang diimplementasikan.
                </p>
              </>
            ),
          },
          {
            title: 'Modul yang sering tumpang tindih',
            children: (
              <>
                <p>
                  Absensi, cuti, payroll, dan master data bisa muncul di kedua
                  label. Yang membedakan implementasi adalah kedalaman aturan,
                  approval, dan integrasi — bukan sekadar daftar nama modul.
                </p>
              </>
            ),
          },
          {
            title: 'Payroll, attendance, dan performance',
            children: (
              <>
                <p>
                  Attendance dan leave biasanya mendahului karena frekuensi
                  penggunaannya tinggi. Payroll bergantung pada data yang
                  akurat dan aturan yang disepakati. Performance baru bernilai
                  jika siklus review sudah hidup di organisasi.
                </p>
              </>
            ),
          },
          {
            title: 'Mengapa nama produk bukan satu-satunya faktor',
            children: (
              <>
                <p>
                  Memilih hanya karena label “HRMS lengkap” bisa mengabaikan
                  adopsi dan kesesuaian proses. Lebih berguna membuat daftar
                  proses wajib, pengecualian, dan sistem lain yang harus
                  terhubung.
                </p>
              </>
            ),
          },
          {
            title: 'Mulai dari kebutuhan workflow',
            children: (
              <>
                <p>
                  Petakan: siapa mengajukan apa, siapa menyetujui, data apa yang
                  harus tunggal, dan laporan apa yang benar-benar dipakai.
                  Pengertian istilah dasar ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-hris-dan-hrms'>
                    apa itu HRIS dan HRMS
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kapan custom system relevan',
            children: (
              <>
                <p>
                  Custom relevan jika aturan organisasi, multi lokasi, atau
                  integrasi tidak tertampung konfigurasi paket tanpa
                  workarounds mahal. Konteks lebih luas tentang membangun
                  sistem sesuai proses ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-software-custom'>
                    software custom
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan pengerjaan untuk kebutuhan HR perusahaan
                  dijelaskan di{' '}
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
        commercialCtaTitle='Belum yakin cakupan sistem HR yang dibutuhkan?'
        commercialCtaDescription='Halaman HRIS membantu menilai lingkup dari proses yang macet — bukan dari label produk yang terdengar paling lengkap.'
        commercialCtaLabel='Lihat solusi HRIS'
      />
    </>
  );
}

import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/tanda-excel-tidak-lagi-cukup'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function TandaExcelTidakLagiCukupPage() {
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
            Excel dan spreadsheet lain tetap alat yang berguna. Masalah muncul
            ketika file dipakai sebagai sistem operasional bersama: banyak
            pengguna, banyak versi, dan proses yang membutuhkan audit. Artikel
            ini membantu mengenali batas itu — tanpa menolak spreadsheet secara
            membabi buta.
          </>
        }
        sections={[
          {
            title: 'Excel berguna — dan tidak otomatis “salah”',
            children: (
              <>
                <p>
                  Untuk analisis ad-hoc, prototipe, atau tim kecil dengan data
                  terbatas, spreadsheet sering paling efisien. Mengganti terlalu
                  dini hanya menambah kompleksitas.
                </p>
              </>
            ),
          },
          {
            title: 'Kompleksitas multi-user',
            children: (
              <>
                <p>
                  Semakin banyak orang mengedit file yang sama, semakin tinggi
                  konflik dan ketergantungan pada “pemilik file”. Sistem dengan
                  peran dan status biasanya lebih aman untuk pekerjaan harian.
                </p>
              </>
            ),
          },
          {
            title: 'Konflik versi',
            children: (
              <>
                <p>
                  “Final_v3_benar.xlsx” adalah gejala klasik. Tanpa sumber
                  tunggal, keputusan diambil dari salinan yang berbeda.
                </p>
              </>
            ),
          },
          {
            title: 'Duplikasi dan entri manual',
            children: (
              <>
                <p>
                  Data yang sama diketik ulang ke chat, form, atau sistem lain.
                  Selain lambat, inkonsistensi sulit dilacak.
                </p>
              </>
            ),
          },
          {
            title: 'Kontrol akses',
            children: (
              <>
                <p>
                  Spreadsheet sulit membatasi kolom atau baris per peran dengan
                  rapi. Untuk data sensitif, model permission di aplikasi biasanya
                  lebih tepat.
                </p>
              </>
            ),
          },
          {
            title: 'Audit trail',
            children: (
              <>
                <p>
                  Mengetahui siapa mengubah apa dan kapan menjadi penting saat
                  volume naik. Riwayat file generik jarang cukup untuk proses
                  yang perlu ditinjau ulang.
                </p>
              </>
            ),
          },
          {
            title: 'Workflow approval',
            children: (
              <>
                <p>
                  Persetujuan lewat komentar atau email mudah hilang konteks.
                  Workflow digital lebih cocok — lihat{' '}
                  <InsightInlineLink href='/id/insight/mengatasi-proses-approval-manual'>
                    mengatasi proses approval manual
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Batasan integrasi',
            children: (
              <>
                <p>
                  Menghubungkan spreadsheet ke ERP, payment, atau aplikasi lain
                  biasanya rapuh. Jika sinkronisasi rutin dibutuhkan, evaluasi{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Reporting dan konsistensi data',
            children: (
              <>
                <p>
                  Laporan yang disusun ulang setiap minggu dari banyak tab
                  menandakan model data belum mendukung operasional. Data
                  tersebar dibahas di{' '}
                  <InsightInlineLink href='/id/insight/cara-mengatasi-data-bisnis-tersebar'>
                    cara mengatasi data bisnis yang tersebar
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kapan spreadsheet masih tepat',
            children: (
              <>
                <p>
                  Tetap tepat untuk eksplorasi, perhitungan sementara, atau
                  proses yang jarang dan melibatkan sedikit orang. Jangan
                  menganggap setiap file Excel harus diganti sistem custom.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan mempertimbangkan sistem custom atau enterprise',
            children: (
              <>
                <p>
                  Pertimbangkan sistem ketika tanda di atas sudah menjadi biaya
                  harian. Kadang jawaban adalah modul ERP; kadang aplikasi
                  operasional yang lebih sempit. Tanda lebih luas:{' '}
                  <InsightInlineLink href='/id/insight/kapan-bisnis-butuh-software-custom'>
                    kapan bisnis membutuhkan software custom
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Lihat{' '}
                  <InsightInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </InsightInlineLink>{' '}
                  atau, jika proses lintas divisi sudah kompleks,{' '}
                  <InsightInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/software-custom'
        commercialCtaTitle='Spreadsheet mulai menghambat operasional?'
        commercialCtaDescription='Halaman software custom membantu menilai apakah yang dibutuhkan adalah aplikasi operasional, integrasi, atau pendekatan enterprise — tanpa memaksa custom untuk setiap kasus.'
        commercialCtaLabel='Lihat solusi software custom'
      />
    </>
  );
}

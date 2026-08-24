import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-erp')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuErpPage() {
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
            ERP (enterprise resource planning) adalah sistem yang
            menghubungkan proses operasional perusahaan — seperti penjualan,
            pengadaan, stok, dan keuangan — agar data tidak tersebar di
            aplikasi terpisah. Artikel ini menjelaskan fungsi, modul umum,
            dan kapan organisasi mulai membutuhkannya.
          </>
        }
        sections={[
          {
            title: 'Pengertian ERP',
            children: (
              <>
                <p>
                  ERP menempatkan transaksi dan master data di satu kerangka
                  kerja. Tujuannya bukan “semua fitur dalam satu layar”,
                  melainkan satu bahasa data untuk proses yang saling terkait.
                </p>
              </>
            ),
          },
          {
            title: 'Masalah yang coba diselesaikan',
            children: (
              <>
                <p>
                  Tanpa sistem terhubung, stok di gudang, tagihan di finance,
                  dan pesanan di sales bisa saling menyimpang. Rekonsiliasi
                  manual jadi pekerjaan harian. ERP menargetkan inkonsistensi
                  itu, bukan sekadar mengganti spreadsheet dengan tampilan
                  yang lebih rapi.
                </p>
              </>
            ),
          },
          {
            title: 'Modul umum',
            children: (
              <>
                <p>
                  Modul yang sering dibahas meliputi penjualan, pembelian,
                  inventory, keuangan, dan kadang SDM atau produksi. Tidak
                  semua organisasi membutuhkan seluruh modul. Yang penting
                  adalah batas proses: modul mana yang benar-benar dipakai
                  bersama.
                </p>
              </>
            ),
          },
          {
            title: 'Data terpusat dan workflow antar departemen',
            children: (
              <>
                <p>
                  Data terpusat berarti master pelanggan, barang, dan dokumen
                  tidak diduplikasi tanpa kendali. Workflow antar departemen
                  — dari order sampai pengakuan pendapatan — bisa punya
                  status dan tanggung jawab yang jelas.
                </p>
              </>
            ),
          },
          {
            title: 'Pelaporan dan dashboard',
            children: (
              <>
                <p>
                  Laporan operasional hanya berguna jika sumber datanya
                  konsisten. Dashboard ERP menampilkan indikator yang
                  disepakati, bukan export acak dari lima file. Kualitas
                  laporan mengikuti kualitas proses pencatatan.
                </p>
              </>
            ),
          },
          {
            title: 'ERP versus aplikasi terpisah',
            children: (
              <>
                <p>
                  Aplikasi terpisah bisa unggul di fungsi sempit. Masalah
                  muncul saat data harus berpindah tanpa kontrak yang jelas.
                  ERP tidak otomatis lebih baik; ia lebih masuk akal jika
                  keterhubungan proses adalah kebutuhan inti.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan bisnis butuh ERP, dan custom versus paket',
            children: (
              <>
                <p>
                  Sinyal umum: volume transaksi naik, multi cabang, atau
                  finance tidak percaya angka operasional. Paket ERP cukup
                  jika proses dekat standar. Custom dipertimbangkan jika
                  pengecualian proses terlalu banyak untuk dikonfigurasi —
                  perbandingan ada di{' '}
                  <InsightInlineLink href='/id/insight/erp-custom-vs-erp-siap-pakai'>
                    ERP custom vs ERP siap pakai
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Jika kebutuhan mengarah ke sistem yang menyesuaikan proses
                  perusahaan, lihat{' '}
                  <InsightInlineLink href='/id/solusi/erp-custom'>
                    jasa pembuatan ERP custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/erp-custom'
        commercialCtaTitle='Proses operasional mulai sulit disatukan?'
        commercialCtaDescription='Halaman ERP custom membahas pendekatan modular berdasarkan pemetaan proses, bukan janji semua modul dalam satu paket produk.'
        commercialCtaLabel='Lihat solusi ERP custom'
      />
    </>
  );
}

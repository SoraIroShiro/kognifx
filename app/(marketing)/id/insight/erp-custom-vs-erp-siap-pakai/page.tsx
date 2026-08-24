import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/erp-custom-vs-erp-siap-pakai'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ErpCustomVsReadyPage() {
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
            ERP siap pakai menawarkan proses yang sudah dibakukan. ERP custom
            menyesuaikan alur, data, dan integrasi ke cara perusahaan
            bekerja. Pilihan yang tepat bergantung pada seberapa unik proses
            Anda — bukan pada label “modern” atau “lengkap”.
          </>
        }
        sections={[
          {
            title: 'Perbedaan dasar',
            children: (
              <>
                <p>
                  ERP paket dikonfigurasi dalam koridor modul vendor. ERP
                  custom merancang proses dan data model sesuai operasional,
                  dengan lingkup yang harus dikendalikan secara sadar.
                </p>
                <p>
                  Keduanya bisa gagal jika diimplementasikan tanpa pemetaan
                  proses. Perbedaannya ada di tempat fleksibilitas dibayar:
                  konfigurasi vendor versus desain dan pemeliharaan sendiri.
                </p>
              </>
            ),
          },
          {
            title: 'Proses standar versus proses unik',
            children: (
              <>
                <p>
                  Jika penjualan, gudang, dan finance mengikuti pola umum,
                  paket sering cukup. Jika ada aturan alokasi, multi gudang
                  yang tidak standar, atau approval yang sangat spesifik,
                  memaksa semuanya ke template bisa menghasilkan workarounds
                  di luar sistem.
                </p>
              </>
            ),
          },
          {
            title: 'Modul, workflow, dan integrasi',
            children: (
              <>
                <p>
                  Paket unggul pada modul yang sudah matang. Custom unggul
                  saat workflow antar modul tidak sesuai asumsi produk.
                  Integrasi ke sistem existing juga lebih mudah dirancang
                  jika kontrak data ditentukan dari kebutuhan, bukan dari
                  connector yang kebetulan tersedia.
                </p>
              </>
            ),
          },
          {
            title: 'Upaya implementasi, kepemilikan, dan pemeliharaan',
            children: (
              <>
                <p>
                  Implementasi paket tetap membutuhkan data migration,
                  pelatihan, dan perubahan cara kerja. Custom menambah
                  keputusan desain. Kepemilikan kode dan roadmap memberi
                  kontrol, sekaligus tanggung jawab perbaikan dan
                  dokumentasi.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan paket cukup, kapan custom beralasan',
            children: (
              <>
                <p>
                  Paket cukup jika gap proses kecil dan tim siap menyesuaikan
                  SOP. Custom beralasan jika gap itu menjadi biaya operasional
                  harian, atau jika sistem harus menjadi tulang punggung yang
                  tidak bisa menunggu roadmap vendor.
                </p>
              </>
            ),
          },
          {
            title: 'Daftar periksa keputusan',
            children: (
              <>
                <p>
                  Tanyakan: proses mana yang tidak boleh distandarkan, data
                  mana yang wajib tunggal, integrasi mana yang tidak bisa
                  ditunda, dan siapa owner setelah go-live. Jika jawaban masih
                  kabur, mulai dari discovery — bukan dari memilih merek.
                </p>
                <p>
                  Pengertian ERP ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-erp'>
                    apa itu ERP
                  </InsightInlineLink>
                  . Pendekatan pengerjaan sistem yang menyesuaikan proses
                  perusahaan dijelaskan di{' '}
                  <InsightInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/erp-custom'
        commercialCtaTitle='Proses perusahaan tidak muat di template ERP?'
        commercialCtaDescription='Halaman solusi ERP custom merangkum pendekatan modular dan integrasi, tanpa mengklaim paket produk siap unduh.'
        commercialCtaLabel='Lihat solusi ERP custom'
      />
    </>
  );
}

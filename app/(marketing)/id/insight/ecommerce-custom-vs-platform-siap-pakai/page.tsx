import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/ecommerce-custom-vs-platform-siap-pakai'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function EcommerceCustomVsPlatformPage() {
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
            Platform e-commerce siap pakai mempercepat peluncuran toko dengan
            pola yang sudah umum. E-commerce custom menyesuaikan katalog, order,
            peran, dan integrasi ke proses bisnis yang spesifik — termasuk
            skenario B2B yang jarang muat di template.
          </>
        }
        sections={[
          {
            title: 'Perbedaan dasar',
            children: (
              <>
                <p>
                  Platform jadi menawarkan storefront, checkout, dan modul yang
                  dikonfigurasi. Custom membangun alur sesuai aturan harga,
                  approval, atau katalog yang tidak standar. Keduanya bisa gagal
                  jika proses bisnis belum dipetakan.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan platform siap pakai cukup',
            children: (
              <>
                <p>
                  Cukup jika model B2C relatif standar, katalog sederhana, dan
                  integrasi yang dibutuhkan sudah tersedia. Keuntungan utamanya
                  waktu go-live dan ekosistem plugin yang matang.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan custom diperlukan',
            children: (
              <>
                <p>
                  Custom relevan untuk aturan B2B, multi-harga, approval order,
                  atau ketika commerce harus menyatu dengan sistem internal yang
                  tidak cocok dipaksa lewat workarounds.
                </p>
              </>
            ),
          },
          {
            title: 'Workflow B2B dan B2C',
            children: (
              <>
                <p>
                  B2C biasanya menekankan katalog publik dan checkout cepat. B2B
                  sering butuh akun perusahaan, kuota, term pembayaran, atau
                  order berulang. Satu platform jarang ideal untuk keduanya tanpa
                  penyesuaian.
                </p>
              </>
            ),
          },
          {
            title: 'Catalog dan order workflow',
            children: (
              <>
                <p>
                  Struktur produk, varian, dan status order menentukan seberapa
                  mudah operasional berjalan. Custom memungkinkan status dan
                  validasi yang mencerminkan gudang atau sales internal.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi inventory dan ERP',
            children: (
              <>
                <p>
                  Stok yang tidak sinkron merusak kepercayaan pelanggan.
                  Integrasi ke inventory atau ERP sering jadi penentu — konteks
                  gudang ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-wms'>
                    apa itu WMS
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Payment dan shipping sebagai contoh integrasi',
            children: (
              <>
                <p>
                  Pembayaran dan pengiriman biasanya dihubungkan lewat API
                  penyedia. Ini contoh pola integrasi umum — bukan klaim
                  kemitraan atau sertifikasi tertentu.
                </p>
              </>
            ),
          },
          {
            title: 'Peran dan proses khusus',
            children: (
              <>
                <p>
                  Admin, sales internal, vendor, atau approver mungkin punya
                  hak yang berbeda. Jika peran itu kompleks, template sering
                  terasa sempit.
                </p>
              </>
            ),
          },
          {
            title: 'Maintenance dan evolusi',
            children: (
              <>
                <p>
                  Platform jadi mengikuti roadmap vendor. Custom memberi kontrol
                  produk, sekaligus tanggung jawab pemeliharaan dan keamanan
                  yang harus direncanakan.
                </p>
              </>
            ),
          },
          {
            title: 'Kerangka keputusan',
            children: (
              <>
                <p>
                  Tanyakan model jual (B2B/B2C/multi-vendor), aturan order yang
                  tidak boleh disederhanakan, dan sistem mana yang harus
                  terhubung sejak hari pertama. Untuk marketplace multi-seller,
                  lihat{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-marketplace-multi-vendor'>
                    marketplace multi-vendor
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan pengerjaan platform jual-beli dijelaskan di{' '}
                  <InsightInlineLink href='/id/solusi/ecommerce-marketplace'>
                    solusi e-commerce / marketplace
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/ecommerce-marketplace'
        commercialCtaTitle='Proses jual-beli tidak muat di template toko?'
        commercialCtaDescription='Halaman solusi membahas B2B, B2C, dan multi-vendor tanpa mengklaim kemitraan payment atau logistik tertentu.'
        commercialCtaLabel='Lihat solusi e-commerce / marketplace'
      />
    </>
  );
}

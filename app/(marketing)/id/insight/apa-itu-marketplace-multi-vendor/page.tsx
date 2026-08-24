import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/apa-itu-marketplace-multi-vendor'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuMarketplaceMultiVendorPage() {
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
            Marketplace multi-vendor adalah platform di mana banyak seller
            menjual melalui satu tempat, sementara operator mengatur aturan,
            katalog, dan alur order. Ini berbeda dari toko online tunggal yang
            hanya menjual inventaris sendiri.
          </>
        }
        sections={[
          {
            title: 'Definisi',
            children: (
              <>
                <p>
                  Multi-vendor marketplace mempertemukan pelanggan dengan
                  beberapa penjual. Platform menyediakan discovery, order, dan —
                  tergantung desain — alur settlement antar pihak. Kompleksitas
                  utamanya ada pada peran dan aturan, bukan sekadar tampilan
                  katalog.
                </p>
              </>
            ),
          },
          {
            title: 'Perbedaan toko online versus marketplace',
            children: (
              <>
                <p>
                  Toko online biasanya satu merchant, satu katalog, satu
                  fulfillment. Marketplace menambah onboarding seller, moderasi,
                  dan pemisahan order per vendor. Perbandingan build vs buy
                  untuk commerce ada di{' '}
                  <InsightInlineLink href='/id/insight/ecommerce-custom-vs-platform-siap-pakai'>
                    e-commerce custom vs platform siap pakai
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Peran seller, vendor, admin, dan customer',
            children: (
              <>
                <p>
                  Seller mengelola produk dan fulfillment-nya. Admin platform
                  mengatur kebijakan, approval, dan resolusi sengketa dasar.
                  Customer berinteraksi dengan storefront terpadu. Hak akses
                  harus dipisah agar data antar seller tidak bercampur.
                </p>
              </>
            ),
          },
          {
            title: 'Product dan catalog management',
            children: (
              <>
                <p>
                  Setiap seller punya katalog, tetapi platform bisa memberlakukan
                  kategori, atribut wajib, atau aturan duplikasi. Tanpa
                  standarisasi, pencarian dan filter cepat rusak.
                </p>
              </>
            ),
          },
          {
            title: 'Order workflow',
            children: (
              <>
                <p>
                  Order bisa terpecah per seller, dengan status terpisah untuk
                  pembayaran, pengemasan, dan pengiriman. Desain workflow harus
                  jelas: apa yang terjadi jika satu seller gagal memenuhi
                  sebagian order.
                </p>
              </>
            ),
          },
          {
            title: 'Commission dan settlement sebagai konsep workflow',
            children: (
              <>
                <p>
                  Banyak marketplace memakai komisi atau pembagian hasil.
                  Secara konseptual, ini adalah aturan perhitungan dan jadwal
                  settlement — bukan sertifikasi payment atau jaminan keuangan.
                  Detail implementasi harus disepakati secara bisnis dan legal
                  di luar cakupan artikel ini.
                </p>
              </>
            ),
          },
          {
            title: 'Moderation dan approval',
            children: (
              <>
                <p>
                  Produk baru, perubahan harga, atau seller baru sering perlu
                  review. Moderasi menjaga kualitas katalog, tetapi terlalu
                  ketat bisa menghambat operasional seller.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi inventory, payment, dan shipping',
            children: (
              <>
                <p>
                  Stok seller, metode bayar, dan pengiriman biasanya masuk lewat
                  integrasi. Pola umumnya dibahas di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-system-integration'>
                    system integration
                  </InsightInlineLink>
                  — tanpa mengklaim kemitraan penyedia tertentu.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan custom marketplace diperlukan',
            children: (
              <>
                <p>
                  Custom masuk akal jika aturan vendor, B2B marketplace, atau
                  settlement tidak muat di template umum. Jika yang dibutuhkan
                  hanya toko tunggal sederhana, platform jadi sering lebih
                  realistis.
                </p>
                <p>
                  Pendekatan pengerjaan dijelaskan di{' '}
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
        commercialCtaTitle='Merancang platform multi-vendor?'
        commercialCtaDescription='Halaman solusi membahas peran seller/admin, katalog, dan order workflow tanpa mengklaim sertifikasi settlement atau payment.'
        commercialCtaLabel='Lihat solusi e-commerce / marketplace'
      />
    </>
  );
}

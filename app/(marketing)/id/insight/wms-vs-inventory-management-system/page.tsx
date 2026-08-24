import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/wms-vs-inventory-management-system'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function WmsVsInventoryPage() {
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
            Inventory management system menekankan kuantitas dan nilai stok.
            WMS menekankan operasional di gudang: lokasi, pergerakan, dan
            eksekusi order. Keduanya saling terkait, tetapi menjawab pertanyaan
            yang berbeda.
          </>
        }
        sections={[
          {
            title: 'Fokus inventory management',
            children: (
              <>
                <p>
                  Inventory system biasanya menjawab: berapa stok tersedia,
                  berapa yang reserved, dan bagaimana stok berubah karena
                  pembelian atau penjualan. Detail lokasi di dalam gudang boleh
                  minimal.
                </p>
              </>
            ),
          },
          {
            title: 'Fokus WMS',
            children: (
              <>
                <p>
                  WMS menjawab: di rak mana barang berada, bagaimana urutan
                  picking, dan bagaimana receiving/dispatch dieksekusi.
                  Pengertian lebih lengkap ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-wms'>
                    apa itu WMS
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Perbedaan detail lokasi dan workflow gudang',
            children: (
              <>
                <p>
                  Inventory bisa cukup dengan gudang sebagai satu bucket. WMS
                  memecah ruang menjadi lokasi operasional. Semakin kompleks
                  layout dan throughput, semakin terasa kebutuhan workflow
                  gudang.
                </p>
              </>
            ),
          },
          {
            title: 'Stock quantity versus operational movement',
            children: (
              <>
                <p>
                  Quantity benar di laporan belum menjamin barang mudah
                  ditemukan. Sebaliknya, pergerakan yang rapi di lantai gudang
                  tetap perlu sinkron ke quantity agar finance dan sales tidak
                  salah angka.
                </p>
              </>
            ),
          },
          {
            title: 'Multi-warehouse',
            children: (
              <>
                <p>
                  Kedua pendekatan bisa mendukung multi lokasi. Bedanya: inventory
                  fokus pada stok per site; WMS menambah aturan fulfillment dan
                  transfer yang lebih operasional.
                </p>
              </>
            ),
          },
          {
            title: 'Barcode dan QR',
            children: (
              <>
                <p>
                  Pemindaian membantu keduanya, tetapi lebih kritis di WMS karena
                  frekuensi scan di receiving dan picking tinggi. Ini tetap
                  konsep integrasi — bukan klaim perangkat tertentu.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi ERP, POS, dan procurement',
            children: (
              <>
                <p>
                  Inventory sering dekat dengan modul ERP atau POS. WMS perlu
                  kontrak yang jelas dengan order, procurement, dan pengiriman.
                  Kaitan ke sistem enterprise ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-erp'>
                    apa itu ERP
                  </InsightInlineLink>{' '}
                  dan halaman{' '}
                  <InsightInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kapan inventory sederhana cukup',
            children: (
              <>
                <p>
                  Cukup jika volume rendah, lokasi sederhana, dan kesalahan pick
                  jarang. Spreadsheet plus pencatatan quantity terkadang masih
                  memadai — sampai throughput naik.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan WMS lebih tepat',
            children: (
              <>
                <p>
                  WMS lebih tepat ketika kesalahan lokasi, antrian picking, atau
                  multi gudang sudah menjadi biaya harian. Mulai dari proses yang
                  paling sering gagal, bukan dari daftar fitur terpanjang.
                </p>
                <p>
                  Pendekatan pengerjaan dijelaskan di{' '}
                  <InsightInlineLink href='/id/solusi/wms-inventory'>
                    solusi WMS / inventory
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/wms-inventory'
        commercialCtaTitle='Belum yakin butuh inventory atau WMS?'
        commercialCtaDescription='Halaman solusi membantu menilai apakah yang dibutuhkan adalah pencatatan stok, operasional gudang, atau keduanya secara bertahap.'
        commercialCtaLabel='Lihat solusi WMS / inventory'
      />
    </>
  );
}

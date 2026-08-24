import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-wms')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuWmsPage() {
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
            WMS (warehouse management system) adalah sistem untuk mengelola
            operasional gudang: barang masuk, lokasi penyimpanan, pergerakan,
            dan pengeluaran. Fokusnya lebih pada workflow di lantai gudang
            daripada sekadar angka stok di laporan.
          </>
        }
        sections={[
          {
            title: 'Definisi WMS',
            children: (
              <>
                <p>
                  WMS membantu tim gudang tahu apa yang ada di mana, apa yang
                  harus dipindah, dan apa yang siap dikirim. Ia melengkapi —
                  bukan selalu menggantikan — pencatatan inventory di level
                  perusahaan. Perbandingan ada di{' '}
                  <InsightInlineLink href='/id/insight/wms-vs-inventory-management-system'>
                    WMS vs inventory management system
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Receiving',
            children: (
              <>
                <p>
                  Receiving mencatat penerimaan barang, mencocokkan dengan
                  dokumen, dan memutuskan apakah barang bisa disimpan. Tanpa
                  proses ini, selisih stok sering dimulai sejak pintu masuk.
                </p>
              </>
            ),
          },
          {
            title: 'Penyimpanan dan lokasi stok',
            children: (
              <>
                <p>
                  Lokasi — zona, rak, bin — membuat stok bisa ditemukan tanpa
                  mengandalkan “orang yang hafal gudang”. Aturan putaway
                  menentukan di mana barang ditempatkan setelah diterima.
                </p>
              </>
            ),
          },
          {
            title: 'Pergerakan barang',
            children: (
              <>
                <p>
                  Transfer antar lokasi, restock, atau penyesuaian harus
                  tercatat agar kuantitas di sistem mengikuti realitas. Gerakan
                  yang tidak tercatat adalah sumber utama ketidakpercayaan
                  laporan.
                </p>
              </>
            ),
          },
          {
            title: 'Picking, packing, dan dispatch',
            children: (
              <>
                <p>
                  Picking mengambil barang sesuai order; packing menyiapkan
                  kiriman; dispatch mencatat keluarnya barang. Urutan dan aturan
                  prioritas mempengaruhi kecepatan serta tingkat kesalahan.
                </p>
              </>
            ),
          },
          {
            title: 'Stock opname',
            children: (
              <>
                <p>
                  Opname membandingkan fisik dengan sistem. WMS yang baik
                  mendukung siklus opname per area, bukan hanya hitung total
                  tahunan yang sulit ditindaklanjuti.
                </p>
              </>
            ),
          },
          {
            title: 'Multi-warehouse',
            children: (
              <>
                <p>
                  Multi gudang menambah kompleksitas: transfer antar lokasi,
                  visibilitas stok per site, dan aturan fulfillment. Sistem
                  harus jelas membedakan stok yang tersedia di masing-masing
                  gudang.
                </p>
              </>
            ),
          },
          {
            title: 'Barcode dan QR',
            children: (
              <>
                <p>
                  Barcode atau QR membantu mengidentifikasi SKU dan lokasi
                  dengan lebih cepat. Ini konsep integrasi perangkat/pemindaian —
                  bukan klaim hardware proprietary tertentu.
                </p>
              </>
            ),
          },
          {
            title: 'Dashboard dan integrasi',
            children: (
              <>
                <p>
                  Dashboard menampilkan backlog receiving, akurasi, atau order
                  menunggu pick. Integrasi ke ERP, sales, atau procurement
                  menjaga angka stok selaras dengan proses bisnis — konteks ERP
                  ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-erp'>
                    apa itu ERP
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kapan WMS dibutuhkan',
            children: (
              <>
                <p>
                  WMS relevan ketika volume pergerakan tinggi, lokasi banyak,
                  atau kesalahan pick/selisih stok sudah mengganggu operasional.
                  Untuk pencatatan quantity sederhana, inventory system yang
                  lebih ringkas mungkin cukup.
                </p>
                <p>
                  Pendekatan pengerjaan sistem gudang dan inventory dijelaskan
                  di{' '}
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
        commercialCtaTitle='Operasional gudang mulai sulit dilacak?'
        commercialCtaDescription='Halaman WMS/inventory membahas receiving, lokasi, pergerakan, dan multi-gudang tanpa mengklaim perangkat scanner tertentu.'
        commercialCtaLabel='Lihat solusi WMS / inventory'
      />
    </>
  );
}

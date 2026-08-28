import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/wms-inventory';

const title = 'Jasa Pembuatan WMS & Inventory System Custom | Kognifx';
const description =
  'Kognifx membangun WMS dan inventory system custom untuk stok, gudang, pergerakan barang, multi-warehouse, stock opname, dashboard, dan integrasi operasional.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function WmsInventoryPage() {
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
        breadcrumbLabel='WMS / Inventory'
        eyebrow='Solusi'
        h1='Jasa Pembuatan WMS & Inventory System Custom'
        intro={
          <>
            Stok yang tidak akurat membuat pembelian, penjualan, dan pengiriman
            berjalan dengan tebakan. Kognifx merancang{' '}
            <strong className='font-medium text-foreground'>
              WMS dan inventory system custom
            </strong>{' '}
            untuk pergerakan barang, visibilitas gudang, dan pencatatan stok
            sesuai operasional lapangan — bukan sekadar daftar barang di
            spreadsheet.
          </>
        }
        sections={[
          {
            title: 'Ketika angka stok tidak bisa dipercaya',
            children: (
              <>
                <p>
                  Masalah gudang biasanya konkret: stok sistem berbeda dengan
                  fisik, barang masuk belum tercatat, lokasi simpan tidak jelas,
                  atau stock opname memakan waktu karena data tersebar.
                </p>
                <p>
                  Inventory sederhana cukup untuk katalog dan saldo. WMS
                  menjadi relevan ketika ada receiving, putaway, picking,
                  transfer antar lokasi, dan pengiriman yang harus ditelusuri.
                </p>
              </>
            ),
          },
          {
            title: 'Alur gudang: masuk, pindah, keluar',
            children: (
              <>
                <p>
                  Sistem dapat dirancang untuk penerimaan barang, pergerakan
                  antar rak atau gudang, picking, dan dispatch. Multi-warehouse
                  berguna jika stok tersebar di beberapa lokasi dan perlu
                  dilihat secara terpisah maupun terpusat.
                </p>
                <p>
                  Stock opname, role operator/supervisor, dan approval
                  penyesuaian stok dapat dimasukkan bila prosesnya sudah ada.
                  Barcode atau QR adalah opsi integrasi perangkat, bukan
                  hardware proprietary Kognifx.
                </p>
              </>
            ),
          },
          {
            title: 'Dashboard, alert, dan integrasi operasional',
            children: (
              <>
                <p>
                  Dashboard stok, pergerakan, dan selisih opname membantu tim
                  melihat kondisi gudang tanpa menunggu rekap manual. Alert
                  untuk stok minimum atau pergerakan tidak wajar ditambahkan
                  sesuai kebijakan operasional.
                </p>
                <p>
                  WMS sering perlu terhubung ke ERP, POS, marketplace, atau
                  procurement. Untuk koneksi antar sistem, lihat{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </SolutionInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'WMS, inventory sederhana, dan ERP',
            children: (
              <>
                <p>
                  Tidak setiap bisnis membutuhkan WMS penuh. Beberapa cukup
                  dengan inventory yang mencatat saldo dan mutasi. Custom
                  diperlukan ketika alur gudang, satuan, batch, atau aturan
                  lokasi tidak muat di template generik.
                </p>
                <p>
                  Inventory sebagai modul di{' '}
                  <SolutionInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </SolutionInlineLink>{' '}
                  tetap milik halaman ERP. Halaman ini membahas kedalaman
                  operasional gudang dan stok. Aplikasi pendukung di luar WMS
                  dapat dibahas di{' '}
                  <SolutionInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </SolutionInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        capabilityTags={[
          'Receiving & Dispatch',
          'Stock Movement',
          'Multi Warehouse',
          'Stock Opname',
          'Inventory Dashboard',
          'Barcode / QR Integration',
        ]}
        relatedSolutions={[
          {
            label: 'ERP Custom',
            href: '/id/solusi/erp-custom',
            description:
              'Ketika stok perlu terhubung ke penjualan, procurement, dan finance.',
          },
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description:
              'Portal atau aplikasi operasional di sekitar proses gudang.',
          },
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'Menghubungkan WMS dengan ERP, POS, marketplace, atau procurement.',
          },
        ]}
        relatedInsights={[
          {
            label: 'Apa Itu WMS?',
            href: '/id/insight/apa-itu-wms',
            description:
              'Warehouse management system: receiving, lokasi, picking, dan multi-gudang.',
          },
          {
            label: 'WMS vs Inventory Management System',
            href: '/id/insight/wms-vs-inventory-management-system',
            description:
              'Perbedaan fokus quantity vs operasional gudang, dan kapan masing-masing cukup.',
          },
        ]}
        ctaTitle='Stok dan gudang masih sulit dilacak?'
        ctaDescription='Ceritakan alur barang masuk–keluar, jumlah lokasi, dan di mana selisih stok paling sering muncul. Kami bantu menilai apakah inventory sederhana atau WMS yang lebih sesuai.'
        ctaLabel='Konsultasikan Sistem Gudang & Inventory Anda'
      />
    </>
  );
}

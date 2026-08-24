import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/ecommerce-marketplace';

const title = 'Jasa Pembuatan E-Commerce & Marketplace Custom | Kognifx';
const description =
  'Kognifx membangun e-commerce dan marketplace custom untuk kebutuhan B2B, B2C, multi-vendor, katalog, transaksi, workflow, dan integrasi bisnis.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function EcommerceMarketplacePage() {
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
        breadcrumbLabel='E-Commerce / Marketplace'
        eyebrow='Solusi'
        h1='Jasa Pembuatan E-Commerce & Marketplace Custom'
        intro={
          <>
            Template toko online sering cukup untuk katalog sederhana. Ketika
            harga, persetujuan, vendor, atau alur order sudah spesifik,
            perusahaan membutuhkan{' '}
            <strong className='font-medium text-foreground'>
              e-commerce atau marketplace custom
            </strong>{' '}
            yang mengikuti proses jual-beli — bukan sebaliknya.
          </>
        }
        sections={[
          {
            title: 'Kapan template storefront tidak lagi cukup',
            children: (
              <>
                <p>
                  Storefront generik biasanya mengasumsikan checkout B2C yang
                  seragam. Bisnis B2B sering butuh harga bertingkat, kuota,
                  approval pembelian, atau katalog yang berbeda per akun.
                  Marketplace menambah peran vendor, komisi, dan moderasi.
                </p>
                <p>
                  Custom menjadi relevan ketika alur order, aturan katalog, atau
                  pembagian peran tidak bisa dipaksakan ke tema siap pakai.
                </p>
              </>
            ),
          },
          {
            title: 'B2B, B2C, dan multi-vendor dalam satu klaster',
            children: (
              <>
                <p>
                  B2C menekankan katalog, keranjang, dan pembayaran. B2B
                  menekankan akun perusahaan, negosiasi atau harga khusus, dan
                  proses persetujuan. Marketplace menambahkan onboarding vendor,
                  etalase terpisah, dan aturan settlement — sesuai model bisnis
                  yang dipilih.
                </p>
                <p>
                  Tidak setiap proyek membutuhkan seluruh model itu. Lingkup
                  ditentukan dari siapa yang menjual, siapa yang membeli, dan
                  siapa yang mengoperasikan platform.
                </p>
              </>
            ),
          },
          {
            title: 'Katalog, order, peran, dan integrasi',
            children: (
              <>
                <p>
                  Sistem dapat mencakup katalog produk, alur checkout atau
                  purchase order, peran admin/customer/vendor, dan panel
                  operasional. Integrasi pembayaran atau pengiriman dibahas
                  sebagai contoh kemampuan — bukan kemitraan atau sertifikasi
                  PCI.
                </p>
                <p>
                  Order sering perlu terhubung ke stok. Lihat{' '}
                  <SolutionInlineLink href='/id/solusi/wms-inventory'>
                    WMS & inventory
                  </SolutionInlineLink>{' '}
                  untuk kedalaman gudang, dan{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </SolutionInlineLink>{' '}
                  untuk OMS, PIM, ERP, atau API pihak ketiga.
                </p>
              </>
            ),
          },
          {
            title: 'Arsitektur, otomasi, dan pertumbuhan',
            children: (
              <>
                <p>
                  Platform commerce perlu cukup fleksibel untuk katalog dan
                  order yang bertambah, tanpa menjanjikan skala atau uptime
                  tertentu di luar kesepakatan proyek. Workflow custom — misalnya
                  approval B2B atau moderasi vendor — dirancang setelah proses
                  dipahami.
                </p>
                <p>
                  Otomasi katalog, notifikasi order, atau asisten operasional
                  dapat ditambahkan bila relevan melalui{' '}
                  <SolutionInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </SolutionInlineLink>
                  . Fondasi aplikasi di luar commerce murni ada di{' '}
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
          'B2C Storefront',
          'B2B Ordering',
          'Multi-Vendor Marketplace',
          'Catalog & Orders',
          'Vendor / Admin Roles',
          'Commerce Integrations',
        ]}
        relatedSolutions={[
          {
            label: 'WMS / Inventory',
            href: '/id/solusi/wms-inventory',
            description:
              'Ketika order online harus sinkron dengan stok dan gudang.',
          },
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'Menghubungkan commerce dengan ERP, pembayaran, atau logistik.',
          },
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description:
              'Portal atau aplikasi di sekitar proses jual-beli.',
          },
          {
            label: 'AI Automation',
            href: '/id/solusi/ai-automation',
            description:
              'Notifikasi, klasifikasi order, atau otomasi operasional toko.',
          },
        ]}
        ctaTitle='Butuh platform jual-beli yang mengikuti proses bisnis?'
        ctaDescription='Ceritakan model B2B, B2C, atau multi-vendor yang ingin dijalankan, plus aturan katalog dan order yang tidak muat di template. Kami bantu menilai lingkup yang realistis.'
        ctaLabel='Diskusikan Platform Commerce Anda'
      />
    </>
  );
}

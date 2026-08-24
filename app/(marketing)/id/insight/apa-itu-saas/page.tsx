import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-saas')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuSaasPage() {
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
            SaaS (Software as a Service) adalah model di mana software
            diakses sebagai layanan berlangganan, biasanya lewat internet,
            tanpa instalasi lokal sebagai cara utama. Artikel ini menjelaskan
            cara kerjanya, konsep multi-tenant, dan kapan model ini cocok.
          </>
        }
        sections={[
          {
            title: 'Definisi SaaS',
            children: (
              <>
                <p>
                  Dalam SaaS, penyedia mengoperasikan aplikasi dan pelanggan
                  memakai fitur sesuai paket. Update dan infrastruktur
                  dikelola di sisi layanan. Ini berbeda dari lisensi on-premise
                  klasik, meskipun hybrid tetap mungkin.
                </p>
              </>
            ),
          },
          {
            title: 'Bagaimana SaaS digunakan',
            children: (
              <>
                <p>
                  Pengguna masuk lewat akun, bekerja di antarmuka web atau
                  aplikasi klien ringan, dan data tersimpan di lingkungan
                  layanan. Tim fokus pada penggunaan produk, bukan pada
                  instalasi server sehari-hari.
                </p>
              </>
            ),
          },
          {
            title: 'Konsep subscription model',
            children: (
              <>
                <p>
                  Langganan mengikat akses ke periode dan paket fitur. Billing,
                  upgrade, dan downgrade adalah bagian dari produk. Detail
                  harga bersifat bisnis — artikel ini tidak menginventaris
                  angka atau jaminan pendapatan.
                </p>
              </>
            ),
          },
          {
            title: 'Multi-tenant versus single-tenant',
            children: (
              <>
                <p>
                  Multi-tenant membagi satu aplikasi untuk banyak pelanggan
                  dengan isolasi data. Single-tenant memberi lingkungan lebih
                  terpisah per pelanggan. Pilihan memengaruhi biaya operasi,
                  kustomisasi, dan kompleksitas arsitektur — tanpa jaminan
                  uptime tertentu di sini.
                </p>
              </>
            ),
          },
          {
            title: 'Roles dan accounts',
            children: (
              <>
                <p>
                  Akun organisasi, pengguna, dan peran (admin, member, viewer)
                  menentukan siapa melihat apa. Desain permission yang buruk
                  menjadi risiko langsung di produk multi-tenant.
                </p>
              </>
            ),
          },
          {
            title: 'Admin dan control panel',
            children: (
              <>
                <p>
                  Panel admin mengelola pengguna, paket, dan konfigurasi tenant.
                  Semakin banyak self-serve, semakin sedikit beban operasional
                  manual — asalkan batasan keamanan jelas.
                </p>
              </>
            ),
          },
          {
            title: 'Integrations dan API',
            children: (
              <>
                <p>
                  Produk SaaS sering mengekspos API agar pelanggan menghubungkan
                  sistem mereka. Manfaat pola API dibahas di{' '}
                  <InsightInlineLink href='/id/insight/manfaat-integrasi-api'>
                    manfaat integrasi API
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Manfaat dan trade-off',
            children: (
              <>
                <p>
                  Manfaat umum: onboarding lebih cepat, update terpusat, dan
                  model biaya yang bisa diprediksi per periode. Trade-off:
                  ketergantungan pada penyedia, batasan kustomisasi, dan
                  kebutuhan evaluasi keamanan/data sesuai konteks bisnis Anda.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan model SaaS tepat',
            children: (
              <>
                <p>
                  Cocok jika banyak pelanggan butuh pengalaman serupa, update
                  sering, dan skala operasional ingin digeser ke produk
                  berlangganan. Kurang pas jika setiap klien butuh fork proses
                  yang sangat berbeda tanpa strategi konfigurasi.
                </p>
              </>
            ),
          },
          {
            title: 'SaaS sebagai produk versus software internal',
            children: (
              <>
                <p>
                  Membangun SaaS berarti Anda menjual software ke banyak
                  pelanggan. Membangun software internal berarti mendukung
                  operasi sendiri. Keduanya bisa “custom”, tetapi arsitektur
                  dan roadmap-nya berbeda — lihat juga{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-software-custom'>
                    software custom
                  </InsightInlineLink>{' '}
                  dan{' '}
                  <InsightInlineLink href='/id/insight/saas-custom-vs-platform-siap-pakai'>
                    SaaS custom vs platform siap pakai
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan pengerjaan platform berlangganan dijelaskan di{' '}
                  <InsightInlineLink href='/id/solusi/saas-platform'>
                    solusi SaaS platform
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/saas-platform'
        commercialCtaTitle='Merancang produk berlangganan multi-tenant?'
        commercialCtaDescription='Halaman SaaS membahas akun, peran, subscription workflow, dan arsitektur produk — tanpa janji skala atau uptime di luar kesepakatan proyek.'
        commercialCtaLabel='Lihat solusi SaaS platform'
      />
    </>
  );
}

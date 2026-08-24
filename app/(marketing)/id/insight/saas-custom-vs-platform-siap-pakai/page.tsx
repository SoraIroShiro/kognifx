import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/saas-custom-vs-platform-siap-pakai'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function SaasCustomVsPlatformPage() {
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
            “Platform siap pakai” di sini berarti memakai software atau builder
            yang sudah ada untuk menjalankan layanan. “SaaS custom” berarti
            membangun produk berlangganan dengan model data, multi-tenant, dan
            workflow yang Anda kendalikan. Pilihannya mengikuti model bisnis —
            bukan tren label.
          </>
        }
        sections={[
          {
            title: 'Membangun produk SaaS versus memakai software jadi',
            children: (
              <>
                <p>
                  Memakai software jadi cocok jika Anda adalah pengguna layanan.
                  Membangun SaaS cocok jika Anda menjual akses produk ke
                  pelanggan lain. Mencampur keduanya tanpa kejelasan — misalnya
                  white-label terbatas vs produk sendiri — sering menimbulkan
                  utang arsitektur.
                </p>
              </>
            ),
          },
          {
            title: 'Kesesuaian model bisnis',
            children: (
              <>
                <p>
                  Tanyakan siapa yang membayar, apa unit langganannya, dan
                  seberapa unik proposisi nilai Anda. Jika diferensiasi ada di
                  proses inti, template generik cepat terasa sempit.
                </p>
              </>
            ),
          },
          {
            title: 'Kebutuhan multi-tenant',
            children: (
              <>
                <p>
                  Isolasi data antar pelanggan, onboarding tenant, dan batasan
                  resource adalah keputusan desain. Custom memberi ruang
                  merancang isolasi sesuai risiko; platform jadi menawarkan
                  pola yang sudah ada dengan batasan vendor.
                </p>
              </>
            ),
          },
          {
            title: 'Roles dan permissions',
            children: (
              <>
                <p>
                  Produk B2B sering butuh hierarki akun yang rumit. Jika
                  matriks izin tidak muat di builder, custom atau ekstensi
                  mendalam biasanya diperlukan.
                </p>
              </>
            ),
          },
          {
            title: 'Subscription workflow',
            children: (
              <>
                <p>
                  Trial, upgrade, invoice, dan suspension harus selaras dengan
                  akses fitur. Ini workflow produk — bukan jaminan metrik
                  pertumbuhan. Pengertian model SaaS ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-saas'>
                    apa itu SaaS
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi',
            children: (
              <>
                <p>
                  API ke identity, pembayaran, atau sistem pelanggan sering jadi
                  pembeda. Custom memudahkan kontrak API yang stabil; platform
                  jadi bergantung pada ekstensi yang tersedia. Lihat juga{' '}
                  <InsightInlineLink href='/id/insight/manfaat-integrasi-api'>
                    manfaat integrasi API
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kontrol produk',
            children: (
              <>
                <p>
                  Custom menguasai roadmap fitur dan model data. Platform jadi
                  menghemat waktu awal tetapi membatasi diferensiasi jangka
                  panjang. Tidak ada jawaban tunggal tanpa konteks kompetitif.
                </p>
              </>
            ),
          },
          {
            title: 'Maintenance dan evolusi',
            children: (
              <>
                <p>
                  Membangun SaaS berarti menanggung observasi, keamanan, dan
                  migrasi versi. Memakai platform jadi menggeser sebagian beban
                  itu ke vendor, dengan trade-off ketergantungan.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan platform siap pakai cukup',
            children: (
              <>
                <p>
                  Cukup untuk validasi awal, internal tool ringan, atau ketika
                  diferensiasi tidak ada di lapisan platform. Jangan memaksa
                  custom hanya karena terdengar “lebih enterprise”.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan pengembangan custom beralasan',
            children: (
              <>
                <p>
                  Beralasan jika multi-tenant, permission, atau integrasi adalah
                  inti proposisi, dan template memaksa kompromi yang merusak
                  produk. Mulai dari thin slice yang bisa dioperasikan, bukan
                  dari daftar fitur tak terbatas.
                </p>
                <p>
                  Pendekatan pengerjaan dijelaskan di{' '}
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
        commercialCtaTitle='Perlu arsitektur produk SaaS yang dikendalikan sendiri?'
        commercialCtaDescription='Halaman solusi membahas multi-tenant, peran, dan subscription workflow tanpa menjanjikan skala, uptime, atau outcome pendapatan.'
        commercialCtaLabel='Lihat solusi SaaS platform'
      />
    </>
  );
}

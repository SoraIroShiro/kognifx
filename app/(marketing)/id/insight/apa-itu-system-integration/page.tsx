import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/apa-itu-system-integration'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuSystemIntegrationPage() {
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
            System integration adalah cara menghubungkan aplikasi, data, dan
            workflow agar informasi bergerak tanpa disalin manual. Tujuannya
            mengurangi titik putus antar sistem — bukan mengganti semua
            software sekaligus.
          </>
        }
        sections={[
          {
            title: 'Definisi',
            children: (
              <>
                <p>
                  Integrasi sistem (integrasi aplikasi / software integration)
                  membuat dua atau lebih sistem saling bertukar data atau
                  memicu proses. Bentuknya bisa API, middleware, sinkronisasi
                  batch, atau event.
                </p>
              </>
            ),
          },
          {
            title: 'Mengapa sistem terputus menimbulkan gesekan',
            children: (
              <>
                <p>
                  Tim menyalin nomor order ke spreadsheet, lalu ke finance,
                  lalu ke gudang. Setiap salinan berpeluang salah. Laporan
                  terlambat karena sumbernya tidak sama. Integrasi menargetkan
                  gesekan itu.
                </p>
              </>
            ),
          },
          {
            title: 'Pola integrasi yang umum',
            children: (
              <>
                <p>
                  Pola umum: point-to-point API, middleware sebagai perantara,
                  sinkronisasi data berkala, dan webhook/event untuk perubahan
                  yang perlu segera diketahui sistem lain. Pilihan tergantung
                  volume, latensi, dan kemampuan sistem sumber.
                </p>
              </>
            ),
          },
          {
            title: 'API, middleware, dan sinkronisasi data',
            children: (
              <>
                <p>
                  API mengekspos fungsi dan data secara terkontrak. Middleware
                  berguna jika banyak sistem harus berbicara tanpa setiap
                  pasangan punya koneksi sendiri. Sync data menjaga master
                  atau transaksi tetap selaras, dengan aturan konflik yang
                  harus disepakati.
                </p>
                <p>
                  Manfaat API secara lebih fokus ada di{' '}
                  <InsightInlineLink href='/id/insight/manfaat-integrasi-api'>
                    manfaat integrasi API
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Legacy, monitoring, dan error handling',
            children: (
              <>
                <p>
                  Sistem lama mungkin tidak punya API modern. Integrasi tetap
                  mungkin lewat file, database, atau adapter — dengan risiko
                  yang harus disadari. Monitoring dan penanganan error penting
                  agar kegagalan sync tidak diam-diam menumpuk.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi versus rebuild',
            children: (
              <>
                <p>
                  Integrasi tepat jika sistem inti masih layak dipakai.
                  Rebuild atau{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-software-custom'>
                    software custom
                  </InsightInlineLink>{' '}
                  dipertimbangkan jika model data sudah tidak tertolong.
                  Keputusan itu harus berdasarkan proses dan data, bukan
                  asumsi bahwa “satu sistem baru menyelesaikan semua”.
                </p>
                <p>
                  Pendekatan pengerjaan koneksi antar aplikasi dijelaskan di{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    jasa integrasi sistem
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/integrasi-sistem'
        commercialCtaTitle='Aplikasi perusahaan belum saling bicara?'
        commercialCtaDescription='Halaman integrasi sistem membahas API, data, dan workflow antar aplikasi — termasuk kapan integrasi lebih masuk akal daripada membangun ulang.'
        commercialCtaLabel='Lihat solusi integrasi sistem'
      />
    </>
  );
}

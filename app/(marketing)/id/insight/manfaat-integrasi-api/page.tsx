import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/manfaat-integrasi-api')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ManfaatIntegrasiApiPage() {
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
            Integrasi API memungkinkan aplikasi saling meminta data atau
            memicu proses tanpa input manual berulang. Manfaatnya konkret:
            data lebih selaras, workflow lebih rapi, dan sistem pihak ketiga
            bisa masuk ke operasional tanpa menyalin file setiap hari.
          </>
        }
        sections={[
          {
            title: 'Arti integrasi API',
            children: (
              <>
                <p>
                  API (application programming interface) adalah kontrak
                  teknis: permintaan, otorisasi, dan format data. Integrasi
                  API berarti sistem memakai kontrak itu untuk membaca atau
                  menulis informasi secara terprogram.
                </p>
              </>
            ),
          },
          {
            title: 'Mengurangi entri ganda dan menyelaraskan data',
            children: (
              <>
                <p>
                  Ketika pesanan, pelanggan, atau stok diketik ulang di dua
                  tempat, selisih hampir pasti muncul. API sync — real-time
                  atau berkala — mengurangi pekerjaan itu, asalkan ada aturan
                  sistem mana yang menjadi sumber kebenaran.
                </p>
              </>
            ),
          },
          {
            title: 'Otomasi proses dan koneksi SaaS atau sistem internal',
            children: (
              <>
                <p>
                  Event dari satu aplikasi bisa memicu langkah di aplikasi
                  lain: status baru, notifikasi, atau pembuatan dokumen.
                  Itu berlaku untuk SaaS maupun sistem internal, selama
                  kredensial dan batas pemanggilan dikelola.
                </p>
                <p>
                  Otomasi yang memakai API sebagai tulang punggung sering
                  bertemu dengan{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-ai-automation'>
                    AI automation
                  </InsightInlineLink>
                  , tetapi API sendiri bernilai meski tanpa model AI.
                </p>
              </>
            ),
          },
          {
            title: 'Layanan pihak ketiga, keandalan, dan keamanan',
            children: (
              <>
                <p>
                  Payment, logistik, atau identitas sering diakses lewat API
                  pihak ketiga. Keandalan butuh penanganan error, retry yang
                  aman, dan log. Keamanan mencakup autentikasi, hak akses
                  minimum, dan perlindungan data sensitif — tingkat
                  kontrolnya disesuaikan risiko, bukan checklist generik.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan custom API atau middleware diperlukan',
            children: (
              <>
                <p>
                  Custom API atau middleware masuk ketika banyak sistem harus
                  berbicara, format data tidak cocok, atau logic transformasi
                  terlalu rumit untuk diulang di setiap koneksi. Konteks lebih
                  luas ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-system-integration'>
                    apa itu system integration
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Jika Anda menimbang pekerjaan menghubungkan aplikasi dan
                  data perusahaan, lihat{' '}
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
        commercialCtaTitle='Perlu API yang menghubungkan sistem existing?'
        commercialCtaDescription='Halaman integrasi sistem menjelaskan pendekatan API, sinkronisasi data, dan workflow antar aplikasi tanpa mengklaim kemitraan vendor tertentu.'
        commercialCtaLabel='Lihat solusi integrasi sistem'
      />
    </>
  );
}

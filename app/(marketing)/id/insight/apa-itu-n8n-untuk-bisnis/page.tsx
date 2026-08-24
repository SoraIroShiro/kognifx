import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-n8n-untuk-bisnis')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuN8nPage() {
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
            n8n adalah platform workflow automation sumber terbuka untuk
            menghubungkan aplikasi, API, dan langkah pemrosesan data. Kognifx
            tidak memiliki n8n; artikel ini menjelaskan perannya sebagai tool
            orkestrasi yang sering dipakai dalam otomasi bisnis.
          </>
        }
        sections={[
          {
            title: 'Apa itu n8n',
            children: (
              <>
                <p>
                  n8n menempatkan logika otomasi sebagai workflow visual:
                  rangkaian node yang memicu, mengubah, dan mengirim data ke
                  sistem lain. Ia dipakai untuk menghubungkan SaaS, database,
                  webhook, dan layanan internal tanpa harus menulis seluruh
                  orkestrasi dari nol.
                </p>
              </>
            ),
          },
          {
            title: 'Konsep workflow dan node',
            children: (
              <>
                <p>
                  Setiap node biasanya mewakili satu aksi: baca spreadsheet,
                  panggil API, cabangkan logika, atau tunggu event. Workflow
                  berjalan karena pemicu — jadwal, webhook, atau perubahan
                  data — lalu mengeksekusi langkah berurutan.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi aplikasi dan API',
            children: (
              <>
                <p>
                  Nilai n8n muncul ketika banyak sistem harus berbicara:
                  form ke CRM, notifikasi ke chat, atau status order ke
                  spreadsheet. Integrasi tetap bergantung pada kualitas API
                  dan kredensial yang dikelola dengan hati-hati.
                </p>
              </>
            ),
          },
          {
            title: 'Self-hosted, secara garis besar',
            children: (
              <>
                <p>
                  n8n dapat dijalankan di infrastruktur sendiri. Itu memberi
                  kontrol lebih pada data dan jaringan, sekaligus
                  tanggung jawab operasional: update, backup, akses, dan
                  monitoring. Pilihan cloud versus self-hosted adalah keputusan
                  arsitektur, bukan soal merek.
                </p>
              </>
            ),
          },
          {
            title: 'Contoh otomasi bisnis dan AI workflow',
            children: (
              <>
                <p>
                  Contoh generik: meneruskan lead dari form ke sistem internal,
                  merapikan notifikasi operasional, atau memanggil model untuk
                  ringkasan sebelum manusia meninjau. n8n dapat menjadi
                  orkestrator bagi langkah AI, tetapi model dan kebijakan data
                  tetap harus dirancang terpisah.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan n8n cocok, dan kapan custom masih perlu',
            children: (
              <>
                <p>
                  n8n cocok untuk orkestrasi yang berubah relatif cepat dan
                  melibatkan banyak konektor. Ia kurang pas sebagai pengganti
                  sistem operasional inti dengan aturan bisnis berat, UI
                  kompleks, atau volume transaksi yang membutuhkan kontrak
                  layanan khusus.
                </p>
                <p>
                  Integrasi yang sangat kustom, legacy tanpa API, atau
                  kebutuhan audit yang ketat sering tetap membutuhkan{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    pekerjaan integrasi sistem
                  </InsightInlineLink>{' '}
                  atau software khusus.
                </p>
              </>
            ),
          },
          {
            title: 'Kredensial dan keamanan, secara ringkas',
            children: (
              <>
                <p>
                  Workflow menyimpan akses ke sistem lain. Praktik yang wajar:
                  batasi token, pisahkan lingkungan, audit siapa yang boleh
                  mengubah alur, dan jangan menaruh rahasia di tempat yang
                  mudah bocor. Detail kontrol harus disesuaikan dengan risiko
                  data organisasi.
                </p>
                <p>
                  n8n sering muncul dalam rancangan{' '}
                  <InsightInlineLink href='/id/solusi/ai-automation'>
                    otomasi workflow
                  </InsightInlineLink>
                  {' '}sebagai salah satu opsi orkestrasi, bukan sebagai produk
                  Kognifx.
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/ai-automation'
        commercialCtaTitle='Mengevaluasi otomasi dengan n8n atau pendekatan lain?'
        commercialCtaDescription='Halaman AI automation membahas orkestrasi workflow, agent, dan integrasi. n8n adalah salah satu tool yang dapat dipakai — tergantung arsitektur, bukan keharusan.'
        commercialCtaLabel='Lihat solusi AI & automation'
      />
    </>
  );
}

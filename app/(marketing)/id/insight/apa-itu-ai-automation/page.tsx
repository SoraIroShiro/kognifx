import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-ai-automation')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuAiAutomationPage() {
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
            AI automation adalah penggunaan kecerdasan buatan untuk membantu
            menjalankan, menyaring, atau memutuskan langkah dalam workflow
            bisnis — bukan sekadar memindahkan data secara kaku dari satu
            kolom ke kolom lain. Artikel ini membedakannya dari otomasi biasa
            dan menandai kapan pendekatan ini masuk akal.
          </>
        }
        sections={[
          {
            title: 'Definisi',
            children: (
              <>
                <p>
                  Automation klasik mengikuti aturan yang ditulis eksplisit:
                  jika status X, kirim email Y. AI automation menambah
                  kemampuan menafsirkan input yang tidak selalu terstruktur —
                  teks, dokumen, atau pola — lalu mengusulkan atau mengeksekusi
                  langkah berikutnya.
                </p>
                <p>
                  Istilah terkait meliputi intelligent automation, workflow
                  automation, dan otomatisasi proses bisnis. Intinya sama:
                  mengurangi kerja manual yang berulang, dengan kontrol yang
                  masih bisa diaudit.
                </p>
              </>
            ),
          },
          {
            title: 'Automation biasa versus AI automation',
            children: (
              <>
                <p>
                  Automation biasa unggul pada proses deterministik: salin
                  field, jadwalkan reminder, sinkronkan status. AI automation
                  berguna ketika ada ambiguitas: klasifikasi tiket, ringkasan
                  dokumen, atau prioritas yang bergantung pada konteks.
                </p>
                <p>
                  Keduanya sering dipakai bersama. Aturan tetap menjaga
                  konsistensi; model membantu bagian yang sulit dibuatkan
                  aturan lengkap.
                </p>
              </>
            ),
          },
          {
            title: 'Komponen umum',
            children: (
              <>
                <p>
                  Komponen tipikal: pemicu (form, email, jadwal, webhook),
                  orkestrasi workflow, koneksi API, penyimpanan konteks, dan
                  titik persetujuan manusia. Model bahasa atau klasifikasi
                  hanya satu bagian — tanpa data dan integrasi, otomatisasi
                  tidak sampai ke operasional.
                </p>
              </>
            ),
          },
          {
            title: 'Contoh workflow bisnis',
            children: (
              <>
                <p>
                  Contoh generik: mengekstrak data dari invoice untuk dicek
                  staf finance, merapikan permintaan internal sebelum masuk
                  antrean, atau menyiapkan draf balasan berdasarkan riwayat
                  tiket. Nilai muncul jika langkah setelahnya tetap punya
                  owner.
                </p>
              </>
            ),
          },
          {
            title: 'AI assistant, AI agent, dan human-in-the-loop',
            children: (
              <>
                <p>
                  Assistant biasanya membantu manusia menyusun atau mencari
                  informasi. Agent dapat mengeksekusi rangkaian langkah dengan
                  tool. Keduanya bukan sistem magis yang boleh lepas tanpa
                  batas wewenang.
                </p>
                <p>
                  Human-in-the-loop berarti keputusan berisiko — keuangan,
                  komunikasi ke pelanggan, perubahan data master — tetap
                  melewati persetujuan. Perbedaan agent dan otomasi kaku
                  dibahas di{' '}
                  <InsightInlineLink href='/id/insight/ai-agent-vs-automation-biasa'>
                    AI agent vs automation biasa
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi data dan API',
            children: (
              <>
                <p>
                  AI automation hanya berguna jika terhubung ke sistem nyata.
                  Tanpa API, database, atau file yang andal, yang tertinggal
                  hanyalah demo. Lihat juga{' '}
                  <InsightInlineLink href='/id/insight/manfaat-integrasi-api'>
                    manfaat integrasi API
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Risiko, batasan, dan kapan ini masuk akal',
            children: (
              <>
                <p>
                  Risiko meliputi kesalahan model, data sensitif yang tidak
                  seharusnya keluar konteks, dan otomatisasi yang sulit
                  dilacak. Batasan lain: proses yang belum standar akan
                  menghasilkan otomasi yang rapuh.
                </p>
                <p>
                  Pendekatan ini masuk akal jika volume pekerjaan berulang
                  cukup tinggi, data bisa diakses dengan aman, dan ada metrik
                  operasional yang ingin diperbaiki — bukan karena “harus pakai
                  AI”. Untuk layanan yang merancang workflow tersebut, lihat{' '}
                  <InsightInlineLink href='/id/solusi/ai-automation'>
                    AI automation untuk bisnis
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/ai-automation'
        commercialCtaTitle='Punya proses berulang yang ingin dievaluasi?'
        commercialCtaDescription='Halaman solusi AI & automation menjelaskan bagaimana workflow, agent, dan integrasi dapat dirancang dengan titik kontrol manusia.'
        commercialCtaLabel='Lihat solusi AI & automation'
      />
    </>
  );
}

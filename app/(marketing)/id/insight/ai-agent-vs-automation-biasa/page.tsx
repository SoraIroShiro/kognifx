import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/ai-agent-vs-automation-biasa'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function AiAgentVsAutomationPage() {
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
            AI agent dan automation biasa sama-sama mengurangi kerja manual,
            tetapi cara mengambil keputusan berbeda. Automation mengikuti
            aturan yang ditulis. Agent menafsirkan konteks dan memilih
            langkah — dengan risiko dan kebutuhan pengawasan yang juga
            berbeda.
          </>
        }
        sections={[
          {
            title: 'Automation berbasis aturan',
            children: (
              <>
                <p>
                  Workflow rule-based bersifat deterministik: input yang sama
                  menghasilkan langkah yang sama. Cocok untuk sinkronisasi
                  field, notifikasi, atau cabang if/else yang sudah disepakati
                  operasional.
                </p>
                <p>
                  Kelemahannya muncul ketika kasus tidak muat di diagram:
                  bahasa bebas, dokumen beragam, atau pengecualian yang terlalu
                  banyak untuk dikodekan satu per satu.
                </p>
              </>
            ),
          },
          {
            title: 'Apa yang dimaksud AI agent',
            children: (
              <>
                <p>
                  AI agent adalah sistem yang memakai model untuk merencanakan
                  atau mengeksekusi tugas dengan bantuan tool — misalnya
                  mencari data, memanggil API, atau menyusun draf. Agentic AI
                  menekankan kemampuan merangkai langkah, bukan hanya menjawab
                  chat.
                </p>
                <p>
                  Agent berbeda dari chatbot yang hanya membalas teks. Ia juga
                  berbeda dari assistant yang berhenti pada rekomendasi tanpa
                  mengeksekusi sistem.
                </p>
              </>
            ),
          },
          {
            title: 'Cara mengambil keputusan, data, dan tool',
            children: (
              <>
                <p>
                  Automation biasa tidak “memutuskan”; ia menjalankan cabang
                  yang sudah ada. Agent memilih tindakan berdasarkan prompt,
                  memori/konteks, dan hasil tool. Perilaku ini probabilistik:
                  output bisa bervariasi meski input mirip.
                </p>
                <p>
                  Karena itu logging, batas tool, dan data yang boleh diakses
                  menjadi bagian desain — bukan pelengkap.
                </p>
              </>
            ),
          },
          {
            title: 'Persetujuan manusia',
            children: (
              <>
                <p>
                  Semakin besar dampak tindakan — mengubah data keuangan,
                  mengirim pesan ke pelanggan, mengeksekusi pembayaran —
                  semakin penting human approval. Agent yang berguna tetap
                  bisa dibatasi pada draf, klasifikasi, atau langkah internal
                  yang mudah di-rollback.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan workflow biasa lebih tepat',
            children: (
              <>
                <p>
                  Jika proses sudah standar, volume tinggi, dan kesalahan
                  harus nol secara praktis, otomasi kaku biasanya lebih mudah
                  diaudit. Memaksa agent ke proses yang sebenarnya hanya
                  butuh if/else menambah kompleksitas tanpa manfaat.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan AI agent memberi nilai, dan pola hybrid',
            children: (
              <>
                <p>
                  Agent berguna pada pekerjaan yang butuh pemahaman teks atau
                  konteks, lalu menempel pada tool yang sudah terdefinisi.
                  Arsitektur hybrid sering paling sehat: aturan untuk jalur
                  pasti, model untuk cabang yang ambigu, manusia untuk
                  pengecualian.
                </p>
                <p>
                  Ini bukan otonomi penuh. Untuk konteks otomasi yang lebih
                  luas, baca{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-ai-automation'>
                    apa itu AI automation
                  </InsightInlineLink>
                  . Jika Anda menilai penerapan di operasional, lihat{' '}
                  <InsightInlineLink href='/id/solusi/ai-automation'>
                    solusi AI & automation
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/ai-automation'
        commercialCtaTitle='Membandingkan agent dan workflow untuk kasus nyata?'
        commercialCtaDescription='Kognifx merancang automation dengan batas wewenang dan titik review. Halaman solusi merangkum pendekatan tanpa mengklaim sistem yang sepenuhnya otonom.'
        commercialCtaLabel='Lihat solusi AI & automation'
      />
    </>
  );
}

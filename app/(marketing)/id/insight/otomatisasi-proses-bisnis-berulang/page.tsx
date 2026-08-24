import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/otomatisasi-proses-bisnis-berulang'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function OtomatisasiProsesBisnisBerulangPage() {
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
            Otomatisasi proses bisnis menargetkan pekerjaan berulang yang
            mengikuti pola relatif stabil — dari sync data hingga notifikasi
            dan routing dokumen. Tujuannya mengurangi gesekan operasional,
            bukan mengotomatisasi segalanya tanpa pertimbangan.
          </>
        }
        sections={[
          {
            title: 'Mengenali proses yang berulang',
            children: (
              <>
                <p>
                  Cari tugas yang sering sama, punya trigger jelas, dan
                  menghasilkan output yang bisa dicek. Proses yang selalu
                  “kasus khusus” jarang cocok diotomatisasi lebih dulu.
                </p>
              </>
            ),
          },
          {
            title: 'Workflow berbasis aturan yang stabil',
            children: (
              <>
                <p>
                  Rule-based automation unggul ketika jika-maka sudah jelas:
                  status berubah, field terisi, langkah berikutnya jalan.
                  Pengertian AI automation ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-ai-automation'>
                    apa itu AI automation
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Data entry dan sinkronisasi',
            children: (
              <>
                <p>
                  Menyalin order, kontak, atau status antar sistem adalah kandidat
                  klasik. Otomasi sync membutuhkan sumber kebenaran yang
                  disepakati.
                </p>
              </>
            ),
          },
          {
            title: 'Notifikasi',
            children: (
              <>
                <p>
                  Pemberitahuan tepat waktu mengurangi follow-up manual.
                  Desain kanal dan frekuensi agar tidak menjadi noise.
                </p>
              </>
            ),
          },
          {
            title: 'Document routing',
            children: (
              <>
                <p>
                  Dokumen yang harus sampai ke peran tertentu bisa dirutekan
                  otomatis setelah validasi dasar. Kualitas input tetap
                  menentukan kualitas output.
                </p>
              </>
            ),
          },
          {
            title: 'Approval',
            children: (
              <>
                <p>
                  Approval digital adalah bentuk otomasi proses yang sering
                  memberi dampak cepat jika bottleneck-nya jelas.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi API',
            children: (
              <>
                <p>
                  Otomasi antar aplikasi bergantung pada API atau connector.
                  Tanpa koneksi, otomasi berhenti di satu silo — lihat{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kapan AI memberi nilai',
            children: (
              <>
                <p>
                  AI relevan untuk klasifikasi, ekstraksi dokumen, atau
                  keputusan dengan variasi bahasa — bukan untuk mengganti aturan
                  yang sudah sederhana dan stabil.
                </p>
              </>
            ),
          },
          {
            title: 'Human-in-the-loop',
            children: (
              <>
                <p>
                  Banyak proses tetap butuh konfirmasi manusia pada langkah
                  berisiko. Hybrid menjaga kecepatan tanpa menyerahkan seluruh
                  keputusan ke otomasi.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan tidak perlu diotomatisasi',
            children: (
              <>
                <p>
                  Jangan otomatisasi proses yang masih berubah setiap minggu,
                  atau yang belum dipahami. Otomasi pada kekacauan hanya
                  mempercepat kekacauan.
                </p>
              </>
            ),
          },
          {
            title: 'Mengukur outcome operasional secara konseptual',
            children: (
              <>
                <p>
                  Ukur hal yang konkret: waktu siklus, jumlah entri ganda, atau
                  antrian yang tersisa — bukan persentase ROI yang dibuat-buat.
                  Tool orkestrasi seperti n8n dibahas di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-n8n-untuk-bisnis'>
                    apa itu n8n untuk bisnis
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan layanan:{' '}
                  <InsightInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/ai-automation'
        commercialCtaTitle='Punya proses berulang yang ingin dievaluasi?'
        commercialCtaDescription='Halaman AI automation membahas workflow, integrasi, dan kapan rule-based atau AI lebih masuk akal — tanpa angka ROI fiktif.'
        commercialCtaLabel='Lihat solusi AI automation'
      />
    </>
  );
}

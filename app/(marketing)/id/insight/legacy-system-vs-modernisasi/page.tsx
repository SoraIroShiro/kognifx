import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/legacy-system-vs-modernisasi'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function LegacySystemVsModernisasiPage() {
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
            “Legacy” sering terdengar negatif, padahal usia teknologi saja
            tidak membuat sistem buruk. Yang penting: apakah sistem masih
            mendukung operasional secara aman dan dapat dievolusikan. Artikel
            ini membandingkan opsi keep, integrate, modernize, dan rebuild.
          </>
        }
        sections={[
          {
            title: 'Apa yang dimaksud legacy system',
            children: (
              <>
                <p>
                  Legacy biasanya merujuk pada sistem yang sudah lama beroperasi,
                  sulit diubah, atau bergantung pada stack/pengetahuan yang
                  terbatas. Labelnya deskriptif — bukan vonis otomatis untuk
                  diganti.
                </p>
              </>
            ),
          },
          {
            title: 'Usia saja tidak membuat sistem buruk',
            children: (
              <>
                <p>
                  Sistem lama yang stabil, terdokumentasi, dan masih memenuhi
                  proses inti bisa tetap bernilai. Mengganti karena “terlihat
                  kuno” tanpa analisis risiko sering merugikan.
                </p>
              </>
            ),
          },
          {
            title: 'Tanda keterbatasan operasional atau teknis',
            children: (
              <>
                <p>
                  Sinyal: perubahan kecil memakan waktu lama, integrasi hampir
                  mustahil, pengetahuan hanya di satu orang, atau kegagalan
                  sering tanpa observability. Kumpulkan bukti, bukan asumsi.
                </p>
              </>
            ),
          },
          {
            title: 'Mempertahankan (keep as-is)',
            children: (
              <>
                <p>
                  Mempertahankan masuk akal jika risiko rendah dan biaya ganti
                  lebih besar daripada manfaat. Tetap rencanakan backup
                  pengetahuan dan monitoring dasar.
                </p>
              </>
            ),
          },
          {
            title: 'Mengintegrasikan',
            children: (
              <>
                <p>
                  Integrasi menambah jembatan ke sistem baru tanpa membongkar
                  inti. Cocok jika data dan proses inti masih sehat. Tanda
                  diagnostik:{' '}
                  <InsightInlineLink href='/id/insight/kapan-sistem-perlu-diintegrasikan'>
                    kapan sistem perlu diintegrasikan
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Refactor atau modernisasi',
            children: (
              <>
                <p>
                  Modernisasi memperbaiki bagian kritis — modul, antarmuka,
                  atau infrastruktur — sambil mempertahankan perilaku bisnis.
                  Lebih bertahap daripada big-bang replacement.
                </p>
              </>
            ),
          },
          {
            title: 'Membangun ulang (rebuild)',
            children: (
              <>
                <p>
                  Rebuild digarap ketika utang teknis dan ketidakcocokan proses
                  sudah terlalu dalam. Butuh migrasi data, paralel run, dan
                  owner bisnis yang jelas. Lihat juga{' '}
                  <InsightInlineLink href='/id/insight/kapan-bisnis-butuh-software-custom'>
                    kapan bisnis membutuhkan software custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Pertimbangan migrasi dan data',
            children: (
              <>
                <p>
                  Kualitas data lama menentukan kelancaran cutover. Pemetaan
                  field, pembersihan duplikat, dan kriteria “selesai migrasi”
                  harus disepakati sebelum go-live.
                </p>
              </>
            ),
          },
          {
            title: 'Ketergantungan dan risiko',
            children: (
              <>
                <p>
                  Petakan sistem yang bergantung pada legacy, jendela downtime
                  yang ditoleransi, dan rencana rollback. Risiko tertinggi
                  sering ada di integrasi tersembunyi yang tidak terdokumentasi.
                </p>
              </>
            ),
          },
          {
            title: 'Kerangka keputusan',
            children: (
              <>
                <p>
                  Tanyakan: apakah proses inti masih cocok, apakah integrasi
                  feasible, siapa yang bisa merawat, dan apa biaya kegagalan
                  cutover. Pilih jalur terkecil yang menyelesaikan risiko nyata.
                </p>
                <p>
                  Pendekatan pembangunan ulang atau modernisasi:{' '}
                  <InsightInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </InsightInlineLink>
                  . Jika jembatan ke sistem existing yang dibutuhkan:{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/software-custom'
        commercialCtaTitle='Menimbang nasib sistem lama perusahaan?'
        commercialCtaDescription='Halaman software custom membantu menilai modernisasi atau rebuild secara bertahap — tanpa mengklaim semua teknologi lama harus diganti.'
        commercialCtaLabel='Lihat solusi software custom'
      />
    </>
  );
}

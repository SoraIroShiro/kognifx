import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/cara-memilih-software-house'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function CaraMemilihSoftwareHousePage() {
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
            Memilih software house lebih aman jika dimulai dari kejelasan
            masalah dan cara kerja bersama — bukan dari daftar buzzword
            teknologi. Panduan ini merangkum pertanyaan evaluasi yang bisa
            dipakai untuk membandingkan partner secara adil.
          </>
        }
        sections={[
          {
            title: 'Mulai dari masalah, bukan daftar teknologi',
            children: (
              <>
                <p>
                  Partner yang baik membantu merumuskan masalah operasional
                  sebelum menawarkan stack. Jika diskusi langsung loncat ke
                  framework tanpa memahami proses, risiko salah lingkup tinggi.
                </p>
              </>
            ),
          },
          {
            title: 'Kemampuan memahami workflow bisnis',
            children: (
              <>
                <p>
                  Software bisnis gagal bukan hanya karena bug, tetapi karena
                  tidak mencerminkan cara kerja nyata. Nilai discovery: apakah
                  mereka bertanya tentang pengecualian, peran, dan data sumber
                  kebenaran?
                </p>
              </>
            ),
          },
          {
            title: 'Pengalaman teknis versus klaim yang tidak didukung',
            children: (
              <>
                <p>
                  Portofolio dan penjelasan pendekatan lebih berguna daripada
                  slogan. Minta contoh pola arsitektur atau integrasi yang
                  relevan — tanpa mengharapkan klaim “nomor satu” atau angka
                  klien yang tidak bisa diverifikasi.
                </p>
              </>
            ),
          },
          {
            title: 'Kemampuan arsitektur dan integrasi',
            children: (
              <>
                <p>
                  Banyak proyek bergantung pada sistem existing. Tanyakan
                  bagaimana mereka merancang kontrak API, penanganan error, dan
                  migrasi data. Integrasi yang lemah sering lebih mahal daripada
                  UI yang kurang sempurna.
                </p>
              </>
            ),
          },
          {
            title: 'Komunikasi dan requirement discovery',
            children: (
              <>
                <p>
                  Lihat kejelasan komunikasi: ringkasan keputusan, asumsi
                  tertulis, dan cara menangani perubahan scope. Discovery yang
                  buru-buru biasanya menghasilkan backlog yang mengembang.
                </p>
              </>
            ),
          },
          {
            title: 'Scope, milestone, testing, dan handover',
            children: (
              <>
                <p>
                  Sepakati apa yang termasuk MVP, bagaimana milestone diukur,
                  siapa melakukan UAT, dan apa yang diserahkan saat go-live.
                  Ringkasan tahapan ada di{' '}
                  <InsightInlineLink href='/id/insight/tahapan-pengembangan-software-custom'>
                    tahapan pengembangan software custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Ekspektasi maintenance dan support',
            children: (
              <>
                <p>
                  Sistem hidup setelah launch. Tanyakan respons untuk bug,
                  jendela perubahan, dan siapa yang punya akses produksi.
                  Maintenance yang tidak dibicarakan di awal sering menjadi
                  kejutan biaya.
                </p>
              </>
            ),
          },
          {
            title: 'Pertanyaan ownership, akses, dan dokumentasi',
            children: (
              <>
                <p>
                  Siapa pemilik kode dan repositori? Apakah ada dokumentasi
                  arsitektur, runbook, dan credential yang diserahkan? Akses
                  yang tertahan di vendor mempersulit exit strategy.
                </p>
              </>
            ),
          },
          {
            title: 'Red flags',
            children: (
              <>
                <p>
                  Hati-hati jika: scope tidak tertulis, tidak ada rencana
                  testing, menolak diskusi integrasi, menjanjikan hasil tanpa
                  memahami proses, atau menolak menyerahkan akses/dokumentasi.
                </p>
              </>
            ),
          },
          {
            title: 'Checklist evaluasi',
            children: (
              <>
                <p>
                  Ringkas: masalah sudah jelas? Workflow dipahami? Integrasi
                  dibahas? Milestone dan UAT ada? Maintenance dan ownership
                  disepakati? Pengertian peran software house ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-software-house'>
                    apa itu software house
                  </InsightInlineLink>
                  . Konteks pendekatan Kognifx ada di{' '}
                  <InsightInlineLink href='/id/tentang'>
                    Tentang
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Jika proyek mengarah ke pembangunan sistem sesuai proses,
                  lihat{' '}
                  <InsightInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/software-custom'
        commercialCtaTitle='Siap mendiskusikan lingkup proyek?'
        commercialCtaDescription='Gunakan checklist di atas sebagai dasar percakapan. Halaman software custom menjelaskan pendekatan pengerjaan tanpa klaim “terbaik” atau peringkat vendor.'
        commercialCtaLabel='Lihat solusi software custom'
      />
    </>
  );
}

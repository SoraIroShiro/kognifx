import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/tahapan-pengembangan-software-custom'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function TahapanPengembanganSoftwareCustomPage() {
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
            Pengembangan software custom biasanya melewati rangkaian tahapan —
            dari memahami masalah hingga merawat sistem setelah rilis. Urutan
            di bawah adalah kerangka umum; proyek nyata sering iteratif, bukan
            waterfall kaku.
          </>
        }
        sections={[
          {
            title: 'Discovery dan definisi masalah',
            children: (
              <>
                <p>
                  Discovery mengumpulkan konteks: proses saat ini, rasa sakit
                  operasional, dan outcome yang diinginkan. Tanpa langkah ini,
                  requirement mudah menjadi daftar fitur tanpa prioritas.
                </p>
              </>
            ),
          },
          {
            title: 'Requirement analysis',
            children: (
              <>
                <p>
                  Requirement memecah kebutuhan menjadi aturan bisnis, peran
                  pengguna, dan batasan. Asumsi harus tertulis agar perubahan
                  scope bisa dibahas secara sadar.
                </p>
              </>
            ),
          },
          {
            title: 'Process mapping',
            children: (
              <>
                <p>
                  Pemetaan proses menunjukkan alur aktual — termasuk
                  pengecualian. Software yang hanya mengikuti proses “ideal”
                  sering gagal di lapangan.
                </p>
              </>
            ),
          },
          {
            title: 'Architecture dan desain',
            children: (
              <>
                <p>
                  Arsitektur memilih batas modul, model data, dan cara
                  terhubung ke sistem lain. Keputusan dini di sini memengaruhi
                  biaya perubahan nanti.
                </p>
              </>
            ),
          },
          {
            title: 'UI/UX bila relevan',
            children: (
              <>
                <p>
                  Untuk sistem yang dipakai harian, alur layar dan kejelasan
                  status sama pentingnya dengan backend. Tidak semua proyek
                  butuh desain visual berat; yang penting antarmuka mendukung
                  pekerjaan.
                </p>
              </>
            ),
          },
          {
            title: 'Development',
            children: (
              <>
                <p>
                  Implementasi membangun fitur sesuai prioritas. Pendekatan
                  iteratif memungkinkan validasi dini sebelum seluruh lingkup
                  selesai.
                </p>
              </>
            ),
          },
          {
            title: 'Integration',
            children: (
              <>
                <p>
                  Integrasi menghubungkan sistem baru dengan data dan layanan
                  existing. Kontrak API, mapping data, dan penanganan gagal
                  sync perlu diuji, bukan diasumsikan.
                </p>
              </>
            ),
          },
          {
            title: 'Testing dan UAT',
            children: (
              <>
                <p>
                  Testing teknis menangkap regresi; UAT memastikan proses bisnis
                  berjalan di tangan pengguna nyata. Kriteria penerimaan harus
                  disepakati sebelum “hampir selesai”.
                </p>
              </>
            ),
          },
          {
            title: 'Deployment',
            children: (
              <>
                <p>
                  Deployment mencakup lingkungan, migrasi data, dan rencana
                  rollback. Go-live yang buru-buru tanpa checklist operasional
                  sering menghasilkan downtime yang bisa dihindari.
                </p>
              </>
            ),
          },
          {
            title: 'Dokumentasi dan handover',
            children: (
              <>
                <p>
                  Handover mencakup akses, dokumentasi, dan pengetahuan
                  operasional. Tanpa ini, organisasi bergantung pada orang
                  tunggal atau vendor tanpa exit path.
                </p>
              </>
            ),
          },
          {
            title: 'Maintenance dan evolusi',
            children: (
              <>
                <p>
                  Setelah rilis, sistem berubah mengikuti bisnis. Backlog
                  perbaikan dan peningkatan fitur adalah bagian normal —
                  bukan kegagalan proyek.
                </p>
                <p>
                  Konteks peran partner ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-software-house'>
                    apa itu software house
                  </InsightInlineLink>
                  . Tanda kapan custom dibutuhkan ada di{' '}
                  <InsightInlineLink href='/id/insight/kapan-bisnis-butuh-software-custom'>
                    kapan bisnis membutuhkan software custom
                  </InsightInlineLink>
                  . Pendekatan pengerjaan:{' '}
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
        commercialCtaTitle='Ingin menyelaraskan tahapan dengan kebutuhan proyek?'
        commercialCtaDescription='Halaman software custom membahas pendekatan membangun sistem sesuai proses — termasuk discovery dan evolusi setelah go-live.'
        commercialCtaLabel='Lihat solusi software custom'
      />
    </>
  );
}

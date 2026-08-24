import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/kapan-sistem-perlu-diintegrasikan'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function KapanSistemPerluDiintegrasikanPage() {
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
            Integrasi sistem relevan ketika aplikasi yang berbeda harus berbagi
            data atau memicu proses tanpa salin manual. Artikel ini merangkum
            tanda diagnostik — dan kapan rebuild mungkin lebih masuk akal
            daripada menyambung sistem yang sudah tidak sehat.
          </>
        }
        sections={[
          {
            title: 'Duplicate entry',
            children: (
              <>
                <p>
                  Tim memasukkan data yang sama ke dua sistem setiap hari.
                  Itu kandidat kuat untuk sync atau API — setelah sumber
                  kebenaran ditentukan.
                </p>
              </>
            ),
          },
          {
            title: 'Sistem berbeda menyimpan data terkait',
            children: (
              <>
                <p>
                  Order di satu aplikasi, stok di aplikasi lain, invoice di
                  tempat ketiga. Tanpa hubungan, rekonsiliasi jadi pekerjaan
                  penuh waktu. Konteks silo:{' '}
                  <InsightInlineLink href='/id/insight/cara-mengatasi-data-bisnis-tersebar'>
                    data bisnis yang tersebar
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Export dan import manual',
            children: (
              <>
                <p>
                  CSV mingguan antar sistem adalah integrasi tersembunyi yang
                  rapuh. Frekuensi dan risiko kesalahan biasanya naik seiring
                  volume.
                </p>
              </>
            ),
          },
          {
            title: 'Reporting lintas aplikasi',
            children: (
              <>
                <p>
                  Jika setiap laporan membutuhkan penggabungan manual dari
                  beberapa sumber, biaya tersembunyi ada di waktu dan kualitas
                  keputusan.
                </p>
              </>
            ),
          },
          {
            title: 'Sinkronisasi yang tertunda',
            children: (
              <>
                <p>
                  Data “akhirnya sama” setelah beberapa hari tetap merugikan
                  jika operasional butuh status yang lebih segar. Pilih latensi
                  yang sesuai risiko, bukan “real-time” sebagai slogan.
                </p>
              </>
            ),
          },
          {
            title: 'Otomasi terhambat sistem yang terputus',
            children: (
              <>
                <p>
                  Workflow automation sulit jalan jika trigger dan data tersebar
                  tanpa kontrak. Integrasi sering menjadi prasyarat otomasi yang
                  bermakna.
                </p>
              </>
            ),
          },
          {
            title: 'Ketersediaan API',
            children: (
              <>
                <p>
                  API yang terdokumentasi mempermudah integrasi. Tanpa API,
                  opsi file, database, atau adapter tetap mungkin — dengan risiko
                  lebih tinggi. Manfaat API:{' '}
                  <InsightInlineLink href='/id/insight/manfaat-integrasi-api'>
                    manfaat integrasi API
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Konsep middleware',
            children: (
              <>
                <p>
                  Middleware berguna ketika banyak sistem harus berbicara tanpa
                  setiap pasangan punya koneksi sendiri. Pengertian lebih luas:{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-system-integration'>
                    apa itu system integration
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kapan integrasi lebih baik daripada penggantian',
            children: (
              <>
                <p>
                  Pertahankan dan integrasikan jika inti sistem masih andal dan
                  hanya jembatan data yang hilang. Mengganti semua sekaligus
                  sering lebih berisiko daripada yang terlihat.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan replacement atau rebuild lebih tepat',
            children: (
              <>
                <p>
                  Rebuild dipertimbangkan jika model data rusak, vendor tidak
                  bisa diintegrasikan secara aman, atau biaya workarounds sudah
                  kronis. Keputusan legacy dibahas di{' '}
                  <InsightInlineLink href='/id/insight/legacy-system-vs-modernisasi'>
                    legacy system vs modernisasi
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan layanan:{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/integrasi-sistem'
        commercialCtaTitle='Aplikasi perusahaan masih bekerja terpisah?'
        commercialCtaDescription='Halaman integrasi sistem membahas API, sinkronisasi, dan workflow antar aplikasi — termasuk kapan integrasi lebih realistis daripada membangun ulang.'
        commercialCtaLabel='Lihat solusi integrasi sistem'
      />
    </>
  );
}

import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/kapan-bisnis-butuh-software-custom'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function KapanBisnisButuhSoftwareCustomPage() {
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
            Software custom bukan jawaban otomatis untuk setiap masalah
            operasional. Artikel ini merangkum tanda-tanda diagnostik kapan
            pendekatan custom mulai masuk akal — dan kapan software siap pakai
            masih cukup.
          </>
        }
        sections={[
          {
            title: 'Workflow terlalu unik untuk software standar',
            children: (
              <>
                <p>
                  Jika aturan bisnis penuh pengecualian dan template produk
                  memaksa workarounds terus-menerus, custom biasanya lebih
                  realistis daripada memaksa proses ke cetakan vendor.
                </p>
              </>
            ),
          },
          {
            title: 'Banyak workaround dan langkah manual',
            children: (
              <>
                <p>
                  Chat, spreadsheet sampingan, dan salin-tempel antar sistem
                  adalah sinyal bahwa software “utama” tidak menutup proses.
                  Semakin banyak jalur samping, semakin tinggi risiko kesalahan.
                </p>
              </>
            ),
          },
          {
            title: 'Data tersebar',
            children: (
              <>
                <p>
                  Data pelanggan, stok, atau transaksi yang hidup di banyak
                  tempat membuat keputusan lambat. Pendekatan perbaikan bisa
                  berupa sistem baru atau integrasi — lihat juga{' '}
                  <InsightInlineLink href='/id/insight/cara-mengatasi-data-bisnis-tersebar'>
                    data bisnis yang tersebar
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Duplicate entry',
            children: (
              <>
                <p>
                  Tim memasukkan data yang sama ke dua atau tiga aplikasi.
                  Selain boros waktu, inkonsistensi hampir pasti muncul.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi sulit',
            children: (
              <>
                <p>
                  Jika sistem yang ada tidak bisa saling bicara tanpa ekspor
                  manual, evaluasi integrasi dulu sebelum rebuild total — tanda
                  diagnostik ada di{' '}
                  <InsightInlineLink href='/id/insight/kapan-sistem-perlu-diintegrasikan'>
                    kapan sistem perlu diintegrasikan
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kompleksitas approval',
            children: (
              <>
                <p>
                  Persetujuan berjenjang lewat chat sulit diaudit dan mudah
                  macet. Workflow digital sering membantu sebelum Anda
                  membangun ulang seluruh sistem.
                </p>
              </>
            ),
          },
          {
            title: 'Reporting lambat',
            children: (
              <>
                <p>
                  Laporan mingguan yang disusun manual dari banyak file menandakan
                  model data belum mendukung keputusan. Custom atau ERP relevan
                  jika laporan itu kritis dan sering.
                </p>
              </>
            ),
          },
          {
            title: 'Sistem existing membatasi pertumbuhan',
            children: (
              <>
                <p>
                  Ketika volume transaksi, cabang, atau peran pengguna naik
                  tetapi sistem tidak bisa mengikuti tanpa risiko tinggi,
                  modernisasi atau custom perlu dipertimbangkan.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan software siap pakai masih cukup',
            children: (
              <>
                <p>
                  Cukup jika proses dekat standar, konfigurasi menutup
                  kebutuhan, dan integrasi yang wajib sudah tersedia. Custom
                  yang dipaksakan terlalu dini menambah biaya tanpa manfaat
                  jelas.
                </p>
              </>
            ),
          },
          {
            title: 'Checklist keputusan',
            children: (
              <>
                <p>
                  Tanyakan: proses mana yang unik, data mana yang wajib tunggal,
                  integrasi mana yang tidak bisa ditunda, dan apakah spreadsheet
                  sudah menjadi bottleneck — lihat{' '}
                  <InsightInlineLink href='/id/insight/tanda-excel-tidak-lagi-cukup'>
                    tanda Excel tidak lagi cukup
                  </InsightInlineLink>
                  . Tahapan pengerjaan:{' '}
                  <InsightInlineLink href='/id/insight/tahapan-pengembangan-software-custom'>
                    tahapan pengembangan software custom
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan layanan:{' '}
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
        commercialCtaTitle='Melihat beberapa tanda di atas pada operasional Anda?'
        commercialCtaDescription='Halaman software custom membantu menilai apakah membangun sistem sesuai proses adalah langkah yang tepat — atau apakah pendekatan lain lebih realistis.'
        commercialCtaLabel='Lihat solusi software custom'
      />
    </>
  );
}

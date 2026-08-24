import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/software-custom-vs-software-siap-pakai'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function SoftwareCustomVsReadyPage() {
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
            Pilihan antara software custom dan software siap pakai bukan soal
            mana yang “lebih modern”, melainkan mana yang lebih cocok dengan
            proses, waktu, dan kapasitas tim. Artikel ini membandingkan keduanya
            tanpa mengasumsikan satu jawaban untuk semua bisnis.
          </>
        }
        sections={[
          {
            title: 'Perbedaan dasar',
            children: (
              <>
                <p>
                  Software siap pakai (off the shelf atau SaaS generik) dijual
                  dengan proses yang sudah dibakukan. Anda menyesuaikan cara
                  kerja ke produk itu, lalu mengonfigurasi yang diizinkan
                  vendor.
                </p>
                <p>
                  Software custom dibangun dari kebutuhan organisasi. Proses,
                  data, dan pengecualian bisa masuk ke desain — dengan konsekuensi
                  waktu discovery dan pemeliharaan yang lebih besar.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan software siap pakai unggul',
            children: (
              <>
                <p>
                  Paket jadi unggul jika kebutuhan dekat dengan standar pasar:
                  akuntansi umum, email, CRM sederhana, atau kolaborasi dokumen.
                  Time-to-value biasanya lebih cepat karena tidak perlu merancang
                  dari nol.
                </p>
                <p>
                  Vendor juga menanggung sebagian pemeliharaan platform. Itu
                  menguntungkan jika tim internal tidak ingin mengelola
                  infrastruktur dan evolusi fitur dasar.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan custom lebih masuk akal',
            children: (
              <>
                <p>
                  Custom lebih masuk akal jika proses adalah keunggulan
                  operasional, bukan sesuatu yang ingin diseragamkan. Contoh:
                  alur approval berlapis, kombinasi data yang tidak ada di
                  template, atau integrasi ke sistem existing yang kaku.
                </p>
                <p>
                  Jika tim sudah “menambal” produk jadi dengan spreadsheet di
                  luar sistem, itu sinyal bahwa konfigurasi saja tidak cukup.
                </p>
              </>
            ),
          },
          {
            title: 'Fleksibilitas proses bisnis',
            children: (
              <>
                <p>
                  Produk jadi fleksibel di dalam batas modulnya. Custom
                  fleksibel di dalam batas lingkup proyek dan kualitas desain.
                  Fleksibilitas custom bukan izin untuk mengubah aturan setiap
                  minggu tanpa prioritas.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi',
            children: (
              <>
                <p>
                  Integrasi pada software jadi bergantung pada API dan
                  connector yang disediakan vendor. Custom memungkinkan
                  integrasi dirancang sesuai data yang benar-benar bergerak —
                  tetapi hanya jika sumber data dan kontrak API-nya jelas.
                </p>
              </>
            ),
          },
          {
            title: 'Biaya total versus biaya awal',
            children: (
              <>
                <p>
                  Software jadi sering tampak lebih murah di awal karena
                  berlangganan. Custom tampak lebih mahal di awal karena
                  pembangunan. Perbandingan yang adil melihat total biaya
                  kepemilikan: lisensi, workarounds, pelatihan, dan waktu
                  manual yang tersisa.
                </p>
                <p>
                  Angka pastinya berbeda per organisasi. Tidak ada kisaran
                  harga universal yang bertanggung jawab tanpa konteks lingkup.
                </p>
              </>
            ),
          },
          {
            title: 'Waktu, kontrol, dan evolusi sistem',
            children: (
              <>
                <p>
                  Produk jadi bisa live lebih cepat, tetapi roadmap fitur
                  bukan milik Anda. Custom butuh waktu implementasi, tetapi
                  prioritas perubahan bisa mengikuti operasional. Kontrol itu
                  berguna hanya jika ada owner yang memutuskan prioritas
                  dengan disiplin.
                </p>
              </>
            ),
          },
          {
            title: 'Kerangka keputusan sederhana',
            children: (
              <>
                <p>
                  Tiga pertanyaan praktis: apakah proses ini harus unik,
                  apakah workarounds sudah lebih mahal daripada sistem baru,
                  dan apakah ada owner yang akan merawat keputusan setelah
                  go-live. Jika dua dari tiga belum jelas, mulai dari paket
                  jadi atau lingkup custom yang sangat sempit sering lebih
                  aman.
                </p>
                <p>
                  Untuk definisi dasar, baca{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-software-custom'>
                    apa itu software custom
                  </InsightInlineLink>
                  . Jika Anda sudah condong membangun sistem sesuai proses
                  sendiri, lihat pendekatan{' '}
                  <InsightInlineLink href='/id/solusi/software-custom'>
                    pengembangan software custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/software-custom'
        commercialCtaTitle='Sudah menimbang build versus buy?'
        commercialCtaDescription='Halaman solusi software custom menjelaskan bagaimana Kognifx memulai dari pemetaan proses, bukan dari daftar fitur generik.'
        commercialCtaLabel='Lihat solusi software custom'
      />
    </>
  );
}

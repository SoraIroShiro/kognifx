import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-software-custom')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuSoftwareCustomPage() {
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
            Software custom adalah sistem yang dirancang mengikuti proses,
            aturan, dan data bisnis tertentu — bukan paket siap pakai yang
            memaksa tim menyesuaikan cara kerjanya. Artikel ini menjelaskan
            pengertiannya, kapan pendekatan ini masuk akal, dan kapan software
            jadi justru lebih tepat.
          </>
        }
        sections={[
          {
            title: 'Definisi software custom',
            children: (
              <>
                <p>
                  Secara sederhana, software custom adalah aplikasi atau sistem
                  yang dibangun sesuai kebutuhan organisasi. Ruang lingkupnya
                  bisa berupa portal internal, dashboard operasional, alur
                  approval, atau platform yang menghubungkan beberapa fungsi
                  bisnis.
                </p>
                <p>
                  Bedanya dengan software siap pakai: fitur, data model, dan
                  alur kerja tidak ditentukan lebih dulu oleh vendor. Tim
                  merancang sistem dari proses yang sudah ada, lalu
                  menyesuaikan antarmuka dan aturan bisnis ke situ.
                </p>
              </>
            ),
          },
          {
            title: 'Mengapa bisnis menggunakan software custom',
            children: (
              <>
                <p>
                  Alasan yang paling sering muncul adalah proses yang tidak
                  muat di template. Spreadsheet, chat, dan file bersama menjadi
                  “sistem” karena tools yang ada tidak merekam pengecualian,
                  hierarki approval, atau relasi data yang unik.
                </p>
                <p>
                  Software custom juga dipilih ketika beberapa divisi harus
                  berbagi satu sumber data, atau ketika integrasi ke sistem
                  existing lebih penting daripada fitur generik yang jarang
                  dipakai.
                </p>
              </>
            ),
          },
          {
            title: 'Contoh software custom',
            children: (
              <>
                <p>
                  Contoh yang umum: portal vendor, dashboard stok dan
                  pengiriman, sistem pengajuan internal, CMS dengan alur
                  editorial khusus, atau aplikasi operasional lapangan yang
                  mencatat status pekerjaan.
                </p>
                <p>
                  Contoh-contoh itu bukan katalog produk. Setiap organisasi
                  punya kombinasi peran, data, dan pengecualian yang berbeda.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan software custom cocok digunakan',
            children: (
              <>
                <p>
                  Pendekatan ini biasanya relevan jika proses sudah relatif
                  stabil, ada owner bisnis yang jelas, dan biaya
                  menyesuaikan orang ke software jadi lebih tinggi daripada
                  menyesuaikan software ke proses.
                </p>
                <p>
                  Jika kebutuhan masih berubah setiap minggu atau hanya
                  mencakup fungsi standar seperti email marketing, software
                  jadi sering lebih cepat diadopsi.
                </p>
              </>
            ),
          },
          {
            title: 'Kelebihan dan trade-off',
            children: (
              <>
                <p>
                  Kelebihannya: alur kerja bisa mengikuti operasional nyata,
                  integrasi dapat dirancang dari awal, dan sistem bisa
                  berkembang tanpa menunggu roadmap vendor.
                </p>
                <p>
                  Trade-offnya: butuh waktu discovery, keputusan desain, dan
                  pemeliharaan. Custom bukan berarti “semua fitur sekaligus”.
                  Lingkup yang terlalu lebar di awal justru memperlambat nilai
                  yang bisa dipakai tim.
                </p>
              </>
            ),
          },
          {
            title: 'Tahapan umum pengembangan',
            children: (
              <>
                <p>
                  Pola yang sehat biasanya: pahami masalah dan proses, susun
                  prioritas, rancang data dan antarmuka, bangun secara bertahap,
                  lalu uji di operasional nyata. Integrasi, hak akses, dan
                  laporan dimasukkan sesuai kebutuhan, bukan sebagai daftar
                  fitur yang harus lengkap di hari pertama.
                </p>
              </>
            ),
          },
          {
            title: 'Kaitan dengan integrasi, AI, dan automation',
            children: (
              <>
                <p>
                  Software custom sering menjadi “rumah” bagi data dan
                  workflow. Integrasi menyambungkan sistem lain.{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-ai-automation'>
                    AI automation
                  </InsightInlineLink>{' '}
                  baru relevan jika ada pekerjaan berulang yang cukup terstruktur
                  untuk diotomatisasi — bukan sebagai lapisan yang ditambahkan
                  karena tren.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan software siap pakai lebih masuk akal',
            children: (
              <>
                <p>
                  Jika proses Anda dekat dengan praktik umum industri, vendor
                  sudah mencakup kebutuhan inti, dan tim siap menyesuaikan cara
                  kerja, software jadi bisa lebih hemat waktu. Perbandingan
                  lebih lengkap ada di{' '}
                  <InsightInlineLink href='/id/insight/software-custom-vs-software-siap-pakai'>
                    software custom vs software siap pakai
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Jika Anda sedang menimbang pembangunan sistem sesuai proses
                  sendiri, lihat juga bagaimana Kognifx mendekati{' '}
                  <InsightInlineLink href='/id/solusi/software-custom'>
                    jasa pembuatan software custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/software-custom'
        commercialCtaTitle='Butuh sistem yang mengikuti proses bisnis?'
        commercialCtaDescription='Jika pertanyaan Anda sudah bergeser dari “apa itu software custom” ke “apakah kami perlu membangunnya”, halaman solusi menjelaskan pendekatan pengerjaan secara lebih konkret.'
        commercialCtaLabel='Lihat solusi software custom'
      />
    </>
  );
}

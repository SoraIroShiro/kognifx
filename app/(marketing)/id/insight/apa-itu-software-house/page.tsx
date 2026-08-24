import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-software-house')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuSoftwareHousePage() {
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
            Software house adalah perusahaan yang mengembangkan perangkat lunak
            sesuai kebutuhan klien — biasanya proyek custom, integrasi, atau
            platform bisnis — bukan sekadar menjual satu produk jadi. Artikel
            ini menjelaskan peran, cara kerja, dan kapan partner seperti ini
            relevan.
          </>
        }
        sections={[
          {
            title: 'Pengertian software house',
            children: (
              <>
                <p>
                  Secara sederhana, software house adalah tim atau perusahaan
                  yang membangun dan mengembangkan software untuk orang lain.
                  Fokusnya pada delivery proyek: memahami masalah, merancang
                  solusi, mengimplementasikan, dan menyerahkan sistem yang bisa
                  dioperasikan.
                </p>
              </>
            ),
          },
          {
            title: 'Jenis pekerjaan yang biasanya ditangani',
            children: (
              <>
                <p>
                  Ruang lingkup bisa berbeda antar partner. Yang umum: aplikasi
                  bisnis, portal internal, modernisasi sistem lama, dan
                  pendampingan teknis setelah go-live. Tidak semua software
                  house mengerjakan semua jenis proyek.
                </p>
              </>
            ),
          },
          {
            title: 'Contoh area: custom, web, mobile, enterprise, AI, IoT',
            children: (
              <>
                <p>
                  Contoh pekerjaan yang sering muncul: software custom dan
                  aplikasi web, mobile bila dibutuhkan, sistem enterprise,
                  integrasi antar aplikasi, otomasi/AI, atau lapisan software di
                  sekitar perangkat IoT. Ini contoh domain — bukan daftar
                  jaminan kemampuan setiap vendor.
                </p>
              </>
            ),
          },
          {
            title: 'Perbedaan dengan vendor produk jadi',
            children: (
              <>
                <p>
                  Vendor produk menjual software yang sudah dibangun, lalu
                  dikonfigurasi. Software house membangun atau menyesuaikan
                  sistem untuk proses spesifik. Keduanya bisa saling melengkapi:
                  kadang proyek adalah mengintegrasikan produk jadi, bukan
                  menulis semuanya dari nol.
                </p>
              </>
            ),
          },
          {
            title: 'Perbedaan dengan freelancer secara garis besar',
            children: (
              <>
                <p>
                  Freelancer individu bisa sangat efektif untuk lingkup kecil
                  dan jelas. Software house biasanya menawarkan kapasitas tim,
                  proses, dan keberlanjutan yang lebih terstruktur untuk proyek
                  dengan banyak peran atau jangka waktu lebih panjang. Ukuran
                  tim bukan jaminan kualitas — proses dan kejelasan lingkup
                  yang lebih menentukan.
                </p>
              </>
            ),
          },
          {
            title: 'Cara kerja proyek',
            children: (
              <>
                <p>
                  Pola umum: discovery masalah, requirement, desain,
                  development, pengujian, deployment, lalu maintenance. Proyek
                  nyata sering iteratif. Ringkasan tahapan ada di{' '}
                  <InsightInlineLink href='/id/insight/tahapan-pengembangan-software-custom'>
                    tahapan pengembangan software custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Kapan bisnis membutuhkan software house',
            children: (
              <>
                <p>
                  Relevan ketika kebutuhan tidak muat di produk jadi, atau ketika
                  organisasi tidak punya kapasitas internal untuk membangun dan
                  merawat sistem. Jika masalah masih kabur, mulai dari
                  pemetaan proses — bukan dari daftar teknologi.
                </p>
              </>
            ),
          },
          {
            title: 'Apa yang perlu disiapkan sebelum konsultasi',
            children: (
              <>
                <p>
                  Siapkan: masalah operasional yang ingin diselesaikan, siapa
                  pengguna, sistem yang sudah ada, dan batasan waktu/risiko.
                  Panduan evaluasi partner ada di{' '}
                  <InsightInlineLink href='/id/insight/cara-memilih-software-house'>
                    cara memilih software house
                  </InsightInlineLink>
                  . Gambaran layanan Kognifx ada di{' '}
                  <InsightInlineLink href='/id/solusi'>
                    halaman Solusi
                  </InsightInlineLink>{' '}
                  dan konteks perusahaan di{' '}
                  <InsightInlineLink href='/id/tentang'>
                    Tentang
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Jika kebutuhan mengarah ke sistem yang menyesuaikan proses
                  bisnis, lihat juga{' '}
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
        commercialCtaTitle='Sedang menimbang partner pengembangan software?'
        commercialCtaDescription='Halaman software custom menjelaskan pendekatan membangun sistem sesuai proses bisnis — tanpa mengubah artikel ini menjadi halaman penjualan merek.'
        commercialCtaLabel='Lihat solusi software custom'
      />
    </>
  );
}

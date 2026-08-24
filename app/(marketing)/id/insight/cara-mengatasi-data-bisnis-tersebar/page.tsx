import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/cara-mengatasi-data-bisnis-tersebar'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function CaraMengatasiDataBisnisTersebarPage() {
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
            Data bisnis yang tersebar membuat tim bekerja dengan angka berbeda
            untuk fakta yang sama. Artikel ini menjelaskan bentuk silo yang
            umum, dampaknya, dan pilihan pendekatan: sentralisasi, integrasi,
            atau rebuild — tanpa mengklaim satu obat untuk semua.
          </>
        }
        sections={[
          {
            title: 'Seperti apa data yang terfragmentasi',
            children: (
              <>
                <p>
                  Gejala tipikal: sales punya daftar pelanggan sendiri, finance
                  punya file lain, gudang mencatat stok di tempat ketiga. Tidak
                  ada kesepakatan sumber kebenaran.
                </p>
              </>
            ),
          },
          {
            title: 'Silo spreadsheet, aplikasi, dan sistem',
            children: (
              <>
                <p>
                  Silo bisa berupa file Excel, SaaS terpisah, atau modul internal
                  yang tidak saling bicara. Spreadsheet sebagai “sistem”
                  dibahas di{' '}
                  <InsightInlineLink href='/id/insight/tanda-excel-tidak-lagi-cukup'>
                    tanda Excel tidak lagi cukup
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Duplicate data entry',
            children: (
              <>
                <p>
                  Entri ganda memakan waktu dan membuka peluang selisih. Setiap
                  salinan adalah versi yang bisa menyimpang.
                </p>
              </>
            ),
          },
          {
            title: 'Versi yang saling bertentangan',
            children: (
              <>
                <p>
                  Dua laporan “benar” dengan angka berbeda merusak kepercayaan.
                  Rapat berubah jadi rekonsiliasi file, bukan keputusan.
                </p>
              </>
            ),
          },
          {
            title: 'Dampak pada reporting',
            children: (
              <>
                <p>
                  Reporting lintas divisi menjadi lambat karena data harus
                  digabung manual. Semakin sering digabung, semakin tinggi
                  risiko kesalahan transformasi.
                </p>
              </>
            ),
          },
          {
            title: 'Sentralisasi versus integrasi',
            children: (
              <>
                <p>
                  Sentralisasi menempatkan data inti di satu sistem. Integrasi
                  menjaga sistem terpisah tetapi menyelaraskan data lewat kontrak.
                  Pilihan bergantung pada apakah sistem existing masih layak
                  dipakai.
                </p>
              </>
            ),
          },
          {
            title: 'API dan sinkronisasi data',
            children: (
              <>
                <p>
                  API dan sinkronisasi (real-time atau berkala) mengurangi
                  salin-tempel. Manfaat pola API ada di{' '}
                  <InsightInlineLink href='/id/insight/manfaat-integrasi-api'>
                    manfaat integrasi API
                  </InsightInlineLink>
                  ; konteks lebih luas di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-system-integration'>
                    system integration
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Pertimbangan master data secara garis besar',
            children: (
              <>
                <p>
                  Pelanggan, produk, dan akun sering perlu dikelola sebagai
                  master. Tanpa aturan “sistem mana yang berwenang mengubah”,
                  sync hanya menyebarkan konflik lebih cepat.
                </p>
              </>
            ),
          },
          {
            title: 'Pertimbangan migrasi',
            children: (
              <>
                <p>
                  Membersihkan dan memetakan data lama membutuhkan waktu.
                  Migrasi yang buru-buru memindahkan kekacauan ke rumah baru.
                </p>
              </>
            ),
          },
          {
            title: 'Memilih integrasi atau membangun ulang',
            children: (
              <>
                <p>
                  Integrasi lebih masuk akal jika inti sistem masih sehat.
                  Rebuild dipertimbangkan jika model data sudah tidak tertolong.
                  Tanda diagnostik integrasi:{' '}
                  <InsightInlineLink href='/id/insight/kapan-sistem-perlu-diintegrasikan'>
                    kapan sistem perlu diintegrasikan
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan layanan:{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </InsightInlineLink>
                  . Jika sentralisasi operasional lebih masuk akal, pertimbangkan
                  juga{' '}
                  <InsightInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </InsightInlineLink>{' '}
                  atau{' '}
                  <InsightInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/integrasi-sistem'
        commercialCtaTitle='Data operasional masih tersebar di banyak tempat?'
        commercialCtaDescription='Halaman integrasi sistem membahas pendekatan menghubungkan aplikasi dan data — termasuk kapan integrasi lebih masuk akal daripada rebuild.'
        commercialCtaLabel='Lihat solusi integrasi sistem'
      />
    </>
  );
}

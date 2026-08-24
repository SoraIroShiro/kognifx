import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/apa-itu-iot-untuk-bisnis'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuIotPage() {
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
            IoT (Internet of Things) menghubungkan perangkat fisik ke software
            agar data lapangan bisa dipantau, dicatat, dan — bila relevan —
            memicu tindakan. Untuk bisnis, nilainya ada pada visibility
            operasional, bukan pada perangkat itu sendiri.
          </>
        }
        sections={[
          {
            title: 'Definisi',
            children: (
              <>
                <p>
                  IoT merangkai sensor atau perangkat, jaringan, dan sistem
                  software. Perangkat mengumpulkan kondisi atau event; software
                  menyimpan, menampilkan, dan kadang mengotomasi respons.
                  Industrial IoT menekankan konteks pabrik, aset, atau
                  fasilitas.
                </p>
              </>
            ),
          },
          {
            title: 'Perangkat, gateway, jaringan, dan software',
            children: (
              <>
                <p>
                  Rantai tipikal: sensor atau mesin, kadang gateway di tepi
                  jaringan, lalu backend yang menerima telemetry. Kognifx
                  tidak memproduksi hardware proprietary; peran software
                  adalah ingestion, integrasi, dan tampilan yang bisa dipakai
                  tim operasional.
                </p>
              </>
            ),
          },
          {
            title: 'Telemetry, dashboard, monitoring, dan alert',
            children: (
              <>
                <p>
                  Telemetry adalah aliran data berkala atau event. Dashboard
                  membantu melihat status. Alert berguna jika ambang batas
                  disepakati — terlalu banyak notifikasi justru diabaikan.
                  Monitoring “real-time” bergantung pada arsitektur, bukan
                  pada janji generik.
                </p>
              </>
            ),
          },
          {
            title: 'Automation dan contoh bisnis/industri',
            children: (
              <>
                <p>
                  Data perangkat dapat memicu tiket, pencatatan, atau
                  workflow. Contoh konseptual: memantau kondisi aset,
                  mencatat pemakaian, atau menandai anomali untuk dicek
                  manusia. Ini bukan klaim proyek tertentu.
                </p>
              </>
            ),
          },
          {
            title: 'Keamanan, keandalan, dan kaitan ke software/ERP',
            children: (
              <>
                <p>
                  Perangkat di lapangan menambah permukaan risiko: akses
                  jaringan, identitas perangkat, dan integritas data.
                  Keandalan juga soal apa yang terjadi jika koneksi putus.
                </p>
                <p>
                  Data IoT baru bernilai jika masuk ke proses bisnis — stok,
                  perawatan, atau operasional. Itu sering melibatkan{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </InsightInlineLink>{' '}
                  dan, pada operasi yang lebih luas, sistem seperti ERP.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan IoT berguna',
            children: (
              <>
                <p>
                  IoT berguna jika keputusan operasional terhambat karena data
                  lapangan terlambat atau tidak tercatat. Ia kurang prioritas
                  jika proses digital di kantor masih kacau — perangkat baru
                  hanya menambah data yang tidak tertindaklanjuti.
                </p>
                <p>
                  Pendekatan software di sekitar perangkat terhubung
                  dijelaskan di{' '}
                  <InsightInlineLink href='/id/solusi/iot'>
                    pengembangan sistem IoT
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/iot'
        commercialCtaTitle='Ingin menilai arsitektur software untuk perangkat terhubung?'
        commercialCtaDescription='Halaman IoT membahas integrasi perangkat, telemetry, dashboard, dan koneksi ke sistem bisnis — tanpa klaim produksi hardware.'
        commercialCtaLabel='Lihat solusi IoT'
      />
    </>
  );
}

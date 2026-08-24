import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/crm-custom-vs-crm-siap-pakai'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function CrmCustomVsReadyPage() {
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
            CRM siap pakai menawarkan pipeline dan modul yang sudah dibakukan.
            CRM custom menyesuaikan tahap penjualan, field data, dan integrasi
            ke cara tim bekerja. Pilihan yang tepat bergantung pada seberapa
            unik proses sales Anda — bukan pada label fitur yang terdengar
            lengkap.
          </>
        }
        sections={[
          {
            title: 'Perbedaan dasar',
            children: (
              <>
                <p>
                  CRM paket dikonfigurasi dalam koridor produk vendor. CRM
                  custom merancang objek data, tahap pipeline, dan aturan
                  akses sesuai operasional. Keduanya tetap membutuhkan disiplin
                  adopsi; perbedaan utamanya ada di tempat fleksibilitas
                  dibayar.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan CRM siap pakai cukup',
            children: (
              <>
                <p>
                  Jika funnel relatif standar, tim kecil hingga menengah, dan
                  integrasi yang dibutuhkan sudah tersedia, paket sering cukup.
                  Keuntungan utamanya: waktu mulai lebih cepat dan pola kerja
                  yang sudah dikenal banyak pengguna.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan custom menjadi relevan',
            children: (
              <>
                <p>
                  Custom relevan jika tahap pipeline, approval, atau field
                  wajib tidak muat di template, atau jika CRM harus menjadi
                  bagian dari sistem internal yang lebih luas. Workarounds di
                  luar sistem biasanya tanda bahwa gap proses sudah mahal.
                </p>
              </>
            ),
          },
          {
            title: 'Fleksibilitas pipeline dan workflow',
            children: (
              <>
                <p>
                  Pipeline custom memungkinkan tahap, otomatisasi, dan handoff
                  yang mencerminkan proses nyata. Fleksibilitas itu berguna —
                  tetapi juga menuntut keputusan desain yang jelas agar sistem
                  tidak menjadi terlalu rumit.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi',
            children: (
              <>
                <p>
                  Paket unggul jika connector yang dibutuhkan sudah matang.
                  Custom unggul ketika kontrak data harus mengikuti sistem
                  existing — ERP, portal, atau kanal komunikasi — bukan
                  sebaliknya.
                </p>
              </>
            ),
          },
          {
            title: 'Data dan kontrol',
            children: (
              <>
                <p>
                  Kepemilikan data, retensi, dan model permission sering jadi
                  pertimbangan. Custom memberi ruang mengatur struktur data
                  sesuai kebijakan internal, sekaligus menambah tanggung jawab
                  pemeliharaan.
                </p>
              </>
            ),
          },
          {
            title: 'Implementasi dan maintenance',
            children: (
              <>
                <p>
                  Implementasi paket tetap butuh migrasi data, pelatihan, dan
                  perubahan kebiasaan. Custom menambah fase desain dan
                  pengujian. Setelah go-live, keduanya butuh owner proses —
                  bukan hanya “admin teknis”.
                </p>
              </>
            ),
          },
          {
            title: 'Faktor keputusan sederhana',
            children: (
              <>
                <p>
                  Tanyakan: proses mana yang tidak boleh distandarkan, data
                  mana yang wajib tunggal, integrasi mana yang tidak bisa
                  ditunda, dan siapa yang akan menjaga kualitas pipeline.
                  Pengertian dasar ada di{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-crm'>
                    apa itu CRM
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan pengerjaan sistem yang menyesuaikan proses sales
                  dijelaskan di{' '}
                  <InsightInlineLink href='/id/solusi/crm'>
                    solusi CRM
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/crm'
        commercialCtaTitle='Workflow sales tidak muat di CRM template?'
        commercialCtaDescription='Halaman solusi CRM merangkum pendekatan pipeline, data pelanggan, dan integrasi tanpa menyerang merek produk tertentu.'
        commercialCtaLabel='Lihat solusi CRM'
      />
    </>
  );
}

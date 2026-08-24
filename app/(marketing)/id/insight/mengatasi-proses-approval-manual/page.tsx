import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath(
  '/id/insight/mengatasi-proses-approval-manual'
)!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function MengatasiProsesApprovalManualPage() {
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
            Approval manual lewat chat, email, atau tanda tangan berkas sering
            membuat status kabur dan proses macet. Workflow digital membantu
            merutekan permintaan, mencatat keputusan, dan memberi jejak yang
            bisa ditinjau — tanpa menjamin kepatuhan hukum tertentu.
          </>
        }
        sections={[
          {
            title: 'Pola approval manual yang umum',
            children: (
              <>
                <p>
                  Contoh: pengajuan cuti di spreadsheet, PO di email berantai,
                  atau “tolong approve” di grup chat. Konteks hilang saat orang
                  berganti atau thread panjang.
                </p>
              </>
            ),
          },
          {
            title: 'Bottleneck',
            children: (
              <>
                <p>
                  Satu approver yang sibuk menahan seluruh antrian. Tanpa
                  delegasi atau SLA internal, pekerjaan menunggu tanpa
                  visibilitas.
                </p>
              </>
            ),
          },
          {
            title: 'Konteks hilang dan status tidak jelas',
            children: (
              <>
                <p>
                  Sulit menjawab: siapa yang harus bertindak, dokumen mana yang
                  berlaku, dan apakah sudah disetujui. Status yang tidak
                  eksplisit memicu follow-up berulang.
                </p>
              </>
            ),
          },
          {
            title: 'Approval routing',
            children: (
              <>
                <p>
                  Routing menentukan urutan dan kondisi: nilai di atas ambang
                  ke manajer, cabang tertentu ke role lain. Aturan harus
                  sederhana dulu, lalu diperhalus.
                </p>
              </>
            ),
          },
          {
            title: 'Role dan permission',
            children: (
              <>
                <p>
                  Siapa boleh mengajukan, melihat, menyetujui, atau membatalkan
                  harus jelas. Permission yang longgar merusak kepercayaan
                  proses.
                </p>
              </>
            ),
          },
          {
            title: 'Notifikasi',
            children: (
              <>
                <p>
                  Notifikasi yang tepat mengurangi “saya tidak tahu ada
                  permintaan”. Notifikasi berlebihan justru diabaikan — desain
                  ambang dan kanal dengan hati-hati.
                </p>
              </>
            ),
          },
          {
            title: 'Audit trail',
            children: (
              <>
                <p>
                  Mencatat siapa memutuskan apa dan kapan membantu review
                  internal. Ini jejak proses — bukan klaim sertifikasi atau
                  kepatuhan otomatis.
                </p>
              </>
            ),
          },
          {
            title: 'Konsep eskalasi',
            children: (
              <>
                <p>
                  Jika tidak ada respons dalam jangka waktu tertentu, permintaan
                  bisa dinaikkan ke peran lain. Eskalasi perlu disepakati agar
                  tidak mengejutkan approver.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi dengan sistem existing',
            children: (
              <>
                <p>
                  Approval sering menempel pada HRIS, procurement, atau dokumen
                  di sistem lain. Integrasi mencegah status ganda — lihat{' '}
                  <InsightInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Otomasi sederhana versus workflow custom',
            children: (
              <>
                <p>
                  Reminder dan form sederhana kadang cukup. Custom diperlukan
                  jika routing, pengecualian, atau integrasi terlalu spesifik.
                  Otomasi proses berulang dibahas di{' '}
                  <InsightInlineLink href='/id/insight/otomatisasi-proses-bisnis-berulang'>
                    otomatisasi proses bisnis yang berulang
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Pendekatan otomasi workflow:{' '}
                  <InsightInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </InsightInlineLink>
                  . Jika yang dibutuhkan antarmuka proses khusus, lihat juga{' '}
                  <InsightInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/ai-automation'
        commercialCtaTitle='Approval masih menumpuk di chat dan email?'
        commercialCtaDescription='Halaman AI automation membahas workflow dan otomasi proses — tanpa menjanjikan outcome kepatuhan hukum tertentu.'
        commercialCtaLabel='Lihat solusi AI automation'
      />
    </>
  );
}

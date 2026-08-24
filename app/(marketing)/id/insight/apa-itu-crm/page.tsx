import {
  InsightArticlePage,
  InsightInlineLink,
} from '@/components/marketing/insight-article-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { getInsightArticleByPath } from '@/lib/indonesian-insight-routes';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getArticleStructuredData } from '@/lib/structured-data';

const article = getInsightArticleByPath('/id/insight/apa-itu-crm')!;

export const metadata = createUnpairedIndonesianMetadata({
  path: article.path,
  title: article.title,
  description: article.description,
});

export default function ApaItuCrmPage() {
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
            CRM (customer relationship management) adalah sistem untuk
            mengelola calon pelanggan, pipeline penjualan, dan riwayat
            interaksi agar follow-up tidak bergantung pada chat atau
            spreadsheet yang tersebar. Artikel ini menjelaskan fungsi utamanya
            dan kapan bisnis mulai membutuhkannya.
          </>
        }
        sections={[
          {
            title: 'Pengertian CRM',
            children: (
              <>
                <p>
                  CRM menempatkan data pelanggan dan aktivitas sales di satu
                  tempat yang bisa dipakai bersama. Tujuannya bukan sekadar
                  menyimpan kontak, melainkan menjaga konteks: siapa lead-nya,
                  di tahap mana, dan apa yang sudah dibicarakan.
                </p>
              </>
            ),
          },
          {
            title: 'Masalah bisnis yang biasa diselesaikan CRM',
            children: (
              <>
                <p>
                  Tanpa sistem, lead hilang di inbox, follow-up tertunda, dan
                  manajer tidak tahu pipeline mana yang macet. CRM membantu
                  merapikan handoff antar sales, mengurangi duplikasi data, dan
                  membuat status peluang lebih transparan.
                </p>
              </>
            ),
          },
          {
            title: 'Leads dan sales pipeline',
            children: (
              <>
                <p>
                  Lead masuk dari berbagai kanal lalu masuk ke tahap pipeline —
                  misalnya kualifikasi, proposal, dan closing. Setiap tahap
                  punya kriteria dan tanggung jawab. Pipeline yang jelas
                  memudahkan prioritas, bukan hanya laporan yang terlihat
                  “penuh”.
                </p>
              </>
            ),
          },
          {
            title: 'Data pelanggan dan riwayat interaksi',
            children: (
              <>
                <p>
                  Catatan panggilan, email, meeting, dan catatan internal
                  membentuk riwayat. Saat orang berganti, konteks tidak hilang.
                  Kualitas data tetap bergantung pada disiplin pencatatan —
                  sistem tidak menggantikan kebiasaan yang buruk.
                </p>
              </>
            ),
          },
          {
            title: 'Follow-up dan aktivitas sales',
            children: (
              <>
                <p>
                  Reminder, task, dan jadwal follow-up menjaga peluang tetap
                  bergerak. Aktivitas yang tercatat juga membantu review
                  mingguan: mana yang perlu diangkat, mana yang sudah dingin.
                </p>
              </>
            ),
          },
          {
            title: 'Dashboard dan reporting',
            children: (
              <>
                <p>
                  Dashboard menampilkan volume lead, konversi antar tahap, dan
                  aktivitas tim. Angka itu hanya berguna jika tahap pipeline
                  dan definisi status disepakati bersama.
                </p>
              </>
            ),
          },
          {
            title: 'CRM automation',
            children: (
              <>
                <p>
                  Otomasi sederhana — assignment lead, pengingat, atau update
                  status — mengurangi kerja manual. Otomasi yang lebih pintar
                  bisa bertemu dengan{' '}
                  <InsightInlineLink href='/id/insight/apa-itu-ai-automation'>
                    AI automation
                  </InsightInlineLink>
                  , tetapi aturan dasar tetap harus jelas agar tidak membanjiri
                  tim dengan notifikasi.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi CRM dengan sistem lain',
            children: (
              <>
                <p>
                  CRM sering perlu terhubung ke email, kalender, ERP, atau
                  kanal komunikasi. Integrasi mengurangi salin-tempel, asalkan
                  ada sumber kebenaran untuk data pelanggan dan order.
                </p>
              </>
            ),
          },
          {
            title: 'Kapan bisnis mulai membutuhkan CRM',
            children: (
              <>
                <p>
                  Sinyal umum: jumlah lead naik, lebih dari satu orang menangani
                  sales, atau manajer tidak percaya angka di spreadsheet.
                  Paket siap pakai cukup jika proses dekat standar. Custom
                  dipertimbangkan jika workflow sangat spesifik — lihat{' '}
                  <InsightInlineLink href='/id/insight/crm-custom-vs-crm-siap-pakai'>
                    CRM custom vs CRM siap pakai
                  </InsightInlineLink>
                  .
                </p>
                <p>
                  Jika kebutuhan mengarah ke sistem yang menyesuaikan proses
                  penjualan, lihat{' '}
                  <InsightInlineLink href='/id/solusi/crm'>
                    pengembangan sistem CRM
                  </InsightInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        commercialHref='/id/solusi/crm'
        commercialCtaTitle='Pipeline penjualan masih sulit dilacak?'
        commercialCtaDescription='Halaman CRM membahas pendekatan sistem yang mengikuti alur lead, follow-up, dan data pelanggan — tanpa mengklaim paket produk siap unduh.'
        commercialCtaLabel='Lihat solusi CRM'
      />
    </>
  );
}

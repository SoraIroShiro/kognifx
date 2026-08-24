import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/ai-automation';

const title = 'Jasa AI Automation & AI Agent untuk Bisnis | Kognifx';
const description =
  'Kognifx membantu bisnis mengotomatisasi workflow dengan AI, AI agent, n8n, integrasi data, document intelligence, dan sistem automation yang terhubung.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function AiAutomationPage() {
  return (
    <>
      <JsonLd
        data={getServicePageStructuredData({
          path,
          name: title,
          description,
        })}
      />
      <SolutionDetailPage
        breadcrumbLabel='AI Automation'
        eyebrow='Solusi'
        h1='Jasa AI Automation untuk Bisnis'
        intro={
          <>
            Pekerjaan manual yang berulang, data yang harus dipindahkan antar
            sistem, dan keputusan yang tertunda karena informasi tersebar —
            inilah area di mana{' '}
            <strong className='font-medium text-foreground'>
              AI automation
            </strong>{' '}
            dan otomasi proses bisnis sering memberi nilai praktis, asalkan
            dirancang sesuai konteks operasional.
          </>
        }
        sections={[
          {
            title: 'Masalah operasional yang sering diatasi',
            children: (
              <>
                <p>
                  Automation paling berguna ketika proses sudah jelas tetapi
                  eksekusinya masih manual: input data berulang, approval
                  antar divisi, sinkronisasi antar aplikasi, atau pengolahan
                  dokumen yang memakan waktu.
                </p>
                <p>
                  Kognifx fokus pada{' '}
                  <strong className='font-medium text-foreground'>
                    business process automation
                  </strong>{' '}
                  yang bisa diaudit, dipantau, dan disesuaikan — bukan
                  otomatisasi tanpa kontrol manusia di titik-titik kritis.
                </p>
              </>
            ),
          },
          {
            title: 'AI Agent dan Agentic AI',
            children: (
              <>
                <p>
                  <strong className='font-medium text-foreground'>
                    AI agent
                  </strong>{' '}
                  dapat membantu mengeksekusi langkah-langkah dalam workflow
                  yang sudah didefinisikan: mengambil data, menyiapkan draf,
                  memicu integrasi, atau memberi rekomendasi berdasarkan
                  konteks bisnis.
                </p>
                <p>
                  Agentic AI tidak berarti sistem sepenuhnya otonom tanpa
                  pengawasan. Kognifx merancang titik review manusia, batas
                  akses data, dan logging yang wajar untuk kebutuhan bisnis
                  Anda.
                </p>
              </>
            ),
          },
          {
            title: 'Workflow automation dan n8n',
            children: (
              <>
                <p>
                  Untuk banyak proyek, orchestration workflow membutuhkan
                  koneksi antar API, trigger event, dan transformasi data.
                  n8n adalah salah satu tool open-source yang sering dipakai
                  untuk skenario ini — bukan produk milik Kognifx, melainkan
                  bagian stack integrasi yang dapat diimplementasikan sesuai
                  kebutuhan.
                </p>
                <p>
                  Implementasi dapat mencakup setup, integrasi WhatsApp/email,
                  sinkronisasi spreadsheet, atau orkestrasi antar sistem
                  internal. Detail koneksi teknis biasanya dibahas setelah
                  proses bisnis dipetakan.
                </p>
              </>
            ),
          },
          {
            title: 'Document intelligence dan knowledge systems',
            children: (
              <>
                <p>
                  Tim sering kewalahan dengan dokumen PDF, kontrak, invoice,
                  atau knowledge base internal.{' '}
                  <strong className='font-medium text-foreground'>
                    Document intelligence
                  </strong>{' '}
                  dan retrieval (termasuk pendekatan RAG) dapat membantu
                  menemukan informasi lebih cepat — selama sumber data dan
                  kebijakan akses sudah jelas.
                </p>
                <p>
                  AI assistant internal juga bisa membantu staf menavigasi SOP,
                  FAQ operasional, atau data terstruktur dari sistem yang
                  sudah ada.
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi dengan sistem yang ada',
            children: (
              <>
                <p>
                  Automation hanya berguna jika terhubung ke sistem nyata: ERP,
                  CRM, database, file storage, atau API pihak ketiga. Kognifx
                  merancang automation sebagai bagian dari arsitektur yang
                  lebih luas, sering berdampingan dengan{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </SolutionInlineLink>{' '}
                  atau{' '}
                  <SolutionInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </SolutionInlineLink>
                  .
                </p>
              </>
            ),
          },
        ]}
        capabilityTags={[
          'Workflow Automation',
          'AI Agent',
          'AI Assistant',
          'n8n Integration',
          'Document Intelligence',
          'Decision Support',
        ]}
        relatedSolutions={[
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description:
              'Ketika automation membutuhkan antarmuka atau sistem internal khusus.',
          },
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'Menghubungkan automation dengan ERP, CRM, dan API existing.',
          },
          {
            label: 'ERP Custom',
            href: '/id/solusi/erp-custom',
            description:
              'Automation di dalam proses operasional yang lebih terstruktur.',
          },
        ]}
        ctaTitle='Ingin mengevaluasi peluang automation?'
        ctaDescription='Ceritakan proses manual atau workflow yang ingin disederhanakan. Kami bantu menilai apakah AI automation, workflow tool, atau pendekatan lain yang paling masuk akal.'
        ctaLabel='Diskusikan Peluang Automation'
      />
    </>
  );
}

import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/iot';

const title = 'Jasa Pengembangan IoT untuk Bisnis & Industri | Kognifx';
const description =
  'Kognifx membangun sistem IoT untuk integrasi perangkat, telemetry, monitoring, dashboard, automation, dan koneksi data antara perangkat dengan software bisnis.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function IotPage() {
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
        breadcrumbLabel='IoT'
        eyebrow='Solusi'
        h1='Jasa Pengembangan Sistem IoT'
        intro={
          <>
            Perangkat fisik dan software bisnis sering berjalan terpisah.
            Kognifx membantu perusahaan membangun{' '}
            <strong className='font-medium text-foreground'>
              sistem IoT
            </strong>{' '}
            di sisi software: integrasi perangkat, ingestion data telemetry,
            monitoring, dashboard, dan automation — tanpa mengklaim
            produksi hardware proprietary.
          </>
        }
        sections={[
          {
            title: 'Menghubungkan perangkat dengan alur bisnis',
            children: (
              <>
                <p>
                  Proyek IoT yang sehat biasanya dimulai dari pertanyaan
                  operasional: data apa yang perlu terlihat, keputusan apa
                  yang perlu dipercepat, dan tindakan apa yang harus terjadi
                  ketika kondisi tertentu terpenuhi.
                </p>
                <p>
                  Kognifx fokus pada{' '}
                  <strong className='font-medium text-foreground'>
                    IoT development
                  </strong>{' '}
                  di layer software, backend, dan integrasi — bekerja dengan
                  perangkat atau gateway yang sudah Anda pilih atau sedang
                  dievaluasi.
                </p>
              </>
            ),
          },
          {
            title: 'Telemetry, monitoring, dan dashboard',
            children: (
              <>
                <p>
                  Data sensor atau status perangkat perlu disimpan,
                  divisualisasikan, dan — bila perlu — dianalisis secara
                  near-real-time tergantung arsitektur yang dipilih.
                </p>
                <p>
                  Dashboard monitoring membantu tim operasional melihat
                  kondisi lapangan, tren, atau anomaly. Alert dapat
                  dikonfigurasi untuk skenario bisnis yang relevan, bukan
                  sekadar notifikasi generik.
                </p>
              </>
            ),
          },
          {
            title: 'Device integration dan device management',
            children: (
              <>
                <p>
                  Integrasi perangkat melibatkan protokol, API vendor,
                  edge gateway, atau middleware. Kognifx merancang alur data
                  dari perangkat ke backend dengan pertimbangan keamanan
                  dasar, autentikasi, dan skalabilitas yang wajar untuk
                  konteks proyek.
                </p>
                <p>
                  Konsep device management — registrasi, grouping, firmware
                  update policy — dapat dirancang sesuai kebutuhan, tanpa
                  mengklaim platform IoT proprietary siap pakai kecuali memang
                  dibangun sebagai bagian proyek.
                </p>
              </>
            ),
          },
          {
            title: 'Industrial IoT dan use case bisnis',
            children: (
              <>
                <p>
                  Use case dapat bervariasi: monitoring aset, pelacakan
                  kondisi lingkungan, integrasi mesin produksi, smart facility,
                  atau telemetry untuk layanan lapangan. Kognifx tidak
                  mengklaim portofolio industri spesifik tanpa bukti proyek
                  nyata — pendekatan tetap problem-first.
                </p>
                <p>
                  Untuk industri dengan kebutuhan operasional kompleks,
                  sistem IoT sering berdampingan dengan{' '}
                  <SolutionInlineLink href='/id/solusi/erp-custom'>
                    ERP custom
                  </SolutionInlineLink>{' '}
                  atau{' '}
                  <SolutionInlineLink href='/id/solusi/software-custom'>
                    software operasional
                  </SolutionInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'Integrasi API dan automation',
            children: (
              <>
                <p>
                  Data IoT paling berguna ketika mengalir ke sistem bisnis:
                  ERP, ticketing, notification, atau workflow automation.
                  Detail koneksi antar sistem dibahas di halaman{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </SolutionInlineLink>
                  ; automation lanjutan dapat melibatkan{' '}
                  <SolutionInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </SolutionInlineLink>{' '}
                  bila relevan.
                </p>
              </>
            ),
          },
        ]}
        capabilityTags={[
          'Device Integration',
          'Telemetry Ingestion',
          'Monitoring Dashboard',
          'Remote Monitoring',
          'IoT Backend',
          'Connected Systems',
        ]}
        relatedSolutions={[
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'Menghubungkan data perangkat dengan ERP, CRM, dan API lain.',
          },
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description: 'Platform operasional yang menampilkan data IoT.',
          },
          {
            label: 'AI Automation',
            href: '/id/solusi/ai-automation',
            description:
              'Alert, klasifikasi, atau workflow otomatis dari data sensor.',
          },
        ]}
        ctaTitle='Punya kebutuhan monitoring atau perangkat terhubung?'
        ctaDescription='Ceritakan perangkat, data, dan outcome operasional yang ingin dicapai. Kami bantu menilai arsitektur software IoT yang realistis untuk konteks Anda.'
        ctaLabel='Diskusikan Kebutuhan IoT Anda'
      />
    </>
  );
}

import {
  SolutionDetailPage,
  SolutionInlineLink,
} from '@/components/marketing/solution-detail-page';
import { JsonLd } from '@/components/structured-data/json-ld';
import { createUnpairedIndonesianMetadata } from '@/lib/page-metadata';
import { getServicePageStructuredData } from '@/lib/structured-data';

const path = '/id/solusi/saas-platform';

const title = 'Jasa Pembuatan SaaS & Multi-Tenant Platform | Kognifx';
const description =
  'Kognifx membangun SaaS dan multi-tenant platform custom dengan account isolation, role, subscription workflow, dashboard, integration, dan architecture sesuai produk.';

export const metadata = createUnpairedIndonesianMetadata({
  path,
  title,
  description,
});

export default function SaasPlatformPage() {
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
        breadcrumbLabel='SaaS / Multi-Tenant'
        eyebrow='Solusi'
        h1='Jasa Pembuatan SaaS & Multi-Tenant Platform'
        intro={
          <>
            Ide produk digital sering berhenti di prototype karena belum ada
            pemisahan akun, peran, dan alur langganan yang jelas. Kognifx
            membantu merancang{' '}
            <strong className='font-medium text-foreground'>
              SaaS dan platform multi-tenant
            </strong>{' '}
            sesuai model bisnis — isolation data, onboarding, dan kontrol admin
            dibangun dari kebutuhan produk, bukan dari template generik.
          </>
        }
        sections={[
          {
            title: 'Dari proses bisnis menjadi produk yang dipakai banyak akun',
            children: (
              <>
                <p>
                  SaaS berbeda dari aplikasi internal satu perusahaan. Beberapa
                  organisasi atau pengguna berbagi platform yang sama, dengan
                  data dan konfigurasi yang tidak boleh tercampur. Onboarding,
                  paket, dan panel admin menjadi bagian dari produk, bukan
                  afterthought.
                </p>
                <p>
                  Custom diperlukan ketika aturan tenant, billing, atau white
                  label tidak muat di boilerplate. Lingkup tetap mengikuti model
                  bisnis yang ingin dijalankan, bukan daftar fitur sebanyak
                  mungkin.
                </p>
              </>
            ),
          },
          {
            title: 'Multi-tenant, peran, dan alur langganan',
            children: (
              <>
                <p>
                  Isolasi akun dapat dirancang di tingkat data dan akses.
                  Role dan permission membedakan owner, admin tenant, dan
                  pengguna akhir. Workflow subscription atau membership —
                  aktivasi, perpanjangan, perubahan paket — disesuaikan dengan
                  cara Anda menagih, tanpa mengklaim kemitraan payment gateway
                  tertentu.
                </p>
                <p>
                  Recurring billing, trial, atau white label dibahas jika
                  relevan. Kapasitas tenant, uptime, dan skala tidak dijanjikan
                  di luar kesepakatan teknis proyek.
                </p>
              </>
            ),
          },
          {
            title: 'Kontrol admin, API, dan analitik',
            children: (
              <>
                <p>
                  Panel operasional biasanya mencakup manajemen tenant,
                  pengguna, dan konfigurasi. API dan integrasi membantu produk
                  terhubung ke identity, pembayaran, atau tools lain. Dashboard
                  analitik menampilkan metrik yang memang dipakai produk —
                  bukan vanity chart.
                </p>
                <p>
                  Capability AI di dalam produk bersifat opsional dan hanya
                  ditambahkan jika ada use case yang jelas. Lihat{' '}
                  <SolutionInlineLink href='/id/solusi/ai-automation'>
                    AI automation
                  </SolutionInlineLink>{' '}
                  dan{' '}
                  <SolutionInlineLink href='/id/solusi/integrasi-sistem'>
                    integrasi sistem
                  </SolutionInlineLink>
                  .
                </p>
              </>
            ),
          },
          {
            title: 'SaaS, software custom, dan commerce',
            children: (
              <>
                <p>
                  Jika yang dibutuhkan adalah sistem untuk satu organisasi,
                  mulai dari{' '}
                  <SolutionInlineLink href='/id/solusi/software-custom'>
                    software custom
                  </SolutionInlineLink>
                  . Jika produk menjual katalog ke banyak pembeli atau vendor,
                  evaluasi{' '}
                  <SolutionInlineLink href='/id/solusi/ecommerce-marketplace'>
                    e-commerce & marketplace
                  </SolutionInlineLink>
                  .
                </p>
                <p>
                  Halaman ini fokus pada platform berlangganan dan multi-tenant:
                  pemisahan akun, peran, onboarding, dan arsitektur produk yang
                  mengikuti model bisnis Anda.
                </p>
              </>
            ),
          },
        ]}
        capabilityTags={[
          'Multi-Tenant Architecture',
          'Account Isolation',
          'Roles & Permissions',
          'Subscription Workflow',
          'Admin Control Panel',
          'Product API',
        ]}
        relatedSolutions={[
          {
            label: 'Software Custom',
            href: '/id/solusi/software-custom',
            description:
              'Aplikasi internal atau fondasi produk sebelum model multi-tenant.',
          },
          {
            label: 'AI Automation',
            href: '/id/solusi/ai-automation',
            description:
              'Fitur AI di dalam produk, bila use case-nya sudah jelas.',
          },
          {
            label: 'Integrasi Sistem',
            href: '/id/solusi/integrasi-sistem',
            description:
              'API, identity, pembayaran, atau koneksi ke sistem lain.',
          },
          {
            label: 'E-Commerce / Marketplace',
            href: '/id/solusi/ecommerce-marketplace',
            description:
              'Jika produk berpusat pada katalog, order, dan transaksi jual-beli.',
          },
        ]}
        ctaTitle='Punya ide produk yang perlu arsitektur SaaS?'
        ctaDescription='Ceritakan siapa penggunanya, bagaimana akun dipisah, dan model langganan yang diinginkan. Kami bantu menilai lingkup platform multi-tenant yang masuk akal — tanpa janji skala atau uptime di luar kesepakatan proyek.'
        ctaLabel='Konsultasikan Ide SaaS Anda'
      />
    </>
  );
}

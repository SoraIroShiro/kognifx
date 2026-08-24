import {
  MarketingCtaPanel,
  MarketingPageHero,
  MarketingPageShell,
  SolutionsCategoryGrid,
  type SolutionGroup,
} from '@/components/marketing/marketing-page-shell';
import { JsonLd } from '@/components/structured-data/json-ld';
import { buttonVariants } from '@/components/ui/button';
import { createMarketingMetadata } from '@/lib/page-metadata';
import { getPageStructuredData } from '@/lib/structured-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const title = 'Solusi Software Custom, AI & Sistem Bisnis | Kognifx';
const description =
  'Temukan solusi Kognifx untuk software custom, ERP, sistem perusahaan, AI automation, e-commerce, platform digital, IoT, dan integrasi sistem.';

export const metadata = createMarketingMetadata({
  path: '/id/solusi',
  title,
  description,
});

const solutionGroups: SolutionGroup[] = [
  {
    title: 'Custom Software',
    description:
      'Aplikasi yang dibangun sesuai proses, pengguna, dan aturan bisnis Anda, bukan template generik yang dipaksakan.',
    detailLinks: [
      { label: 'Software Custom', href: '/id/solusi/software-custom' },
    ],
    items: [
      'Company Profile',
      'Landing Page',
      'Portal',
      'Dashboard',
      'CMS',
      'Document Management',
      'SaaS',
      'Custom Business Applications',
    ],
  },
  {
    title: 'Enterprise & Operations',
    description:
      'Sistem untuk mendukung operasional inti, alur kerja internal, dan pengelolaan harian lintas divisi.',
    detailLinks: [{ label: 'ERP Custom', href: '/id/solusi/erp-custom' }],
    items: [
      'ERP',
      'CRM',
      'HRIS',
      'HRMS',
      'POS',
      'Inventory Management System',
      'WMS',
      'Accounting System',
      'Procurement System',
      'SCM',
      'PIM',
      'OMS',
      'BPM System',
      'Workflow Management System',
    ],
  },
  {
    title: 'AI & Automation',
    description:
      'Automation dan kecerdasan yang mengurangi pekerjaan manual serta mempercepat keputusan, selama AI benar-benar memberi nilai praktis.',
    detailLinks: [
      { label: 'AI & Automation', href: '/id/solusi/ai-automation' },
    ],
    items: [
      'AI Agents',
      'Agentic AI',
      'Workflow Automation',
      'n8n Integration',
      'Document Intelligence',
      'AI Assistants',
      'Knowledge Systems',
      'Decision Support',
    ],
  },
  {
    title: 'Commerce & Customer Platforms',
    description:
      'Platform untuk penjualan, layanan pelanggan, booking, dan interaksi digital yang berkelanjutan.',
    items: [
      'E-Commerce',
      'Marketplace',
      'Booking System',
      'Reservation System',
      'Ticketing System',
      'Helpdesk System',
      'Subscription Platform',
      'Membership Platform',
    ],
  },
  {
    title: 'Digital Platforms',
    description:
      'Platform multi-pengguna atau multi-tenant untuk komunitas, pembelajaran, keuangan, atau ekosistem digital yang lebih luas.',
    items: [
      'Social Platform',
      'Community Platform',
      'Fintech',
      'Multi-Tenant Platform',
      'Super App',
      'LMS',
    ],
  },
  {
    title: 'IoT & Integration',
    description:
      'Sistem terhubung dan integrasi yang menyatukan perangkat, API, data, dan tools operasional dalam satu alur kerja.',
    detailLinks: [
      { label: 'IoT', href: '/id/solusi/iot' },
      { label: 'Integrasi Sistem', href: '/id/solusi/integrasi-sistem' },
    ],
    items: [
      'IoT Systems',
      'Device Integration',
      'Monitoring Systems',
      'API Integration',
      'Data Integration',
      'System-to-System Automation',
    ],
  },
];

export default function SolusiPage() {
  return (
    <MarketingPageShell>
      <JsonLd
        data={getPageStructuredData({
          path: '/id/solusi',
          type: 'CollectionPage',
          name: title,
          description,
          inLanguage: 'id-ID',
        })}
      />

      <MarketingPageHero
        eyebrow='Solusi'
        title='Solusi Teknologi yang Dibangun Sesuai Kebutuhan Bisnis.'
      >
        Tidak semua bisnis memiliki masalah yang sama. Karena itu, Kognifx
        membangun sistem berdasarkan kebutuhan, proses kerja, dan kompleksitas
        yang sebenarnya dihadapi bisnis Anda.
      </MarketingPageHero>

      <SolutionsCategoryGrid groups={solutionGroups} itemsLabel='bidang' />

      <MarketingCtaPanel
        title='Belum menemukan sistem yang Anda butuhkan?'
        action={
          <Link
            href='/id/kontak'
            className={cn(
              buttonVariants({ size: 'lg' }),
              'inline-flex rounded-full'
            )}
          >
            Konsultasikan Kebutuhan Anda
          </Link>
        }
      >
        Biasanya di situlah custom software dimulai: ketika kebutuhan tidak
        sepenuhnya cocok dengan produk siap pakai.
      </MarketingCtaPanel>
    </MarketingPageShell>
  );
}

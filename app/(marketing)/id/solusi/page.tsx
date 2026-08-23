import {
  MarketingPageIntro,
  MarketingPageShell,
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

type SolutionGroup = {
  title: string;
  description: string;
  items: string[];
};

const solutionGroups: SolutionGroup[] = [
  {
    title: 'Custom Software',
    description:
      'Aplikasi yang dibangun sesuai proses, pengguna, dan aturan bisnis Anda—bukan template generik yang dipaksakan.',
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
      <h1 className='max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl'>
        Solusi Teknologi yang Dibangun Sesuai Kebutuhan Bisnis.
      </h1>

      <MarketingPageIntro>
        Tidak semua bisnis memiliki masalah yang sama. Karena itu, Kognifx
        membangun sistem berdasarkan kebutuhan, proses kerja, dan kompleksitas
        yang sebenarnya dihadapi bisnis Anda.
      </MarketingPageIntro>

      <div className='mt-14 space-y-12'>
        {solutionGroups.map((group) => (
          <section
            key={group.title}
            className='border-t border-border/60 pt-10'
          >
            <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
              {group.title}
            </h2>
            <p className='mt-3 max-w-3xl text-muted-foreground leading-relaxed'>
              {group.description}
            </p>
            <ul className='mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
              {group.items.map((item) => (
                <li
                  key={item}
                  className='rounded-md border border-border/60 px-3 py-2 text-sm text-foreground/90'
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className='mt-16 border-t border-border/60 pt-10'>
        <h2 className='text-2xl font-medium tracking-tight sm:text-3xl'>
          Belum menemukan sistem yang Anda butuhkan?
        </h2>
        <p className='mt-4 max-w-2xl text-muted-foreground'>
          Biasanya di situlah custom software dimulai: ketika kebutuhan tidak
          sepenuhnya cocok dengan produk siap pakai.
        </p>
        <Link
          href='/id/kontak'
          className={cn(
            buttonVariants({ size: 'lg' }),
            'mt-6 inline-flex rounded-full'
          )}
        >
          Konsultasikan Kebutuhan Anda
        </Link>
      </section>
    </MarketingPageShell>
  );
}

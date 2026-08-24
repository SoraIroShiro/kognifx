import type { IndonesianSolutionDetailPath } from '@/lib/indonesian-solution-routes';

export const indonesianInsightHubPath = '/id/insight' as const;

export type InsightCategory =
  | 'Software Custom'
  | 'AI & Automation'
  | 'ERP & Enterprise Systems'
  | 'CRM & Customer Systems'
  | 'HR Systems'
  | 'Warehouse & Inventory'
  | 'Commerce & Marketplace'
  | 'SaaS & Platforms'
  | 'Integrasi Sistem & API'
  | 'IoT';

export type IndonesianInsightArticle = {
  path: string;
  title: string;
  h1: string;
  description: string;
  shortDescription: string;
  category: InsightCategory;
  commercialParent: IndonesianSolutionDetailPath;
  relatedArticlePaths: string[];
};

export const indonesianInsightArticles: IndonesianInsightArticle[] = [
  {
    path: '/id/insight/apa-itu-software-custom',
    title: 'Apa Itu Software Custom? Pengertian, Manfaat & Contohnya | Kognifx',
    h1: 'Apa Itu Software Custom?',
    description:
      'Pelajari apa itu software custom, kapan bisnis membutuhkannya, manfaat, contoh penggunaan, serta perbedaannya dengan software siap pakai.',
    shortDescription:
      'Pengertian software custom, kapan dibutuhkan, dan contoh penggunaannya di operasional bisnis.',
    category: 'Software Custom',
    commercialParent: '/id/solusi/software-custom',
    relatedArticlePaths: [
      '/id/insight/software-custom-vs-software-siap-pakai',
      '/id/insight/apa-itu-system-integration',
    ],
  },
  {
    path: '/id/insight/software-custom-vs-software-siap-pakai',
    title: 'Software Custom vs Software Siap Pakai: Mana yang Tepat? | Kognifx',
    h1: 'Software Custom vs Software Siap Pakai',
    description:
      'Bandingkan software custom dan software siap pakai dari sisi kebutuhan, fleksibilitas, integrasi, biaya, waktu, dan kompleksitas operasional.',
    shortDescription:
      'Perbandingan build vs buy: kapan template cukup, kapan sistem custom lebih masuk akal.',
    category: 'Software Custom',
    commercialParent: '/id/solusi/software-custom',
    relatedArticlePaths: [
      '/id/insight/apa-itu-software-custom',
      '/id/insight/erp-custom-vs-erp-siap-pakai',
    ],
  },
  {
    path: '/id/insight/apa-itu-ai-automation',
    title: 'Apa Itu AI Automation? Cara Kerja & Contoh untuk Bisnis | Kognifx',
    h1: 'Apa Itu AI Automation?',
    description:
      'Pahami AI automation, cara kerjanya, contoh proses bisnis yang dapat diotomatisasi, serta perbedaannya dengan automation biasa.',
    shortDescription:
      'Cara kerja AI automation, contoh workflow bisnis, dan kapan pendekatan ini relevan.',
    category: 'AI & Automation',
    commercialParent: '/id/solusi/ai-automation',
    relatedArticlePaths: [
      '/id/insight/ai-agent-vs-automation-biasa',
      '/id/insight/apa-itu-n8n-untuk-bisnis',
    ],
  },
  {
    path: '/id/insight/ai-agent-vs-automation-biasa',
    title: 'AI Agent vs Automation Biasa: Apa Bedanya? | Kognifx',
    h1: 'AI Agent vs Automation Biasa',
    description:
      'Pelajari perbedaan AI agent dan automation biasa, cara kerja, tingkat fleksibilitas, risiko, serta kapan masing-masing pendekatan lebih tepat.',
    shortDescription:
      'Perbedaan rule-based automation dan AI agent, termasuk batasan dan hybrid architecture.',
    category: 'AI & Automation',
    commercialParent: '/id/solusi/ai-automation',
    relatedArticlePaths: [
      '/id/insight/apa-itu-ai-automation',
      '/id/insight/apa-itu-n8n-untuk-bisnis',
    ],
  },
  {
    path: '/id/insight/apa-itu-n8n-untuk-bisnis',
    title: 'Apa Itu n8n? Manfaat Workflow Automation untuk Bisnis | Kognifx',
    h1: 'Apa Itu n8n dan Bagaimana Digunakan untuk Bisnis?',
    description:
      'Kenali n8n, platform workflow automation untuk menghubungkan aplikasi, API, data, dan AI dalam proses bisnis yang lebih otomatis.',
    shortDescription:
      'Pengantar n8n sebagai tool orkestrasi workflow, termasuk kapan custom integration tetap diperlukan.',
    category: 'AI & Automation',
    commercialParent: '/id/solusi/ai-automation',
    relatedArticlePaths: [
      '/id/insight/apa-itu-ai-automation',
      '/id/insight/manfaat-integrasi-api',
    ],
  },
  {
    path: '/id/insight/apa-itu-erp',
    title: 'Apa Itu ERP? Fungsi, Modul & Manfaat untuk Perusahaan | Kognifx',
    h1: 'Apa Itu ERP?',
    description:
      'Pelajari pengertian ERP, fungsi, modul umum, manfaat, dan kapan perusahaan membutuhkan sistem ERP untuk menghubungkan proses operasional.',
    shortDescription:
      'Pengertian ERP, modul umum, dan kapan perusahaan mulai membutuhkan sistem terpusat.',
    category: 'ERP & Enterprise Systems',
    commercialParent: '/id/solusi/erp-custom',
    relatedArticlePaths: [
      '/id/insight/erp-custom-vs-erp-siap-pakai',
      '/id/insight/apa-itu-system-integration',
    ],
  },
  {
    path: '/id/insight/erp-custom-vs-erp-siap-pakai',
    title: 'ERP Custom vs ERP Siap Pakai: Mana yang Cocok? | Kognifx',
    h1: 'ERP Custom vs ERP Siap Pakai',
    description:
      'Bandingkan ERP custom dan ERP siap pakai berdasarkan workflow bisnis, integrasi, fleksibilitas, implementasi, dan kebutuhan jangka panjang.',
    shortDescription:
      'Kerangka keputusan antara ERP paket dan ERP yang menyesuaikan proses bisnis.',
    category: 'ERP & Enterprise Systems',
    commercialParent: '/id/solusi/erp-custom',
    relatedArticlePaths: [
      '/id/insight/apa-itu-erp',
      '/id/insight/software-custom-vs-software-siap-pakai',
    ],
  },
  {
    path: '/id/insight/apa-itu-crm',
    title: 'Apa Itu CRM? Fungsi, Manfaat & Contohnya untuk Bisnis | Kognifx',
    h1: 'Apa Itu CRM?',
    description:
      'Pelajari apa itu CRM, fungsi utamanya, manfaat untuk sales dan customer management, serta kapan bisnis membutuhkan sistem CRM.',
    shortDescription:
      'Pengertian CRM, pipeline sales, data pelanggan, dan kapan sistem mulai dibutuhkan.',
    category: 'CRM & Customer Systems',
    commercialParent: '/id/solusi/crm',
    relatedArticlePaths: [
      '/id/insight/crm-custom-vs-crm-siap-pakai',
      '/id/insight/apa-itu-ai-automation',
    ],
  },
  {
    path: '/id/insight/crm-custom-vs-crm-siap-pakai',
    title: 'CRM Custom vs CRM Siap Pakai: Mana yang Lebih Cocok? | Kognifx',
    h1: 'CRM Custom vs CRM Siap Pakai',
    description:
      'Bandingkan CRM custom dan CRM siap pakai dari sisi workflow sales, fleksibilitas, integrasi, implementasi, dan kebutuhan bisnis.',
    shortDescription:
      'Kerangka build vs buy untuk CRM: pipeline, integrasi, dan kontrol data.',
    category: 'CRM & Customer Systems',
    commercialParent: '/id/solusi/crm',
    relatedArticlePaths: [
      '/id/insight/apa-itu-crm',
      '/id/insight/software-custom-vs-software-siap-pakai',
    ],
  },
  {
    path: '/id/insight/apa-itu-hris-dan-hrms',
    title: 'Apa Itu HRIS dan HRMS? Fungsi untuk Pengelolaan HR | Kognifx',
    h1: 'Apa Itu HRIS dan HRMS?',
    description:
      'Pelajari pengertian HRIS dan HRMS, fungsi utama, modul umum, serta bagaimana sistem HR membantu pengelolaan data dan workflow karyawan.',
    shortDescription:
      'Dasar HRIS/HRMS: data karyawan, absensi, cuti, payroll, dan workflow HR.',
    category: 'HR Systems',
    commercialParent: '/id/solusi/hris',
    relatedArticlePaths: [
      '/id/insight/hris-vs-hrms',
      '/id/insight/apa-itu-system-integration',
    ],
  },
  {
    path: '/id/insight/hris-vs-hrms',
    title: 'HRIS vs HRMS: Apa Perbedaannya dan Mana yang Dibutuhkan? | Kognifx',
    h1: 'HRIS vs HRMS',
    description:
      'Pahami perbedaan HRIS dan HRMS, cakupan fungsi, jenis workflow, serta cara menentukan sistem HR yang sesuai kebutuhan perusahaan.',
    shortDescription:
      'Perbedaan istilah HRIS dan HRMS, overlap modul, dan cara memilih dari kebutuhan.',
    category: 'HR Systems',
    commercialParent: '/id/solusi/hris',
    relatedArticlePaths: [
      '/id/insight/apa-itu-hris-dan-hrms',
      '/id/insight/apa-itu-software-custom',
    ],
  },
  {
    path: '/id/insight/apa-itu-wms',
    title: 'Apa Itu WMS? Fungsi Warehouse Management System | Kognifx',
    h1: 'Apa Itu WMS?',
    description:
      'Pelajari apa itu WMS, fungsi utama warehouse management system, alur stok dan gudang, serta kapan bisnis membutuhkan sistem WMS.',
    shortDescription:
      'Warehouse management system: receiving, lokasi, picking, dan multi-gudang.',
    category: 'Warehouse & Inventory',
    commercialParent: '/id/solusi/wms-inventory',
    relatedArticlePaths: [
      '/id/insight/wms-vs-inventory-management-system',
      '/id/insight/apa-itu-erp',
    ],
  },
  {
    path: '/id/insight/wms-vs-inventory-management-system',
    title: 'WMS vs Inventory Management System: Apa Bedanya? | Kognifx',
    h1: 'WMS vs Inventory Management System',
    description:
      'Bandingkan WMS dan inventory management system dari sisi stok, lokasi gudang, pergerakan barang, workflow, dan tingkat kompleksitas operasional.',
    shortDescription:
      'Perbedaan fokus quantity vs operasional gudang, dan kapan masing-masing cukup.',
    category: 'Warehouse & Inventory',
    commercialParent: '/id/solusi/wms-inventory',
    relatedArticlePaths: [
      '/id/insight/apa-itu-wms',
      '/id/insight/apa-itu-erp',
    ],
  },
  {
    path: '/id/insight/ecommerce-custom-vs-platform-siap-pakai',
    title: 'E-Commerce Custom vs Platform Siap Pakai: Pilih Mana? | Kognifx',
    h1: 'E-Commerce Custom vs Platform Siap Pakai',
    description:
      'Bandingkan e-commerce custom dan platform siap pakai berdasarkan workflow, integrasi, B2B/B2C, fleksibilitas, dan kebutuhan bisnis.',
    shortDescription:
      'Build vs buy untuk toko online: workflow, integrasi, dan kerangka keputusan.',
    category: 'Commerce & Marketplace',
    commercialParent: '/id/solusi/ecommerce-marketplace',
    relatedArticlePaths: [
      '/id/insight/apa-itu-marketplace-multi-vendor',
      '/id/insight/apa-itu-wms',
    ],
  },
  {
    path: '/id/insight/apa-itu-marketplace-multi-vendor',
    title:
      'Apa Itu Marketplace Multi-Vendor? Cara Kerja & Komponennya | Kognifx',
    h1: 'Apa Itu Marketplace Multi-Vendor?',
    description:
      'Pelajari cara kerja marketplace multi-vendor, peran seller dan admin, katalog, order, workflow transaksi, serta kebutuhan integrasi platform.',
    shortDescription:
      'Komponen marketplace multi-vendor: seller, katalog, order, dan moderasi.',
    category: 'Commerce & Marketplace',
    commercialParent: '/id/solusi/ecommerce-marketplace',
    relatedArticlePaths: [
      '/id/insight/ecommerce-custom-vs-platform-siap-pakai',
      '/id/insight/apa-itu-system-integration',
    ],
  },
  {
    path: '/id/insight/apa-itu-saas',
    title: 'Apa Itu SaaS? Cara Kerja Software as a Service | Kognifx',
    h1: 'Apa Itu SaaS?',
    description:
      'Pelajari apa itu SaaS, cara kerja software as a service, konsep subscription dan multi-tenant, serta kapan model SaaS cocok digunakan.',
    shortDescription:
      'Dasar SaaS: subscription, multi-tenant, peran akun, dan trade-off modelnya.',
    category: 'SaaS & Platforms',
    commercialParent: '/id/solusi/saas-platform',
    relatedArticlePaths: [
      '/id/insight/saas-custom-vs-platform-siap-pakai',
      '/id/insight/apa-itu-software-custom',
    ],
  },
  {
    path: '/id/insight/saas-custom-vs-platform-siap-pakai',
    title: 'SaaS Custom vs Platform Siap Pakai: Kapan Perlu Custom? | Kognifx',
    h1: 'SaaS Custom vs Platform Siap Pakai',
    description:
      'Bandingkan SaaS custom dan platform siap pakai berdasarkan model bisnis, multi-tenant, integrasi, workflow, kontrol produk, dan kebutuhan jangka panjang.',
    shortDescription:
      'Kapan membangun produk SaaS sendiri vs memakai platform jadi.',
    category: 'SaaS & Platforms',
    commercialParent: '/id/solusi/saas-platform',
    relatedArticlePaths: [
      '/id/insight/apa-itu-saas',
      '/id/insight/manfaat-integrasi-api',
    ],
  },
  {
    path: '/id/insight/apa-itu-system-integration',
    title:
      'Apa Itu System Integration? Manfaat Integrasi Sistem Bisnis | Kognifx',
    h1: 'Apa Itu System Integration?',
    description:
      'Pelajari system integration, cara menghubungkan aplikasi dan data, manfaat integrasi sistem, serta contoh penggunaan API dan middleware.',
    shortDescription:
      'Cara menghubungkan aplikasi, data, dan workflow tanpa membangun ulang semua sistem.',
    category: 'Integrasi Sistem & API',
    commercialParent: '/id/solusi/integrasi-sistem',
    relatedArticlePaths: [
      '/id/insight/manfaat-integrasi-api',
      '/id/insight/apa-itu-software-custom',
    ],
  },
  {
    path: '/id/insight/manfaat-integrasi-api',
    title: 'Manfaat Integrasi API untuk Menghubungkan Sistem Bisnis | Kognifx',
    h1: 'Manfaat Integrasi API untuk Bisnis',
    description:
      'Pelajari manfaat integrasi API untuk sinkronisasi data, otomatisasi workflow, koneksi aplikasi, dan pengurangan proses manual antar sistem.',
    shortDescription:
      'Mengapa API membantu sinkronisasi data, otomasi, dan koneksi antar aplikasi.',
    category: 'Integrasi Sistem & API',
    commercialParent: '/id/solusi/integrasi-sistem',
    relatedArticlePaths: [
      '/id/insight/apa-itu-system-integration',
      '/id/insight/apa-itu-ai-automation',
    ],
  },
  {
    path: '/id/insight/apa-itu-iot-untuk-bisnis',
    title: 'Apa Itu IoT? Contoh dan Manfaat untuk Bisnis & Industri | Kognifx',
    h1: 'Apa Itu IoT?',
    description:
      'Pelajari apa itu IoT, cara perangkat mengirim data ke sistem, contoh monitoring dan automation, serta manfaat IoT untuk bisnis dan industri.',
    shortDescription:
      'Dasar IoT untuk bisnis: perangkat, telemetry, dashboard, dan integrasi ke software.',
    category: 'IoT',
    commercialParent: '/id/solusi/iot',
    relatedArticlePaths: [
      '/id/insight/apa-itu-system-integration',
      '/id/insight/apa-itu-ai-automation',
    ],
  },
];

export const indonesianInsightPaths = [
  indonesianInsightHubPath,
  ...indonesianInsightArticles.map((article) => article.path),
] as const;

export function getInsightArticleByPath(path: string) {
  return indonesianInsightArticles.find((article) => article.path === path);
}

export function getInsightArticlesByCategory(category: InsightCategory) {
  return indonesianInsightArticles.filter(
    (article) => article.category === category
  );
}

export function getRelatedInsightArticles(path: string) {
  const article = getInsightArticleByPath(path);
  if (!article) return [];

  return article.relatedArticlePaths
    .map((relatedPath) => getInsightArticleByPath(relatedPath))
    .filter((related): related is IndonesianInsightArticle => Boolean(related));
}

export const insightCategoryOrder: InsightCategory[] = [
  'Software Custom',
  'AI & Automation',
  'ERP & Enterprise Systems',
  'CRM & Customer Systems',
  'HR Systems',
  'Warehouse & Inventory',
  'Commerce & Marketplace',
  'SaaS & Platforms',
  'Integrasi Sistem & API',
  'IoT',
];

import type { IndonesianSolutionDetailPath } from '@/lib/indonesian-solution-routes';

export const indonesianInsightHubPath = '/id/insight' as const;

export type InsightCategory =
  | 'Software Custom'
  | 'AI & Automation'
  | 'ERP & Enterprise Systems'
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
    path: '/id/insight/apa-itu-system-integration',
    title: 'Apa Itu System Integration? Manfaat Integrasi Sistem Bisnis | Kognifx',
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
  'Integrasi Sistem & API',
  'IoT',
];

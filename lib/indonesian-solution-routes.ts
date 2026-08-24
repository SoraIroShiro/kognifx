/** Indonesian solution detail pages without English language pairs. */
export const indonesianSolutionDetailPaths = [
  '/id/solusi/software-custom',
  '/id/solusi/ai-automation',
  '/id/solusi/erp-custom',
  '/id/solusi/iot',
  '/id/solusi/integrasi-sistem',
  '/id/solusi/crm',
  '/id/solusi/hris',
  '/id/solusi/wms-inventory',
  '/id/solusi/ecommerce-marketplace',
  '/id/solusi/saas-platform',
] as const;

export type IndonesianSolutionDetailPath =
  (typeof indonesianSolutionDetailPaths)[number];

export type RelatedSolutionLink = {
  label: string;
  href: IndonesianSolutionDetailPath | '/id/solusi';
  description: string;
};

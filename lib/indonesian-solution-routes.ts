/** Indonesian solution detail pages without English language pairs (Phase 2 Batch A). */
export const indonesianSolutionDetailPaths = [
  '/id/solusi/software-custom',
  '/id/solusi/ai-automation',
  '/id/solusi/erp-custom',
  '/id/solusi/iot',
  '/id/solusi/integrasi-sistem',
] as const;

export type IndonesianSolutionDetailPath =
  (typeof indonesianSolutionDetailPaths)[number];

export type RelatedSolutionLink = {
  label: string;
  href: IndonesianSolutionDetailPath | '/id/solusi';
  description: string;
};

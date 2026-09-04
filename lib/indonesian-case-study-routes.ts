/** Indonesian case study pages without English language pairs. */
export const indonesianCaseStudyHubPath = '/id/studi-kasus' as const;

export type IndonesianCaseStudy = {
  path: string;
  title: string;
  h1: string;
  description: string;
  shortDescription: string;
  industry: string;
  /** Optional; omit or keep generic to avoid overexposing the client. */
  clientLabel?: string;
};

export const indonesianCaseStudies: IndonesianCaseStudy[] = [
  {
    path: '/id/studi-kasus/platform-enterprise-terintegrasi',
    title: 'Studi Kasus: Platform Enterprise Custom | Kognifx',
    h1: 'Platform Enterprise Terintegrasi untuk Operasional Bisnis yang Kompleks',
    description:
      'Kognifx membangun platform enterprise custom yang menghubungkan CRM, commerce, event, finance, dan automation dalam satu sistem untuk operasional harian.',
    shortDescription:
      'Bagaimana Kognifx merancang platform enterprise custom yang menghubungkan CRM, commerce, event, finance, dan automation.',
    industry: 'Organisasi leadership profesional',
  },
];

export const indonesianCaseStudyPaths = [
  indonesianCaseStudyHubPath,
  ...indonesianCaseStudies.map((study) => study.path),
] as const;

export function getCaseStudyByPath(path: string) {
  return indonesianCaseStudies.find((study) => study.path === path);
}

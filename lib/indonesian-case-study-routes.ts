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
    title: 'Custom Enterprise Platform Development Case Study | Kognifx',
    h1: 'Building an Integrated Enterprise Platform for Complex Business Operations',
    description:
      'Discover how Kognifx built an integrated enterprise platform connecting CRM, commerce, event management, automation, and business intelligence into one scalable solution.',
    shortDescription:
      'How Kognifx designed a scalable enterprise platform connecting customer lifecycle, operations, automation, and intelligence.',
    industry: 'Professional Leadership Organization Ecosystem',
  },
];

export const indonesianCaseStudyPaths = [
  indonesianCaseStudyHubPath,
  ...indonesianCaseStudies.map((study) => study.path),
] as const;

export function getCaseStudyByPath(path: string) {
  return indonesianCaseStudies.find((study) => study.path === path);
}

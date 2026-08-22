export interface HomepageFaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Single source of truth for homepage FAQ (UI + JSON-LD). */
export const homepageFaqItems: HomepageFaqItem[] = [
  {
    id: '1',
    question: 'What is Kognifx?',
    answer:
      'Kognifx is a cognitive build collective that helps organizations convert complexity into structured, working systems.',
  },
  {
    id: '2',
    question: 'What problems does Kognifx solve?',
    answer:
      'We solve unclear problem structures, inconsistent decisions, and execution bottlenecks that prevent ideas from becoming scalable solutions.',
  },
  {
    id: '3',
    question: 'Where does Kognifx add value?',
    answer:
      'We add value in operational systems, procurement optimization, workflow automation, and decision-support tools.',
  },
];

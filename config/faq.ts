// ============================================================
// RAVERON TECHNOLOGIES â€” FAQ Configuration
// [ASSUMED â€” all answers must be confirmed by RAVERON before publishing]
// FAQPage JSON-LD will only be generated for confirmed, visible items.
// ============================================================

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  confirmed: boolean;
  enabled: boolean;
  placements: string[]; // e.g. ['start-a-project', 'services.engineering']
}

export const faqItems: FaqItem[] = [
  {
    id: 'what-kinds-of-projects',
    question: 'What kinds of projects can I send?',
    answer:
      'Data annotation, labeling, AI training, document processing, validation, and technology projects such as web and mobile development. Describe your requirement in your own words on the Start a Project page.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.engineering'],
  },
  {
    id: 'choose-service-before-enquiring',
    question: 'Do I need to choose a service before enquiring?',
    answer:
      'No. Describe what you need in the free-text field and our team will review it.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.engineering'],
  },
  {
    id: 'data-confidentiality',
    question: 'How is my data kept confidential?',
    answer:
      'Project data is handled by assigned team members under confidentiality terms, with access limited to the project. Specific arrangements can be discussed for your requirement.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.engineering'],
  },
  {
    id: 'work-on-our-platform',
    question: 'Can you work on our platform or tools?',
    answer:
      'Where the project requires it, work can be carried out in client-specified platforms or through our own workflow.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.engineering'],
  },
  {
    id: 'delivery-formats',
    question: 'What formats can you deliver?',
    answer:
      'Formats such as XML, HTML, PDF, JSON, and CSV, or another format specified in your requirements.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.engineering'],
  },
  {
    id: 'start-with-small-sample',
    question: 'Can we start with a small sample?',
    answer:
      'A pilot batch can be used to confirm expectations before scaling.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.engineering'],
  },
  {
    id: 'maintain-quality',
    question: 'How do you maintain quality?',
    answer:
      'Through guideline-driven workflows, review stages, and consistency checks, plus feedback loops with you.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.engineering'],
  },
  {
    id: 'scale-with-volume',
    question: 'Can the team scale with our volume?',
    answer:
      'Team capacity can be adjusted to project needs, subject to scope and timeline.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.engineering'],
  },
  {
    id: 'communication-during-project',
    question: 'How will we communicate during the project?',
    answer:
      'You will have a single point of contact and regular progress updates.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'contact'],
  },
  {
    id: 'after-submitting-requirement',
    question: 'What happens after I submit a requirement?',
    answer:
      'Our team reviews the information and contacts you through the details provided. This does not mean the project has been accepted.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project'],
  },
  {
    id: 'information-for-scoping',
    question: 'What information helps you scope a project?',
    answer:
      'Project description, expected scope, data or work volume, timeline, formats, quality expectations, and any supporting files.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project'],
  },
  {
    id: 'websites-and-mobile-apps',
    question: 'Do you build websites and mobile apps too?',
    answer:
      'Yes, Technology & Development covers IT projects, web development, mobile app development, and related technology solutions.',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project', 'services.domains'],
  },
];

export function getFaqItems({
  placement,
  showUnconfirmed = false,
  limit,
}: {
  placement?: string;
  showUnconfirmed?: boolean;
  limit?: number;
}): FaqItem[] {
  let result = faqItems.filter((f) => {
    if (!f.enabled) return false;
    if (!showUnconfirmed && !f.confirmed) return false;
    if (placement && !f.placements.includes(placement)) return false;
    return true;
  });
  if (limit) result = result.slice(0, limit);
  return result;
}


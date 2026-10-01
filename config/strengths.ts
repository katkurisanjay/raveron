// ============================================================
// RAVERON TECHNOLOGIES â€” Workforce & Delivery Strengths
// [ASSUMED â€” all items must be confirmed by RAVERON before publishing]
//
// Items with confirmed: false are hidden in production.
// Toggle SHOW_UNCONFIRMED_STRENGTHS=true in .env for preview.
// ============================================================

export type StrengthGroup =
  | 'workforce'
  | 'quality'
  | 'security'
  | 'delivery'
  | 'technology';

export interface Strength {
  id: string;           // stable slug
  group: StrengthGroup;
  badge: string;        // 2â€“4 words, for chips/badges
  title: string;        // card title
  line: string;         // one-line description (for cards)
  description: string;  // 1â€“2 sentence extended copy (for detail panels)
  icon: string;         // Lucide icon name
  confirmed: boolean;   // default false until RAVERON confirms
  enabled: boolean;     // allows hiding without deleting
  placements: string[]; // e.g. ['home.why', 'services.engineering']
}

export const strengths: Strength[] = [
  // â”€â”€ WORKFORCE & TALENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'vetted-workforce',
    group: 'workforce',
    badge: 'Vetted Team',
    title: 'Vetted Workforce',
    line: 'Team members are screened before joining projects.',
    description:
      'Contributors are reviewed for suitability before they are assigned, so projects start with people matched to the work.',
    icon: 'UserCheck',
    confirmed: false,
    enabled: true,
    placements: ['home.why', 'services.engineering'],
  },
  {
    id: 'pre-trained-professionals',
    group: 'workforce',
    badge: 'Pre-Trained',
    title: 'Pre-Trained Professionals',
    line: 'Trained on project guidelines before work begins.',
    description:
      'Before live work starts, contributors are briefed and trained on the specific instructions of your project.',
    icon: 'GraduationCap',
    confirmed: false,
    enabled: true,
    placements: ['home.why', 'services.engineering', 'careers'],
  },
  {
    id: 'skill-assessed-contributors',
    group: 'workforce',
    badge: 'Skill-Assessed',
    title: 'Skill-Assessed Contributors',
    line: 'Assessed for accuracy and task suitability.',
    description:
      'Task-relevant assessments help place people where their skills fit the work.',
    icon: 'ClipboardCheck',
    confirmed: false,
    enabled: true,
    placements: ['home.why', 'services.engineering'],
  },
  {
    id: 'domain-matched-teams',
    group: 'workforce',
    badge: 'Domain-Matched',
    title: 'Domain-Matched Teams',
    line: 'People assigned according to project type.',
    description:
      'Teams are formed around the nature of the project, whether annotation, language, code, or documents.',
    icon: 'Users',
    confirmed: false,
    enabled: true,
    placements: ['home.why', 'services.engineering'],
  },
  {
    id: 'dedicated-team-leads',
    group: 'workforce',
    badge: 'Team Leads',
    title: 'Dedicated Team Leads',
    line: 'Clear ownership and a point of contact.',
    description:
      'Each project has a lead responsible for guidance, review, and communication.',
    icon: 'UserCog',
    confirmed: false,
    enabled: true,
    placements: ['home.why', 'careers'],
  },
  {
    id: 'scalable-teams',
    group: 'workforce',
    badge: 'Scalable',
    title: 'Scalable Teams',
    line: 'Capacity that grows or shrinks with your needs.',
    description:
      'Team size can be adjusted as scope, volume, or timeline changes.',
    icon: 'TrendingUp',
    confirmed: false,
    enabled: true,
    placements: ['home.why'],
  },
  {
    id: 'multilingual-capability',
    group: 'workforce',
    badge: 'Multilingual',
    title: 'Multilingual Capability',
    line: 'Language support where the project requires it.',
    description:
      'Where a project involves multiple languages, teams can be arranged to support them.',
    icon: 'Languages',
    confirmed: false,
    enabled: true,
    placements: ['services.engineering'],
  },
  {
    id: 'continuous-upskilling',
    group: 'workforce',
    badge: 'Upskilling',
    title: 'Continuous Upskilling',
    line: 'Ongoing training as tools and guidelines evolve.',
    description:
      'Training continues as project instructions, tools, and requirements change.',
    icon: 'BookOpen',
    confirmed: false,
    enabled: true,
    placements: ['careers'],
  },

  // â”€â”€ QUALITY & PROCESS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'guideline-driven-workflows',
    group: 'quality',
    badge: 'Guideline-Driven',
    title: 'Guideline-Driven Workflows',
    line: 'Work follows client-defined instructions.',
    description:
      'Your guidelines define the standard, and workflows are built around them.',
    icon: 'BookMarked',
    confirmed: false,
    enabled: true,
    placements: ['home.quality', 'services.engineering'],
  },
  {
    id: 'multi-stage-quality-review',
    group: 'quality',
    badge: 'Multi-Stage Review',
    title: 'Multi-Stage Quality Review',
    line: 'Review layers before delivery.',
    description:
      'Work passes through defined review steps before it reaches you.',
    icon: 'ListChecks',
    confirmed: false,
    enabled: true,
    placements: ['home.quality', 'services.engineering'],
  },
  {
    id: 'consistency-checks',
    group: 'quality',
    badge: 'Consistency Checks',
    title: 'Consistency Checks',
    line: 'Uniform output across contributors and batches.',
    description:
      'Checks compare output across people and batches to keep results aligned.',
    icon: 'CheckCircle',
    confirmed: false,
    enabled: true,
    placements: ['home.quality', 'services.engineering'],
  },
  {
    id: 'pilot-before-scale',
    group: 'quality',
    badge: 'Pilot First',
    title: 'Pilot Before Scale',
    line: 'Sample batches confirm expectations first.',
    description:
      'A small batch lets both sides confirm quality and format before full-volume work.',
    icon: 'FlaskConical',
    confirmed: false,
    enabled: true,
    placements: ['home.quality', 'services.engineering', 'start-a-project.sidebar'],
  },
  {
    id: 'feedback-revision-loops',
    group: 'quality',
    badge: 'Feedback Loops',
    title: 'Feedback & Revision Loops',
    line: 'Client feedback is built into the cycle.',
    description:
      'Your feedback is captured and applied so later batches improve.',
    icon: 'RefreshCw',
    confirmed: false,
    enabled: true,
    placements: ['home.quality'],
  },
  {
    id: 'transparent-progress-updates',
    group: 'quality',
    badge: 'Progress Updates',
    title: 'Transparent Progress Updates',
    line: 'Regular status communication.',
    description:
      'You are kept informed of progress, blockers, and next steps.',
    icon: 'Activity',
    confirmed: false,
    enabled: true,
    placements: ['home.quality'],
  },
  {
    id: 'traceable-workflows',
    group: 'quality',
    badge: 'Traceable',
    title: 'Traceable Workflows',
    line: 'Clear records of who did what.',
    description:
      'Work is recorded so issues can be reviewed and corrected efficiently.',
    icon: 'GitBranch',
    confirmed: false,
    enabled: true,
    placements: ['services.engineering'],
  },

  // â”€â”€ SECURITY & CONFIDENTIALITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'confidentiality-bound-teams',
    group: 'security',
    badge: 'Confidential',
    title: 'Confidentiality-Bound Teams',
    line: 'NDA-backed handling of client data.',
    description:
      'Team members handle project data under confidentiality terms.',
    icon: 'Lock',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project.sidebar', 'services.engineering'],
  },
  {
    id: 'controlled-data-access',
    group: 'security',
    badge: 'Controlled Access',
    title: 'Controlled Data Access',
    line: 'Access limited to assigned project members.',
    description:
      'Only people assigned to your project have access to its data.',
    icon: 'Shield',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project.sidebar', 'services.engineering'],
  },
  {
    id: 'secure-data-handling',
    group: 'security',
    badge: 'Secure Handling',
    title: 'Secure Data Handling',
    line: 'Safe transfer, storage, and delivery practices.',
    description:
      'Data is transferred, stored, and delivered using practices agreed for the project.',
    icon: 'ShieldCheck',
    confirmed: false,
    enabled: true,
    placements: ['services.engineering'],
  },

  // â”€â”€ DELIVERY & FLEXIBILITY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'deadline-focused-delivery',
    group: 'delivery',
    badge: 'On-Schedule',
    title: 'Deadline-Focused Delivery',
    line: 'Timelines planned and tracked.',
    description:
      'Delivery milestones are set at scoping and tracked throughout.',
    icon: 'Calendar',
    confirmed: false,
    enabled: true,
    placements: ['about.working-approach'],
  },
  {
    id: 'flexible-output-formats',
    group: 'delivery',
    badge: 'Any Format',
    title: 'Flexible Output Formats',
    line: 'XML, HTML, PDF, JSON, CSV, or client-specified formats.',
    description:
      'Output is prepared in the format your platform or pipeline needs.',
    icon: 'FolderOpen',
    confirmed: false,
    enabled: true,
    placements: ['about.working-approach', 'services.engineering'],
  },
  {
    id: 'tool-flexible-execution',
    group: 'delivery',
    badge: 'Tool-Flexible',
    title: 'Tool-Flexible Execution',
    line: 'Work in your platform or our workflow.',
    description:
      'Teams can work inside client-specified tools or use their own workflow where suitable.',
    icon: 'Wrench',
    confirmed: false,
    enabled: true,
    placements: ['about.working-approach'],
  },
  {
    id: 'flexible-engagement-models',
    group: 'delivery',
    badge: 'Flexible Terms',
    title: 'Flexible Engagement Models',
    line: 'One-time, ongoing, or scalable engagements.',
    description:
      'Engagements can be shaped to fit a single project or a continuing need.',
    icon: 'Repeat',
    confirmed: false,
    enabled: true,
    placements: ['about.working-approach'],
  },
  {
    id: 'quick-requirement-onboarding',
    group: 'delivery',
    badge: 'Fast Scoping',
    title: 'Quick Requirement Onboarding',
    line: 'Scoping starts from a written requirement.',
    description:
      'Describe what you need and the team begins reviewing scope, volume, and timeline.',
    icon: 'Zap',
    confirmed: false,
    enabled: true,
    placements: ['about.working-approach', 'start-a-project.sidebar'],
  },
  {
    id: 'single-point-of-communication',
    group: 'delivery',
    badge: 'One Contact',
    title: 'Single Point of Communication',
    line: 'One clear contact per project.',
    description:
      'A single point of contact keeps communication simple and accountable.',
    icon: 'Phone',
    confirmed: false,
    enabled: true,
    placements: ['about.working-approach', 'start-a-project.sidebar'],
  },

  // â”€â”€ TECHNOLOGY & DEVELOPMENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: 'end-to-end-delivery',
    group: 'technology',
    badge: 'End-to-End',
    title: 'End-to-End Delivery',
    line: 'From requirement analysis to deployment.',
    description:
      'Projects are handled from understanding the requirement through build and release.',
    icon: 'ArrowRightLeft',
    confirmed: false,
    enabled: true,
    placements: ['services.domains'],
  },
  {
    id: 'scalable-maintainable-code',
    group: 'technology',
    badge: 'Built to Last',
    title: 'Scalable, Maintainable Code',
    line: 'Scalable, maintainable code.',
    description:
      'Code is structured to be readable, extensible, and easy to maintain.',
    icon: 'Code2',
    confirmed: false,
    enabled: true,
    placements: ['services.domains'],
  },
  {
    id: 'responsive-accessible-builds',
    group: 'technology',
    badge: 'Responsive & Accessible',
    title: 'Responsive, Accessible Builds',
    line: 'Works across devices and users.',
    description:
      'Interfaces are built to adapt to screen sizes and to follow accessibility practices.',
    icon: 'Smartphone',
    confirmed: false,
    enabled: true,
    placements: ['services.domains'],
  },
  {
    id: 'post-launch-support',
    group: 'technology',
    badge: 'Post-Launch Support',
    title: 'Post-Launch Support',
    line: 'Support and improvement after delivery.',
    description:
      'Support and improvements can continue after the first release.',
    icon: 'HeartHandshake',
    confirmed: false,
    enabled: true,
    placements: ['services.domains'],
  },
  {
    id: 'clear-technical-communication',
    group: 'technology',
    badge: 'Plain-Language Updates',
    title: 'Clear Technical Communication',
    line: 'Clear updates for non-technical clients.',
    description:
      'Technical progress is explained in terms that non-technical stakeholders can follow.',
    icon: 'MessageCircle',
    confirmed: false,
    enabled: true,
    placements: ['services.domains'],
  },
];

// â”€â”€ HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

/**
 * Returns strengths filtered by group, placement, and (optionally) confirmed status.
 * In production, only confirmed items are shown unless SHOW_UNCONFIRMED_STRENGTHS is true.
 */
export function getStrengths({
  group,
  placement,
  showUnconfirmed = false,
  limit,
}: {
  group?: StrengthGroup;
  placement?: string;
  showUnconfirmed?: boolean;
  limit?: number;
}): Strength[] {
  let result = strengths.filter((s) => {
    if (!s.enabled) return false;
    if (!showUnconfirmed && !s.confirmed) return false;
    if (group && s.group !== group) return false;
    if (placement && !s.placements.includes(placement)) return false;
    return true;
  });

  if (limit) result = result.slice(0, limit);
  return result;
}


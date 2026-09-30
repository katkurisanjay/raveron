// ============================================================
// RAVERON TECHNOLOGIES — Team Onboarding Process
// [ASSUMED — confirm with RAVERON before publishing]
// ============================================================

export interface OnboardingStep {
  id: string;
  number: string; // "01", "02", etc.
  title: string;
  description: string;
  icon: string; // Lucide icon name
  confirmed: boolean;
  enabled: boolean;
}

export const onboardingSteps: OnboardingStep[] = [
  {
    id: 'screening',
    number: '01',
    title: 'Screening',
    description: 'Candidates are reviewed for suitability and relevant skills.',
    icon: 'Search',
    confirmed: false,
    enabled: true,
  },
  {
    id: 'skill-assessment',
    number: '02',
    title: 'Skill Assessment',
    description: 'Task-relevant tests check accuracy and attention to detail.',
    icon: 'ClipboardCheck',
    confirmed: false,
    enabled: true,
  },
  {
    id: 'guideline-training',
    number: '03',
    title: 'Guideline Training',
    description: 'Contributors are trained on the specific project instructions.',
    icon: 'BookOpen',
    confirmed: false,
    enabled: true,
  },
  {
    id: 'pilot-tasks',
    number: '04',
    title: 'Pilot Tasks',
    description: 'A small supervised batch confirms understanding before live work.',
    icon: 'FlaskConical',
    confirmed: false,
    enabled: true,
  },
  {
    id: 'calibration',
    number: '05',
    title: 'Calibration',
    description: 'Team leads align contributors on edge cases and expected output.',
    icon: 'Sliders',
    confirmed: false,
    enabled: true,
  },
  {
    id: 'live-production',
    number: '06',
    title: 'Live Production',
    description: 'Assigned team works with defined ownership and review.',
    icon: 'Play',
    confirmed: false,
    enabled: true,
  },
  {
    id: 'ongoing-feedback',
    number: '07',
    title: 'Ongoing Feedback',
    description: 'Reviews and client feedback feed back into training.',
    icon: 'RefreshCw',
    confirmed: false,
    enabled: true,
  },
];

export function getOnboardingSteps(showUnconfirmed = false): OnboardingStep[] {
  return onboardingSteps.filter(
    (s) => s.enabled && (showUnconfirmed || s.confirmed)
  );
}

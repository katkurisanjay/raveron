// ============================================================
// RAVERON TECHNOLOGIES — Client Benefits Configuration
// [ASSUMED — confirm with RAVERON before publishing]
// ============================================================

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  confirmed: boolean;
  enabled: boolean;
  placements: string[];
}

export const benefits: Benefit[] = [
  {
    id: 'reduce-in-house-workload',
    title: 'Reduce In-House Workload',
    description: 'Hand off repetitive or large-scale data and development work.',
    icon: 'SquareMinus',
    confirmed: false,
    enabled: true,
    placements: ['home.benefits', 'services.ai-data', 'services.technology'],
  },
  {
    id: 'focus-on-core-work',
    title: 'Focus on Core Work',
    description: 'Your team concentrates on product, research, and strategy.',
    icon: 'Target',
    confirmed: false,
    enabled: true,
    placements: ['home.benefits', 'services.ai-data', 'services.technology'],
  },
  {
    id: 'faster-project-start',
    title: 'Faster Project Start',
    description: 'A written requirement is enough to begin scoping.',
    icon: 'Zap',
    confirmed: false,
    enabled: true,
    placements: ['home.benefits', 'start-a-project.sidebar'],
  },
  {
    id: 'scale-up-or-down',
    title: 'Scale Up or Down',
    description: 'Adjust team capacity as your project changes.',
    icon: 'ArrowUpDown',
    confirmed: false,
    enabled: true,
    placements: ['home.benefits', 'services.ai-data'],
  },
  {
    id: 'consistent-output',
    title: 'Consistent Output',
    description: 'Guideline-driven workflows and review reduce variation.',
    icon: 'CheckCircle',
    confirmed: false,
    enabled: true,
    placements: ['services.ai-data'],
  },
  {
    id: 'clear-communication',
    title: 'Clear Communication',
    description: 'One point of contact and regular progress updates.',
    icon: 'MessageCircle',
    confirmed: false,
    enabled: true,
    placements: ['start-a-project.sidebar'],
  },
  {
    id: 'lower-coordination-effort',
    title: 'Lower Coordination Effort',
    description: 'Structured handover, feedback, and delivery steps.',
    icon: 'Network',
    confirmed: false,
    enabled: true,
    placements: ['services.ai-data', 'services.technology'],
  },
  {
    id: 'format-ready-delivery',
    title: 'Format-Ready Delivery',
    description: 'Output in the formats your pipeline or platform needs.',
    icon: 'FileOutput',
    confirmed: false,
    enabled: true,
    placements: ['services.ai-data'],
  },
];

export function getBenefits({
  placement,
  showUnconfirmed = false,
  limit,
}: {
  placement?: string;
  showUnconfirmed?: boolean;
  limit?: number;
}): Benefit[] {
  let result = benefits.filter((b) => {
    if (!b.enabled) return false;
    if (!showUnconfirmed && !b.confirmed) return false;
    if (placement && !b.placements.includes(placement)) return false;
    return true;
  });
  if (limit) result = result.slice(0, limit);
  return result;
}

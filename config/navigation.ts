// ============================================================
// RAVERON TECHNOLOGIES â€” Navigation Configuration
// ============================================================

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Engineering Services',
        href: '/services/engineering',
        description: 'Full stack, Flutter, DevOps, Cloud, MLOps, and Agentic AI development.',
      },
      {
        label: 'Domain Expertise',
        href: '/services/domains',
        description: 'Healthcare, Agritech, CRM, Warehouse Management, and Mortgage Finance.',
      },
    ],
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const primaryCTA = {
  label: 'Start a Project',
  href: '/start-a-project',
};

export const footerNav = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Engineering Services', href: '/services/engineering' },
    { label: 'Domain Expertise', href: '/services/domains' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};


// ============================================================
// RAVERON TECHNOLOGIES — Navigation Configuration
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
        label: 'AI & Data Services',
        href: '/services/ai-data',
        description: 'Data annotation, labeling, AI training, document processing and more.',
      },
      {
        label: 'Technology & Development',
        href: '/services/technology',
        description: 'Web development, mobile apps, IT projects and technology solutions.',
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
    { label: 'AI & Data Services', href: '/services/ai-data' },
    { label: 'Technology & Development', href: '/services/technology' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

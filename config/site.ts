// ============================================================
// RAVERON TECHNOLOGIES — Site Configuration
// Update this file with real company details before publishing
// ============================================================

export const siteConfig = {
  name: 'RAVERON TECHNOLOGIES',
  shortName: 'Raveron',
  tagline: 'Think Deeper. Build Stronger. Evolve Further.',
  description:
    'RAVERON TECHNOLOGIES provides expert engineering, AI development, and domain-specific consultancy for US-based clients, specializing in full stack, cloud, DevOps, and Agentic AI.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://raverontech.com', // [ASSUMED] — update with real domain

  // Contact
  contact: {
    email: 'raverontechnologies@gmail.com',
    phones: [] as string[],
    whatsapp: '',
    address: 'Raveron Technologies, Warangal, 506002',
  },

  // Social
  social: {
    facebook: '#', // Placeholder
    instagram: '#', // Placeholder
    whatsapp: '#', // Placeholder
    twitter: '#', // Placeholder
    linkedin: '#', // Placeholder
    youtube: '',
  },

  // SEO defaults
  seo: {
    titleTemplate: '%s | RAVERON TECHNOLOGIES',
    defaultTitle: 'RAVERON TECHNOLOGIES — Expert Technology Consultants & Engineering Partners',
    defaultDescription:
      'RAVERON TECHNOLOGIES delivers premium full-stack, cloud, DevOps, and AI development services with deep domain expertise in Healthcare, Agritech, CRM, and Finance.',
    ogImage: '/images/og-default.png', // [ASSUMED] — provide actual OG image
    twitterHandle: '@raverontech', // [ASSUMED]
    locale: 'en_US',
  },

  // Feature flags
  features: {
    // When false (production), unconfirmed strength/benefit/onboarding/FAQ items are hidden
    showUnconfirmedContent:
      process.env.SHOW_UNCONFIRMED_STRENGTHS === 'true' ||
      process.env.NODE_ENV === 'development',
  },
};

export type SiteConfig = typeof siteConfig;

// ============================================================
// RAVERON TECHNOLOGIES — Site Configuration
// Update this file with real company details before publishing
// ============================================================

export const siteConfig = {
  name: 'RAVERON TECHNOLOGIES',
  shortName: 'Raveron',
  tagline: 'Think Deeper. Build Stronger. Evolve Further.',
  description:
    'RAVERON TECHNOLOGIES provides professional AI & Data Services and Technology & Development solutions for global business requirements.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://raverontech.com', // [ASSUMED] — update with real domain

  // Contact
  contact: {
    email: 'raverontechnologies@gmail.com',
    phones: [] as string[],
    whatsapp: '',
    address: 'Raveron Technologies, Hyderabad, Telangana, India',
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
    defaultTitle: 'RAVERON TECHNOLOGIES — AI & Data Services | Technology Development',
    defaultDescription:
      'RAVERON TECHNOLOGIES delivers professional AI & Data Services, Data Annotation, AI Training, and Technology & Development solutions for global businesses.',
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

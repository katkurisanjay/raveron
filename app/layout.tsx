import type { Metadata, Viewport } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';
import { Navigation } from '@/components/navigation/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [
    // Core service keywords
    'AI data services',
    'data annotation services',
    'image annotation',
    'video annotation',
    'text annotation',
    'AI training data',
    'data labeling company',
    'machine learning data preparation',
    'document processing',
    'data processing outsourcing',
    // Technology keywords
    'technology development company',
    'web development company India',
    'mobile app development',
    'custom software development',
    'IT project delivery',
    'full stack development',
    // Business/outsourcing keywords
    'AI outsourcing India',
    'data annotation company India',
    'BPO services',
    'technology outsourcing',
    'offshore development',
    // Company
    'RAVERON TECHNOLOGIES',
    'Raveron',
    'Hyderabad technology company',
    'Telangana AI company',
  ],
  authors: [{ name: 'RAVERON TECHNOLOGIES', url: siteConfig.url }],
  creator: 'RAVERON TECHNOLOGIES',
  publisher: 'RAVERON TECHNOLOGIES',
  category: 'Technology',
  classification: 'Business',
  openGraph: {
    type: 'website',
    locale: siteConfig.seo.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: 'RAVERON TECHNOLOGIES — AI & Data Services | Technology Development',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.seo.twitterHandle,
    creator: siteConfig.seo.twitterHandle,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    // google: 'your-google-site-verification-code', // Add when you have Google Search Console
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1736',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'RAVERON TECHNOLOGIES',
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.svg`,
    image: `${siteConfig.url}${siteConfig.seo.ogImage}`,
    description: siteConfig.seo.defaultDescription,
    email: siteConfig.contact.email || undefined,
    telephone: siteConfig.contact.phones?.[0] || undefined,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
      streetAddress: siteConfig.contact.address || 'Hyderabad, Telangana, India',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.977111',
      longitude: '79.605602',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    serviceType: [
      'AI Data Annotation',
      'Machine Learning Data Labeling',
      'Image Annotation Services',
      'Video Annotation Services',
      'Text Annotation Services',
      'Web Development',
      'Mobile App Development',
      'Custom Software Development',
      'IT Project Delivery',
    ],
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    contactPoint: [
      ...(siteConfig.contact.phones || []).map(phone => ({
        '@type': 'ContactPoint',
        telephone: phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['English', 'Telugu', 'Hindi'],
      })),
      ...(siteConfig.contact.email ? [{
        '@type': 'ContactPoint',
        email: siteConfig.contact.email,
        contactType: 'customer support',
      }] : []),
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RAVERON TECHNOLOGIES',
    url: siteConfig.url,
    description: siteConfig.seo.defaultDescription,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <ScrollProgress />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

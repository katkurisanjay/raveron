import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Hero } from '@/components/hero/Hero';
import { CompanyIntroSection } from '@/components/sections/CompanyIntroSection';
import { CoreCapabilitiesSection } from '@/components/sections/CoreCapabilitiesSection';
import { AIDataServicesSection, TechServicesSection } from '@/components/sections/ServicesSections';
import { WhyRaveronSection } from '@/components/sections/WhyRaveronSection';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { QualitySection } from '@/components/sections/QualitySection';
import { CareersPreviewSection } from '@/components/sections/CareersPreviewSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'AI & Data Annotation Services | Technology Development Company | RAVERON TECHNOLOGIES',
  description:
    'RAVERON TECHNOLOGIES offers professional AI & Data Services — data annotation, image & video labeling, AI training data — and Technology & Development solutions including web development, mobile apps, and custom software for global businesses. Based in Hyderabad, India.',
  keywords: [
    'RAVERON TECHNOLOGIES',
    'AI data annotation company',
    'data labeling services India',
    'image annotation services',
    'video annotation services',
    'AI training data company',
    'machine learning data services',
    'technology development Hyderabad',
    'web development company India',
    'mobile app development India',
    'custom software development',
    'IT outsourcing India',
  ],
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntroSection />
      <CoreCapabilitiesSection />
      <AIDataServicesSection />
      <TechServicesSection />
      <WhyRaveronSection />
      <HowWeWorkSection />
      <QualitySection />
      <CareersPreviewSection />
      <CTASection />
    </>
  );
}

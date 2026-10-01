import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Hero } from '@/components/hero/Hero';
import { CompanyIntroSection } from '@/components/sections/CompanyIntroSection';
import { CoreCapabilitiesSection } from '@/components/sections/CoreCapabilitiesSection';
import { EngineeringServicesSection, DomainExpertiseSection } from '@/components/sections/ServicesSections';
import { WhyRaveronSection } from '@/components/sections/WhyRaveronSection';
import { HowWeWorkSection } from '@/components/sections/HowWeWorkSection';
import { QualitySection } from '@/components/sections/QualitySection';
import { CareersPreviewSection } from '@/components/sections/CareersPreviewSection';
import { CTASection } from '@/components/sections/CTASection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';

export const metadata: Metadata = {
  title: 'Expert Technology Consultants & Engineering Partners | RAVERON',
  description:
    'RAVERON TECHNOLOGIES offers premium software engineering, DevOps, cloud solutions (AWS, Azure, GCP), and AI development. We bring deep domain expertise in Healthcare, Agritech, CRM, Warehouse Management, and Mortgage Finance to US-based clients.',
  keywords: [
    'Technology Consultants US',
    'Full Stack Development Company',
    'Flutter App Development',
    'DevOps & MLOps Consultants',
    'Cloud Architecture AWS Azure GCP',
    'Agentic AI Development',
    'Voice Call Analyzer AI',
    'Healthcare Software Solutions',
    'Agritech Development',
    'Warehouse Management Systems Robotics',
    'Mortgage Finance Tech',
    'Custom Software Development',
  ],
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntroSection />
      <CoreCapabilitiesSection />
      <EngineeringServicesSection />
      <DomainExpertiseSection />
      <PortfolioSection />
      <WhyRaveronSection />
      <HowWeWorkSection />
      <QualitySection />
      <CareersPreviewSection />
      <CTASection />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/services/ServiceCard';
import { StrengthGrid } from '@/components/strengths/StrengthCard';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { CTASection } from '@/components/sections/CTASection';
import { serviceCategories } from '@/config/services';
import { getStrengths } from '@/config/strengths';
import { getFaqItems } from '@/config/faq';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'AI & Data Annotation Services | Image, Video & Text Labeling | RAVERON TECHNOLOGIES',
  description:
    'RAVERON TECHNOLOGIES delivers professional AI & Data Services: image annotation, video annotation, text annotation, data labeling, AI training data preparation, voice/audio annotation, code annotation, document processing, and quality validation. Scalable, accurate, cost-effective outsourcing from India.',
  keywords: [
    'image annotation services',
    'video annotation services',
    'text annotation services',
    'data labeling services',
    'AI training data India',
    'data annotation company India',
    'machine learning data labeling',
    'bounding box annotation',
    'semantic segmentation annotation',
    'named entity recognition annotation',
    'document processing services',
    'quality validation AI data',
    'outsource data annotation',
    'AI data services Hyderabad',
  ],
  alternates: { canonical: '/services/ai-data' },
};

export default function AIDataServicesPage() {
  const category = serviceCategories.find((c) => c.id === 'ai-data')!;
  const show = siteConfig.features.showUnconfirmedContent;

  const workforceStrengths = getStrengths({ group: 'workforce', showUnconfirmed: show, limit: 6 });
  const qualityStrengths = getStrengths({ group: 'quality', showUnconfirmed: show, limit: 6 });
  const securityStrengths = getStrengths({ group: 'security', showUnconfirmed: show });
  const faqItems = getFaqItems({ placement: 'services.ai-data', showUnconfirmed: show });

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
      { '@type': 'ListItem', position: 3, name: 'AI & Data Services', item: `${siteConfig.url}/services/ai-data` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        style={{ background: 'var(--color-midnight)', paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="ai-data-h1"
      >
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} aria-hidden="true" />
        <div style={{ position: 'absolute', top: '-20%', right: '0', width: '50%', height: '140%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.14) 0%, transparent 65%)', filter: 'blur(60px)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: '1.5rem' }}>
              ← Services
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>
              AI & Data Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="ai-data-h1" className="display-xl" style={{ color: 'var(--color-white)', maxWidth: '680px', marginBottom: '1.5rem' }}>
              {category.tagline}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: 1.8 }}>
              {category.description}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href="/start-a-project" className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }}>
              Start a Project <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="section theme-soft" aria-labelledby="ai-services-grid-heading">
        <div className="container">
          <SectionHeading id="ai-services-grid-heading" eyebrow="Services" title="Full range of" titleHighlight="AI & Data capabilities." />
          <div className="grid-services" style={{ marginTop: '2.5rem' }}>
            {category.services.map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Workforce strengths */}
      {workforceStrengths.length > 0 && (
        <section className="section theme-white" aria-labelledby="ai-workforce-heading">
          <div className="container">
            <SectionHeading id="ai-workforce-heading" eyebrow="Our Teams" title="Who does the work." titleHighlight="And how they're prepared." description="Every project is staffed with assessed, trained contributors managed by a dedicated lead." />
            <div style={{ marginTop: '2.5rem' }}>
              <StrengthGrid strengths={workforceStrengths} dark={false} columns={3} />
            </div>
          </div>
        </section>
      )}

      {/* Quality strengths */}
      {qualityStrengths.length > 0 && (
        <section className="section theme-navy" aria-labelledby="ai-quality-heading">
          <div className="container">
            <SectionHeading id="ai-quality-heading" eyebrow="Quality & Process" title="Built-in review" titleHighlight="at every stage." description="Structured workflows, multi-stage review, and client feedback loops keep output consistent and aligned to your requirements." light />
            <div style={{ marginTop: '2.5rem' }}>
              <StrengthGrid strengths={qualityStrengths} dark columns={3} />
            </div>
          </div>
        </section>
      )}

      {/* Security */}
      {securityStrengths.length > 0 && (
        <section className="section theme-soft" aria-labelledby="ai-security-heading">
          <div className="container">
            <SectionHeading id="ai-security-heading" eyebrow="Security & Confidentiality" title="Your data." titleHighlight="Handled with care." description="Project data is handled by assigned, confidentiality-bound team members with controlled access." />
            <div style={{ marginTop: '2.5rem', maxWidth: '800px' }}>
              <StrengthGrid strengths={securityStrengths} dark={false} columns={3} />
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="section theme-white" aria-labelledby="ai-faq-heading">
          <div className="container" style={{ maxWidth: '760px' }}>
            <SectionHeading id="ai-faq-heading" eyebrow="Common Questions" title="Frequently asked" titleHighlight="questions." />
            <div style={{ marginTop: '2.5rem' }}>
              <FaqAccordion items={faqItems} light={false} />
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

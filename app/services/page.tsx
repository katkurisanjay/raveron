import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/services/ServiceCard';
import { serviceCategories } from '@/config/services';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Our Services | AI Data Annotation & Technology Development | RAVERON TECHNOLOGIES',
  description:
    'RAVERON TECHNOLOGIES offers two core service lines: AI & Data Services (image annotation, video labeling, text annotation, AI training datasets, document processing) and Technology & Development (web development, mobile apps, custom software, IT project delivery). Serving global clients from India.',
  keywords: [
    'AI data services',
    'data annotation services India',
    'image annotation company',
    'video labeling services',
    'text annotation services',
    'AI training datasets',
    'document processing outsourcing',
    'web development services',
    'mobile app development services',
    'custom software development India',
    'technology development services',
  ],
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        style={{
          background: 'var(--color-midnight)',
          paddingTop: 'calc(var(--nav-height) + 4rem)',
          paddingBottom: '5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-labelledby="services-hero-heading"
      >
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>
              Our Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="services-hero-heading" className="display-xl" style={{ color: 'var(--color-white)', marginBottom: '1.5rem', maxWidth: '700px' }}>
              AI & Data. Technology.{' '}
              <span className="text-gradient-blue">Delivered professionally.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.8 }}>
              RAVERON operates across two capability divisions — each with a structured team, quality-reviewed workflow,
              and clear delivery process.
            </p>
          </Reveal>

          {/* Division nav */}
          <Reveal delay={0.3}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              {serviceCategories.map((cat) => (
                <Link key={cat.id} href={cat.href} className="btn btn-secondary">
                  {cat.name} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Both service categories */}
      {serviceCategories.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className="section"
          style={{ background: ci % 2 === 0 ? 'var(--color-soft-white)' : 'var(--color-white)' }}
          aria-labelledby={`section-${cat.id}`}
        >
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
              <SectionHeading
                id={`section-${cat.id}`}
                eyebrow={`Division 0${ci + 1}`}
                title={cat.name}
                titleHighlight={cat.tagline}
                description={cat.description}
              />
              <Reveal delay={0.2} direction="right">
                <Link href={cat.href} className="btn btn-primary" style={{ flexShrink: 0 }}>
                  View Full Details <ArrowRight size={15} />
                </Link>
              </Reveal>
            </div>

            <div className="grid-services">
              {cat.services.map((svc, i) => (
                <ServiceCard key={svc.id} service={svc} index={i} dark={false} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}

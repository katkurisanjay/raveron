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
  title: 'Technology & Development Services | Web, Mobile & Custom Software | RAVERON TECHNOLOGIES',
  description:
    'RAVERON TECHNOLOGIES provides end-to-end Technology & Development services: custom web development, mobile app development (iOS & Android), software product development, IT project delivery, API integration, UI/UX design, and post-launch support. Trusted technology partner from India.',
  keywords: [
    'web development services India',
    'mobile app development India',
    'custom software development India',
    'IT project delivery',
    'software development outsourcing',
    'full stack development India',
    'React development company',
    'Next.js development',
    'API development services',
    'UI UX design services',
    'technology partner India',
    'offshore software development',
  ],
  alternates: { canonical: '/services/technology' },
};

export default function TechnologyServicesPage() {
  const category = serviceCategories.find((c) => c.id === 'technology')!;
  const show = siteConfig.features.showUnconfirmedContent;

  const techStrengths = getStrengths({ group: 'technology', showUnconfirmed: show });
  const faqItems = getFaqItems({ placement: 'services.technology', showUnconfirmed: show });

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
      { '@type': 'ListItem', position: 3, name: 'Technology & Development', item: `${siteConfig.url}/services/technology` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        style={{ background: 'var(--color-midnight)', paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="tech-h1"
      >
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} aria-hidden="true" />
        <div style={{ position: 'absolute', top: '-20%', left: '0', width: '50%', height: '140%', background: 'radial-gradient(ellipse, rgba(6,182,212,0.1) 0%, transparent 65%)', filter: 'blur(60px)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: '1.5rem' }}>
              ← Services
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <span className="eyebrow" style={{ color: 'var(--color-cyan-accent)', display: 'block', marginBottom: '1rem' }}>
              Technology & Development
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="tech-h1" className="display-xl" style={{ color: 'var(--color-white)', maxWidth: '680px', marginBottom: '1.5rem' }}>
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
      <section className="section theme-soft" aria-labelledby="tech-services-heading">
        <div className="container">
          <SectionHeading id="tech-services-heading" eyebrow="Services" title="Full range of" titleHighlight="technology capabilities." />
          <div className="grid-services" style={{ marginTop: '2.5rem' }}>
            {category.services.map((svc, i) => (
              <ServiceCard key={svc.id} service={svc} index={i} dark={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech strengths */}
      {techStrengths.length > 0 && (
        <section className="section theme-navy" aria-labelledby="tech-strengths-heading">
          <div className="container">
            <SectionHeading id="tech-strengths-heading" eyebrow="How We Build" title="Engineered to" titleHighlight="last." description="From requirement analysis to post-launch support, every engagement is managed with clear communication and structured delivery." light />
            <div style={{ marginTop: '2.5rem' }}>
              <StrengthGrid strengths={techStrengths} dark columns={3} />
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="section theme-white" aria-labelledby="tech-faq-heading">
          <div className="container" style={{ maxWidth: '760px' }}>
            <SectionHeading id="tech-faq-heading" eyebrow="Common Questions" title="Frequently asked" titleHighlight="questions." />
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

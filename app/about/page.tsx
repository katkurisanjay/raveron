import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { StrengthGrid } from '@/components/strengths/StrengthCard';
import { CTASection } from '@/components/sections/CTASection';
import { getStrengths } from '@/config/strengths';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About RAVERON TECHNOLOGIES | AI & Data Services Company, Hyderabad India',
  description:
    'RAVERON TECHNOLOGIES is a Hyderabad-based technology company delivering professional AI & Data Services (data annotation, image labeling, AI training data) and Technology & Development (web, mobile, custom software) for global clients. Learn about our team, principles, and approach.',
  keywords: [
    'about RAVERON TECHNOLOGIES',
    'AI company Hyderabad',
    'data annotation company India',
    'technology company Telangana',
    'AI services company India',
    'data labeling company Hyderabad',
    'IT company India',
    'technology outsourcing India',
  ],
  alternates: { canonical: '/about' },
};

const principles = [
  { word: 'Intelligent', desc: 'We think deeper — analytical rigour and structured thinking in every project.' },
  { word: 'Strong', desc: 'We build to last — quality, consistency, and long-term value in everything we deliver.' },
  { word: 'Evolving', desc: 'We grow continuously — improving processes, people, and capabilities with every engagement.' },
  { word: 'Creative', desc: 'We turn ideas into impact — translating requirements into effective outcomes.' },
  { word: 'Global', desc: 'We operate with a global business mindset — built for international clients and collaboration.' },
];

const workingSteps = [
  { num: '01', label: 'Receive your requirement', desc: 'Submit your project details. Our team reviews scope, volume, format, and timeline.' },
  { num: '02', label: 'Scope & plan', desc: 'We define the workflow, assign the right team, and establish quality and delivery benchmarks.' },
  { num: '03', label: 'Execute with review', desc: 'Work proceeds with guideline-driven execution and staged quality checks throughout.' },
  { num: '04', label: 'Deliver & support', desc: 'Output delivered in your required format, with follow-on support and feedback loops as needed.' },
];

export default function AboutPage() {
  const deliveryStrengths = getStrengths({
    group: 'delivery',
    showUnconfirmed: siteConfig.features.showUnconfirmedContent,
    limit: 6,
  });

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${siteConfig.url}/about` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Hero */}
      <section
        style={{
          background: 'var(--color-midnight)',
          paddingTop: 'calc(var(--nav-height) + 4rem)',
          paddingBottom: '5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-labelledby="about-hero-heading"
      >
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>
              About RAVERON
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="about-hero-heading" className="display-xl" style={{ color: 'var(--color-white)', marginBottom: '1.5rem' }}>
              A technology company built for{' '}
              <span className="text-gradient-blue">real business requirements.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              RAVERON TECHNOLOGIES provides professional AI & Data Services and Technology & Development
              solutions. We exist to help businesses get work done — efficiently, accurately, and at scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section theme-white" aria-labelledby="overview-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem 5rem', alignItems: 'start' }} className="about-grid">
            <div>
              <SectionHeading
                id="overview-heading"
                eyebrow="What We Do"
                title="Two divisions."
                titleHighlight="Unified delivery."
              />
              <Reveal delay={0.1}>
                <p className="body-md" style={{ color: 'var(--color-cool-gray)', lineHeight: 1.8, marginTop: '1.5rem' }}>
                  RAVERON operates across two broad capability areas. Our <strong>AI & Data Services</strong> division
                  covers data annotation, image and video labeling, AI training data preparation, voice training,
                  code annotation, multi-turn dialogue datasets, XML and document processing, and quality validation.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="body-md" style={{ color: 'var(--color-cool-gray)', lineHeight: 1.8, marginTop: '1rem' }}>
                  Our <strong>Technology & Development</strong> division delivers IT projects, web development,
                  mobile app development, and technology solutions — from requirement analysis through
                  deployment and post-launch support.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link href="/services/ai-data" className="btn btn-primary">
                    AI & Data Services <ArrowRight size={15} />
                  </Link>
                  <Link href="/services/technology" className="btn btn-outline">
                    Technology & Development
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Principles */}
            <div>
              <Reveal>
                <p className="label" style={{ color: 'var(--color-cool-gray)', marginBottom: '1.5rem' }}>Our Principles</p>
              </Reveal>
              {principles.map((p, i) => (
                <Reveal key={p.word} delay={i * 0.07}>
                  <div style={{
                    display: 'flex', gap: '1.25rem', paddingBlock: '1rem',
                    borderBottom: i < principles.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                  }}>
                    <span style={{
                      flexShrink: 0, minWidth: '90px', fontSize: '0.75rem', fontWeight: 700,
                      letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-blue-electric)', paddingTop: '2px',
                    }}>{p.word}</span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(min-width:1024px){.about-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Working Approach */}
      <section className="section theme-soft" aria-labelledby="approach-heading">
        <div className="container">
          <SectionHeading
            id="approach-heading"
            eyebrow="Working Approach"
            title="How we engage"
            titleHighlight="every project."
            description="A consistent, structured methodology that keeps delivery on track and communication clear."
            align="center"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1.25rem', marginTop: '3rem' }}>
            {workingSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div style={{
                  padding: '2rem 1.5rem', background: 'var(--color-white)',
                  borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)',
                }}>
                  <span className="mono" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '0.75rem', fontSize: '0.75rem' }}>
                    {step.num}
                  </span>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-navy-primary)', marginBottom: '0.5rem' }}>
                    {step.label}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-cool-gray)', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Delivery strengths */}
          {deliveryStrengths.length > 0 && (
            <div style={{ marginTop: '3rem' }}>
              <Reveal>
                <p className="label" style={{ color: 'var(--color-cool-gray)', marginBottom: '1.25rem' }}>Delivery & Flexibility</p>
              </Reveal>
              <StrengthGrid strengths={deliveryStrengths} dark={false} columns={3} />
            </div>
          )}
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section theme-white" aria-labelledby="about-careers-heading">
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px', marginInline: 'auto' }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '0.875rem' }}>
              Join the Team
            </span>
            <h2 id="about-careers-heading" className="display-md" style={{ color: 'var(--color-navy-primary)', marginBottom: '1rem' }}>
              Looking to grow your career?
            </h2>
            <p className="body-md" style={{ color: 'var(--color-cool-gray)', marginBottom: '2rem', lineHeight: 1.8 }}>
              We build teams around skills and prepare people before they begin. View current openings or get in touch.
            </p>
            <Link href="/careers" className="btn btn-primary btn-lg">
              View Careers <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import type { Metadata } from 'next';
import { Lock, Zap, Phone, FlaskConical } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { getFaqItems } from '@/config/faq';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Start a Project | Outsource AI & Technology Needs | RAVERON TECHNOLOGIES',
  description:
    'Submit your AI data annotation, mobile app, or web development project to RAVERON TECHNOLOGIES. Tell us about your scope and timeline, and our team will get back to you with a tailored solution.',
  keywords: [
    'outsource AI project',
    'hire data annotation team',
    'hire developers India',
    'start IT project',
    'RAVERON TECHNOLOGIES project enquiry',
  ],
  alternates: { canonical: '/start-a-project' },
};

const sidebarTrustItems = [
  { icon: Lock, title: 'Confidential Handling', desc: 'Submissions are handled under confidentiality terms.' },
  { icon: FlaskConical, title: 'Pilot First', desc: 'We can start with a small sample batch to confirm expectations.' },
  { icon: Phone, title: 'One Point of Contact', desc: 'A single contact for clear, accountable communication.' },
  { icon: Zap, title: 'Fast Scoping', desc: 'A written requirement is enough for us to begin reviewing scope.' },
];

export default function StartAProjectPage() {
  const show = siteConfig.features.showUnconfirmedContent;
  const faqItems = getFaqItems({ placement: 'start-a-project', showUnconfirmed: show });

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Start a Project', item: `${siteConfig.url}/start-a-project` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        style={{ background: 'var(--color-midnight)', paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="sap-h1"
      >
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.35 }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>Start a Project</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="sap-h1" className="display-xl" style={{ color: 'var(--color-white)', marginBottom: '1.25rem' }}>
              Tell us what you need.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              Describe your requirement in your own words. You don&apos;t need to choose a service first.
              Our team will review the information and contact you through the details provided.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main content */}
      <section className="section theme-soft" aria-label="Project enquiry">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem 4rem', alignItems: 'start' }} className="sap-grid">
            {/* Form column */}
            <div>
              <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-light)', padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                <SectionHeading eyebrow="Your Requirement" title="Project enquiry" description="Fill in the details below. The more you share, the faster we can scope your project." />
                <div style={{ marginTop: '2rem' }}>
                  <EnquiryForm />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside aria-label="Why work with us">
              {/* Trust items */}
              <div style={{ background: 'var(--color-navy-primary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-dark)', padding: '2rem', marginBottom: '1.25rem' }}>
                <p className="label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>Why RAVERON</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {sidebarTrustItems.map(({ icon: Icon, title, desc }) => (
                    <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
                      <div style={{ flexShrink: 0, width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)', background: 'rgba(37,99,235,0.15)' }}>
                        <Icon size={15} style={{ color: 'var(--color-blue-electric)' }} aria-hidden="true" />
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.2rem' }}>{title}</span>
                        <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What we need */}
              <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-light)', padding: '2rem' }}>
                <p className="label" style={{ color: 'var(--color-cool-gray)', marginBottom: '1.25rem' }}>What helps us scope faster</p>
                <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {['Project description in plain language', 'Expected volume (files, records, hours)', 'Timeline or deadline', 'Preferred formats or tools', 'Quality benchmarks or guidelines', 'Any supporting files you can share'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-cool-gray)', lineHeight: 1.6 }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--color-cyan-accent)', flexShrink: 0, marginTop: '0.45rem' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* FAQ below form */}
          {faqItems.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <SectionHeading eyebrow="Common Questions" title="Before you submit" titleHighlight="— FAQs." align="center" />
              <div style={{ marginTop: '2rem', maxWidth: '760px', marginInline: 'auto' }}>
                <FaqAccordion items={faqItems} light={false} />
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @media(min-width:1024px){.sap-grid{grid-template-columns:2fr 1fr!important;}}
      `}</style>
    </>
  );
}

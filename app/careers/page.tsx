import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Careers | Job Openings & Opportunities | RAVERON TECHNOLOGIES',
  description:
    'Join RAVERON TECHNOLOGIES — explore current job opportunities in AI data annotation, technology development, software engineering, and related roles in Hyderabad, India.',
  keywords: [
    'careers at RAVERON TECHNOLOGIES',
    'AI jobs Hyderabad',
    'data annotation jobs India',
    'software engineering jobs Hyderabad',
    'technology careers India',
    'IT jobs Hyderabad',
  ],
  alternates: { canonical: '/careers' },
};

// Placeholder job structure — populated from DB/admin in production
// These are empty by default until jobs are added through the admin panel
const currentJobs: {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  posted: string;
}[] = [
  // Jobs will appear here once added through the admin panel
];

const cultureItems = [
  { label: 'Training First', desc: 'You are prepared with guidelines and practice tasks before live project work begins.' },
  { label: 'Skill Matched', desc: 'People are assigned to projects that suit their assessed abilities.' },
  { label: 'Lead-Supported', desc: 'Dedicated team leads provide guidance, feedback, and direction throughout.' },
  { label: 'Continuously Improving', desc: 'Reviews, feedback, and updated training keep the team growing.' },
];

export default function CareersPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Careers', item: `${siteConfig.url}/careers` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        style={{ background: 'var(--color-midnight)', paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="careers-h1"
      >
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} aria-hidden="true" />
        <div style={{ position: 'absolute', top: '-10%', right: '0', width: '45%', height: '120%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 65%)', filter: 'blur(60px)' }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>Careers at RAVERON</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="careers-h1" className="display-xl" style={{ color: 'var(--color-white)', maxWidth: '680px', marginBottom: '1.5rem' }}>
              Grow through{' '}
              <span className="text-gradient-blue">purposeful work.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', lineHeight: 1.8 }}>
              We build teams around skills, prepare people properly before they begin,
              and invest in continuous development. If that sounds like the right environment
              for you, explore our current openings below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Current openings */}
      <section className="section theme-soft" aria-labelledby="openings-heading">
        <div className="container">
          <SectionHeading id="openings-heading" eyebrow="Current Openings" title="Open positions." />

          <div style={{ marginTop: '2.5rem' }}>
            {currentJobs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {currentJobs.map((job) => (
                  <Reveal key={job.id}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', padding: '1.5rem 2rem', background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
                      <div>
                        <h3 style={{ fontWeight: 700, fontSize: '1.0625rem', color: 'var(--color-navy-primary)', marginBottom: '0.5rem' }}>{job.title}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8125rem', color: 'var(--color-cool-gray)' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Briefcase size={13} aria-hidden="true" />{job.department}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><MapPin size={13} aria-hidden="true" />{job.location}</span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}><Clock size={13} aria-hidden="true" />{job.type}</span>
                        </div>
                      </div>
                      <Link href={`/careers/${job.id}`} className="btn btn-outline btn-sm">
                        View & Apply <ArrowRight size={13} />
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <div style={{ padding: '3rem 2rem', textAlign: 'center', background: 'var(--color-white)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-light)' }}>
                  <Briefcase size={40} style={{ color: 'var(--color-cool-gray)', opacity: 0.4, marginBottom: '1rem' }} aria-hidden="true" />
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-navy-primary)', marginBottom: '0.625rem' }}>
                    No openings listed at the moment
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-cool-gray)', maxWidth: '440px', marginInline: 'auto', lineHeight: 1.7 }}>
                    We update this page when positions open. If you&apos;d like to register your interest
                    for future roles, get in touch through the contact page.
                  </p>
                  <Link href="/contact" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                    Get in Touch
                  </Link>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Culture & principles */}
      <section className="section theme-navy" aria-labelledby="culture-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem 5rem', alignItems: 'center' }} className="culture-grid">
            <div>
              <SectionHeading id="culture-heading" eyebrow="How We Work" title="How we prepare" titleHighlight="our people." description="Every contributor goes through a structured onboarding process before touching live project work." light />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cultureItems.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.07}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ flexShrink: 0, width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-blue-electric)', marginTop: '6px' }} />
                    <div>
                      <span style={{ display: 'block', fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-white)', marginBottom: '0.25rem' }}>{item.label}</span>
                      <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(min-width:1024px){.culture-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      <CTASection />
    </>
  );
}

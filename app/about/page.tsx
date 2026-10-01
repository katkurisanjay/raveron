import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, RefreshCw, Lightbulb, Globe2, Inbox, Briefcase, PlayCircle, CheckCircle } from 'lucide-react';
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
  { word: 'Intelligent', desc: 'We think deeper — analytical rigour and structured thinking in every project.', icon: Brain },
  { word: 'Strong', desc: 'We build to last — quality, consistency, and long-term value in everything we deliver.', icon: Shield },
  { word: 'Evolving', desc: 'We grow continuously — improving processes, people, and capabilities with every engagement.', icon: RefreshCw },
  { word: 'Creative', desc: 'We turn ideas into impact — translating requirements into effective outcomes.', icon: Lightbulb },
  { word: 'Global', desc: 'We operate with a global business mindset — built for international clients and collaboration.', icon: Globe2 },
];

const workingSteps = [
  { num: '01', label: 'Receive your requirement', desc: 'Submit your project details. Our team reviews scope, volume, format, and timeline.', icon: Inbox },
  { num: '02', label: 'Scope & plan', desc: 'We define the workflow, assign the right team, and establish quality and delivery benchmarks.', icon: Briefcase },
  { num: '03', label: 'Execute with review', desc: 'Work proceeds with guideline-driven execution and staged quality checks throughout.', icon: PlayCircle },
  { num: '04', label: 'Deliver & support', desc: 'Output delivered in your required format, with follow-on support and feedback loops as needed.', icon: CheckCircle },
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
        
        {/* Animated Background Gradients */}
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0, 119, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%', filter: 'blur(40px)', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', right: '-10%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0, 255, 204, 0.08) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%', filter: 'blur(40px)', zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '760px' }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--color-cyan-accent)', display: 'block', marginBottom: '1rem', letterSpacing: '0.1em' }}>
              About RAVERON
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="about-hero-heading" className="display-xl" style={{ color: 'var(--color-white)', marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              A technology company built for{' '}
              <span className="text-gradient-blue">real business requirements.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.125rem' }}>
              RAVERON TECHNOLOGIES provides professional AI & Data Services and Technology & Development
              solutions. We exist to help businesses get work done — efficiently, accurately, and at scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section theme-white" aria-labelledby="overview-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '10%', right: '-15%', width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(0, 119, 255, 0.03) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem 6rem', alignItems: 'start' }} className="about-grid">
            <div style={{ position: 'relative' }}>
              <SectionHeading
                id="overview-heading"
                eyebrow="What We Do"
                title="Two divisions."
                titleHighlight="Unified delivery."
              />
              <Reveal delay={0.1}>
                <div style={{ 
                  marginTop: '2rem', paddingLeft: '1.5rem', 
                  borderLeft: '2px solid var(--color-blue-primary)', position: 'relative' 
                }}>
                  {/* Glowing accent line */}
                  <div style={{
                    position: 'absolute', left: '-2px', top: '0', height: '40px', width: '2px',
                    background: 'var(--color-cyan-accent)', boxShadow: '0 0 10px var(--color-cyan-accent)', zIndex: 2,
                  }} />
                  <p className="body-md" style={{ color: 'var(--color-cool-gray)', lineHeight: 1.8, fontSize: '1.0625rem' }}>
                    RAVERON operates across two broad capability areas. Our <strong style={{ color: 'var(--color-navy-deep)' }}>AI & Data Services</strong> division
                    covers data annotation, image and video labeling, AI training data preparation, voice training,
                    code annotation, multi-turn dialogue datasets, XML and document processing, and quality validation.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="body-md" style={{ color: 'var(--color-cool-gray)', lineHeight: 1.8, marginTop: '1.5rem', paddingLeft: '1.5rem' }}>
                  Our <strong style={{ color: 'var(--color-navy-deep)' }}>Technology & Development</strong> division delivers IT projects, web development,
                  mobile app development, and technology solutions — from requirement analysis through
                  deployment and post-launch support.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingLeft: '1.5rem' }}>
                  <Link href="/services/ai-data" className="btn btn-primary" style={{ boxShadow: '0 4px 15px rgba(0, 119, 255, 0.3)' }}>
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
                <p className="label" style={{ color: 'var(--color-cool-gray)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-blue-primary)' }} />
                  Our Principles
                </p>
              </Reveal>

              <style>{`
                .about-principle-card {
                  display: flex; align-items: flex-start; gap: 1.25rem; padding: 1.25rem;
                  border-radius: var(--radius-lg); border: 1px solid transparent;
                  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                  background: transparent; cursor: default;
                }
                .about-principle-card:hover {
                  background: var(--color-white); border-color: var(--color-border-light);
                  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03); transform: translateX(8px);
                }
                .about-icon-wrap {
                  flex-shrink: 0; width: 40px; height: 40px; border-radius: 10px;
                  background: rgba(37,99,235,0.05); color: var(--color-blue-primary);
                  display: flex; align-items: center; justify-content: center;
                  transition: all 0.3s ease;
                }
                .about-principle-card:hover .about-icon-wrap {
                  background: var(--color-blue-primary); color: var(--color-white);
                  transform: scale(1.1) rotate(5deg); box-shadow: 0 4px 15px rgba(0, 119, 255, 0.2);
                }
                .about-word {
                  font-size: 0.9375rem; font-weight: 700; letter-spacing: 0.02em;
                  color: var(--color-navy-deep); margin-bottom: 0.375rem; display: block;
                  transition: color 0.3s ease;
                }
                .about-principle-card:hover .about-word { color: var(--color-blue-primary); }
              `}</style>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {principles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Reveal key={p.word} delay={i * 0.07}>
                      <div className="about-principle-card">
                        <div className="about-icon-wrap">
                          <Icon size={20} strokeWidth={2} />
                        </div>
                        <div>
                          <span className="about-word">{p.word}</span>
                          <p style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', lineHeight: 1.6 }}>{p.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(min-width:1024px){.about-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* Working Approach */}
      <section className="section theme-soft" aria-labelledby="approach-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        
        {/* Subtle grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px', opacity: 0.5, zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeading
            id="approach-heading"
            eyebrow="Working Approach"
            title="How we engage"
            titleHighlight="every project."
            description="A consistent, structured methodology that keeps delivery on track and communication clear."
            align="center"
          />

          <style>{`
            .process-step-card {
              position: relative; overflow: hidden; padding: 2.5rem 1.5rem;
              background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(12px);
              border-radius: var(--radius-xl); border: 1px solid var(--color-border-light);
              transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); cursor: default;
              display: flex; flex-direction: column;
            }
            .process-step-card:hover {
              background: var(--color-white);
              border-color: rgba(0, 119, 255, 0.3);
              box-shadow: 0 15px 40px rgba(0, 0, 0, 0.04), 0 5px 15px rgba(0, 119, 255, 0.05);
              transform: translateY(-5px);
            }
            .process-icon-box {
              width: 48px; height: 48px; border-radius: 14px;
              background: rgba(0, 119, 255, 0.08); color: var(--color-blue-primary);
              display: flex; align-items: center; justify-content: center;
              margin-bottom: 1.5rem; transition: all 0.4s ease;
            }
            .process-step-card:hover .process-icon-box {
              background: var(--color-blue-primary); color: var(--color-white);
              transform: scale(1.1) rotate(5deg); box-shadow: 0 5px 15px rgba(0, 119, 255, 0.2);
            }
            .process-watermark {
              position: absolute; bottom: -20px; right: -10px;
              font-size: 8rem; font-weight: 900; line-height: 1;
              color: rgba(0, 119, 255, 0.03); z-index: 0; pointer-events: none;
              transition: all 0.5s ease;
            }
            .process-step-card:hover .process-watermark {
              color: rgba(0, 119, 255, 0.06); transform: scale(1.1) translateY(-10px);
            }
          `}</style>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '1.5rem', marginTop: '4rem' }}>
            {workingSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} delay={i * 0.08}>
                  <div className="process-step-card">
                    <div className="process-watermark">{step.num}</div>
                    
                    <div className="process-icon-box" style={{ position: 'relative', zIndex: 1 }}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    
                    <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-navy-deep)', marginBottom: '0.75rem', position: 'relative', zIndex: 1 }}>
                      {step.label}
                    </h3>
                    
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Delivery strengths */}
          {deliveryStrengths.length > 0 && (
            <div style={{ marginTop: '5rem' }}>
              <Reveal>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-cyan-accent)' }} />
                  <p className="label" style={{ color: 'var(--color-cool-gray)' }}>Delivery & Flexibility</p>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-cyan-accent)' }} />
                </div>
              </Reveal>
              <StrengthGrid strengths={deliveryStrengths} dark={false} columns={3} />
            </div>
          )}
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section theme-white" aria-labelledby="about-careers-heading" style={{ position: 'relative', overflow: 'hidden' }}>
        
        {/* Glow behind the CTA */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0, 119, 255, 0.04) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', pointerEvents: 'none', zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '600px', marginInline: 'auto' }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--color-blue-primary)', display: 'block', marginBottom: '0.875rem', letterSpacing: '0.1em' }}>
              Join the Team
            </span>
            <h2 id="about-careers-heading" className="display-md" style={{ color: 'var(--color-navy-deep)', marginBottom: '1rem' }}>
              Looking to grow your career?
            </h2>
            <p className="body-md" style={{ color: 'var(--color-cool-gray)', marginBottom: '2rem', lineHeight: 1.8 }}>
              We build teams around skills and prepare people before they begin. View current openings or get in touch.
            </p>
            <Link href="/careers" className="btn btn-primary btn-lg" style={{ boxShadow: '0 4px 15px rgba(0, 119, 255, 0.3)' }}>
              View Careers <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

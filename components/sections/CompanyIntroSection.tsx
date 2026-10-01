'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Brain, Shield, RefreshCw, Lightbulb, Globe2 } from 'lucide-react';

const principles = [
  {
    word: 'Intelligent',
    description: 'We think deeper — approaching every project with analytical rigour and structured thinking.',
    icon: Brain,
  },
  {
    word: 'Strong',
    description: 'We build to last — delivering work engineered for quality, consistency, and long-term value.',
    icon: Shield,
  },
  {
    word: 'Evolving',
    description: 'We grow continuously — improving our processes, people, and capabilities with every engagement.',
    icon: RefreshCw,
  },
  {
    word: 'Creative',
    description: 'We turn ideas into impact — translating requirements into precise, effective outcomes.',
    icon: Lightbulb,
  },
  {
    word: 'Global',
    description: 'We operate with a global business mindset — built for international clients and cross-border collaboration.',
    icon: Globe2,
  },
];

export function CompanyIntroSection() {
  return (
    <section className="section theme-white" aria-labelledby="intro-heading" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle ambient background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-15%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(0, 119, 255, 0.03) 0%, rgba(255,255,255,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem 6rem',
          alignItems: 'start',
        }}
        className="intro-grid"
        >
          {/* Left column */}
          <div style={{ position: 'relative' }}>
            <SectionHeading
              eyebrow="Who We Are"
              title="A technology company built to"
              titleHighlight="support your work."
              description="RAVERON TECHNOLOGIES operates across two capability areas — AI & Data Services and Technology & Development — providing professional, structured delivery for business requirements of all scales."
            />

            <Reveal delay={0.2}>
              <div style={{ 
                marginTop: '2rem', 
                paddingLeft: '1.5rem', 
                borderLeft: '2px solid var(--color-blue-primary)',
                position: 'relative' 
              }}>
                {/* Decorative glowing line */}
                <div style={{
                  position: 'absolute',
                  left: '-2px',
                  top: '0',
                  height: '40px',
                  width: '2px',
                  background: 'var(--color-cyan-accent)',
                  boxShadow: '0 0 10px var(--color-cyan-accent)',
                  zIndex: 2,
                }} />

                <p className="body-md" style={{ color: 'var(--color-cool-gray)', lineHeight: 1.85, fontSize: '1.0625rem' }}>
                  Whether you need data annotation for a machine learning pipeline, AI training datasets,
                  document processing at scale, or technology solutions built from the ground up —
                  <strong style={{ color: 'var(--color-navy-deep)', fontWeight: 600 }}> RAVERON </strong> provides the teams, processes, and expertise to support your project
                  from requirement through delivery.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column — principles */}
          <div>
            <Reveal delay={0.1}>
              <p className="label" style={{ 
                color: 'var(--color-cool-gray)', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-blue-primary)' }} />
                Our Principles
              </p>
            </Reveal>

            <style>{`
              .intro-principle-card {
                display: flex;
                align-items: flex-start;
                gap: 1.25rem;
                padding: 1.25rem;
                border-radius: var(--radius-lg);
                border: 1px solid transparent;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                background: transparent;
                cursor: default;
                position: relative;
                overflow: hidden;
              }
              .intro-principle-card:hover {
                background: var(--color-white);
                border-color: var(--color-border-light);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
                transform: translateX(8px);
              }
              .intro-icon-wrap {
                flex-shrink: 0;
                width: 40px;
                height: 40px;
                border-radius: 10px;
                background: rgba(37,99,235,0.05);
                color: var(--color-blue-primary);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
              }
              .intro-principle-card:hover .intro-icon-wrap {
                background: var(--color-blue-primary);
                color: var(--color-white);
                transform: scale(1.1) rotate(5deg);
                box-shadow: 0 4px 15px rgba(0, 119, 255, 0.2);
              }
              .intro-word {
                font-size: 0.9375rem;
                font-weight: 700;
                letter-spacing: 0.02em;
                color: var(--color-navy-deep);
                margin-bottom: 0.375rem;
                display: block;
                transition: color 0.3s ease;
              }
              .intro-principle-card:hover .intro-word {
                color: var(--color-blue-primary);
              }
            `}</style>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.word} delay={0.1 + i * 0.07}>
                    <div className="intro-principle-card">
                      <div className="intro-icon-wrap">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      
                      <div>
                        <span className="intro-word">
                          {p.word}
                        </span>
                        <p style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', lineHeight: 1.6 }}>
                          {p.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .intro-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

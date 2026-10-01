'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { StrengthGrid } from '@/components/strengths/StrengthCard';
import { getStrengths } from '@/config/strengths';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';
import { Brain, Shield, RefreshCw, Lightbulb, Globe2 } from 'lucide-react';

const brandPrinciples = [
  { letter: 'E', label: 'Expert Teams', sub: 'Senior engineers across every stack', icon: Brain, color: 'var(--color-blue-primary)' },
  { letter: 'D', label: 'Domain Depth', sub: 'Real experience in your industry', icon: Shield, color: 'var(--color-blue-electric)' },
  { letter: 'A', label: 'Agile & Fast', sub: 'We ship, iterate, and improve quickly', icon: RefreshCw, color: 'var(--color-cyan-accent)' },
  { letter: 'P', label: 'Problem Solvers', sub: 'We own the outcome, not just the task', icon: Lightbulb, color: '#f59e0b' },
  { letter: 'G', label: 'Global Standard', sub: 'US-grade quality, delivered remotely', icon: Globe2, color: '#10b981' },
];

export function WhyRaveronSection() {
  const workforceStrengths = getStrengths({
    group: 'workforce',
    showUnconfirmed: siteConfig.features.showUnconfirmedContent,
    limit: 6,
  });

  return (
    <section className="section theme-soft" aria-labelledby="why-heading" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4rem 5rem',
          alignItems: 'start',
        }}
        className="why-grid"
        >
          {/* Left Column — Principles */}
          <div style={{ position: 'relative' }}>
            <SectionHeading
              id="why-heading"
              eyebrow="Why RAVERON"
              title="A partner you can"
              titleHighlight="trust to deliver."
              description="Five core values that define how we engage clients, build products, and ensure your project exceeds expectations."
            />

            <style>{`
              .principle-card {
                display: flex;
                alignItems: center;
                gap: 1.5rem;
                padding: 1.25rem;
                border-radius: var(--radius-xl);
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                border: 1px solid transparent;
                background: transparent;
                cursor: default;
                position: relative;
                overflow: hidden;
              }
              .principle-card:hover {
                background: var(--color-white);
                border-color: var(--color-border-light);
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
                transform: translateX(10px);
              }
              .principle-icon-box {
                width: 48px;
                height: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 14px;
                background: var(--color-navy-primary);
                color: var(--color-white);
                font-weight: 800;
                font-size: 1.125rem;
                position: relative;
                z-index: 2;
                transition: all 0.4s ease;
                overflow: hidden;
              }
              .principle-card:hover .principle-icon-box {
                transform: scale(1.1) rotate(5deg);
                box-shadow: 0 8px 20px rgba(0,0,0,0.1);
              }
              /* Background icon that scales up on hover */
              .principle-bg-icon {
                position: absolute;
                right: -10px;
                bottom: -15px;
                opacity: 0;
                color: var(--color-border-light);
                transform: scale(0.5);
                transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                z-index: 0;
              }
              .principle-card:hover .principle-bg-icon {
                opacity: 0.3;
                transform: scale(2.5) rotate(-15deg);
              }
            `}</style>

            <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
              {/* Vertical connecting line */}
              <div style={{
                position: 'absolute',
                left: '35px',
                top: '20px',
                bottom: '20px',
                width: '2px',
                background: 'linear-gradient(to bottom, var(--color-blue-primary), var(--color-cyan-accent), transparent)',
                opacity: 0.2,
                zIndex: 0
              }} />

              {brandPrinciples.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.label} delay={i * 0.1}>
                    <div className="principle-card">
                      <div className="principle-icon-box" style={{ background: i % 2 === 0 ? 'var(--color-navy-primary)' : 'var(--color-blue-primary)' }}>
                        {p.letter}
                      </div>
                      
                      <div style={{ position: 'relative', zIndex: 2 }}>
                        <span style={{ 
                          fontWeight: 800, 
                          fontSize: '1.125rem', 
                          color: 'var(--color-navy-deep)', 
                          display: 'block',
                          letterSpacing: '-0.02em',
                          marginBottom: '0.25rem'
                        }}>
                          {p.label}
                        </span>
                        <span style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', fontWeight: 500 }}>
                          {p.sub}
                        </span>
                      </div>

                      <div className="principle-bg-icon">
                        <Icon size={48} strokeWidth={1} />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column — Workforce strengths */}
          <div>
            <Reveal delay={0.2}>
              <p className="label" style={{ color: 'var(--color-cool-gray)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-cyan-accent)', display: 'inline-block' }} />
                Consulting Strengths
              </p>
            </Reveal>

            {workforceStrengths.length > 0 ? (
              <StrengthGrid strengths={workforceStrengths} dark={false} columns={2} />
            ) : (
              /* Creative Animated Placeholder */
              <Reveal delay={0.3}>
                <div style={{
                  position: 'relative',
                  padding: '3rem 2rem',
                  borderRadius: 'var(--radius-2xl)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,247,250,1) 100%)',
                  border: '1px solid var(--color-border-light)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '400px',
                }}>
                  {/* Blueprint Grid Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(var(--color-border-dark) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.1,
                    zIndex: 0
                  }} />

                  {/* Shimmering pulse orb */}
                  <div style={{
                    position: 'absolute',
                    width: '150px',
                    height: '150px',
                    background: 'var(--color-cyan-accent)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    opacity: 0.15,
                    animation: 'pulse-orb 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    zIndex: 0
                  }} />

                  <style>{`
                    @keyframes pulse-orb {
                      0%, 100% { transform: scale(1); opacity: 0.15; }
                      50% { transform: scale(1.5); opacity: 0.25; }
                    }
                  `}</style>

                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(0, 119, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      color: 'var(--color-blue-primary)',
                    }}>
                      <Brain size={32} strokeWidth={1.5} />
                    </div>
                    
                    <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-navy-deep)', marginBottom: '0.75rem' }}>
                      Capabilities forming
                    </h4>
                    
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-cool-gray)', lineHeight: 1.6, maxWidth: '280px' }}>
                      Workforce capabilities and specific talent metrics will be displayed here once confirmed and calibrated.
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .why-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

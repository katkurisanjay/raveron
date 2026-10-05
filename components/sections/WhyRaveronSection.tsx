'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { serviceCategories } from '@/config/services';
import { Reveal } from '@/components/ui/Reveal';
import { Brain, Shield, RefreshCw, Lightbulb, Globe2, Code2, Smartphone, Cloud, BrainCircuit, Settings, Activity, HeartPulse, Sprout, Users, Package, Landmark } from 'lucide-react';

const brandPrinciples = [
  { letter: 'E', label: 'Expert Teams', sub: 'Senior engineers across every stack', icon: Brain, color: 'var(--color-blue-primary)' },
  { letter: 'D', label: 'Domain Depth', sub: 'Real experience in your industry', icon: Shield, color: 'var(--color-blue-electric)' },
  { letter: 'A', label: 'Agile & Fast', sub: 'We ship, iterate, and improve quickly', icon: RefreshCw, color: 'var(--color-cyan-accent)' },
  { letter: 'P', label: 'Problem Solvers', sub: 'We own the outcome, not just the task', icon: Lightbulb, color: '#f59e0b' },
  { letter: 'G', label: 'Global Standard', sub: 'US-grade quality, delivered remotely', icon: Globe2, color: '#10b981' },
];

const iconMap: Record<string, React.ElementType> = {
  Code2, Smartphone, Cloud, BrainCircuit, Settings, Activity,
  HeartPulse, Sprout, Users, Package, Landmark,
};

export function WhyRaveronSection() {
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

          {/* Right Column — Consulting Strengths (Capabilities) */}
          <div>
            <Reveal delay={0.2}>
              <p className="label" style={{ color: 'var(--color-cool-gray)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-cyan-accent)', display: 'inline-block' }} />
                Consulting Strengths
              </p>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {serviceCategories.map((cat, catIdx) => {
                const catColors = catIdx === 0
                  ? { accent: 'var(--color-blue-electric)', bg: 'rgba(37,99,235,0.05)', border: 'rgba(37,99,235,0.15)' }
                  : { accent: 'var(--color-cyan-accent)', bg: 'rgba(0,212,255,0.05)', border: 'rgba(0,212,255,0.15)' };

                return (
                  <Reveal key={cat.id} delay={0.15 + catIdx * 0.1}>
                    <div style={{
                      borderRadius: 'var(--radius-xl)',
                      border: `1px solid ${catColors.border}`,
                      background: catColors.bg,
                      overflow: 'hidden',
                    }}>
                      {/* Card header */}
                      <div style={{
                        padding: '1rem 1.5rem',
                        borderBottom: `1px solid ${catColors.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.625rem',
                      }}>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: catColors.accent,
                        }}>
                          {catIdx === 0 ? 'Engineering & Tech' : 'Domain Expertise'}
                        </span>
                      </div>

                      {/* Service pills grid */}
                      <div style={{
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.625rem',
                      }}>
                        {cat.services.map((svc) => {
                          const Icon = iconMap[svc.icon] ?? Code2;
                          return (
                            <div
                              key={svc.id}
                              title={svc.shortDescription}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.4rem',
                                padding: '0.375rem 0.875rem',
                                borderRadius: '999px',
                                background: 'var(--color-white)',
                                border: `1px solid ${catColors.border}`,
                                fontSize: '0.8125rem',
                                fontWeight: 600,
                                color: 'var(--color-navy-deep)',
                                whiteSpace: 'nowrap',
                                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                                cursor: 'default',
                              }}
                              onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 14px rgba(0,0,0,0.08)`;
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                              }}
                              onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                              }}
                            >
                              <Icon size={13} color={catColors.accent} strokeWidth={2} />
                              {svc.name}
                            </div>
                          );
                        })}
                      </div>

                      {/* Description footer */}
                      <div style={{ padding: '0 1.5rem 1.25rem' }}>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--color-cool-gray)', lineHeight: 1.6 }}>
                          {cat.description}
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
          .why-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

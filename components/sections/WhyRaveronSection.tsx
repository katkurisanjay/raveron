import { SectionHeading } from '@/components/ui/SectionHeading';
import { StrengthGrid } from '@/components/strengths/StrengthCard';
import { getStrengths } from '@/config/strengths';
import { siteConfig } from '@/config/site';
import { Reveal } from '@/components/ui/Reveal';

const brandPrinciples = [
  { letter: 'I', label: 'Intelligent', sub: 'We think deeper' },
  { letter: 'S', label: 'Strong', sub: 'We build to last' },
  { letter: 'E', label: 'Evolving', sub: 'We grow continuously' },
  { letter: 'C', label: 'Creative', sub: 'We turn ideas into impact' },
  { letter: 'G', label: 'Global', sub: 'We work without borders' },
];

export function WhyRaveronSection() {
  const workforceStrengths = getStrengths({
    group: 'workforce',
    showUnconfirmed: siteConfig.features.showUnconfirmedContent,
    limit: 6,
  });

  return (
    <section className="section theme-soft" aria-labelledby="why-heading">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem 5rem',
          alignItems: 'start',
        }}
        className="why-grid"
        >
          {/* Left */}
          <div>
            <SectionHeading
              id="why-heading"
              eyebrow="Why RAVERON"
              title="A company you can"
              titleHighlight="build on."
              description="Five principles guide how we work, how we build our teams, and how we deliver for our clients."
            />

            {/* Principles */}
            <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
              {brandPrinciples.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.07}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    paddingBlock: '0.875rem',
                    borderBottom: i < brandPrinciples.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                  }}>
                    <span style={{
                      flexShrink: 0,
                      width: '36px',
                      height: '36px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-navy-primary)',
                      color: 'var(--color-white)',
                      fontWeight: 800,
                      fontSize: '0.875rem',
                      letterSpacing: '-0.01em',
                    }}>
                      {p.letter}
                    </span>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-navy-primary)', display: 'block' }}>
                        {p.label}
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--color-cool-gray)' }}>
                        {p.sub}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — Workforce strengths */}
          <div>
            <Reveal delay={0.1}>
              <p className="label" style={{ color: 'var(--color-cool-gray)', marginBottom: '1.25rem' }}>
                Workforce & Talent
              </p>
            </Reveal>

            {workforceStrengths.length > 0 ? (
              <StrengthGrid strengths={workforceStrengths} dark={false} columns={2} />
            ) : (
              /* No confirmed strengths yet — architectural placeholder */
              <div style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px dashed var(--color-border-light)',
                textAlign: 'center',
                color: 'var(--color-cool-gray)',
                fontSize: '0.875rem',
              }}>
                Workforce capabilities will be displayed here once confirmed.
              </div>
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

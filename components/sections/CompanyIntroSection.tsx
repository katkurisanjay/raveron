import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const principles = [
  {
    word: 'Intelligent',
    description: 'We think deeper — approaching every project with analytical rigour and structured thinking.',
  },
  {
    word: 'Strong',
    description: 'We build to last — delivering work engineered for quality, consistency, and long-term value.',
  },
  {
    word: 'Evolving',
    description: 'We grow continuously — improving our processes, people, and capabilities with every engagement.',
  },
  {
    word: 'Creative',
    description: 'We turn ideas into impact — translating requirements into precise, effective outcomes.',
  },
  {
    word: 'Global',
    description: 'We operate with a global business mindset — built for international clients and cross-border collaboration.',
  },
];

export function CompanyIntroSection() {
  return (
    <section className="section theme-white" aria-labelledby="intro-heading">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem 5rem',
          alignItems: 'start',
        }}
        className="intro-grid"
        >
          {/* Left column */}
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A technology company built to"
              titleHighlight="support your work."
              description="RAVERON TECHNOLOGIES operates across two capability areas — AI & Data Services and Technology & Development — providing professional, structured delivery for business requirements of all scales."
            />

            <Reveal delay={0.2}>
              <div style={{ marginTop: '1.75rem' }}>
                <p className="body-md" style={{ color: 'var(--color-cool-gray)', lineHeight: 1.8 }}>
                  Whether you need data annotation for a machine learning pipeline, AI training datasets,
                  document processing at scale, or technology solutions built from the ground up —
                  RAVERON provides the teams, processes, and expertise to support your project
                  from requirement through delivery.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right column — principles */}
          <div>
            <Reveal delay={0.1}>
              <p className="label" style={{ color: 'var(--color-cool-gray)', marginBottom: '1.5rem' }}>
                Our Principles
              </p>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {principles.map((p, i) => (
                <Reveal key={p.word} delay={0.1 + i * 0.07}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    paddingBlock: '1rem',
                    borderBottom: i < principles.length - 1 ? '1px solid var(--color-border-light)' : 'none',
                  }}>
                    <span style={{
                      flexShrink: 0,
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--color-blue-electric)',
                      paddingTop: '3px',
                      minWidth: '80px',
                    }}>
                      {p.word}
                    </span>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', lineHeight: 1.7 }}>
                      {p.description}
                    </p>
                  </div>
                </Reveal>
              ))}
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

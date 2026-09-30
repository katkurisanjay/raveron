import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const steps = [
  { num: '01', label: 'Understand', desc: 'We review your project description, formats, data types, and delivery requirements to establish a clear picture of the scope.' },
  { num: '02', label: 'Scope', desc: 'We define the project boundaries — volume, timeline, resource needs, quality standards, and any platform or tool requirements.' },
  { num: '03', label: 'Plan', desc: 'We structure the workflow — team formation, training requirements, review stages, communication plan, and delivery milestones.' },
  { num: '04', label: 'Execute', desc: 'Assigned teams begin work following project guidelines, with dedicated leads overseeing progress and quality at every stage.' },
  { num: '05', label: 'Validate', desc: 'Output passes through multi-stage quality review and consistency checks before it is prepared for delivery.' },
  { num: '06', label: 'Deliver', desc: 'Completed work is delivered in the agreed format, with a clear summary and any documentation required.' },
  { num: '07', label: 'Improve', desc: 'Client feedback is captured and applied — improving processes, guidelines, and team calibration for ongoing work.' },
];

export function HowWeWorkSection() {
  return (
    <section className="section theme-dark" aria-labelledby="how-heading">
      <div className="container">
        <SectionHeading
          id="how-heading"
          eyebrow="How We Work"
          title="A structured process"
          titleHighlight="from start to finish."
          description="Every engagement follows a consistent methodology designed to minimise risk, maintain quality, and keep communication clear throughout."
          align="center"
          light
        />

        <div style={{
          marginTop: '3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1px',
          background: 'var(--color-border-dark)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
        }}>
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.06}>
              <div style={{
                padding: '2rem 1.75rem',
                background: 'var(--color-navy-deep)',
                height: '100%',
                position: 'relative',
              }}>
                {/* Step number */}
                <span className="mono" style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  color: 'var(--color-blue-electric)',
                  marginBottom: '0.875rem',
                  letterSpacing: '0.08em',
                }}>
                  {step.num}
                </span>

                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--color-white)',
                  marginBottom: '0.625rem',
                }}>
                  {step.label}
                </h3>

                <p style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.7,
                }}>
                  {step.desc}
                </p>

                {/* Active indicator line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '1.75rem',
                  right: '1.75rem',
                  height: '2px',
                  background: i === 0
                    ? 'linear-gradient(90deg, var(--color-blue-primary), var(--color-cyan-accent))'
                    : 'transparent',
                }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

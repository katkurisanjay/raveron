import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const culturePoints = [
  { label: 'Training-First', desc: 'Everyone is prepared before they begin project work.' },
  { label: 'Team-Led', desc: 'Dedicated leads provide clear ownership and direction.' },
  { label: 'Continuously Improving', desc: 'Feedback and review feed back into how we work.' },
  { label: 'Collaborative', desc: 'Teams are built around the requirements of each project.' },
];

export function CareersPreviewSection() {
  return (
    <section className="section theme-soft" aria-labelledby="careers-preview-heading">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem 5rem',
          alignItems: 'center',
        }}
        className="careers-preview-grid"
        >
          {/* Left */}
          <div>
            <SectionHeading
              id="careers-preview-heading"
              eyebrow="Careers at RAVERON"
              title="Join a team that"
              titleHighlight="grows with you."
              description="We build teams around skills, prepare people before they begin, and invest in continuous development. If you want to grow through purposeful work, RAVERON may be the right place."
            />

            <Reveal delay={0.2}>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/careers" className="btn btn-primary">
                  View Careers
                  <ArrowRight size={15} />
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right — culture points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {culturePoints.map((pt, i) => (
              <Reveal key={pt.label} delay={i * 0.08}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.125rem',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border-light)',
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(37,99,235,0.08)',
                  }}>
                    <Briefcase size={16} style={{ color: 'var(--color-blue-primary)' }} aria-hidden="true" />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-navy-primary)', marginBottom: '0.25rem' }}>
                      {pt.label}
                    </span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--color-cool-gray)', lineHeight: 1.6 }}>
                      {pt.desc}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .careers-preview-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

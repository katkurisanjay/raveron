import { SectionHeading } from '@/components/ui/SectionHeading';
import { StrengthGrid } from '@/components/strengths/StrengthCard';
import { getStrengths } from '@/config/strengths';
import { siteConfig } from '@/config/site';

export function QualitySection() {
  const qualityStrengths = getStrengths({
    group: 'quality',
    showUnconfirmed: siteConfig.features.showUnconfirmedContent,
    limit: 6,
  });

  return (
    <section className="section theme-white" aria-labelledby="quality-heading">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem 5rem',
          alignItems: 'start',
        }}
        className="quality-grid"
        >
          {/* Left — heading */}
          <div>
            <SectionHeading
              id="quality-heading"
              eyebrow="Quality & Reliability"
              title="Every output."
              titleHighlight="Reviewed."
              description="Structured workflows, multi-stage review, and client feedback loops ensure that what we deliver is consistent, accurate, and aligned to your requirements."
            />

            <div style={{ marginTop: '2rem' }}>
              <p className="body-md" style={{ color: 'var(--color-cool-gray)', lineHeight: 1.8 }}>
                Quality is not a final step — it is built into the workflow. From guideline-driven
                execution through review stages and calibration cycles, every deliverable is
                checked before it reaches you.
              </p>
            </div>
          </div>

          {/* Right — quality strengths */}
          <div>
            {qualityStrengths.length > 0 ? (
              <StrengthGrid strengths={qualityStrengths} dark={false} columns={2} />
            ) : (
              <div style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px dashed var(--color-border-light)',
                textAlign: 'center',
                color: 'var(--color-cool-gray)',
                fontSize: '0.875rem',
              }}>
                Quality process details will be displayed here once confirmed.
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .quality-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

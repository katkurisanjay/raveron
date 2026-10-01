import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/services/ServiceCard';
import { serviceCategories } from '@/config/services';
import { Reveal } from '@/components/ui/Reveal';

export function CoreCapabilitiesSection() {
  return (
    <section className="section theme-soft" aria-labelledby="capabilities-heading">
      <div className="container">
        <SectionHeading
          id="capabilities-heading"
          eyebrow="Our Capabilities"
          title="Elite Engineering."
          titleHighlight="Deep Domains."
          description="RAVERON brings highly experienced tech teams and specialized industry expertise — delivering scalable software for Healthcare, Agritech, Finance, and beyond."
          align="center"
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginTop: '3.5rem',
        }}>
          {serviceCategories.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.12} direction="up">
              <div style={{
                padding: '2.5rem',
                background: 'var(--color-navy-primary)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border-dark)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}>
                <div>
                  <span className="badge badge-blue" style={{ marginBottom: '1.25rem' }}>
                    {cat.id === 'engineering' ? 'Division 01' : 'Division 02'}
                  </span>
                  <h3 className="display-sm" style={{ color: 'var(--color-white)', marginBottom: '0.75rem' }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                    {cat.description}
                  </p>
                </div>

                {/* Service list — first 4 */}
                <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                  {cat.services.slice(0, 4).map((svc) => (
                    <li key={svc.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.65)',
                    }}>
                      <span style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--color-cyan-accent)',
                        flexShrink: 0,
                      }} />
                      {svc.name}
                    </li>
                  ))}
                  {cat.services.length > 4 && (
                    <li style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', paddingLeft: '1.125rem' }}>
                      +{cat.services.length - 4} more services
                    </li>
                  )}
                </ul>

                <Link
                  href={cat.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-blue-electric)',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    transition: 'gap 0.15s ease',
                  }}
                >
                  Explore {cat.name}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

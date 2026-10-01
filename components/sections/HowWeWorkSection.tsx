'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { 
  Search, 
  Target, 
  Map, 
  Zap, 
  CheckCircle2, 
  Package, 
  TrendingUp 
} from 'lucide-react';

const steps = [
  { num: '01', icon: Search, label: 'Understand', desc: 'We review your project description, formats, data types, and delivery requirements to establish a clear picture of the scope.' },
  { num: '02', icon: Target, label: 'Scope', desc: 'We define the project boundaries — volume, timeline, resource needs, quality standards, and any platform or tool requirements.' },
  { num: '03', icon: Map, label: 'Plan', desc: 'We structure the workflow — team formation, training requirements, review stages, communication plan, and delivery milestones.' },
  { num: '04', icon: Zap, label: 'Execute', desc: 'Assigned teams begin work following project guidelines, with dedicated leads overseeing progress and quality at every stage.' },
  { num: '05', icon: CheckCircle2, label: 'Validate', desc: 'Output passes through multi-stage quality review and consistency checks before it is prepared for delivery.' },
  { num: '06', icon: Package, label: 'Deliver', desc: 'Completed work is delivered in the agreed format, with a clear summary and any documentation required.' },
  { num: '07', icon: TrendingUp, label: 'Improve', desc: 'Client feedback is captured and applied — improving processes, guidelines, and team calibration for ongoing work.' },
];

export function HowWeWorkSection() {
  return (
    <section className="section theme-dark" aria-labelledby="how-heading" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative' }}>
        
        {/* Background ambient glows */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 119, 255, 0.07) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0, 255, 204, 0.05) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <SectionHeading
          id="how-heading"
          eyebrow="How We Work"
          title="A structured process"
          titleHighlight="from start to finish."
          description="Every engagement follows a consistent methodology designed to minimise risk, maintain quality, and keep communication clear throughout."
          align="center"
          light
        />

        {/* Global style for the card hover effects so we don't need JS onMouseEnter state */}
        <style>{`
          .process-card {
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          .process-card:hover {
            transform: translateY(-5px);
            border: 1px solid rgba(0, 119, 255, 0.4);
            box-shadow: 0 10px 40px rgba(0, 119, 255, 0.1);
            background: rgba(255, 255, 255, 0.04) !important;
          }
          .process-card:hover .process-icon {
            transform: scale(1.1) rotate(-5deg);
            color: var(--color-cyan-accent) !important;
          }
          .process-card:hover .process-num {
            opacity: 0.1 !important;
            transform: scale(1.05) translate(5px, -5px);
          }
          .process-card:hover .process-title {
            color: var(--color-cyan-accent) !important;
          }
        `}</style>

        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          position: 'relative',
          zIndex: 1
        }}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            // The last item spans differently if it's alone on the last row
            const isLast = i === steps.length - 1;
            
            return (
              <Reveal key={step.num} delay={i * 0.08}>
                <div 
                  className="process-card"
                  style={{
                    padding: '2.5rem 2rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '1.25rem',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    // On large screens, if it's the last odd item, make it span fuller to look balanced
                    gridColumn: isLast && steps.length % 2 !== 0 && steps.length % 3 !== 0 ? '1 / -1' : 'auto',
                  }}
                >
                  {/* Giant Watermark Number */}
                  <div 
                    className="process-num"
                    style={{
                      position: 'absolute',
                      right: '-10px',
                      bottom: '-20px',
                      fontSize: '8rem',
                      fontWeight: 900,
                      lineHeight: 1,
                      color: 'var(--color-white)',
                      opacity: 0.03,
                      transition: 'all 0.5s ease',
                      pointerEvents: 'none',
                      userSelect: 'none',
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Top Header: Icon & small number */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    <div 
                      className="process-icon"
                      style={{
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '1rem',
                        background: 'rgba(0, 119, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-blue-electric)',
                        transition: 'all 0.4s ease',
                      }}
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    
                    <span className="mono" style={{
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.4)',
                      letterSpacing: '0.1em',
                      padding: '0.25rem 0.75rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '100px',
                      background: 'rgba(255,255,255,0.03)',
                    }}>
                      STEP {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 
                    className="process-title"
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--color-white)',
                      marginBottom: '0.875rem',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {step.label}
                  </h3>

                  <p style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.6,
                    position: 'relative',
                    zIndex: 2,
                    flexGrow: 1,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

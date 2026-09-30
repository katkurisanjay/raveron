import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/services/ServiceCard';
import { serviceCategories } from '@/config/services';
import { Reveal } from '@/components/ui/Reveal';

export function AIDataServicesSection() {
  const category = serviceCategories.find((c) => c.id === 'ai-data')!;

  return (
    <section className="section theme-white" aria-labelledby="ai-data-heading">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <SectionHeading
            id="ai-data-heading"
            eyebrow="AI & Data Services"
            title="Training-ready data,"
            titleHighlight="delivered with precision."
            description="Structured annotation, labeling, and processing services designed to meet the requirements of AI product teams and machine learning pipelines."
          />
          <Reveal delay={0.2} direction="right">
            <Link href={category.href} className="btn btn-outline" style={{ flexShrink: 0 }}>
              View All Services
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="grid-services">
          {category.services.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} dark={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechServicesSection() {
  const category = serviceCategories.find((c) => c.id === 'technology')!;

  return (
    <section className="section theme-navy" aria-labelledby="tech-heading">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <SectionHeading
            id="tech-heading"
            eyebrow="Technology & Development"
            title="Built to last."
            titleHighlight="Built to scale."
            description="End-to-end technology delivery — from requirement to deployment — with clear communication, quality code, and post-launch support."
            light
          />
          <Reveal delay={0.2} direction="right">
            <Link href={category.href} className="btn btn-secondary" style={{ flexShrink: 0 }}>
              View All Services
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="grid-services">
          {category.services.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} dark />
          ))}
        </div>
      </div>
    </section>
  );
}

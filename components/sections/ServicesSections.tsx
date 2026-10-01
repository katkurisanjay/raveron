'use client';

import React, { useState } from 'react';
import Link from 'next/link'
import { ArrowRight, Code2, Smartphone, Cloud, BrainCircuit, Settings, Activity, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/services/ServiceCard';
import { serviceCategories } from '@/config/services';
import { Reveal } from '@/components/ui/Reveal';

const engineeringServices = [
  {
    id: 'full-stack',
    icon: Code2,
    name: 'Full Stack Development',
    shortDescription: 'End-to-end web applications built with modern frameworks.',
    description: 'Highly experienced full stack teams delivering robust, scalable, and secure web applications using React, Next.js, Node, and more.',
    accent: '#2563EB',
    accentLight: '#EFF6FF',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    stat: { value: '50+', label: 'Apps Shipped' },
  },
  {
    id: 'android-flutter',
    icon: Smartphone,
    name: 'Mobile Apps (Flutter)',
    shortDescription: 'High-performance cross-platform applications.',
    description: 'Expert Android and cross-platform mobile development using Flutter, ensuring a seamless user experience across iOS and Android.',
    accent: '#06B6D4',
    accentLight: '#ECFEFF',
    tags: ['Flutter', 'Dart', 'Android', 'iOS', 'Firebase'],
    stat: { value: '30+', label: 'Apps Published' },
  },
  {
    id: 'cloud',
    icon: Cloud,
    name: 'Cloud (AWS · Azure · GCP)',
    shortDescription: 'Scalable cloud infrastructure and migrations.',
    description: 'Architecting, deploying, and managing robust cloud infrastructures on AWS, Azure, and GCP for optimal performance and cost efficiency.',
    accent: '#8B5CF6',
    accentLight: '#F5F3FF',
    tags: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'],
    stat: { value: '99.9%', label: 'Uptime SLA' },
  },
  {
    id: 'ai-development',
    icon: BrainCircuit,
    name: 'AI Development',
    shortDescription: 'Agentic AI, generative models, and voice call analyzers.',
    description: 'Building advanced AI solutions including autonomous Agentic AI, custom LLMs, and specialized voice call analysis systems.',
    accent: '#EF4444',
    accentLight: '#FEF2F2',
    tags: ['LangChain', 'OpenAI', 'Gemini', 'RAG', 'Voice AI'],
    stat: { value: '10+', label: 'AI Systems Built' },
  },
  {
    id: 'devops',
    icon: Settings,
    name: 'DevOps',
    shortDescription: 'CI/CD pipelines, automation, and infrastructure.',
    description: 'Streamlining development lifecycles with continuous integration, deployment, and infrastructure as code automation.',
    accent: '#10B981',
    accentLight: '#ECFDF5',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'ArgoCD', 'Helm'],
    stat: { value: '80%', label: 'Faster Releases' },
  },
  {
    id: 'mlops',
    icon: Activity,
    name: 'MLOps',
    shortDescription: 'Machine learning operations and lifecycle management.',
    description: 'Deploying, monitoring, and maintaining ML models in production to ensure reliability, scalability, and continuous performance.',
    accent: '#F59E0B',
    accentLight: '#FFFBEB',
    tags: ['MLflow', 'SageMaker', 'Kubeflow', 'Airflow', 'DVC'],
    stat: { value: '3×', label: 'Model Velocity' },
  },
];

export function EngineeringServicesSection() {
  const category = serviceCategories.find((c) => c.id === 'engineering')!;
  const [active, setActive] = useState(0);
  const current = engineeringServices[active];

  return (
    <section
      className="section"
      aria-labelledby="engineering-heading"
      style={{ background: 'white', position: 'relative', overflow: 'hidden' }}
    >
      <style>{`
        .eng-tab {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.875rem 1.125rem;
          border-radius: 12px;
          border: 1.5px solid #F1F5F9;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }
        .eng-tab:hover {
          border-color: #E2E8F0;
          background: #F8FAFC;
        }
        .eng-tab.active {
          border-color: transparent;
          background: var(--active-color, #EFF6FF);
          box-shadow: 0 0 0 1.5px var(--active-accent, #2563EB), 0 4px 16px rgba(0,0,0,0.06);
        }
        .eng-tab-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .eng-stat-card {
          padding: 1.5rem;
          border-radius: 16px;
          border: 1.5px solid #F1F5F9;
          background: #FAFBFF;
          transition: all 0.25s ease;
        }
        .eng-stat-card:hover {
          border-color: #E2E8F0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          transform: translateY(-2px);
        }
        .eng-tag {
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          background: #F1F5F9;
          border: 1px solid #E2E8F0;
          font-size: 0.75rem;
          color: #475569;
          font-weight: 600;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
        }
        .eng-tag:hover {
          background: #E2E8F0;
          color: #1E293B;
        }
        .eng-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          transition: gap 0.2s ease;
        }
        .eng-cta-link:hover {
          gap: 0.6rem;
        }
      `}</style>

      {/* Subtle dot grid background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#E2E8F0 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.6, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '0', right: '0', width: '45%', height: '100%', background: 'linear-gradient(135deg, rgba(37,99,235,0.03) 0%, rgba(6,182,212,0.03) 100%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <SectionHeading
            id="engineering-heading"
            eyebrow="Engineering & Technology"
            title="Forward-deployed engineers,"
            titleHighlight="ready to build."
            description="Senior specialists across every modern discipline — embedded in your product, not outsourced away from it."
          />
          <Reveal delay={0.2}>
            <Link href={category.href} className="eng-cta-link" style={{ color: '#2563EB' }}>
              View all capabilities <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        {/* Main interactive layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="eng-main-grid">
          {/* Left — tab list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {engineeringServices.map((svc, i) => {
              const Icon = svc.icon;
              const isActive = active === i;
              return (
                <Reveal key={svc.id} delay={i * 0.05}>
                  <button
                    className={`eng-tab${isActive ? ' active' : ''}`}
                    onClick={() => setActive(i)}
                    style={{ '--active-color': svc.accentLight, '--active-accent': svc.accent } as React.CSSProperties}
                  >
                    <div
                      className="eng-tab-icon"
                      style={{
                        background: isActive ? svc.accent : '#F1F5F9',
                        color: isActive ? 'white' : '#64748B',
                      }}
                    >
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: isActive ? '#0F172A' : '#374151', lineHeight: 1.2 }}>
                        {svc.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem', lineHeight: 1.4 }}>
                        {svc.shortDescription}
                      </div>
                    </div>
                    <ChevronRight size={14} color={isActive ? svc.accent : '#CBD5E1'} style={{ flexShrink: 0 }} />
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <Reveal delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  border: '1.5px solid #F1F5F9',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.03), 0 20px 60px rgba(0,0,0,0.06)',
                  background: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Top accent bar */}
                <div style={{ height: 4, background: `linear-gradient(90deg, ${current.accent}, ${current.accent}88)` }} />

                {/* Content */}
                <div style={{ padding: '2.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  {/* Icon + title */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: 56, height: 56, borderRadius: 16, background: current.accentLight, border: `1.5px solid ${current.accent}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <current.icon size={26} color={current.accent} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                        {current.name}
                      </h3>
                      <p style={{ fontSize: '0.8125rem', color: '#94A3B8', marginTop: '0.2rem', fontWeight: 500 }}>
                        {current.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ color: '#475569', lineHeight: 1.85, fontSize: '0.9375rem' }}>
                    {current.description}
                  </p>

                  {/* Key stat */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div className="eng-stat-card" style={{ flex: '0 0 auto', minWidth: 140, borderColor: `${current.accent}22`, background: current.accentLight }}>
                      <div style={{ fontSize: '2rem', fontWeight: 900, color: current.accent, letterSpacing: '-0.03em', lineHeight: 1 }}>
                        {current.stat.value}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.375rem', fontWeight: 600 }}>
                        {current.stat.label}
                      </div>
                    </div>
                    <div style={{ flex: 1, padding: '1.25rem 1.5rem', borderRadius: 16, border: '1.5px solid #F1F5F9', background: '#FAFBFF', display: 'flex', alignItems: 'center' }}>
                      <p style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.65 }}>
                        Our engineers are senior-level, hands-on, and domain-experienced — delivering production-grade output from day one.
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.75rem' }}>
                      Tech Stack
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {current.tags.map((tag) => (
                        <span key={tag} className="eng-tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div style={{ marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid #F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <span style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
                      Ready to start a {current.name.toLowerCase()} engagement?
                    </span>
                    <a
                      href="/start-a-project"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.625rem 1.125rem',
                        borderRadius: 10,
                        background: current.accent,
                        color: 'white',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'opacity 0.2s ease, transform 0.2s ease',
                        boxShadow: `0 4px 14px ${current.accent}44`,
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                    >
                      Let's Talk <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .eng-main-grid {
            grid-template-columns: 340px 1fr !important;
          }
        }
        .domains-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        @media (min-width: 768px) {
          .domains-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 1100px) {
          .domains-grid {
            grid-template-columns: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

export function DomainExpertiseSection() {
  const category = serviceCategories.find((c) => c.id === 'domains')!;

  const domains = [
    { icon: '🏥', name: 'Healthcare', color: '#10B981', bg: '#ECFDF5', desc: 'HIPAA-compliant systems, clinical data platforms, patient risk scoring, and EHR integrations.' },
    { icon: '🌾', name: 'Agritech', color: '#F59E0B', bg: '#FFFBEB', desc: 'Smart farming platforms, crop analytics, IoT sensor integration, and supply chain visibility.' },
    { icon: '🔗', name: 'CRM & Marketplaces', color: '#2563EB', bg: '#EFF6FF', desc: 'Salesforce, Zoho, HubSpot marketplace apps, API integrations, and workflow automation.' },
    { icon: '🤖', name: 'Warehouse & Robotics', color: '#8B5CF6', bg: '#F5F3FF', desc: 'Robot-based automation, WMS development, real-time inventory tracking, and fleet management.' },
    { icon: '🏦', name: 'Mortgage & Finance', color: '#EF4444', bg: '#FEF2F2', desc: 'Loan origination systems, compliance automation, risk scoring, and financial data pipelines.' },
  ];

  return (
    <section
      className="section"
      aria-labelledby="domains-heading"
      style={{ background: '#FAFBFF', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle accent blobs */}
      <div style={{ position: 'absolute', top: '-15%', right: '-10%', width: '50%', height: '80%', background: 'radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '40%', height: '60%', background: 'radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <SectionHeading
            id="domains-heading"
            eyebrow="Domain Expertise"
            title="Deep industry knowledge."
            titleHighlight="Proven results."
            description="We don't just write code — we understand your industry. Our teams carry real domain knowledge that accelerates delivery and reduces risk."
          />
          <Reveal delay={0.2}>
            <Link href={category.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', fontWeight: 700, color: '#2563EB', textDecoration: 'none' }}>
              All domain capabilities <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>

        {/* Domain cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }} className="domains-grid">
          {domains.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.07}>
              <div
                style={{
                  padding: '1.75rem',
                  borderRadius: 20,
                  border: '1.5px solid #F1F5F9',
                  background: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = `0 8px 32px rgba(0,0,0,0.1), 0 0 0 2px ${d.color}33`;
                  el.style.transform = 'translateY(-4px)';
                  el.style.borderColor = `${d.color}44`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  el.style.transform = 'translateY(0)';
                  el.style.borderColor = '#F1F5F9';
                }}
              >
                {/* Accent top bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${d.color}, ${d.color}66)`, borderRadius: '20px 20px 0 0' }} />

                {/* Icon */}
                <div style={{ width: 52, height: 52, borderRadius: 14, background: d.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.625rem', marginBottom: '1.25rem', border: `1.5px solid ${d.color}22` }}>
                  {d.icon}
                </div>

                <h3 style={{ fontSize: '1.0625rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
                  {d.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.75 }}>
                  {d.desc}
                </p>

                {/* Domain tag */}
                <div style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.3rem 0.75rem', borderRadius: 999, background: d.bg, border: `1px solid ${d.color}33`, fontSize: '0.75rem', fontWeight: 700, color: d.color, letterSpacing: '0.03em' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: d.color, display: 'inline-block' }} />
                  Expert Team Available
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom trust bar */}
        <Reveal delay={0.3}>
          <div style={{ marginTop: '3rem', padding: '1.75rem 2.5rem', borderRadius: 18, background: 'white', border: '1.5px solid #F1F5F9', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              {[
                { value: '8+', label: 'Years of Domain Experience' },
                { value: '40+', label: 'Enterprise Projects Delivered' },
                { value: '5', label: 'Industry Verticals' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.875rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.3rem', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <a
              href="/start-a-project"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                borderRadius: 12,
                background: '#0F172A',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#1E293B'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#0F172A'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
            >
              Discuss Your Domain <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Phone, Heart, Cloud, Database, BarChart3, ChevronLeft, ChevronRight, Quote, ArrowRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 'ai-call-analyzer',
    title: 'AI Call Analyzer',
    tagline: 'Real-time voice intelligence platform',
    description:
      'End-to-end Voice AI system that transcribes, analyzes sentiment, detects intent, and scores sales calls in real time — giving teams actionable coaching insights without manual review.',
    domain: 'AI / Voice Tech',
    stack: ['Python', 'Whisper', 'LangChain', 'FastAPI', 'React', 'AWS'],
    color: '#EF4444',
    colorLight: '#FEF2F2',
    colorMid: '#FCA5A5',
    glow: 'rgba(239,68,68,0.08)',
    Icon: Phone,
    metrics: [
      { label: 'Call accuracy', value: '94%' },
      { label: 'Review time saved', value: '80%' },
    ],
    highlights: [
      'Real-time transcription with speaker diarization',
      'Sentiment & intent classification per utterance',
      'Automated QA scoring with coaching recommendations',
    ],
  },
  {
    id: 'healthcare-analyzer',
    title: 'Healthcare Data Analyzer',
    tagline: 'Clinical risk scoring engine',
    description:
      'HIPAA-compliant analytics platform that ingests patient records, lab results, and vitals to produce ML-driven risk scores — enabling early intervention and reducing hospital readmission rates.',
    domain: 'Healthcare',
    stack: ['Python', 'scikit-learn', 'PostgreSQL', 'FastAPI', 'Next.js', 'AWS'],
    color: '#10B981',
    colorLight: '#ECFDF5',
    colorMid: '#6EE7B7',
    glow: 'rgba(16,185,129,0.08)',
    Icon: Heart,
    metrics: [
      { label: 'Risk detection rate', value: '89%' },
      { label: 'Readmission reduction', value: '35%' },
    ],
    highlights: [
      'HIPAA-compliant data ingestion pipeline',
      'ML risk scoring across 50+ clinical indicators',
      'Interactive dashboard for clinicians',
    ],
  },
  {
    id: 'aws-marketplace',
    title: 'AWS Marketplace Auto-Deploy',
    tagline: 'One-click SaaS deployment pipeline',
    description:
      'Automated CI/CD pipeline and CloudFormation templates that package SaaS products for AWS Marketplace listing — cutting deployment from weeks to hours with full IaC compliance.',
    domain: 'DevOps / Cloud',
    stack: ['AWS CDK', 'CloudFormation', 'Terraform', 'GitHub Actions', 'Docker', 'Python'],
    color: '#F59E0B',
    colorLight: '#FFFBEB',
    colorMid: '#FCD34D',
    glow: 'rgba(245,158,11,0.08)',
    Icon: Cloud,
    metrics: [
      { label: 'Deploy time reduction', value: '90%' },
      { label: 'Manual steps eliminated', value: '100%' },
    ],
    highlights: [
      'Fully automated AMI & container packaging',
      'CloudFormation IaC with compliance checks',
      'One-click AWS Marketplace listing workflow',
    ],
  },
  {
    id: 'crm-marketplace',
    title: 'CRM Marketplace Apps',
    tagline: 'Salesforce & Zoho native integrations',
    description:
      'Custom marketplace apps and deep REST/GraphQL API integrations for Salesforce AppExchange and Zoho Marketplace — enabling seamless two-way data sync, workflow automation, and embedded analytics.',
    domain: 'CRM / Full Stack',
    stack: ['Apex', 'LWC', 'Node.js', 'Zoho Deluge', 'REST APIs', 'React'],
    color: '#2563EB',
    colorLight: '#EFF6FF',
    colorMid: '#93C5FD',
    glow: 'rgba(37,99,235,0.08)',
    Icon: Database,
    metrics: [
      { label: 'Integrations built', value: '12+' },
      { label: 'Data sync latency', value: '<2s' },
    ],
    highlights: [
      'Native Salesforce AppExchange & Zoho listing',
      'Bidirectional real-time data sync',
      'Embedded dashboards & workflow triggers',
    ],
  },
  {
    id: 'gsheets-apps',
    title: 'Google Sheets Apps',
    tagline: 'Productivity add-ons for workspace teams',
    description:
      'Published Google Workspace Marketplace add-ons that extend Google Sheets with automated reporting, live data connectors, and AI-assisted data cleansing — serving thousands of workspace users.',
    domain: 'Full Stack / Productivity',
    stack: ['Google Apps Script', 'TypeScript', 'Node.js', 'Google APIs', 'OAuth 2.0'],
    color: '#06B6D4',
    colorLight: '#ECFEFF',
    colorMid: '#67E8F9',
    glow: 'rgba(6,182,212,0.08)',
    Icon: BarChart3,
    metrics: [
      { label: 'Active installs', value: '5,000+' },
      { label: 'Rating', value: '4.8★' },
    ],
    highlights: [
      'Published on Google Workspace Marketplace',
      'Live data connectors with 20+ sources',
      'AI-assisted data cleaning & formatting',
    ],
  },
];

const testimonials = [
  {
    quote: 'RAVERON delivered our AI call analyzer in just 8 weeks. The accuracy blew our team away — it replaced an entire manual QA process overnight.',
    name: 'Director of Sales Operations',
    company: 'US FinTech Startup',
    initials: 'DS',
    color: '#EF4444',
  },
  {
    quote: "Their healthcare data platform cut our risk assessment time by 60%. RAVERON understood clinical workflows from day one — rare for a tech team.",
    name: 'Chief Medical Informatics Officer',
    company: 'Regional Health System',
    initials: 'CM',
    color: '#10B981',
  },
  {
    quote: 'The AWS Marketplace deployment pipeline they built saved us months of engineering time. Our listing went live in days, not quarters.',
    name: 'VP of Engineering',
    company: 'SaaS Platform Company',
    initials: 'VP',
    color: '#F59E0B',
  },
  {
    quote: "Best Salesforce development team we've worked with. They understood AppExchange compliance requirements deeply and delivered a polished, production-ready app.",
    name: 'Head of Product',
    company: 'B2B CRM Solutions Company',
    initials: 'HP',
    color: '#2563EB',
  },
];

export function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(0);

  const p = projects[activeProject];
  const Icon = p.Icon;

  return (
    <>
      <style>{`
        .portfolio-tab {
          padding: 0.625rem 1.25rem;
          border-radius: 999px;
          border: 1.5px solid #E5E7EB;
          background: white;
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #6B7280;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .portfolio-tab:hover {
          border-color: #D1D5DB;
          color: #111827;
          background: #F9FAFB;
        }
        .portfolio-tab.active {
          color: white;
          border-color: transparent;
        }
        .project-main-card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border-radius: 24px;
          overflow: hidden;
          border: 1.5px solid #F3F4F6;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04), 0 20px 60px rgba(0,0,0,0.06);
          background: white;
        }
        @media (min-width: 900px) {
          .project-main-card {
            grid-template-columns: 1fr 420px;
          }
        }
        .metric-badge {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          border: 1.5px solid;
          background: white;
          min-width: 110px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .metric-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }
        .stack-pill {
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          background: #F3F4F6;
          border: 1px solid #E5E7EB;
          font-size: 0.75rem;
          color: #4B5563;
          font-weight: 600;
          letter-spacing: 0.03em;
          transition: all 0.2s ease;
        }
        .stack-pill:hover {
          background: #E5E7EB;
          color: #1F2937;
        }
        .testimonial-nav-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid #E5E7EB;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #374151;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .testimonial-nav-btn:hover {
          border-color: #D1D5DB;
          background: #F9FAFB;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          transform: scale(1.05);
        }
      `}</style>

      {/* ── PORTFOLIO ─────────────────────────────────────────── */}
      <section
        className="section"
        aria-labelledby="portfolio-heading"
        style={{ background: '#FAFBFF', position: 'relative', overflow: 'hidden' }}
      >
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45%', height: '60%', background: `radial-gradient(ellipse, ${p.glow} 0%, transparent 65%)`, filter: 'blur(60px)', pointerEvents: 'none', transition: 'background 0.5s ease' }} />
        <div style={{ position: 'absolute', bottom: '-5%', left: '-10%', width: '35%', height: '50%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <SectionHeading
              id="portfolio-heading"
              eyebrow="Our Work"
              title="Selected projects from"
              titleHighlight="our portfolio."
              description="Real products. Real impact. Built by our senior engineers across industries."
            />
          </Reveal>

          {/* Tab strip */}
          <Reveal delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2.5rem', marginBottom: '2rem' }}>
              {projects.map((proj, i) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveProject(i)}
                  className={`portfolio-tab${activeProject === i ? ' active' : ''}`}
                  style={activeProject === i ? { background: proj.color, borderColor: proj.color } : {}}
                >
                  {proj.title}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project card */}
          <Reveal delay={0.1}>
            <div className="project-main-card">
              {/* Left — Content */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                    background: p.colorLight,
                    border: `1.5px solid ${p.colorMid}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={26} color={p.color} strokeWidth={1.75} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color, display: 'block', marginBottom: '0.25rem' }}>
                      {p.domain}
                    </span>
                    <h3 style={{ fontSize: '1.625rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '0.2rem', fontWeight: 500 }}>{p.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p style={{ color: '#475569', lineHeight: 1.85, fontSize: '0.9375rem' }}>
                  {p.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {p.highlights.map((h) => (
                    <div key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                      <CheckCircle2 size={16} color={p.color} style={{ marginTop: '0.1rem', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.875rem', color: '#374151', lineHeight: 1.5 }}>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                  {p.stack.map((s) => (
                    <span key={s} className="stack-pill">{s}</span>
                  ))}
                </div>
              </div>

              {/* Right — Metrics panel */}
              <div style={{
                background: p.colorLight,
                borderLeft: `1.5px solid ${p.colorMid}33`,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '2rem',
              }}>
                {/* Big number metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.color, opacity: 0.8 }}>
                    Key Outcomes
                  </p>
                  {p.metrics.map((m) => (
                    <div key={m.label} className="metric-badge" style={{ borderColor: `${p.colorMid}55`, background: 'white' }}>
                      <span style={{ fontSize: '2.25rem', fontWeight: 900, color: p.color, lineHeight: 1, letterSpacing: '-0.03em' }}>{m.value}</span>
                      <span style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '0.375rem', fontWeight: 600 }}>{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: `${p.colorMid}44` }} />

                {/* CTA */}
                <div>
                  <p style={{ fontSize: '0.8125rem', color: '#6B7280', marginBottom: '1rem', lineHeight: 1.6 }}>
                    Interested in a similar solution for your business?
                  </p>
                  <a
                    href="/start-a-project"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.7rem 1.25rem',
                      borderRadius: 10,
                      background: p.color,
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'opacity 0.2s ease, transform 0.2s ease',
                      boxShadow: `0 4px 14px ${p.color}44`,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.88'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
                  >
                    Discuss Your Project <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function TestimonialsSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  return (
    <section
      className="section"
      aria-labelledby="testimonials-heading"
      style={{ background: 'white', position: 'relative', overflow: 'hidden' }}
    >
        {/* Subtle grid texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.5, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '10%', right: '0', width: '40%', height: '80%', background: 'radial-gradient(ellipse, rgba(37,99,235,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <SectionHeading
              id="testimonials-heading"
              eyebrow="Client Voices"
              title="What our clients"
              titleHighlight="say about us."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div style={{ marginTop: '3rem' }}>
              {/* Testimonial grid — show all 4 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                {testimonials.map((tm, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    style={{
                      all: 'unset',
                      cursor: 'pointer',
                      display: 'block',
                      padding: '1.5rem',
                      borderRadius: 18,
                      border: `2px solid ${testimonialIndex === i ? tm.color : '#F3F4F6'}`,
                      background: testimonialIndex === i ? `${tm.color}06` : 'white',
                      transition: 'all 0.25s ease',
                      boxShadow: testimonialIndex === i ? `0 0 0 4px ${tm.color}10, 0 8px 30px rgba(0,0,0,0.06)` : '0 2px 8px rgba(0,0,0,0.04)',
                      textAlign: 'left',
                    }}
                  >
                    <Quote size={18} color={testimonialIndex === i ? tm.color : '#CBD5E1'} style={{ marginBottom: '0.75rem' }} />
                    <p style={{ fontSize: '0.8375rem', color: '#374151', lineHeight: 1.75, marginBottom: '1rem', fontStyle: 'italic' }}>
                      "{tm.quote}"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: `${tm.color}18`, border: `1.5px solid ${tm.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', fontWeight: 800, color: tm.color, flexShrink: 0 }}>
                        {tm.initials}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.8125rem' }}>{tm.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{tm.company}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
  );
}

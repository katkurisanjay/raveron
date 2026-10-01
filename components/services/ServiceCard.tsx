'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { Service } from '@/config/services';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index?: number;
  dark?: boolean;
}

export function ServiceCard({ service, index = 0, dark = false }: ServiceCardProps) {
  // Dynamically resolve Lucide icon
  const IconComponent = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Layers;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className={`service-card ${dark ? 'dark-mode' : 'light-mode'}`}
      style={{ position: 'relative', cursor: 'pointer', height: '100%' }}
      aria-label={service.name}
    >
      <style>{`
        .service-card {
          padding: 2rem;
          border-radius: var(--radius-xl);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .service-card.dark-mode {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
        }

        .service-card.light-mode {
          background: var(--color-white);
          border: 1px solid var(--color-border-light);
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }

        .service-card:hover {
          transform: translateY(-8px);
        }

        .service-card.dark-mode:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 119, 255, 0.3);
          box-shadow: 0 15px 40px rgba(0, 119, 255, 0.1);
        }

        .service-card.light-mode:hover {
          border-color: var(--color-blue-primary);
          box-shadow: 0 20px 40px rgba(0, 119, 255, 0.1);
        }

        /* Top Icon Box */
        .sc-icon-box {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .service-card.dark-mode .sc-icon-box {
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.25);
          color: var(--color-cyan-accent);
        }

        .service-card.light-mode .sc-icon-box {
          background: rgba(37,99,235,0.08);
          border: 1px solid rgba(37,99,235,0.15);
          color: var(--color-blue-primary);
        }

        .service-card:hover .sc-icon-box {
          transform: scale(1.1) rotate(5deg);
        }

        /* Large Background Icon */
        .sc-bg-icon {
          position: absolute;
          right: -20px;
          bottom: -20px;
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
          pointer-events: none;
        }

        .service-card.dark-mode .sc-bg-icon { color: rgba(255,255,255,0.03); }
        .service-card.light-mode .sc-bg-icon { color: rgba(0,0,0,0.03); }

        .service-card:hover .sc-bg-icon {
          opacity: 1;
          transform: scale(3.5) rotate(-15deg);
        }

        /* Content Text */
        .sc-title {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }
        .service-card.dark-mode .sc-title { color: var(--color-white); }
        .service-card.light-mode .sc-title { color: var(--color-navy-deep); }

        .service-card:hover .sc-title {
          color: var(--color-blue-primary);
        }

        .sc-desc {
          font-size: 0.875rem;
          line-height: 1.65;
          position: relative;
          z-index: 2;
          flex-grow: 1;
        }
        .service-card.dark-mode .sc-desc { color: rgba(255,255,255,0.6); }
        .service-card.light-mode .sc-desc { color: var(--color-cool-gray); }

        /* Bottom Footer Row */
        .sc-footer {
          margin-top: 2rem;
          padding-top: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          border-top: 1px solid;
          transition: border-color 0.4s ease;
        }
        .service-card.dark-mode .sc-footer { border-color: rgba(255,255,255,0.06); }
        .service-card.light-mode .sc-footer { border-color: var(--color-border-light); }

        .service-card:hover .sc-footer {
          border-color: rgba(0, 119, 255, 0.2);
        }

        /* Animated Arrow */
        .sc-arrow {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-blue-primary);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.4s ease;
        }
        .service-card:hover .sc-arrow {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      {/* Top Icon Box */}
      <div className="sc-icon-box">
        <IconComponent size={24} strokeWidth={1.5} aria-hidden="true" />
      </div>

      {/* Title & Description */}
      <h3 className="sc-title">
        {service.name}
      </h3>
      <p className="sc-desc">
        {service.shortDescription}
      </p>

      {/* Bottom Row */}
      <div className="sc-footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--color-cyan-accent)',
            boxShadow: '0 0 8px var(--color-cyan-accent)',
          }} />
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: dark ? 'rgba(255,255,255,0.4)' : 'var(--color-cool-gray)',
          }}>
            {service.category === 'ai-data' ? 'AI & Data' : 'Technology'}
          </span>
        </div>

        <div className="sc-arrow">
          Explore <ArrowRight size={14} />
        </div>
      </div>

      {/* Background Hover Icon */}
      <div className="sc-bg-icon">
        <IconComponent size={64} strokeWidth={0.75} />
      </div>
    </motion.article>
  );
}

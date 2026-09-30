'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import type { Service } from '@/config/services';

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3 }}
      className={dark ? 'card-dark' : 'card'}
      style={{ padding: '1.5rem', cursor: 'default' }}
      aria-label={service.name}
    >
      {/* Icon */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        borderRadius: 'var(--radius-md)',
        background: dark ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.08)',
        border: `1px solid ${dark ? 'rgba(37,99,235,0.25)' : 'rgba(37,99,235,0.12)'}`,
        marginBottom: '1.125rem',
      }}>
        <IconComponent
          size={20}
          strokeWidth={1.75}
          style={{ color: 'var(--color-blue-electric)' }}
          aria-hidden="true"
        />
      </div>

      {/* Name */}
      <h3 style={{
        fontSize: '0.9375rem',
        fontWeight: 700,
        color: dark ? 'var(--color-white)' : 'var(--color-navy-primary)',
        marginBottom: '0.5rem',
        lineHeight: 1.3,
      }}>
        {service.name}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: '0.8125rem',
        color: dark ? 'rgba(255,255,255,0.55)' : 'var(--color-cool-gray)',
        lineHeight: 1.65,
      }}>
        {service.shortDescription}
      </p>

      {/* Subtle indicator */}
      <div style={{
        marginTop: '1.25rem',
        paddingTop: '1rem',
        borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.06)' : 'var(--color-border-light)'}`,
        display: 'flex',
        alignItems: 'center',
        gap: '0.375rem',
      }}>
        <div style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--color-cyan-accent)',
          opacity: 0.7,
        }} />
        <span style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: dark ? 'rgba(255,255,255,0.3)' : 'var(--color-cool-gray)',
        }}>
          {service.category === 'ai-data' ? 'AI & Data' : 'Technology'}
        </span>
      </div>
    </motion.article>
  );
}

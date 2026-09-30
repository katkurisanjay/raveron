'use client';

import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';
import type { Strength } from '@/config/strengths';

interface StrengthCardProps {
  strength: Strength;
  index?: number;
  dark?: boolean;
}

export function StrengthCard({ strength, index = 0, dark = false }: StrengthCardProps) {
  const IconComponent = (Icons as unknown as Record<string, Icons.LucideIcon>)[strength.icon] ?? Icons.CheckCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        padding: '1.25rem',
        borderRadius: 'var(--radius-lg)',
        background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(37,99,235,0.03)',
        border: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(37,99,235,0.08)'}`,
        transition: 'background 0.2s ease, border-color 0.2s ease',
      }}
    >
      {/* Icon */}
      <div style={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: 'var(--radius-md)',
        background: dark ? 'rgba(37,99,235,0.18)' : 'rgba(37,99,235,0.1)',
        marginTop: '1px',
      }}>
        <IconComponent
          size={17}
          strokeWidth={1.75}
          style={{ color: 'var(--color-blue-electric)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div>
        <h4 style={{
          fontSize: '0.9rem',
          fontWeight: 700,
          color: dark ? 'var(--color-white)' : 'var(--color-navy-primary)',
          marginBottom: '0.25rem',
        }}>
          {strength.title}
        </h4>
        <p style={{
          fontSize: '0.8125rem',
          color: dark ? 'rgba(255,255,255,0.5)' : 'var(--color-cool-gray)',
          lineHeight: 1.6,
        }}>
          {strength.line}
        </p>
      </div>
    </motion.div>
  );
}

interface StrengthGridProps {
  strengths: Strength[];
  dark?: boolean;
  columns?: 2 | 3;
}

export function StrengthGrid({ strengths, dark = false, columns = 2 }: StrengthGridProps) {
  if (strengths.length === 0) return null;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: '0.875rem',
    }}
    className={`strength-grid-${columns}col`}
    >
      {strengths.map((s, i) => (
        <StrengthCard key={s.id} strength={s} index={i} dark={dark} />
      ))}
      <style>{`
        @media (max-width: 640px) {
          .strength-grid-2col,
          .strength-grid-3col {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1023px) {
          .strength-grid-3col {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </div>
  );
}

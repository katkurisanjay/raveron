'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  titleHighlight?: string; // part of title rendered with gradient
  description?: string;
  align?: 'left' | 'center';
  light?: boolean; // dark background variant
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  titleHighlight,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '680px' : undefined,
        marginInline: isCenter ? 'auto' : undefined,
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{
            display: 'inline-block',
            color: 'var(--color-blue-electric)',
            marginBottom: '0.875rem',
          }}
        >
          {eyebrow}
        </span>
      )}

      <h2
        id={id}
        className="display-lg"
        style={{
          color: light ? 'var(--color-white)' : 'var(--color-navy-primary)',
          marginBottom: description ? '1rem' : 0,
        }}
      >
        {titleHighlight ? (
          <>
            {title}{' '}
            <span className="text-gradient-blue">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p
          className="body-lg"
          style={{
            color: light ? 'rgba(255,255,255,0.6)' : 'var(--color-cool-gray)',
            maxWidth: '580px',
            marginInline: isCenter ? 'auto' : undefined,
            marginTop: '0.75rem',
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

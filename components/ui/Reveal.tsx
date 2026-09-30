'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  style?: React.CSSProperties;
}

export function Reveal({ children, delay = 0, direction = 'up', className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 30 : 0,
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/** Staggered reveal for list children */
interface RevealListProps {
  children: React.ReactNode[];
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function RevealList({ children, stagger = 0.1, className, style }: RevealListProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className={className} style={style}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, delay: i * stagger, ease: [0.4, 0, 0.2, 1] }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--color-navy-primary)',
        paddingBlock: 'clamp(4rem, 8vw, 7rem)',
      }}
    >
      {/* Background decoration */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '60%',
          height: '160%',
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-5%',
          width: '40%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1.25rem' }}>
            Let&apos;s Build Something Great
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            id="cta-heading"
            className="display-xl"
            style={{ color: 'var(--color-white)', maxWidth: '680px', marginInline: 'auto', marginBottom: '1.25rem' }}
          >
            Have a project, a problem, or just an idea?{' '}
            <span className="text-gradient-blue">Our team is ready to engage.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-lg" style={{
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '500px',
            marginInline: 'auto',
            marginBottom: '2.5rem',
          }}>
            Whether you need a dedicated team for a long-term project, freelance expertise for a specific feature, 
            or a trusted partner with deep domain knowledge — RAVERON is ready to engage.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/start-a-project" className="btn btn-primary btn-lg">
                Start a Project
                <ArrowRight size={17} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Talk to Our Team
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

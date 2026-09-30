'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subCopyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert?: () => void } = {};

    const init = async () => {
      const gsap = (await import('gsap')).default;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 1.0 })
          .fromTo(eyebrowRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.5')
          .fromTo(headlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.35')
          .fromTo(subCopyRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.55')
          .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');
      });
    };

    init();
    return () => ctx.revert?.();
  }, []);

  return (
    <section
      aria-label="Hero"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--color-midnight)',
        paddingTop: 'var(--nav-height)',
      }}
    >
      {/* Animated background layer */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        {/* Grid pattern */}
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

        {/* Radial gradient — primary blue glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '70%',
          height: '80%',
          background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />

        {/* Radial gradient — cyan accent */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingBlock: '5rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="hero-grid"
        >
          {/* Left — Text content */}
          <div style={{ maxWidth: '640px' }}>
            {/* Eyebrow */}
            <span
              ref={eyebrowRef}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem',
                opacity: 0,
              }}
            >
              <span style={{
                display: 'inline-block',
                width: '2rem',
                height: '1.5px',
                background: 'var(--color-blue-electric)',
              }} />
              <span className="eyebrow" style={{ color: 'var(--color-blue-electric)' }}>
                RAVERON TECHNOLOGIES
              </span>
            </span>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="display-2xl"
              style={{
                color: 'var(--color-white)',
                marginBottom: '1.5rem',
                opacity: 0,
              }}
            >
              Think Deeper.{' '}
              <span style={{ display: 'block' }}>Build Stronger.</span>
              <span className="text-gradient-blue" style={{ display: 'block' }}>
                Evolve Further.
              </span>
            </h1>

            {/* Supporting copy */}
            <p
              ref={subCopyRef}
              className="body-lg"
              style={{
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '2.5rem',
                maxWidth: '520px',
                opacity: 0,
              }}
            >
              RAVERON provides professional AI & data services — data annotation, image & video labeling,
              AI training data, document processing — alongside technology solutions including
              web development, mobile apps, and IT project delivery.
            </p>

            {/* CTA group */}
            <div
              ref={ctaRef}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.875rem',
                opacity: 0,
              }}
            >
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link href="/start-a-project" className="btn btn-primary btn-lg">
                  Start a Project
                  <ArrowRight size={17} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link href="/services" className="btn btn-secondary btn-lg">
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right — Interactive visual */}
          <div
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            className="hero-visual-col"
          >
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.25rem',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        <span style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} />
      </motion.div>

      <style>{`
        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .hero-visual-col {
            display: flex !important;
          }
        }
        @media (max-width: 1023px) {
          .hero-visual-col { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-grid * { opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}

import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export default function NotFound() {
  return (
    <section
      style={{
        background: 'var(--color-midnight)',
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBlock: '6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-labelledby="not-found-heading"
    >
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} aria-hidden="true" />
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', background: 'radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)', filter: 'blur(80px)' }} aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '600px' }}>
        <Reveal>
          <span className="mono" style={{ display: 'block', fontSize: '6rem', fontWeight: 800, color: 'rgba(37,99,235,0.15)', lineHeight: 1, marginBottom: '1rem', letterSpacing: '-0.04em' }}>
            404
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 id="not-found-heading" className="display-md" style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>
            Page not found
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
            Try navigating from the home page.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary btn-lg">
              <Home size={16} aria-hidden="true" />
              Go Home
            </Link>
            <Link href="/services" className="btn btn-secondary btn-lg">
              Explore Services
            </Link>
            <Link href="/start-a-project" className="btn btn-secondary btn-lg">
              Start a Project <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

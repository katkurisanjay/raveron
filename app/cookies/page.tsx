import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'RAVERON TECHNOLOGIES cookie policy.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <section style={{ paddingTop: 'calc(var(--nav-height) + 3rem)', paddingBottom: '5rem' }} aria-labelledby="cookies-h1">
      <div className="container" style={{ maxWidth: '760px' }}>
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>Legal</span>
          <h1 id="cookies-h1" className="display-lg" style={{ color: 'var(--color-navy-primary)', marginBottom: '0.75rem' }}>Cookie Policy</h1>
          <p className="body-md" style={{ color: 'var(--color-cool-gray)' }}>Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: '2.5rem', color: 'var(--color-cool-gray)', lineHeight: 1.8 }}>
            <p style={{ fontSize: '0.8125rem', padding: '1.25rem', background: 'rgba(37,99,235,0.05)', borderRadius: '8px', border: '1px solid rgba(37,99,235,0.12)', marginBottom: '2rem' }}>
              [LEGAL NOTE] This is a placeholder cookie policy and must be completed before publication.
            </p>
            <p>This website may use essential cookies to ensure the site functions correctly. No tracking or advertising cookies are used without consent.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

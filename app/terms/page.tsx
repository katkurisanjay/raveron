import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'RAVERON TECHNOLOGIES terms of service.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <section style={{ paddingTop: 'calc(var(--nav-height) + 3rem)', paddingBottom: '5rem' }} aria-labelledby="terms-h1">
      <div className="container" style={{ maxWidth: '760px' }}>
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>Legal</span>
          <h1 id="terms-h1" className="display-lg" style={{ color: 'var(--color-navy-primary)', marginBottom: '0.75rem' }}>Terms of Service</h1>
          <p className="body-md" style={{ color: 'var(--color-cool-gray)' }}>Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ marginTop: '2.5rem', color: 'var(--color-cool-gray)', lineHeight: 1.8 }}>
            <p style={{ fontSize: '0.8125rem', padding: '1.25rem', background: 'rgba(37,99,235,0.05)', borderRadius: '8px', border: '1px solid rgba(37,99,235,0.12)', marginBottom: '2rem' }}>
              [LEGAL NOTE] This page is a placeholder. Complete terms of service must be prepared with a qualified legal professional before publication.
            </p>
            <p>By accessing or using the RAVERON TECHNOLOGIES website, you agree to use it for lawful purposes only. Enquiries submitted do not constitute a binding agreement. All services are subject to a formal written engagement.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

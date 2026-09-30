import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'RAVERON TECHNOLOGIES privacy policy — how we collect, use, and protect your information.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <section
      style={{ paddingTop: 'calc(var(--nav-height) + 3rem)', paddingBottom: '5rem' }}
      aria-labelledby="privacy-h1"
    >
      <div className="container" style={{ maxWidth: '760px' }}>
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>Legal</span>
          <h1 id="privacy-h1" className="display-lg" style={{ color: 'var(--color-navy-primary)', marginBottom: '0.75rem' }}>
            Privacy Policy
          </h1>
          <p className="body-md" style={{ color: 'var(--color-cool-gray)' }}>
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              color: 'var(--color-cool-gray)',
              fontSize: '0.9375rem',
              lineHeight: 1.8,
            }}
          >
            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-navy-primary)', marginBottom: '0.75rem' }}>1. Information We Collect</h2>
              <p>
                When you use our website or submit an enquiry, we may collect the following information:
                your name, company name, business email address, phone number, country, and the details
                of your project enquiry including any files you attach.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-navy-primary)', marginBottom: '0.75rem' }}>2. How We Use Your Information</h2>
              <p>
                Information submitted through our contact and project enquiry forms is used solely to
                review your requirement and contact you in response. We do not use it for unsolicited
                marketing or share it with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-navy-primary)', marginBottom: '0.75rem' }}>3. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your information
                against unauthorised access, disclosure, or misuse.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-navy-primary)', marginBottom: '0.75rem' }}>4. Data Retention</h2>
              <p>
                Enquiry and project data is retained for a reasonable period to support project delivery
                and correspondence, and deleted when no longer required.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-navy-primary)', marginBottom: '0.75rem' }}>5. Contact</h2>
              <p>
                For questions about this policy or your data, please contact us at{' '}
                {siteConfig.contact.email ? (
                  <a href={`mailto:${siteConfig.contact.email}`} style={{ color: 'var(--color-blue-primary)' }}>
                    {siteConfig.contact.email}
                  </a>
                ) : (
                  'the email address provided on our Contact page'
                )}
                .
              </p>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--color-cool-gray)', opacity: 0.7 }}>
              [LEGAL NOTE] This is a placeholder privacy policy. It must be reviewed and approved by a
              qualified legal professional before publication.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

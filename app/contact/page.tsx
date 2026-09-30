import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { WhatsappIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/BrandIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us | RAVERON TECHNOLOGIES | Hyderabad, India',
  description: 'Get in touch with RAVERON TECHNOLOGIES. Reach our team by email, phone, or WhatsApp, or visit our office in Hyderabad for AI & Data Services and Technology Development solutions.',
  keywords: [
    'contact RAVERON TECHNOLOGIES',
    'RAVERON TECHNOLOGIES contact number',
    'RAVERON TECHNOLOGIES email',
    'RAVERON TECHNOLOGIES address',
    'AI company contact Hyderabad',
    'data annotation services contact',
  ],
  alternates: { canonical: '/contact' },
};

const contactMethods = [
  { icon: Mail, label: 'Email', value: siteConfig.contact.email, href: siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : null },
  ...(siteConfig.contact.phones || []).map((phone, i) => ({ icon: WhatsappIcon, label: i === 0 ? 'Phone' : 'Phone 2', value: phone, href: `tel:${phone}` })),
  { icon: WhatsappIcon, label: 'WhatsApp', value: siteConfig.contact.whatsapp, href: siteConfig.contact.whatsapp ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}` : null },
  { icon: MapPin, label: 'Address', value: siteConfig.contact.address, href: null },
].filter((m) => m.value);

export default function ContactPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteConfig.url}/contact` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section
        style={{ background: 'var(--color-midnight)', paddingTop: 'calc(var(--nav-height) + 4rem)', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="contact-h1"
      >
        <div className="dot-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>Get in Touch</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 id="contact-h1" className="display-xl" style={{ color: 'var(--color-white)', marginBottom: '1.25rem', maxWidth: '620px' }}>
              Let&apos;s talk about{' '}
              <span className="text-gradient-blue">your project.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '520px', lineHeight: 1.8 }}>
              Reach us through any of the channels below, or use the Start a Project page to submit a
              detailed requirement directly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section theme-soft" aria-labelledby="contact-methods-heading">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem 5rem', alignItems: 'start' }} className="contact-grid">
            {/* Contact methods */}
            <div>
              <SectionHeading id="contact-methods-heading" eyebrow="Contact" title="Reach our team." />
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactMethods.length > 0 ? (
                  contactMethods.map(({ icon: Icon, label, value, href }) => (
                    <Reveal key={label}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem', background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
                        <div style={{ flexShrink: 0, width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)', background: 'rgba(37,99,235,0.08)' }}>
                          <Icon size={20} style={{ color: 'var(--color-blue-primary)' }} aria-hidden="true" />
                        </div>
                        <div>
                          <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-cool-gray)', marginBottom: '0.375rem' }}>{label}</span>
                          {href ? (
                            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-navy-primary)', textDecoration: 'none' }}>
                              {value}
                            </a>
                          ) : (
                            <span style={{ fontSize: '1rem', color: 'var(--color-navy-primary)' }}>{value}</span>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  ))
                ) : (
                  <div style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--color-border-light)', textAlign: 'center', color: 'var(--color-cool-gray)', fontSize: '0.875rem' }}>
                    Contact details will be displayed here once configured in <code>config/site.ts</code>.
                  </div>
                )}
              </div>

              {/* Map embed */}
              <Reveal delay={0.2}>
                <div style={{ marginTop: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border-light)' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3089638766955!2d79.60560237463987!3d17.977111285550023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345007408c4b1%3A0x94c33563072d51a3!2sRaveron%20Technologies!5e1!3m2!1sen!2sin!4v1790757152690!5m2!1sen!2sin" 
                    width="100%" 
                    height="350" 
                    style={{ border: 0, display: 'block' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            {/* Project CTA panel */}
            <div>
              <Reveal delay={0.1}>
                <div style={{ padding: '2.5rem', background: 'var(--color-navy-primary)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border-dark)' }}>
                  <span className="eyebrow" style={{ color: 'var(--color-blue-electric)', display: 'block', marginBottom: '1rem' }}>Start a Project</span>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-white)', marginBottom: '1rem', lineHeight: 1.3 }}>
                    Have a requirement? Submit it directly.
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                    Use our project enquiry form to describe your requirements in your own words.
                    Our team will review your submission and contact you through the details provided.
                  </p>
                  <Link href="/start-a-project" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Start a Project <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>

              {/* Social links if available */}
              {Object.entries(siteConfig.social).some(([, v]) => v) && (
                <Reveal delay={0.2}>
                  <div style={{ marginTop: '1.25rem', padding: '1.5rem', background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-light)' }}>
                    <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-cool-gray)', marginBottom: '1rem' }}>Follow Us</p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <a href={siteConfig.social.linkedin || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--color-blue-primary)', textDecoration: 'none', fontWeight: 600 }}>
                        <LinkedinIcon style={{ width: 16, height: 16 }} />
                        LinkedIn
                      </a>
                      <a href={siteConfig.social.instagram || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--color-blue-primary)', textDecoration: 'none', fontWeight: 600 }}>
                        <InstagramIcon style={{ width: 16, height: 16 }} />
                        Instagram
                      </a>
                      <a href={`https://wa.me/${(siteConfig.contact.whatsapp || '').replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--color-blue-primary)', textDecoration: 'none', fontWeight: 600 }}>
                        <WhatsappIcon style={{ width: 16, height: 16 }} />
                        WhatsApp
                      </a>
                      {siteConfig.social.twitter && <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', color: 'var(--color-blue-primary)', textDecoration: 'none', fontWeight: 600 }}>X / Twitter</a>}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
        <style>{`@media(min-width:1024px){.contact-grid{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      <CTASection />
    </>
  );
}

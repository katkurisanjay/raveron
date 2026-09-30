'use client';

import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { WhatsappIcon, LinkedinIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '@/components/ui/BrandIcons';
import { footerNav, primaryCTA } from '@/config/navigation';
import { siteConfig } from '@/config/site';

/** Hover-interactive link — needs 'use client' for onMouse events */
function HoverLink({
  href,
  children,
  external = false,
  size = 'md',
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  size?: 'sm' | 'md';
}) {
  const fontSize = size === 'sm' ? '0.8125rem' : '0.9rem';
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={{
        textDecoration: 'none',
        fontSize,
        color: 'rgba(255,255,255,0.6)',
        transition: 'color 0.15s ease',
        display: 'inline-block',
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; }}
    >
      {children}
    </Link>
  );
}

function HoverAnchor({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.15s ease' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--color-white)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
    >
      {children}
    </a>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--color-midnight)',
        borderTop: '1px solid var(--color-border-dark)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '3rem 2rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1', minWidth: 0 }}>
            <Link href="/" aria-label="RAVERON TECHNOLOGIES — Home" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.1875rem', letterSpacing: '-0.02em', color: 'var(--color-white)' }}>
                RAVERON<span style={{ color: 'var(--color-blue-electric)' }}>.</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: '240px' }}>
              AI & Data Services and Technology & Development for global business requirements.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {siteConfig.contact.email && (
                <HoverAnchor href={`mailto:${siteConfig.contact.email}`}>
                  <Mail size={13} aria-hidden="true" /> {siteConfig.contact.email}
                </HoverAnchor>
              )}
              {siteConfig.contact.phones?.map((phone) => (
                <HoverAnchor key={phone} href={`tel:${phone}`}>
                  <Phone size={13} aria-hidden="true" /> {phone}
                </HoverAnchor>
              ))}
              {siteConfig.contact.address && (
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
                  <MapPin size={13} style={{ marginTop: '2px', flexShrink: 0 }} aria-hidden="true" />
                  {siteConfig.contact.address}
                </div>
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
              Company
            </h3>
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <HoverLink href={link.href}>{link.label}</HoverLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
              Services
            </h3>
            <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <HoverLink href={link.href}>{link.label}</HoverLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
              Work With Us
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Have a project? Let&apos;s talk about what you need.
            </p>
            <Link
              href={primaryCTA.href}
              className="btn btn-primary btn-sm"
              style={{ gap: '0.375rem', width: '100%', justifyContent: 'center' }}
            >
              {primaryCTA.label}
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--color-border-dark)', paddingTop: '1.75rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)' }}>
              © {currentYear} RAVERON TECHNOLOGIES. All rights reserved.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <ul role="list" style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                {footerNav.legal.map((link) => (
                  <li key={link.href}>
                    <HoverLink href={link.href} size="sm">{link.label}</HoverLink>
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {siteConfig.social.facebook && (
                  <HoverAnchor href={siteConfig.social.facebook}>
                    <FacebookIcon style={{ width: 24, height: 24 }} aria-label="Facebook" />
                  </HoverAnchor>
                )}
                {siteConfig.social.instagram && (
                  <HoverAnchor href={siteConfig.social.instagram}>
                    <InstagramIcon style={{ width: 24, height: 24 }} aria-label="Instagram" />
                  </HoverAnchor>
                )}
                {siteConfig.social.whatsapp && (
                  <HoverAnchor href={siteConfig.social.whatsapp}>
                    <WhatsappIcon style={{ width: 24, height: 24 }} aria-label="WhatsApp" />
                  </HoverAnchor>
                )}
                {siteConfig.social.twitter && (
                  <HoverAnchor href={siteConfig.social.twitter}>
                    <TwitterIcon style={{ width: 24, height: 24 }} aria-label="Twitter" />
                  </HoverAnchor>
                )}
                {siteConfig.social.linkedin && (
                  <HoverAnchor href={siteConfig.social.linkedin}>
                    <LinkedinIcon style={{ width: 24, height: 24 }} aria-label="LinkedIn" />
                  </HoverAnchor>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

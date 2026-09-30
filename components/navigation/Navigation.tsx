'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { mainNav, primaryCTA, type NavItem } from '@/config/navigation';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);

  // Compact nav after scrolling
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Trap Escape key for mobile menu
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, padding 0.3s ease',
          backgroundColor: scrolled ? 'rgba(5, 10, 24, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(30, 42, 68, 0.8)' : '1px solid transparent',
          paddingBlock: scrolled ? '0.75rem' : '1rem',
        }}
      >
        <div className="container">
          <nav
            aria-label="Main navigation"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}
          >
            {/* Logo */}
            <Link
              href="/"
              aria-label="RAVERON TECHNOLOGIES — Home"
              style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}
            >
              {/* Logo placeholder — replace with <Image> once logo is provided */}
              <span style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 800,
                fontSize: '1.1875rem',
                letterSpacing: '-0.02em',
                color: 'var(--color-white)',
              }}>
                RAVERON<span style={{ color: 'var(--color-blue-electric)' }}>.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul
              role="list"
              style={{
                display: 'none',
                listStyle: 'none',
                alignItems: 'center',
                gap: '0.25rem',
              }}
              className="desktop-nav"
            >
              {mainNav.map((item) => (
                <li key={item.href} style={{ position: 'relative' }}>
                  {item.children ? (
                    <div ref={servicesRef}>
                      <button
                        onClick={() => setServicesOpen((p) => !p)}
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          padding: '0.5rem 0.75rem',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontFamily: 'var(--font-primary)',
                          fontSize: '0.9375rem',
                          fontWeight: 500,
                          color: isActive(item.href) ? 'var(--color-white)' : 'rgba(255,255,255,0.72)',
                          borderRadius: 'var(--radius-md)',
                          transition: 'color 0.15s ease, background 0.15s ease',
                        }}
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          style={{
                            transition: 'transform 0.2s ease',
                            transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            opacity: 0.7,
                          }}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                            style={{
                              position: 'absolute',
                              top: 'calc(100% + 0.5rem)',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '280px',
                              background: 'rgba(7, 17, 38, 0.98)',
                              border: '1px solid var(--color-border-dark)',
                              borderRadius: 'var(--radius-lg)',
                              padding: '0.5rem',
                              backdropFilter: 'blur(20px)',
                              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                            }}
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                style={{
                                  display: 'block',
                                  padding: '0.875rem 1rem',
                                  borderRadius: 'var(--radius-md)',
                                  textDecoration: 'none',
                                  transition: 'background 0.15s ease',
                                  background: isActive(child.href) ? 'rgba(37,99,235,0.12)' : 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = isActive(child.href)
                                    ? 'rgba(37,99,235,0.12)' : 'transparent';
                                }}
                              >
                                <span style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-white)', marginBottom: '0.25rem' }}>
                                  {child.label}
                                </span>
                                {child.description && (
                                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                                    {child.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      style={{
                        display: 'block',
                        padding: '0.5rem 0.75rem',
                        textDecoration: 'none',
                        fontFamily: 'var(--font-primary)',
                        fontSize: '0.9375rem',
                        fontWeight: 500,
                        color: isActive(item.href) ? 'var(--color-white)' : 'rgba(255,255,255,0.72)',
                        borderRadius: 'var(--radius-md)',
                        transition: 'color 0.15s ease, background 0.15s ease',
                        position: 'relative',
                      }}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span style={{
                          position: 'absolute',
                          bottom: '2px',
                          left: '0.75rem',
                          right: '0.75rem',
                          height: '2px',
                          background: 'var(--color-blue-electric)',
                          borderRadius: 'var(--radius-full)',
                        }} />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href={primaryCTA.href} className="btn btn-primary" style={{ gap: '0.5rem' }}>
                  {primaryCTA.label}
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen((p) => !p)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                color: 'var(--color-white)',
                transition: 'background 0.15s ease',
              }}
              className="mobile-menu-btn"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 998,
                background: 'rgba(5, 10, 24, 0.7)',
                backdropFilter: 'blur(4px)',
              }}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
                width: 'min(320px, 90vw)',
                background: 'var(--color-navy-deep)',
                borderLeft: '1px solid var(--color-border-dark)',
                overflowY: 'auto',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-white)', letterSpacing: '-0.02em' }}>
                  RAVERON<span style={{ color: 'var(--color-blue-electric)' }}>.</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: '36px', height: '36px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 'var(--radius-md)',
                    cursor: 'pointer',
                    color: 'var(--color-white)',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <nav aria-label="Mobile navigation">
                <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {mainNav.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.25 }}
                    >
                      {item.children ? (
                        <>
                          <span style={{
                            display: 'block',
                            padding: '0.625rem 0.75rem',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            color: 'rgba(255,255,255,0.4)',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginTop: '0.5rem',
                          }}>
                            {item.label}
                          </span>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              style={{
                                display: 'block',
                                padding: '0.625rem 0.75rem 0.625rem 1.25rem',
                                textDecoration: 'none',
                                fontSize: '0.9375rem',
                                fontWeight: 500,
                                color: isActive(child.href) ? 'var(--color-white)' : 'rgba(255,255,255,0.7)',
                                borderRadius: 'var(--radius-md)',
                                background: isActive(child.href) ? 'rgba(37,99,235,0.12)' : 'transparent',
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          aria-current={isActive(item.href) ? 'page' : undefined}
                          style={{
                            display: 'block',
                            padding: '0.75rem',
                            textDecoration: 'none',
                            fontSize: '1.0625rem',
                            fontWeight: 600,
                            color: isActive(item.href) ? 'var(--color-white)' : 'rgba(255,255,255,0.75)',
                            borderRadius: 'var(--radius-md)',
                            background: isActive(item.href) ? 'rgba(37,99,235,0.1)' : 'transparent',
                            borderLeft: isActive(item.href) ? '2px solid var(--color-blue-electric)' : '2px solid transparent',
                          }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
              >
                <Link
                  href={primaryCTA.href}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {primaryCTA.label}
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

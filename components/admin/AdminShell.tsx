'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { LayoutDashboard, InboxIcon, Briefcase, Users, LogOut, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard, exact: true },
  { label: 'Enquiries', href: '/admin/enquiries', icon: InboxIcon },
  { label: 'Jobs', href: '/admin/jobs', icon: Briefcase },
  { label: 'Applications', href: '/admin/applications', icon: Users },
];

function AdminSidebar({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo */}
      <div style={{ padding: '1.5rem 1.25rem', borderBottom: '1px solid var(--color-border-dark)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--color-white)' }}>
          RAVERON<span style={{ color: 'var(--color-blue-electric)' }}>.</span>
          <span style={{ display: 'block', fontSize: '0.6875rem', fontWeight: 500, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '1px' }}>Admin Panel</span>
        </span>
        {onClose && (
          <button onClick={onClose} aria-label="Close sidebar" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', display: 'flex' }}>
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav aria-label="Admin navigation" style={{ flex: 1, padding: '1rem 0.75rem', overflowY: 'auto' }}>
        <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navItems.map(({ label, href, icon: Icon, exact }) => {
            const active = isActive(href, exact);
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.625rem 0.875rem', borderRadius: 'var(--radius-md)',
                    textDecoration: 'none', fontSize: '0.9rem', fontWeight: active ? 600 : 500,
                    color: active ? 'var(--color-white)' : 'rgba(255,255,255,0.55)',
                    background: active ? 'rgba(37,99,235,0.15)' : 'transparent',
                    border: active ? '1px solid rgba(37,99,235,0.25)' : '1px solid transparent',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Icon size={17} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom actions */}
      <div style={{ padding: '0.75rem', borderTop: '1px solid var(--color-border-dark)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', transition: 'color 0.15s ease' }}
        >
          <ExternalLink size={14} aria-hidden="true" />
          View Website
        </a>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-md)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', width: '100%', transition: 'color 0.15s ease' }}
        >
          <LogOut size={14} aria-hidden="true" />
          Sign Out
        </button>
      </div>
    </div>
  );
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const SIDEBAR_W = 240;

  return (
    <div style={{ display: 'flex', minHeight: '100dvh', background: 'var(--color-midnight)' }}>
      {/* Desktop sidebar */}
      <aside
        style={{
          width: `${SIDEBAR_W}px`, flexShrink: 0,
          background: 'var(--color-navy-deep)',
          borderRight: '1px solid var(--color-border-dark)',
          display: 'none',
          flexDirection: 'column',
          position: 'sticky', top: 0, height: '100dvh', overflowY: 'auto',
        }}
        className="admin-sidebar-desktop"
        aria-label="Admin sidebar"
      >
        <AdminSidebar />
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <>
          <div
            onClick={() => setMobileOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(5,10,24,0.7)', backdropFilter: 'blur(4px)' }}
            aria-hidden="true"
          />
          <aside
            style={{
              position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 50,
              width: `${SIDEBAR_W}px`, background: 'var(--color-navy-deep)',
              borderRight: '1px solid var(--color-border-dark)', overflowY: 'auto',
            }}
          >
            <AdminSidebar onClose={() => setMobileOpen(false)} />
          </aside>
        </>
      )}

      {/* Main content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Mobile topbar */}
        <div
          className="admin-topbar-mobile"
          style={{
            display: 'none', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.875rem 1.25rem', background: 'var(--color-navy-deep)',
            borderBottom: '1px solid var(--color-border-dark)',
          }}
        >
          <span style={{ fontWeight: 800, fontSize: '0.9375rem', color: 'var(--color-white)' }}>
            RAVERON<span style={{ color: 'var(--color-blue-electric)' }}>.</span>
          </span>
          <button onClick={() => setMobileOpen(true)} aria-label="Open admin navigation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-md)', cursor: 'pointer', color: 'var(--color-white)' }}>
            <Menu size={18} />
          </button>
        </div>

        {/* Page content */}
        <main id="admin-main" style={{ flex: 1, padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
          {children}
        </main>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .admin-sidebar-desktop { display: flex !important; }
          .admin-topbar-mobile { display: none !important; }
        }
        @media (max-width: 1023px) {
          .admin-topbar-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  );
}

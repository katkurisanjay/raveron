import type { Metadata } from 'next';
import Link from 'next/link';
import { InboxIcon, Briefcase, Users, ArrowRight } from 'lucide-react';
// import { db } from '@/lib/database/db'; // DB disabled — uncomment when DATABASE_URL is set

export const metadata: Metadata = { title: 'Admin Dashboard | RAVERON' };

export default async function AdminDashboardPage() {
  // ── DB COUNTS (disabled — uncomment when DATABASE_URL is set) ───────────────
  // let enquiryCount = 0, newEnquiryCount = 0, jobCount = 0, applicationCount = 0, newApplicationCount = 0;
  // try {
  //   [enquiryCount, newEnquiryCount, jobCount, applicationCount, newApplicationCount] = await Promise.all([
  //     db.enquiry.count(),
  //     db.enquiry.count({ where: { status: 'new' } }),
  //     db.job.count({ where: { status: 'active' } }),
  //     db.jobApplication.count(),
  //     db.jobApplication.count({ where: { status: 'received' } }),
  //   ]);
  // } catch { /* DB not connected */ }
  // ────────────────────────────────────────────────────────────────────────────

  const enquiryCount = 0, newEnquiryCount = 0, jobCount = 0, applicationCount = 0, newApplicationCount = 0;

  const stats = [
    { label: 'Total Enquiries', value: enquiryCount, sub: `${newEnquiryCount} new`, href: '/admin/enquiries', icon: InboxIcon, accent: 'var(--color-blue-electric)' },
    { label: 'Active Jobs', value: jobCount, sub: 'Open positions', href: '/admin/jobs', icon: Briefcase, accent: 'var(--color-cyan-accent)' },
    { label: 'Applications', value: applicationCount, sub: `${newApplicationCount} unreviewed`, href: '/admin/applications', icon: Users, accent: 'var(--color-blue-electric)' },
  ];

  return (
    <div>
      {/* DB Notice */}
      <div style={{ marginBottom: '1.5rem', padding: '0.875rem 1.25rem', background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.25)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', color: '#FDE047' }}>
        ⚠ Database not connected. Configure <code style={{background:'rgba(255,255,255,0.08)',padding:'0 4px',borderRadius:'4px'}}>DATABASE_URL</code> in your Vercel environment variables to enable live data.
      </div>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-white)', letterSpacing: '-0.02em', marginBottom: '0.375rem' }}>
          Dashboard
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)' }}>
          Overview of enquiries, jobs, and applications.
        </p>
      </div>

      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              style={{
                display: 'block', padding: '1.5rem', textDecoration: 'none',
                background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)',
                borderRadius: 'var(--radius-lg)', transition: 'border-color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md)', background: `rgba(${stat.accent === 'var(--color-cyan-accent)' ? '6,182,212' : '37,99,235'},0.15)` }}>
                  <Icon size={17} style={{ color: stat.accent }} aria-hidden="true" />
                </div>
                <ArrowRight size={14} style={{ color: 'rgba(255,255,255,0.2)' }} aria-hidden="true" />
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-white)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginTop: '0.375rem' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.25rem' }}>
                {stat.sub}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent enquiries */}
      <section aria-labelledby="recent-enquiries-heading">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <h2 id="recent-enquiries-heading" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-white)' }}>Recent Enquiries</h2>
          <Link href="/admin/enquiries" style={{ fontSize: '0.8125rem', color: 'var(--color-blue-electric)', textDecoration: 'none' }}>View all →</Link>
        </div>
        <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--color-navy-deep)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-dark)', color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>
          {/* ── RECENT ENQUIRIES LIST (disabled — restore db.enquiry.findMany when DB is connected) ── */}
          No enquiries yet — connect a database to see live data here.
        </div>
      </section>
    </div>
  );
}

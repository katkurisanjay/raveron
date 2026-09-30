import type { Metadata } from 'next';
import Link from 'next/link';
import { InboxIcon, Briefcase, Users, ArrowRight } from 'lucide-react';
import { db } from '@/lib/database/db';

export const metadata: Metadata = { title: 'Admin Dashboard | RAVERON' };

export default async function AdminDashboardPage() {
  // Fetch counts (gracefully handle missing DB)
  let enquiryCount = 0, newEnquiryCount = 0, jobCount = 0, applicationCount = 0, newApplicationCount = 0;
  let dbConnected = true;
  try {
    [enquiryCount, newEnquiryCount, jobCount, applicationCount, newApplicationCount] = await Promise.all([
      db.enquiry.count(),
      db.enquiry.count({ where: { status: 'new' } }),
      db.job.count({ where: { status: 'active' } }),
      db.jobApplication.count(),
      db.jobApplication.count({ where: { status: 'received' } }),
    ]);
  } catch {
    dbConnected = false;
  }

  const stats = [
    { label: 'Total Enquiries', value: enquiryCount, sub: `${newEnquiryCount} new`, href: '/admin/enquiries', icon: InboxIcon, accent: 'var(--color-blue-electric)' },
    { label: 'Active Jobs', value: jobCount, sub: 'Open positions', href: '/admin/jobs', icon: Briefcase, accent: 'var(--color-cyan-accent)' },
    { label: 'Applications', value: applicationCount, sub: `${newApplicationCount} unreviewed`, href: '/admin/applications', icon: Users, accent: 'var(--color-blue-electric)' },
  ];

  return (
    <div>
      {/* DB warning */}
      {!dbConnected && (
        <div style={{ marginBottom: '1.5rem', padding: '0.875rem 1.25rem', background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.25)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', color: '#FDE047' }}>
          ⚠ Database not connected. Configure <code style={{background:'rgba(255,255,255,0.08)',padding:'0 4px',borderRadius:'4px'}}>DATABASE_URL</code> in <code style={{background:'rgba(255,255,255,0.08)',padding:'0 4px',borderRadius:'4px'}}>.env.local</code> to enable live data.
        </div>
      )}
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
        <RecentEnquiries />
      </section>
    </div>
  );
}

async function RecentEnquiries() {
  const enquiries = await db.enquiry.findMany({
    orderBy: { createdAt: 'desc' },
    take: 8,
    select: { id: true, fullName: true, companyName: true, businessEmail: true, status: true, createdAt: true },
  });

  if (enquiries.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--color-navy-deep)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border-dark)', color: 'rgba(255,255,255,0.35)', fontSize: '0.875rem' }}>
        No enquiries yet.
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    new: '#3B82F6',
    reviewing: '#F59E0B',
    contacted: '#8B5CF6',
    qualified: '#10B981',
    in_progress: '#06B6D4',
    converted: '#16A34A',
    closed: '#6B7280',
  };

  return (
    <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border-dark)' }}>
              {['Name', 'Company', 'Email', 'Status', 'Received'].map((h) => (
                <th key={h} style={{ padding: '0.875rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
              <th style={{ padding: '0.875rem 1rem' }}><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e, i) => (
              <tr key={e.id} style={{ borderBottom: i < enquiries.length - 1 ? '1px solid rgba(30,42,68,0.5)' : 'none' }}>
                <td style={{ padding: '0.875rem 1rem', color: 'var(--color-white)', fontWeight: 500, whiteSpace: 'nowrap' }}>{e.fullName}</td>
                <td style={{ padding: '0.875rem 1rem', color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap' }}>{e.companyName}</td>
                <td style={{ padding: '0.875rem 1rem', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{e.businessEmail}</td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.25rem 0.625rem', borderRadius: 'var(--radius-full)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', background: `${statusColors[e.status] ?? '#6B7280'}20`, color: statusColors[e.status] ?? '#6B7280' }}>
                    {e.status.replace('_', ' ')}
                  </span>
                </td>
                <td style={{ padding: '0.875rem 1rem', color: 'rgba(255,255,255,0.35)', fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>
                  {new Date(e.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <Link href={`/admin/enquiries/${e.id}`} style={{ fontSize: '0.8125rem', color: 'var(--color-blue-electric)', textDecoration: 'none', fontWeight: 500 }}>
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

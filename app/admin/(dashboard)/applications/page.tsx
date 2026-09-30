import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/database/db';
import { ChevronRight, Eye, User } from 'lucide-react';

export const metadata: Metadata = { title: 'Applications | Admin — RAVERON' };

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  received:    { bg: 'rgba(59,130,246,0.15)',  color: '#60A5FA' },
  reviewing:   { bg: 'rgba(234,179,8,0.15)',   color: '#FDE047' },
  shortlisted: { bg: 'rgba(6,182,212,0.15)',   color: '#67E8F9' },
  interviewed: { bg: 'rgba(139,92,246,0.15)',  color: '#C4B5FD' },
  offered:     { bg: 'rgba(245,158,11,0.15)',  color: '#FCD34D' },
  hired:       { bg: 'rgba(16,185,129,0.15)',  color: '#6EE7B7' },
  rejected:    { bg: 'rgba(239,68,68,0.15)',   color: '#FCA5A5' },
  withdrawn:   { bg: 'rgba(107,114,128,0.15)', color: '#9CA3AF' },
};

export default async function ApplicationsPage() {
  const applications = await db.jobApplication.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      job: { select: { title: true, department: true } },
    },
  });

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.375rem' }}>
            <Link href="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Dashboard</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Applications</span>
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-white)', letterSpacing: '-0.02em' }}>Applications</h1>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>
            {applications.length} total job applications
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {(['received', 'shortlisted', 'hired'] as const).map((s) => {
            const count = applications.filter((a) => a.status === s).length;
            const c = STATUS_COLORS[s];
            return (
              <span key={s} style={{ padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600, background: c.bg, color: c.color }}>
                {count} {s}
              </span>
            );
          })}
        </div>
      </div>

      <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
        {applications.length === 0 ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.9375rem' }}>
            No applications yet.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border-dark)' }}>
                  {['Candidate', 'Role', 'Department', 'Email', 'Status', 'Applied', ''].map((h) => (
                    <th key={h} style={{ padding: '0.875rem 1.125rem', textAlign: 'left', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {applications.map((a, i) => {
                  const c = STATUS_COLORS[a.status] ?? { bg: 'rgba(107,114,128,0.15)', color: '#9CA3AF' };
                  return (
                    <tr key={a.id} style={{ borderBottom: i < applications.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <td style={{ padding: '1rem 1.125rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <User size={13} style={{ color: '#60A5FA' }} />
                          </div>
                          <span style={{ fontWeight: 600, color: 'var(--color-white)', whiteSpace: 'nowrap' }}>{a.fullName}</span>
                        </div>
                      </td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>{a.job.title}</td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>{a.job.department}</td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{a.email}</td>
                      <td style={{ padding: '1rem 1.125rem' }}>
                        <span style={{ display: 'inline-flex', padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: c.bg, color: c.color }}>
                          {a.status}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>
                        {new Date(a.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td style={{ padding: '1rem 1.125rem' }}>
                        <Link href={`/admin/applications/${a.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8125rem', color: 'var(--color-blue-electric)', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          <Eye size={13} /> View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

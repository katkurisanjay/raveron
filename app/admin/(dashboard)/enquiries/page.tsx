import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/database/db';
import { ChevronRight, Search, Filter, Eye } from 'lucide-react';

export const metadata: Metadata = { title: 'Enquiries | Admin — RAVERON' };

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  new:         { bg: 'rgba(59,130,246,0.15)',  color: '#60A5FA' },
  reviewing:   { bg: 'rgba(234,179,8,0.15)',   color: '#FDE047' },
  contacted:   { bg: 'rgba(139,92,246,0.15)',  color: '#C4B5FD' },
  qualified:   { bg: 'rgba(16,185,129,0.15)',  color: '#6EE7B7' },
  in_progress: { bg: 'rgba(6,182,212,0.15)',   color: '#67E8F9' },
  converted:   { bg: 'rgba(22,163,74,0.15)',   color: '#86EFAC' },
  closed:      { bg: 'rgba(107,114,128,0.15)', color: '#9CA3AF' },
};

export default async function EnquiriesPage() {
  const enquiries = await db.enquiry.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      fullName: true,
      companyName: true,
      businessEmail: true,
      country: true,
      expectedScope: true,
      status: true,
      createdAt: true,
    },
  });

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.375rem' }}>
            <Link href="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Dashboard</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Enquiries</span>
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-white)', letterSpacing: '-0.02em' }}>
            Enquiries
          </h1>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>
            {enquiries.length} total project enquiries
          </p>
        </div>

        {/* Status summary pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {(['new', 'reviewing', 'qualified'] as const).map((s) => {
            const count = enquiries.filter((e) => e.status === s).length;
            const c = STATUS_COLORS[s];
            return (
              <span key={s} style={{ padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 600, background: c.bg, color: c.color, letterSpacing: '0.04em' }}>
                {count} {s}
              </span>
            );
          })}
        </div>
      </div>

      {/* Table card */}
      <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
        {enquiries.length === 0 ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.9375rem' }}>
            No enquiries yet. They will appear here once submitted via the website.
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border-dark)' }}>
                  {['Name', 'Company', 'Email', 'Country', 'Scope', 'Status', 'Date', ''].map((h) => (
                    <th key={h} style={{ padding: '0.875rem 1.125rem', textAlign: 'left', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', whiteSpace: 'nowrap' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e, i) => {
                  const c = STATUS_COLORS[e.status] ?? { bg: 'rgba(107,114,128,0.15)', color: '#9CA3AF' };
                  return (
                    <tr key={e.id} style={{ borderBottom: i < enquiries.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none', transition: 'background 0.12s' }}>
                      <td style={{ padding: '1rem 1.125rem', color: 'var(--color-white)', fontWeight: 600, whiteSpace: 'nowrap' }}>{e.fullName}</td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.65)', whiteSpace: 'nowrap' }}>{e.companyName}</td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{e.businessEmail}</td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' }}>{e.country}</td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.45)', maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.expectedScope}</td>
                      <td style={{ padding: '1rem 1.125rem' }}>
                        <span style={{ display: 'inline-flex', padding: '0.2rem 0.6rem', borderRadius: '999px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: c.bg, color: c.color }}>
                          {e.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.125rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>
                        {new Date(e.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </td>
                      <td style={{ padding: '1rem 1.125rem' }}>
                        <Link
                          href={`/admin/enquiries/${e.id}`}
                          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8125rem', color: 'var(--color-blue-electric)', textDecoration: 'none', fontWeight: 600, whiteSpace: 'nowrap' }}
                        >
                          <Eye size={13} aria-hidden="true" /> View
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

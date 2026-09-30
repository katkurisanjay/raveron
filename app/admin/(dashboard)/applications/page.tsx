import type { Metadata } from 'next';
import Link from 'next/link';
// import { db } from '@/lib/database/db'; // DB disabled — uncomment when DATABASE_URL is set
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Applications | Admin — RAVERON' };

export default async function ApplicationsPage() {
  // ── DB QUERY (disabled — uncomment when DATABASE_URL is set) ────────────────
  // const applications = await db.jobApplication.findMany({
  //   orderBy: { createdAt: 'desc' },
  //   include: { job: { select: { title: true, department: true } } },
  // });
  // ────────────────────────────────────────────────────────────────────────────

  const applications: never[] = [];

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
      </div>

      <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
        <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.9375rem' }}>
          {/* ── TABLE (disabled — restore db.jobApplication.findMany when DB is connected) ── */}
          No applications yet. Connect a database to see live application data.
        </div>
      </div>
    </div>
  );
}

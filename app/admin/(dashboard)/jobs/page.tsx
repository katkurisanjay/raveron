import type { Metadata } from 'next';
import Link from 'next/link';
// import { db } from '@/lib/database/db'; // DB disabled — uncomment when DATABASE_URL is set
import { ChevronRight, Briefcase, Plus } from 'lucide-react';

export const metadata: Metadata = { title: 'Jobs | Admin — RAVERON' };

export default async function JobsPage() {
  // ── DB QUERY (disabled — uncomment when DATABASE_URL is set) ────────────────
  // const jobs = await db.job.findMany({
  //   orderBy: { postedAt: 'desc' },
  //   include: { _count: { select: { applications: true } } },
  // });
  // ────────────────────────────────────────────────────────────────────────────

  const jobs: never[] = [];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', marginBottom: '0.375rem' }}>
            <Link href="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Dashboard</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>Jobs</span>
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-white)', letterSpacing: '-0.02em' }}>Jobs</h1>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.25rem' }}>
            {jobs.length} active positions
          </p>
        </div>
        <Link
          href="/admin/jobs/new"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', background: 'var(--color-blue-electric)', color: '#fff', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}
        >
          <Plus size={15} /> Post a Job
        </Link>
      </div>

      <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', padding: '4rem 2rem', textAlign: 'center' }}>
        <Briefcase size={36} style={{ color: 'rgba(255,255,255,0.15)', margin: '0 auto 1rem' }} />
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>
          {/* ── JOB LIST (disabled — restore db.job.findMany when DB is connected) ── */}
          No job postings yet. Connect a database to manage jobs.
        </p>
        <Link href="/admin/jobs/new" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', background: 'var(--color-blue-electric)', color: '#fff', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}>
          <Plus size={15} /> Post First Job
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { db } from '@/lib/database/db';
import { ChevronRight, Briefcase, Plus, Users, Eye } from 'lucide-react';

export const metadata: Metadata = { title: 'Jobs | Admin — RAVERON' };

const JOB_STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  active: { bg: 'rgba(16,185,129,0.15)', color: '#6EE7B7' },
  paused: { bg: 'rgba(234,179,8,0.15)',  color: '#FDE047' },
  closed: { bg: 'rgba(107,114,128,0.15)', color: '#9CA3AF' },
};

export default async function JobsPage() {
  const jobs = await db.job.findMany({
    orderBy: { postedAt: 'desc' },
    include: {
      _count: { select: { applications: true } },
    },
  });

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
            {jobs.filter((j) => j.status === 'active').length} active positions
          </p>
        </div>
        <Link
          href="/admin/jobs/new"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', background: 'var(--color-blue-electric)', color: '#fff', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}
        >
          <Plus size={15} /> Post a Job
        </Link>
      </div>

      {jobs.length === 0 ? (
        <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', padding: '4rem 2rem', textAlign: 'center' }}>
          <Briefcase size={36} style={{ color: 'rgba(255,255,255,0.15)', margin: '0 auto 1rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9375rem', marginBottom: '1.5rem' }}>No job postings yet.</p>
          <Link href="/admin/jobs/new" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', background: 'var(--color-blue-electric)', color: '#fff', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 700 }}>
            <Plus size={15} /> Post First Job
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {jobs.map((job) => {
            const c = JOB_STATUS_COLORS[job.status] ?? { bg: 'rgba(107,114,128,0.15)', color: '#9CA3AF' };
            return (
              <div key={job.id} style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-white)', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{job.title}</div>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.45)' }}>
                    {job.department} · {job.location} · {job.employmentType.replace('_', ' ')}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
                    <Users size={13} />
                    {job._count.applications} application{job._count.applications !== 1 ? 's' : ''}
                  </div>
                  <span style={{ padding: '0.2rem 0.625rem', borderRadius: '999px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: c.bg, color: c.color }}>
                    {job.status}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.3)' }}>
                    {new Date(job.postedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  </span>
                  <Link href={`/admin/jobs/${job.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.8125rem', color: 'var(--color-blue-electric)', textDecoration: 'none', fontWeight: 600 }}>
                    <Eye size={13} /> View
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

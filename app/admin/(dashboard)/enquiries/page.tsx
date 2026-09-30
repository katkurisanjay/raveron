import type { Metadata } from 'next';
import Link from 'next/link';
// import { db } from '@/lib/database/db'; // DB disabled — uncomment when DATABASE_URL is set
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Enquiries | Admin — RAVERON' };

export default async function EnquiriesPage() {
  // ── DB QUERY (disabled — uncomment when DATABASE_URL is set) ────────────────
  // const enquiries = await db.enquiry.findMany({
  //   orderBy: { createdAt: 'desc' },
  //   select: {
  //     id: true, fullName: true, companyName: true, businessEmail: true,
  //     country: true, expectedScope: true, status: true, createdAt: true,
  //   },
  // });
  // ────────────────────────────────────────────────────────────────────────────

  const enquiries: never[] = [];

  return (
    <div>
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
      </div>

      <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
        <div style={{ padding: '4rem 2rem', textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.9375rem' }}>
          {/* ── TABLE (disabled — restore db.enquiry.findMany when DB is connected) ── */}
          No enquiries yet. They will appear here once submitted via the website and a database is connected.
        </div>
      </div>
    </div>
  );
}

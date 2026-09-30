import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/database/db';
import { ChevronRight, Mail, Phone, Globe, Calendar, MessageSquare, FileText, Tag } from 'lucide-react';
import { EnquiryStatusUpdater } from '@/components/admin/EnquiryStatusUpdater';

export const metadata: Metadata = { title: 'Enquiry Detail | Admin — RAVERON' };

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  new:         { bg: 'rgba(59,130,246,0.15)',  color: '#60A5FA' },
  reviewing:   { bg: 'rgba(234,179,8,0.15)',   color: '#FDE047' },
  contacted:   { bg: 'rgba(139,92,246,0.15)',  color: '#C4B5FD' },
  qualified:   { bg: 'rgba(16,185,129,0.15)',  color: '#6EE7B7' },
  in_progress: { bg: 'rgba(6,182,212,0.15)',   color: '#67E8F9' },
  converted:   { bg: 'rgba(22,163,74,0.15)',   color: '#86EFAC' },
  closed:      { bg: 'rgba(107,114,128,0.15)', color: '#9CA3AF' },
};

function InfoRow({ icon: Icon, label, children }: { icon: React.ComponentType<any>; label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', padding: '0.875rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ flexShrink: 0, width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', background: 'rgba(255,255,255,0.05)' }}>
        <Icon size={14} style={{ color: 'rgba(255,255,255,0.4)' }} />
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.25rem' }}>{label}</div>
        <div style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.85)', wordBreak: 'break-word' }}>{children}</div>
      </div>
    </div>
  );
}

export default async function EnquiryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const enquiry = await db.enquiry.findUnique({ where: { id } });
  if (!enquiry) notFound();

  const c = STATUS_COLORS[enquiry.status] ?? { bg: 'rgba(107,114,128,0.15)', color: '#9CA3AF' };

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem' }}>
        <Link href="/admin" style={{ color: 'inherit', textDecoration: 'none' }}>Dashboard</Link>
        <ChevronRight size={13} />
        <Link href="/admin/enquiries" style={{ color: 'inherit', textDecoration: 'none' }}>Enquiries</Link>
        <ChevronRight size={13} />
        <span style={{ color: 'rgba(255,255,255,0.6)' }}>{enquiry.fullName}</span>
      </div>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-white)', letterSpacing: '-0.02em' }}>{enquiry.fullName}</h1>
          <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.25rem' }}>{enquiry.companyName}</p>
        </div>
        <span style={{ display: 'inline-flex', padding: '0.35rem 0.875rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: c.bg, color: c.color }}>
          {enquiry.status.replace('_', ' ')}
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="enquiry-detail-grid">
        {/* Left: core info */}
        <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', padding: '1.5rem' }}>
          <h2 style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem' }}>Contact</h2>
          <InfoRow icon={Mail} label="Email">
            <a href={`mailto:${enquiry.businessEmail}`} style={{ color: 'var(--color-blue-electric)', textDecoration: 'none' }}>{enquiry.businessEmail}</a>
          </InfoRow>
          <InfoRow icon={Phone} label="Phone">
            <a href={`tel:${enquiry.phone}`} style={{ color: 'var(--color-blue-electric)', textDecoration: 'none' }}>{enquiry.phone}</a>
          </InfoRow>
          <InfoRow icon={Globe} label="Country">{enquiry.country}</InfoRow>
          <InfoRow icon={MessageSquare} label="Preferred Contact">{enquiry.preferredContact}</InfoRow>
          <InfoRow icon={Calendar} label="Received">
            {new Date(enquiry.createdAt).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' })}
          </InfoRow>
        </div>

        {/* Right: project details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>Project Details</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginBottom: '1.25rem' }}>
              {[
                { label: 'Scope', value: enquiry.expectedScope },
                { label: 'Volume', value: enquiry.expectedVolume },
                { label: 'Timeline', value: enquiry.expectedTimeline },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-md)', padding: '0.875rem 1rem' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.375rem' }}>{label}</div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>{value}</div>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.625rem' }}>Description</div>
              <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>{enquiry.projectDescription}</p>
            </div>
            {enquiry.additionalRequirements && (
              <div style={{ marginTop: '1.25rem' }}>
                <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.625rem' }}>Additional Requirements</div>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, whiteSpace: 'pre-wrap' }}>{enquiry.additionalRequirements}</p>
              </div>
            )}
          </div>

          {/* Status updater */}
          <EnquiryStatusUpdater enquiryId={enquiry.id} currentStatus={enquiry.status} />
        </div>
      </div>

      <style>{`@media(min-width:1024px){.enquiry-detail-grid{grid-template-columns:340px 1fr!important;}}`}</style>
    </div>
  );
}

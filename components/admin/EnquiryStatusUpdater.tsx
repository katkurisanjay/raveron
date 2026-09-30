'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, CheckCircle } from 'lucide-react';

const ALL_STATUSES = ['new', 'reviewing', 'contacted', 'qualified', 'in_progress', 'converted', 'closed'] as const;
type EnquiryStatus = typeof ALL_STATUSES[number];

const STATUS_COLORS: Record<EnquiryStatus, string> = {
  new:         '#60A5FA',
  reviewing:   '#FDE047',
  contacted:   '#C4B5FD',
  qualified:   '#6EE7B7',
  in_progress: '#67E8F9',
  converted:   '#86EFAC',
  closed:      '#9CA3AF',
};

export function EnquiryStatusUpdater({
  enquiryId,
  currentStatus,
}: {
  enquiryId: string;
  currentStatus: string;
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<EnquiryStatus>(currentStatus as EnquiryStatus);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch(`/api/admin/enquiries/${enquiryId}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: selected }),
      });
      if (res.ok) {
        setSaved(true);
        router.refresh();
        setTimeout(() => setSaved(false), 3000);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ background: 'var(--color-navy-deep)', border: '1px solid var(--color-border-dark)', borderRadius: 'var(--radius-xl)', padding: '1.5rem' }}>
      <h2 style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '1rem' }}>
        Update Status
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
        {ALL_STATUSES.map((s) => {
          const isActive = selected === s;
          return (
            <button
              key={s}
              onClick={() => setSelected(s)}
              style={{
                padding: '0.375rem 0.875rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                border: isActive ? `2px solid ${STATUS_COLORS[s]}` : '2px solid transparent',
                background: isActive ? `${STATUS_COLORS[s]}22` : 'rgba(255,255,255,0.06)',
                color: isActive ? STATUS_COLORS[s] : 'rgba(255,255,255,0.45)',
                transition: 'all 0.15s ease',
              }}
            >
              {s.replace('_', ' ')}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleSave}
        disabled={saving || selected === currentStatus}
        style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.625rem 1.25rem', borderRadius: 'var(--radius-md)',
          fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
          background: saving ? 'rgba(37,99,235,0.5)' : saved ? 'rgba(16,185,129,0.2)' : 'var(--color-blue-electric)',
          color: saved ? '#6EE7B7' : '#fff',
          border: saved ? '1px solid rgba(16,185,129,0.4)' : 'none',
          transition: 'all 0.2s ease',
          opacity: selected === currentStatus && !saving ? 0.4 : 1,
        }}
      >
        {saving && <Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} />}
        {saved && <CheckCircle size={14} />}
        {saving ? 'Saving…' : saved ? 'Saved!' : 'Save Status'}
      </button>
      <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
    </div>
  );
}

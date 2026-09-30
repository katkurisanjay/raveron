import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
// import { db } from '@/lib/database/db'; // DB disabled — uncomment when DATABASE_URL is set
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = { title: 'Enquiry Detail | Admin — RAVERON' };

export default async function EnquiryDetailPage({ params }: { params: { id: string } }) {
  // ── DB QUERY (disabled — uncomment when DATABASE_URL is set) ────────────────
  // const enquiry = await db.enquiry.findUnique({ where: { id: params.id } });
  // if (!enquiry) notFound();
  // ────────────────────────────────────────────────────────────────────────────

  // DB is not connected — show not found for all detail pages
  void params;
  notFound();
}

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';
// import { db } from '@/lib/database/db'; // DB disabled — uncomment when DATABASE_URL is set
import { z } from 'zod';

// ─────────────────────────────────────────────────────────────────────────────
// ADMIN: Update Enquiry Status — PATCH /api/admin/enquiries/[id]/status
// DB query is commented out for Vercel deployment without a database.
// ─────────────────────────────────────────────────────────────────────────────

const statusSchema = z.object({
  status: z.enum(['new', 'reviewing', 'contacted', 'qualified', 'in_progress', 'converted', 'closed']),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const result = statusSchema.safeParse(body);
  if (!result.success) return NextResponse.json({ error: 'Invalid status' }, { status: 400 });

  // ── DB UPDATE (disabled — uncomment when DATABASE_URL is set) ───────────────
  // const enquiry = await db.enquiry.update({
  //   where: { id: params.id },
  //   data: { status: result.data.status },
  //   select: { id: true, status: true },
  // });
  // return NextResponse.json({ ok: true, enquiry });
  // ────────────────────────────────────────────────────────────────────────────

  // Stub response — returns success without touching any DB
  return NextResponse.json({ ok: true, enquiry: { id: params.id, status: result.data.status } });
}

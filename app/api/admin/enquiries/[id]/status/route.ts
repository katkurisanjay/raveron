import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/authOptions';
import { db } from '@/lib/database/db';
import { z } from 'zod';

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

  const enquiry = await db.enquiry.update({
    where: { id: params.id },
    data: { status: result.data.status },
    select: { id: true, status: true },
  });

  return NextResponse.json({ ok: true, enquiry });
}

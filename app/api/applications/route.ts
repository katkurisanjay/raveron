import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/database/db';

const applicationSchema = z.object({
  jobId: z.string().min(1),
  fullName: z.string().min(2).max(100).trim(),
  email: z.string().email().max(255).trim().toLowerCase(),
  phone: z.string().min(6).max(30).trim(),
  coverMessage: z.string().min(10).max(3000).trim(),
  portfolioUrl: z.string().url().optional().or(z.literal('')),
  consent: z.string().refine((v) => v === 'true', { message: 'Consent required' }),
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 3;
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (record.count >= maxRequests) return false;
  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: 'Too many applications. Please try again later.' }, { status: 429 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const rawFields = Object.fromEntries(
    Array.from(formData.entries()).filter(([, v]) => typeof v === 'string')
  );

  const parsed = applicationSchema.safeParse(rawFields);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed.', details: parsed.error.flatten() }, { status: 400 });
  }

  // Validate resume
  const resumeFile = formData.get('resume') as File | null;
  if (!resumeFile || resumeFile.size === 0) {
    return NextResponse.json({ error: 'Resume is required.' }, { status: 400 });
  }
  const allowed = new Set(['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']);
  if (!allowed.has(resumeFile.type)) {
    return NextResponse.json({ error: 'Only PDF or Word files are accepted.' }, { status: 400 });
  }
  if (resumeFile.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: 'Resume must be under 10 MB.' }, { status: 400 });
  }

  // TODO: Upload resume to Vercel Blob / S3 and use URL
  const resumeUrl = `[pending-upload]/${resumeFile.name}`;

  // Verify job exists and is active
  const job = await db.job.findFirst({
    where: { id: parsed.data.jobId, status: 'active' },
    select: { id: true, title: true },
  });
  if (!job) {
    return NextResponse.json({ error: 'This position is no longer accepting applications.' }, { status: 404 });
  }

  try {
    await db.jobApplication.create({
      data: {
        jobId: parsed.data.jobId,
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        coverMessage: parsed.data.coverMessage,
        portfolioUrl: parsed.data.portfolioUrl || null,
        resumeUrl,
        status: 'received',
      },
    });

    return NextResponse.json({ success: true, message: 'Application received.' }, { status: 201 });
  } catch (err) {
    console.error('[API /applications] DB error:', err);
    return NextResponse.json({ error: 'Failed to save application. Please try again.' }, { status: 500 });
  }
}

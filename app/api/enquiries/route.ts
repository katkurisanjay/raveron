import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
// import { db } from '@/lib/database/db'; // DB disabled — uncomment when DATABASE_URL is set

// ─────────────────────────────────────────────────────────────────────────────
// ENQUIRIES API — /api/enquiries  (POST)
// DB persistence is commented out for Vercel deployment without a database.
// Uncomment the db.enquiry.create block below once DATABASE_URL is configured.
// ─────────────────────────────────────────────────────────────────────────────

const enquirySchema = z.object({
  fullName: z.string().min(2).max(100).trim(),
  companyName: z.string().min(1).max(200).trim(),
  businessEmail: z.string().email().max(255).trim().toLowerCase(),
  phone: z.string().min(6).max(30).trim(),
  country: z.string().min(1).max(100).trim(),
  projectDescription: z.string().min(10).max(5000).trim(),
  expectedScope: z.string().min(1).max(500).trim(),
  expectedVolume: z.string().min(1).max(500).trim(),
  expectedTimeline: z.string().min(1).max(500).trim(),
  preferredContact: z.enum(['email', 'phone', 'whatsapp']),
  additionalRequirements: z.string().max(2000).trim().optional(),
  consent: z.string().refine((v) => v === 'true', { message: 'Consent required' }),
});

const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/zip',
  'image/png',
  'image/jpeg',
]);
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_FILES = 5;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const maxRequests = 5;
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
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
  }

  const rawFields = Object.fromEntries(
    Array.from(formData.entries()).filter(([, v]) => typeof v === 'string')
  );

  const parsed = enquirySchema.safeParse(rawFields);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Validation failed.', details: parsed.error.flatten() }, { status: 400 });
  }

  const attachmentFiles = formData.getAll('attachments') as File[];
  if (attachmentFiles.length > MAX_FILES) {
    return NextResponse.json({ error: `Maximum ${MAX_FILES} files allowed.` }, { status: 400 });
  }
  for (const file of attachmentFiles) {
    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json({ error: `File type not allowed: ${file.type}` }, { status: 400 });
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: `File exceeds 10 MB limit: ${file.name}` }, { status: 400 });
    }
  }

  // TODO: Upload files to Vercel Blob / S3
  // const attachmentUrls: string[] = [];

  // ── DB PERSISTENCE (disabled — uncomment when DATABASE_URL is set) ──────────
  // try {
  //   const enquiry = await db.enquiry.create({
  //     data: {
  //       fullName: parsed.data.fullName,
  //       companyName: parsed.data.companyName,
  //       businessEmail: parsed.data.businessEmail,
  //       phone: parsed.data.phone,
  //       country: parsed.data.country,
  //       projectDescription: parsed.data.projectDescription,
  //       expectedScope: parsed.data.expectedScope,
  //       expectedVolume: parsed.data.expectedVolume,
  //       expectedTimeline: parsed.data.expectedTimeline,
  //       preferredContact: parsed.data.preferredContact,
  //       additionalRequirements: parsed.data.additionalRequirements ?? null,
  //       attachmentUrls,
  //       status: 'new',
  //       source: 'website',
  //     },
  //   });
  //   void notifyIntegrations(enquiry, parsed.data);
  //   return NextResponse.json({ success: true, message: 'Enquiry received.' }, { status: 201 });
  // } catch (err) {
  //   console.error('[API /enquiries] DB error:', err);
  //   return NextResponse.json({ error: 'Failed to save enquiry. Please try again.' }, { status: 500 });
  // }
  // ────────────────────────────────────────────────────────────────────────────

  // Log the enquiry to server console (visible in Vercel Function logs)
  console.log('[Enquiry received]', {
    fullName: parsed.data.fullName,
    companyName: parsed.data.companyName,
    email: parsed.data.businessEmail,
    country: parsed.data.country,
    scope: parsed.data.expectedScope,
    timeline: parsed.data.expectedTimeline,
  });

  return NextResponse.json({ success: true, message: 'Enquiry received. We will get back to you shortly.' }, { status: 201 });
}

// ── NOTIFICATION HELPERS (disabled — restore with DB block) ──────────────────
// async function notifyIntegrations(...) { ... }
// async function sendEmailNotification(...) { ... }
// async function sendWhatsAppNotification(...) { ... }
// async function sendToCRM(...) { ... }

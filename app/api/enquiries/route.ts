import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/database/db';

// Server-side validation schema (independent of client validation)
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

// Simple rate limiting (production: use Upstash Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
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
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
  }

  // Extract and validate fields
  const rawFields = Object.fromEntries(
    Array.from(formData.entries()).filter(([, v]) => typeof v === 'string')
  );

  const parsed = enquirySchema.safeParse(rawFields);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed.', details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  // Validate uploaded files
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

  // TODO: Upload files to storage (Vercel Blob / S3) and collect URLs
  const attachmentUrls: string[] = [];

  // Save to database
  try {
    const enquiry = await db.enquiry.create({
      data: {
        fullName: parsed.data.fullName,
        companyName: parsed.data.companyName,
        businessEmail: parsed.data.businessEmail,
        phone: parsed.data.phone,
        country: parsed.data.country,
        projectDescription: parsed.data.projectDescription,
        expectedScope: parsed.data.expectedScope,
        expectedVolume: parsed.data.expectedVolume,
        expectedTimeline: parsed.data.expectedTimeline,
        preferredContact: parsed.data.preferredContact,
        additionalRequirements: parsed.data.additionalRequirements ?? null,
        attachmentUrls,
        status: 'new',
        source: 'website',
      },
    });

    // Fire-and-forget integrations (non-blocking)
    void notifyIntegrations(enquiry, parsed.data);

    return NextResponse.json(
      { success: true, message: 'Enquiry received.' },
      { status: 201 }
    );
  } catch (err) {
    console.error('[API /enquiries] DB error:', err);
    return NextResponse.json(
      { error: 'Failed to save enquiry. Please try again.' },
      { status: 500 }
    );
  }
}

async function notifyIntegrations(
  enquiry: { id: string; fullName: string; businessEmail: string; companyName: string },
  data: z.infer<typeof enquirySchema>
) {
  const tasks: Promise<unknown>[] = [];

  // Email notification
  if (process.env.EMAIL_API_KEY) {
    tasks.push(
      sendEmailNotification(enquiry, data).catch((e) =>
        console.error('[Email notification failed]', e)
      )
    );
  }

  // WhatsApp notification
  if (process.env.WHATSAPP_API_TOKEN && process.env.WHATSAPP_TO_NUMBER) {
    tasks.push(
      sendWhatsAppNotification(enquiry).catch((e) =>
        console.error('[WhatsApp notification failed]', e)
      )
    );
  }

  // CRM
  if (process.env.CRM_API_URL && process.env.CRM_API_KEY) {
    tasks.push(
      sendToCRM(enquiry, data).catch((e) =>
        console.error('[CRM integration failed]', e)
      )
    );
  }

  await Promise.allSettled(tasks);
}

async function sendEmailNotification(
  enquiry: { id: string; fullName: string; businessEmail: string; companyName: string },
  data: z.infer<typeof enquirySchema>
) {
  // Implement with your email provider (Resend, SendGrid, etc.)
  // Example using Resend:
  // const { Resend } = await import('resend');
  // const resend = new Resend(process.env.EMAIL_API_KEY);
  // await resend.emails.send({ ... });
  console.log('[Email] Enquiry notification placeholder for:', enquiry.id);
}

async function sendWhatsAppNotification(enquiry: {
  id: string;
  fullName: string;
  companyName: string;
}) {
  const body = `New project enquiry received.\nFrom: ${enquiry.fullName} (${enquiry.companyName})\nRef: ${enquiry.id}`;
  await fetch(
    `${process.env.WHATSAPP_API_URL}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: process.env.WHATSAPP_TO_NUMBER,
        type: 'text',
        text: { body },
      }),
    }
  );
}

async function sendToCRM(
  enquiry: { id: string; fullName: string; businessEmail: string; companyName: string },
  data: z.infer<typeof enquirySchema>
) {
  // Implement with your CRM provider
  // Replace with actual CRM API call
  console.log('[CRM] Enquiry push placeholder for:', enquiry.id);
}

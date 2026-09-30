'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Upload, X } from 'lucide-react';

const enquirySchema = z.object({
  fullName: z.string().min(2, 'Full name is required').max(100),
  companyName: z.string().min(1, 'Company name is required').max(200),
  businessEmail: z.string().email('Please enter a valid business email'),
  phone: z.string().min(6, 'Phone number is required').max(30),
  country: z.string().min(1, 'Country / Region is required').max(100),
  projectDescription: z
    .string()
    .min(30, 'Please provide at least 30 characters describing your requirement')
    .max(5000),
  expectedScope: z.string().min(1, 'Please describe the expected scope').max(500),
  expectedVolume: z.string().min(1, 'Please describe the expected volume').max(500),
  expectedTimeline: z.string().min(1, 'Please describe the expected timeline').max(500),
  preferredContact: z.enum(['email', 'phone', 'whatsapp'], { required_error: 'Please select a preferred contact method' }),
  additionalRequirements: z.string().max(2000).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must agree to proceed' }) }),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function EnquiryForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormValues>({ resolver: zodResolver(enquirySchema) });

  const ALLOWED_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/zip', 'image/png', 'image/jpeg'];
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
  const MAX_FILES = 5;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('');
    const selected = Array.from(e.target.files ?? []);
    if (files.length + selected.length > MAX_FILES) {
      setFileError(`Maximum ${MAX_FILES} files allowed.`);
      return;
    }
    for (const f of selected) {
      if (!ALLOWED_TYPES.includes(f.type)) {
        setFileError('Only PDF, Word, TXT, ZIP, PNG, or JPG files are allowed.');
        return;
      }
      if (f.size > MAX_FILE_SIZE) {
        setFileError('Each file must be under 10 MB.');
        return;
      }
    }
    setFiles((prev) => [...prev, ...selected]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: EnquiryFormValues) => {
    setStatus('submitting');
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) => formData.append(k, String(v)));
      files.forEach((f) => formData.append('attachments', f));

      const res = await fetch('/api/enquiries', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      reset();
      setFiles([]);
    } catch {
      setStatus('error');
    }
  };

  const fieldStyle: React.CSSProperties = {};

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="status-success"
        role="alert"
        aria-live="polite"
        style={{ padding: '2.5rem', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}
      >
        <CheckCircle size={40} style={{ color: 'var(--color-success)', marginBottom: '1rem' }} aria-hidden="true" />
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#14532d', marginBottom: '0.75rem' }}>
          Requirement Received
        </h2>
        <p style={{ color: '#166534', lineHeight: 1.7, maxWidth: '480px', marginInline: 'auto' }}>
          Your requirement has been received. Our team will review the information and contact you
          through the details provided.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Project enquiry form"
      style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
    >
      {/* Error banner */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="status-error"
            role="alert"
            aria-live="assertive"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <AlertCircle size={18} aria-hidden="true" />
              <span style={{ fontSize: '0.9rem' }}>
                Something went wrong. Please try again or contact us directly.
              </span>
            </div>
            <button type="button" onClick={() => setStatus('idle')} style={{ marginTop: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-error)', fontSize: '0.875rem', fontWeight: 600, padding: 0 }}>
              Try again
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Row: Full Name + Company */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
        <div className="form-group">
          <label htmlFor="fullName" className="form-label form-label-required">Full Name</label>
          <input id="fullName" type="text" autoComplete="name" {...register('fullName')} className={`form-input${errors.fullName ? ' form-input-error' : ''}`} placeholder="Jane Smith" />
          {errors.fullName && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.fullName.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="companyName" className="form-label form-label-required">Company Name</label>
          <input id="companyName" type="text" autoComplete="organization" {...register('companyName')} className={`form-input${errors.companyName ? ' form-input-error' : ''}`} placeholder="Acme Corp" />
          {errors.companyName && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.companyName.message}</span>}
        </div>
      </div>

      {/* Row: Email + Phone */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
        <div className="form-group">
          <label htmlFor="businessEmail" className="form-label form-label-required">Business Email</label>
          <input id="businessEmail" type="email" autoComplete="email" {...register('businessEmail')} className={`form-input${errors.businessEmail ? ' form-input-error' : ''}`} placeholder="jane@company.com" />
          {errors.businessEmail && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.businessEmail.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label form-label-required">Phone Number</label>
          <input id="phone" type="tel" autoComplete="tel" {...register('phone')} className={`form-input${errors.phone ? ' form-input-error' : ''}`} placeholder="+1 555 000 0000" />
          {errors.phone && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.phone.message}</span>}
        </div>
      </div>

      {/* Country */}
      <div className="form-group">
        <label htmlFor="country" className="form-label form-label-required">Country / Region</label>
        <input id="country" type="text" autoComplete="country-name" {...register('country')} className={`form-input${errors.country ? ' form-input-error' : ''}`} placeholder="e.g. United States, Germany, India" />
        {errors.country && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.country.message}</span>}
      </div>

      {/* Project Description — main large field */}
      <div className="form-group">
        <label htmlFor="projectDescription" className="form-label form-label-required">Project / Requirement Description</label>
        <span className="form-helper" style={{ marginBottom: '0.375rem', display: 'block' }}>
          Describe your project in your own words. Include the type of work, data types, formats, any tools, and anything else relevant.
        </span>
        <textarea
          id="projectDescription"
          rows={7}
          {...register('projectDescription')}
          className={`form-textarea${errors.projectDescription ? ' form-input-error' : ''}`}
          placeholder="e.g. We have approximately 50,000 images that need bounding box annotation for an object detection model. The images are in JPEG format and we need output in COCO JSON format. We currently use Label Studio..."
        />
        {errors.projectDescription && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.projectDescription.message}</span>}
      </div>

      {/* Row: Scope + Volume */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
        <div className="form-group">
          <label htmlFor="expectedScope" className="form-label form-label-required">Expected Project Scope</label>
          <span className="form-helper" style={{ marginBottom: '0.375rem', display: 'block' }}>Size, complexity, or phases</span>
          <input id="expectedScope" type="text" {...register('expectedScope')} className={`form-input${errors.expectedScope ? ' form-input-error' : ''}`} placeholder="e.g. ~50,000 images, Phase 1 of 3" />
          {errors.expectedScope && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.expectedScope.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="expectedVolume" className="form-label form-label-required">Expected Data / Work Volume</label>
          <span className="form-helper" style={{ marginBottom: '0.375rem', display: 'block' }}>Units, files, pages, records</span>
          <input id="expectedVolume" type="text" {...register('expectedVolume')} className={`form-input${errors.expectedVolume ? ' form-input-error' : ''}`} placeholder="e.g. 50,000 images, 200 audio hours" />
          {errors.expectedVolume && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.expectedVolume.message}</span>}
        </div>
      </div>

      {/* Row: Timeline + Preferred Contact */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
        <div className="form-group">
          <label htmlFor="expectedTimeline" className="form-label form-label-required">Expected Timeline</label>
          <input id="expectedTimeline" type="text" {...register('expectedTimeline')} className={`form-input${errors.expectedTimeline ? ' form-input-error' : ''}`} placeholder="e.g. 4 weeks, by end of Q4" />
          {errors.expectedTimeline && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.expectedTimeline.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="preferredContact" className="form-label form-label-required">Preferred Communication</label>
          <select id="preferredContact" {...register('preferredContact')} className={`form-select${errors.preferredContact ? ' form-input-error' : ''}`}>
            <option value="">Select method</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
          {errors.preferredContact && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.preferredContact.message}</span>}
        </div>
      </div>

      {/* Additional Requirements */}
      <div className="form-group">
        <label htmlFor="additionalRequirements" className="form-label">Additional Requirements <span style={{ fontWeight: 400, color: 'var(--color-cool-gray)' }}>(optional)</span></label>
        <textarea id="additionalRequirements" rows={3} {...register('additionalRequirements')} className="form-textarea" placeholder="Any tools, platforms, NDA requirements, quality benchmarks, or other details." />
      </div>

      {/* File Upload */}
      <div className="form-group">
        <label className="form-label">Supporting Files <span style={{ fontWeight: 400, color: 'var(--color-cool-gray)' }}>(optional)</span></label>
        <span className="form-helper" style={{ marginBottom: '0.5rem', display: 'block' }}>
          PDF, Word, TXT, ZIP, PNG, or JPG — max 10 MB per file, up to 5 files.
        </span>
        <label
          htmlFor="file-upload"
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '0.625rem', padding: '1.75rem', border: '2px dashed var(--color-border-light)',
            borderRadius: 'var(--radius-lg)', cursor: 'pointer', transition: 'border-color 0.2s ease, background 0.2s ease',
            background: 'transparent',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-blue-electric)'; (e.currentTarget as HTMLElement).style.background = 'rgba(37,99,235,0.03)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-light)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
        >
          <Upload size={22} style={{ color: 'var(--color-cool-gray)' }} aria-hidden="true" />
          <span style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', textAlign: 'center' }}>
            <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Click to upload</span> or drag and drop
          </span>
          <input id="file-upload" type="file" multiple accept=".pdf,.doc,.docx,.txt,.zip,.png,.jpg,.jpeg" onChange={handleFileChange} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '1px', height: '1px' }} aria-label="Upload supporting files" />
        </label>
        {fileError && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{fileError}</span>}
        {files.length > 0 && (
          <ul role="list" style={{ listStyle: 'none', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {files.map((f, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.625rem 0.875rem', background: 'rgba(37,99,235,0.05)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(37,99,235,0.12)' }}>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-navy-primary)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {f.name}
                </span>
                <button type="button" onClick={() => removeFile(i)} aria-label={`Remove ${f.name}`} style={{ flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-cool-gray)', display: 'flex', padding: '2px' }}>
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Consent */}
      <div className="form-group">
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
          <input
            type="checkbox"
            {...register('consent')}
            id="consent"
            style={{ marginTop: '3px', width: '16px', height: '16px', flexShrink: 0, accentColor: 'var(--color-blue-primary)', cursor: 'pointer' }}
          />
          <span style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', lineHeight: 1.6 }}>
            I agree that the information submitted will be used by RAVERON TECHNOLOGIES to review and respond to my enquiry. Submitting this form does not constitute project acceptance.
          </span>
        </label>
        {errors.consent && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.consent.message}</span>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary btn-lg"
        style={{ justifyContent: 'center', gap: '0.625rem' }}
        aria-describedby={status === 'submitting' ? 'submit-status' : undefined}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} aria-hidden="true" />
            Submitting…
          </>
        ) : (
          'Submit Requirement'
        )}
      </button>
      {status === 'submitting' && <span id="submit-status" className="visually-hidden" aria-live="polite">Submitting your requirement…</span>}

      <style>{`
        @media(max-width:640px){.form-row-2{grid-template-columns:1fr!important;}}
        @keyframes spin{to{transform:rotate(360deg);}}
        .visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;}
      `}</style>
    </form>
  );
}

'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, Upload, X } from 'lucide-react';

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Phone number is required').max(30),
  coverMessage: z
    .string()
    .min(50, 'Please write at least 50 characters')
    .max(3000),
  portfolioUrl: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must agree to proceed' }) }),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface JobApplicationFormProps {
  jobId: string;
  jobTitle: string;
}

export function JobApplicationForm({ jobId, jobTitle }: JobApplicationFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({ resolver: zodResolver(applicationSchema) });

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResumeError('');
    const file = e.target.files?.[0];
    if (!file) return;
    const allowed = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowed.includes(file.type)) {
      setResumeError('Only PDF or Word documents are accepted.');
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setResumeError('Resume must be under 10 MB.');
      return;
    }
    setResume(file);
  };

  const onSubmit = async (data: ApplicationFormValues) => {
    if (!resume) {
      setResumeError('Please upload your resume.');
      return;
    }
    setStatus('submitting');
    try {
      const formData = new FormData();
      formData.append('jobId', jobId);
      Object.entries(data).forEach(([k, v]) => formData.append(k, String(v)));
      formData.append('resume', resume);

      const res = await fetch('/api/applications', { method: 'POST', body: formData });
      if (!res.ok) throw new Error('Submission failed');
      setStatus('success');
      reset();
      setResume(null);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="status-success"
        role="alert"
        aria-live="polite"
        style={{ padding: '2.5rem', textAlign: 'center', borderRadius: 'var(--radius-xl)' }}
      >
        <CheckCircle size={40} style={{ color: 'var(--color-success)', marginBottom: '1rem' }} aria-hidden="true" />
        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#14532d', marginBottom: '0.75rem' }}>Application Received</h2>
        <p style={{ color: '#166534', lineHeight: 1.7, maxWidth: '480px', marginInline: 'auto' }}>
          Your application for <strong>{jobTitle}</strong> has been received. Our team will review your details and be in touch if you progress to the next stage.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label={`Application form for ${jobTitle}`}
      style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
    >
      <AnimatePresence>
        {status === 'error' && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="status-error" role="alert" aria-live="assertive">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={16} aria-hidden="true" />
              <span>Something went wrong. Please try again.</span>
            </div>
            <button type="button" onClick={() => setStatus('idle')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-error)', fontWeight: 600, fontSize: '0.875rem', padding: 0, marginTop: '0.5rem' }}>Retry</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row-2">
        <div className="form-group">
          <label htmlFor="app-name" className="form-label form-label-required">Full Name</label>
          <input id="app-name" type="text" autoComplete="name" {...register('fullName')} className={`form-input${errors.fullName ? ' form-input-error' : ''}`} placeholder="Jane Smith" />
          {errors.fullName && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.fullName.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="app-email" className="form-label form-label-required">Email Address</label>
          <input id="app-email" type="email" autoComplete="email" {...register('email')} className={`form-input${errors.email ? ' form-input-error' : ''}`} placeholder="jane@email.com" />
          {errors.email && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.email.message}</span>}
        </div>
      </div>

      {/* Phone */}
      <div className="form-group">
        <label htmlFor="app-phone" className="form-label form-label-required">Phone Number</label>
        <input id="app-phone" type="tel" autoComplete="tel" {...register('phone')} className={`form-input${errors.phone ? ' form-input-error' : ''}`} placeholder="+1 555 000 0000" />
        {errors.phone && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.phone.message}</span>}
      </div>

      {/* Cover message */}
      <div className="form-group">
        <label htmlFor="app-cover" className="form-label form-label-required">Cover Message</label>
        <span className="form-helper" style={{ marginBottom: '0.375rem', display: 'block' }}>Tell us why you&apos;re interested and what makes you a strong fit.</span>
        <textarea id="app-cover" rows={6} {...register('coverMessage')} className={`form-textarea${errors.coverMessage ? ' form-input-error' : ''}`} placeholder="Describe your background, relevant experience, and why you want to join RAVERON..." />
        {errors.coverMessage && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.coverMessage.message}</span>}
      </div>

      {/* Portfolio URL */}
      <div className="form-group">
        <label htmlFor="app-portfolio" className="form-label">Portfolio / LinkedIn URL <span style={{ fontWeight: 400, color: 'var(--color-cool-gray)' }}>(optional)</span></label>
        <input id="app-portfolio" type="url" {...register('portfolioUrl')} className="form-input" placeholder="https://linkedin.com/in/yourprofile" />
        {errors.portfolioUrl && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.portfolioUrl.message}</span>}
      </div>

      {/* Resume upload */}
      <div className="form-group">
        <label className="form-label form-label-required">Resume / CV</label>
        <span className="form-helper" style={{ marginBottom: '0.5rem', display: 'block' }}>PDF or Word document, max 10 MB.</span>
        {resume ? (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.875rem 1rem', background: 'rgba(37,99,235,0.06)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(37,99,235,0.15)' }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--color-navy-primary)', fontWeight: 500 }}>{resume.name}</span>
            <button type="button" onClick={() => setResume(null)} aria-label="Remove resume" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-cool-gray)', display: 'flex' }}>
              <X size={15} />
            </button>
          </div>
        ) : (
          <label htmlFor="app-resume"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', padding: '1.5rem', border: '2px dashed var(--color-border-light)', borderRadius: 'var(--radius-lg)', cursor: 'pointer' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-blue-electric)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-light)'; }}
          >
            <Upload size={20} style={{ color: 'var(--color-cool-gray)' }} aria-hidden="true" />
            <span style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)' }}>
              <span style={{ color: 'var(--color-blue-primary)', fontWeight: 600 }}>Click to upload</span> your resume
            </span>
            <input id="app-resume" type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} style={{ position: 'absolute', width: '1px', height: '1px', opacity: 0 }} aria-label="Upload resume" />
          </label>
        )}
        {resumeError && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{resumeError}</span>}
      </div>

      {/* Consent */}
      <div className="form-group">
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
          <input type="checkbox" {...register('consent')} id="app-consent" style={{ marginTop: '3px', width: '16px', height: '16px', flexShrink: 0, accentColor: 'var(--color-blue-primary)', cursor: 'pointer' }} />
          <span style={{ fontSize: '0.875rem', color: 'var(--color-cool-gray)', lineHeight: 1.6 }}>
            I consent to RAVERON TECHNOLOGIES processing my application data to assess my suitability for this role.
          </span>
        </label>
        {errors.consent && <span className="form-error" role="alert"><AlertCircle size={12} aria-hidden="true" />{errors.consent.message}</span>}
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn btn-primary btn-lg" style={{ justifyContent: 'center', gap: '0.5rem' }}>
        {status === 'submitting' ? (
          <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} aria-hidden="true" />Submitting…</>
        ) : 'Submit Application'}
      </button>

      <style>{`@media(max-width:640px){.form-row-2{grid-template-columns:1fr!important;}}@keyframes spin{to{transform:rotate(360deg);}}`}</style>
    </form>
  );
}

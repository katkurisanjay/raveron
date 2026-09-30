'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { AlertCircle, Loader2, Eye, EyeOff } from 'lucide-react';
import type { Metadata } from 'next';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('Please enter your email and password.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setErrorMsg('');

    const result = await signIn('credentials', {
      email: email.trim().toLowerCase(),
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      setStatus('error');
      setErrorMsg('Invalid email or password.');
    }
  };

  return (
    <div style={{
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-midnight)',
      padding: '1.5rem',
    }}>
      <div className="grid-pattern" style={{ position: 'fixed', inset: 0, opacity: 0.3, pointerEvents: 'none' }} aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '420px',
          background: 'var(--color-navy-deep)',
          border: '1px solid var(--color-border-dark)',
          borderRadius: 'var(--radius-xl)',
          padding: 'clamp(1.75rem, 5vw, 2.5rem)',
        }}
      >
        {/* Logo / Brand */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'var(--color-white)' }}>
            RAVERON<span style={{ color: 'var(--color-blue-electric)' }}>.</span>
          </span>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.375rem' }}>
            Admin Panel
          </p>
        </div>

        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-white)', marginBottom: '0.25rem', textAlign: 'center' }}>
          Sign in
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center', marginBottom: '1.75rem' }}>
          Access is restricted to authorised users.
        </p>

        {/* Error */}
        {status === 'error' && errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '1.25rem', padding: '0.875rem 1rem', background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fca5a5', fontSize: '0.875rem' }}
            role="alert"
            aria-live="assertive"
          >
            <AlertCircle size={16} aria-hidden="true" />
            {errorMsg}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} noValidate aria-label="Admin login form">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="admin-email" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Email</label>
              <input
                id="admin-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)',
                  border: '1.5px solid var(--color-border-dark)', borderRadius: 'var(--radius-md)',
                  color: 'var(--color-white)', fontSize: '0.9375rem', fontFamily: 'var(--font-primary)',
                  outline: 'none', transition: 'border-color 0.15s ease',
                }}
                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--color-blue-electric)'; }}
                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--color-border-dark)'; }}
                placeholder="admin@raverontech.com"
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="admin-password" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  id="admin-password"
                  type={showPass ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    width: '100%', padding: '0.75rem 2.75rem 0.75rem 1rem',
                    background: 'rgba(255,255,255,0.05)', border: '1.5px solid var(--color-border-dark)',
                    borderRadius: 'var(--radius-md)', color: 'var(--color-white)', fontSize: '0.9375rem',
                    fontFamily: 'var(--font-primary)', outline: 'none', transition: 'border-color 0.15s ease',
                  }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--color-blue-electric)'; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'var(--color-border-dark)'; }}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  aria-label={showPass ? 'Hide password' : 'Show password'}
                  style={{
                    position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)',
                    display: 'flex', padding: '4px',
                  }}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', gap: '0.5rem' }}
            >
              {status === 'loading' ? (
                <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} aria-hidden="true" />Signing in…</>
              ) : 'Sign in'}
            </button>
          </div>
        </form>

        <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
          Restricted access. Unauthorised attempts are logged.
        </p>
      </motion.div>

      <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
    </div>
  );
}

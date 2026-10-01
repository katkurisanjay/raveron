import React from 'react';

export function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#0077B5" />
      <path d="M7.4 18.5H4.2V9.4h3.2v9.1zM5.8 8.1C4.8 8.1 4 7.3 4 6.3s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm14 10.4h-3.2v-4.4c0-1-.02-2.4-1.4-2.4-1.5 0-1.7 1.1-1.7 2.3v4.5H10.3V9.4h3v1.2h.04c.4-.8 1.5-1.6 3-1.6 3.1 0 3.7 2.1 3.7 4.7v4.8z" fill="#fff" />
    </svg>
  );
}

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <defs>
        <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#feda75" />
          <stop offset="0.25" stopColor="#fa7e1e" />
          <stop offset="0.5" stopColor="#d62976" />
          <stop offset="0.75" stopColor="#962fbf" />
          <stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="url(#ig-grad)" />
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="1.5" fill="none" />
      <circle cx="12" cy="12" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none" />
      <circle cx="16.5" cy="7.5" r="1" fill="#fff" />
    </svg>
  );
}

export function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#25D366" />
      <path
        d="M12.05 2C6.495 2 2 6.495 2 12.05c0 1.87.513 3.623 1.404 5.125L2 22l4.948-1.299A10.01 10.01 0 0 0 12.05 22C17.605 22 22 17.505 22 11.95 22 6.495 17.505 2 12.05 2zm0 18.35a8.314 8.314 0 0 1-4.244-1.162l-.305-.18-3.15.826.843-3.073-.198-.315A8.302 8.302 0 0 1 3.75 12.05c0-4.58 3.725-8.3 8.3-8.3 4.58 0 8.3 3.72 8.3 8.3 0 4.58-3.72 8.3-8.3 8.3z"
        fill="#fff"
      />
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
        fill="#fff"
      />
    </svg>
  );
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#1877F2" />
      <path d="M15.4 12h-2.38v8h-3.3v-8H8.38V9.16h1.33V7.12c0-2.18 1.4-3.12 3.52-3.12h2.24v2.74h-1.42c-1.04 0-1.2.4-1.2 1.13v1.3h2.6l-.32 2.84z" fill="#fff" />
    </svg>
  );
}

export function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#000" />
      <path
        d="M17.751 3h3.067l-6.7 7.658L22 21h-6.172l-4.833-6.317L5.464 21H2.395l7.167-8.192L2 3h6.328l4.37 5.777L17.75 3zm-1.076 16.172h1.7L7.404 4.74H5.58l11.095 14.432z"
        fill="#fff"
      />
    </svg>
  );
}

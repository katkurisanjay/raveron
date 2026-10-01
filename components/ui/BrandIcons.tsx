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
      {/* Outer rounded square border */}
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="#fff" strokeWidth="1.5" fill="none" />
      {/* Centre circle (camera lens) */}
      <circle cx="12" cy="12" r="3.5" stroke="#fff" strokeWidth="1.5" fill="none" />
      {/* Viewfinder dot */}
      <circle cx="16.5" cy="7.5" r="1" fill="#fff" />
    </svg>
  );
}

export function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="4" fill="#25D366" />
      {/* Outer speech bubble */}
      <path d="M12.04 5a7.06 7.06 0 0 0-6.07 10.66L5 19l3.47-.9A7.05 7.05 0 0 0 19.1 12.05 7.06 7.06 0 0 0 12.04 5z" fill="#fff" />
      {/* Inner phone handset detail — must be green so it appears as a cut-out */}
      <path d="M14.9 13.98c-.16-.08-1.01-.5-1.16-.56-.16-.05-.27-.08-.39.1-.11.17-.44.55-.54.67-.1.11-.2.12-.36.04-.15-.08-.72-.27-1.37-.85-.5-.45-.85-1-1-1.16-.14-.17 0-.25.07-.34.07-.07.16-.19.24-.29.08-.1.11-.16.16-.27.05-.11.03-.22-.01-.3-.04-.08-.39-.93-.53-1.28-.14-.33-.28-.29-.39-.29l-.33-.01c-.13 0-.34.04-.52.23-.18.2-1.03 1.01-1.03 2.45 0 1.45.89 2.87 1.01 3.03.13.17 1.95 3.09 4.87 4.21 1.76.67 2.38.73 3.19.61.64-.09 1.95-.8 2.22-1.57.28-.77.28-1.43.19-1.57-.08-.13-.3-.21-.46-.29z" fill="#25D366" />
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
      <rect width="24" height="24" rx="4" fill="#1DA1F2" />
      <path d="M18.9 8.24c.01.12.01.25.01.37 0 3.75-2.86 8.08-8.08 8.08-1.6 0-3.1-.47-4.36-1.28.22.03.45.04.68.04 1.33 0 2.55-.45 3.52-1.21-1.24-.02-2.29-.84-2.65-1.97.17.03.35.05.54.05.26 0 .51-.04.75-.1-1.3-.26-2.27-1.4-2.27-2.77v-.04c.38.21.82.34 1.28.35-.76-.51-1.26-1.38-1.26-2.37 0-.52.14-1 .39-1.42 1.4 1.71 3.49 2.84 5.86 2.96-.05-.2-.07-.42-.07-.64 0-1.55 1.26-2.81 2.81-2.81.81 0 1.54.34 2.05.89.64-.13 1.24-.38 1.78-.68-.21.65-.65 1.2-1.23 1.54.57-.07 1.11-.22 1.62-.44-.38.56-.86 1.05-1.4 1.45z" fill="#fff" />
    </svg>
  );
}

interface ZoffecLogoProps {
  size?: number;
  className?: string;
}

export function ZoffecLogo({ size = 40, className = "" }: ZoffecLogoProps) {
  const h = Math.round(size * 1.158);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 240 278"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Shield body */}
      <path
        d="M120 10 L228 54 L228 160 C228 215 120 262 120 262 C120 262 12 215 12 160 L12 54 Z"
        fill="#701515"
      />
      {/* Gradient overlay */}
      <path
        d="M120 10 L228 54 L228 160 C228 215 120 262 120 262 C120 262 12 215 12 160 L12 54 Z"
        fill="url(#zShieldGrad)"
      />
      {/* Outer white border */}
      <path
        d="M120 10 L228 54 L228 160 C228 215 120 262 120 262 C120 262 12 215 12 160 L12 54 Z"
        stroke="white"
        strokeWidth="5"
        fill="none"
      />
      {/* Inner white outline */}
      <path
        d="M120 30 L210 69 L210 157 C210 205 120 244 120 244 C120 244 30 205 30 157 L30 69 Z"
        stroke="white"
        strokeWidth="3"
        fill="none"
      />
      {/* Bottom tab */}
      <path d="M96 254 L120 278 L144 254 Z" fill="#501010" />
      <path d="M96 254 L120 278 L144 254 Z" stroke="white" strokeWidth="2" fill="none" />
      {/* Z — top bar */}
      <line x1="74" y1="100" x2="166" y2="100" stroke="white" strokeWidth="23" strokeLinecap="round" />
      {/* Z — diagonal */}
      <line x1="166" y1="100" x2="74" y2="172" stroke="white" strokeWidth="23" strokeLinecap="round" />
      {/* Z — bottom bar */}
      <line x1="74" y1="172" x2="166" y2="172" stroke="white" strokeWidth="23" strokeLinecap="round" />
      <defs>
        <linearGradient id="zShieldGrad" x1="120" y1="10" x2="120" y2="262" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B1A1A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#350A0A" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

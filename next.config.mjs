/** @type {import('next').NextConfig} */

// Next.js dev mode uses eval()-based webpack source maps (HMR).
// 'unsafe-eval' must be present in dev; it is dropped in production builds.
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  // Disable source-map generation in production to prevent source code exposure.
  productionBrowserSourceMaps: false,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Prevent MIME sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrer — send origin only on same-site, nothing cross-origin
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Restrict browser feature access
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          // Force HTTPS for 2 years — only takes effect after the first HTTPS visit
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          /*
           * Content-Security-Policy
           *
           * Security notes:
           *  - 'unsafe-inline' on script-src is required by Next.js App Router
           *    for server-injected hydration scripts. To fully harden, wire up a
           *    nonce-based CSP via Next.js middleware (see Next docs).
           *  - 'unsafe-eval' is included ONLY in development — Next.js webpack
           *    HMR uses eval()-based source maps which the browser blocks without it.
           *    Production builds do not use eval, so it is omitted there.
           *  - connect-src 'self' covers /api/contact — Formspree is called
           *    server-side only, so it does not need a CSP entry.
           *  - frame-ancestors 'none' duplicates X-Frame-Options for modern browsers.
           *  - img-src allows 'data:' and 'blob:' for Next.js image optimisation,
           *    and 'https:' for any remote images (avatars, og images).
           */
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https:",
              "connect-src 'self'",
              "frame-src 'none'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
      // Prevent caching of API responses
      {
        source: "/api/(.*)",
        headers: [
          { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
          { key: "Pragma",        value: "no-cache" },
        ],
      },
    ];
  },
};

export default nextConfig;

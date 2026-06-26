import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  productionBrowserSourceMaps: false,

  turbopack: { root: __dirname },

  async redirects() {
    return [
      { source: "/about",    destination: "/",  permanent: false },
      { source: "/projects", destination: "/",  permanent: false },
      { source: "/skills",   destination: "/",  permanent: false },
      { source: "/contact",  destination: "/",  permanent: false },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control",            value: "off"  },
          { key: "X-Frame-Options",                   value: "DENY" },
          { key: "X-Content-Type-Options",            value: "nosniff" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "Referrer-Policy",                   value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy",        value: "same-origin" },
          { key: "Cross-Origin-Resource-Policy",      value: "same-origin" },
          { key: "Cross-Origin-Embedder-Policy",      value: "unsafe-none" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
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

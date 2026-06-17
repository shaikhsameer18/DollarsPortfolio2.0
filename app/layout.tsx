import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sameerahmed.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sameer Ahmed Shaikh | Cybersecurity Analyst · GRC Analyst · Full-Stack Developer",
    template: "%s | Sameer Ahmed Shaikh",
  },
  description:
    "Sameer Ahmed Shaikh — Cybersecurity Analyst, GRC Analyst, and Full-Stack Developer. Hands-on experience in Sophos Firewall, SEBI CSCRF compliance, SOC operations, vulnerability assessment, and secure web development. Based in Mumbai, India.",
  keywords: [
    "Cybersecurity Analyst",
    "GRC Analyst",
    "Governance Risk Compliance",
    "SEBI CSCRF",
    "SOC Analyst",
    "Sophos Firewall Engineer",
    "Vulnerability Assessment",
    "Security Engineer",
    "Full Stack Developer",
    "Sameer Ahmed",
    "Sameer Ahmed Shaikh",
    "Zoffec Infotech",
    "Mumbai Cybersecurity",
    "React Developer",
    "Next.js Developer",
    "MERN Stack",
  ],
  authors: [{ name: "Sameer Ahmed Shaikh", url: siteUrl }],
  creator: "Sameer Ahmed Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sameer Ahmed Shaikh — Portfolio",
    title:
      "Sameer Ahmed Shaikh | Cybersecurity Analyst · GRC Analyst · Full-Stack Developer",
    description:
      "Cybersecurity Engineer and GRC Analyst at Zoffec Infotech Pvt. Ltd. with expertise in firewall security, SEBI CSCRF compliance, SOC operations, and secure full-stack development.",
    images: [
      {
        url: "/assets/samcrop.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Ahmed Shaikh — Cybersecurity Analyst & GRC Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sameer Ahmed Shaikh | Cybersecurity Analyst · GRC Analyst · Full-Stack Developer",
    description:
      "Cybersecurity Analyst and GRC Analyst specialising in SEBI CSCRF compliance, SOC operations, Sophos Firewall, and secure web development.",
    images: ["/assets/samcrop.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.svg",    type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
  // NOTE: Add your real Google Search Console verification token here when ready.
  // verification: { google: "YOUR_REAL_TOKEN" },
};

// ─── Structured data (JSON-LD) ────────────────────────────────────────────────
// Data is fully static and hardcoded — no user input is rendered here,
// so dangerouslySetInnerHTML is safe in this context.

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sameer Ahmed Shaikh",
  alternateName: "Sameer Ahmed",
  jobTitle: "Cybersecurity Analyst & GRC Analyst",
  description:
    "Cybersecurity Analyst and GRC Analyst with expertise in firewall security, SEBI CSCRF compliance, SOC operations, vulnerability assessment, and secure full-stack development.",
  url: siteUrl,
  email: "sameer.shaikh0425@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/shaikhsameer18",
    "https://linkedin.com/in/sameerahmed08",
  ],
  knowsAbout: [
    "Cybersecurity",
    "GRC",
    "SEBI CSCRF",
    "SOC Operations",
    "Sophos Firewall",
    "Firewall Configuration",
    "Vulnerability Assessment",
    "Endpoint Security",
    "Risk Management",
    "Compliance",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "M.H. Saboo Siddik College of Engineering",
  },
  worksFor: {
    "@type": "Organization",
    name: "Zoffec Infotech Pvt. Ltd.",
  },
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Static JSON-LD — no user input rendered here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f8f5f0] text-[#1a1f1b] font-inter antialiased overflow-x-hidden">
        {/* Accessibility: skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#3a5a40] focus:text-white focus:rounded-lg focus:font-space focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

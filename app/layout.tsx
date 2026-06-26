import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dollarsportfolio.vercel.app";

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
    "Sophos Firewall Certified Engineer",
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
    title: "Sameer Ahmed Shaikh | Cybersecurity Analyst · GRC · Full-Stack",
    description:
      "Cybersecurity Engineer and GRC Analyst at Zoffec Infotech Pvt. Ltd. with expertise in firewall security, SEBI CSCRF compliance, SOC operations, and secure full-stack development.",
    images: [
      {
        url: "/assets/sam.jpg",
        width: 1200,
        height: 630,
        alt: "Sameer Ahmed Shaikh — Cybersecurity Analyst & GRC Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sameer Ahmed Shaikh | Cybersecurity Analyst · GRC · Full-Stack Developer",
    description:
      "Cybersecurity Analyst specialising in SEBI CSCRF compliance, SOC operations, Sophos Firewall, and secure web development.",
    images: ["/assets/sam.jpg"],
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
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    apple: "/favicon.ico",
  },
};

function safeJsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

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
    "Vulnerability Assessment",
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
  worksFor: { "@type": "Organization", name: "Zoffec Infotech Pvt. Ltd." },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${jetbrainsMono.className}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pliant:ital,opsz,wght@0,6..144,100..900;1,6..144,100..900&family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
      </head>
      <body className="bg-[#050C14] text-[#C4DCF0] antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#00D4FF] focus:text-[#050C14] focus:rounded-lg focus:font-mono-jet focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

# Sameer Ahmed Shaikh — Portfolio

Cybersecurity-themed personal portfolio built with Next.js 16, React 19, and TypeScript. Showcases experience as a Cybersecurity Engineer, GRC Analyst, and Full-Stack Developer.

**Live:** [sameerahmed.dev](https://dollarsportfolio.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.9 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS, Framer Motion |
| Icons | Lucide React, React Icons (FA + SI) |
| Fonts | Pliant (headings), Orbitron (name), JetBrains Mono (terminal), Inter (body) |
| Type safety | TypeScript strict mode |
| Form backend | Formspree (server-side, endpoint never exposed to client) |
| Validation | Zod |
| Deployment | Vercel |

---

## Project Structure

```
DollarsPortfolio2.0/
├── app/
│   ├── api/contact/route.ts   # Contact form API — rate limiting, CSRF, Zod validation
│   ├── globals.css            # Design tokens + Tailwind layers
│   ├── layout.tsx             # Root layout, SEO metadata, JSON-LD, fonts
│   └── page.tsx               # Assembles all sections
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   ├── animations.ts          # Shared Framer Motion variants
│   ├── hooks/useReveal.ts     # Scroll-reveal hook
│   └── data/
│       ├── skills.ts          # 58 skills across 8 categories
│       └── projects.ts        # 10 projects + 5 security project ideas
├── public/
│   ├── assets/                # Images, logos, resume PDF
│   └── .well-known/
│       └── security.txt       # Vulnerability disclosure contact
└── next.config.mjs            # Security headers, redirects
```

---

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://dollarsportfolio.vercel.app
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

- `NEXT_PUBLIC_SITE_URL` — used for SEO metadata base URL and CORS origin check
- `FORMSPREE_ENDPOINT` — Formspree form URL; kept server-side only, never sent to the browser

---

## Getting Started

```bash
npm install --legacy-peer-deps
npm run dev
```

> `--legacy-peer-deps` is required due to an ESLint peer dependency conflict with React 19.

Open [http://localhost:3000](http://localhost:3000)

---

## Security Features

- **Content Security Policy** — restricts script, style, font, image, and frame sources
- **HSTS** — `max-age=63072000; includeSubDomains; preload`
- **X-Frame-Options: DENY** + `frame-ancestors 'none'` in CSP
- **X-Content-Type-Options: nosniff**
- **Referrer-Policy: strict-origin-when-cross-origin**
- **Cross-Origin-Opener-Policy / Resource-Policy: same-origin**
- **X-DNS-Prefetch-Control: off**
- **X-Permitted-Cross-Domain-Policies: none**
- **Permissions-Policy** — blocks camera, mic, geolocation, payment, browsing-topics
- **API route** — CSRF origin check, Content-Type guard, Zod validation, honeypot, rate limiting (3 req/hr per IP), all non-POST methods return 405
- **JSON-LD XSS protection** — `</script>` sequences escaped to `<` before injection
- **security.txt** — `/.well-known/security.txt` for responsible disclosure

---

## Deployment

Push to `main` on GitHub. Vercel auto-deploys.

Set environment variables in the Vercel dashboard under **Settings → Environment Variables**.

---

## Contact

Sameer Ahmed Shaikh — [sameer.shaikh0425@gmail.com](mailto:sameer.shaikh0425@gmail.com)

GitHub: [@shaikhsameer18](https://github.com/shaikhsameer18) · LinkedIn: [sameerahmed08](https://linkedin.com/in/sameerahmed08)

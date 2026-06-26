import type { StaticImageData } from "next/image";
import lotteryvault from "@/public/assets/project/lotteryvault.png";
import impostor     from "@/public/assets/project/impostergame.png";
import codecollab   from "@/public/assets/project/codecollab.png";
import geeky3       from "@/public/assets/project/geeky2.png";
import datech       from "@/public/assets/project/datech.png";
import ddosshield   from "@/public/assets/project/ddosshield.png";
import scienceai    from "@/public/assets/project/scienceai.png";
import alvira       from "@/public/assets/project/alvira.png";
import grocery      from "@/public/assets/project/grocery.png";
import searchBag    from "@/public/assets/project/search.png";

export interface Project {
  title:         string;
  desc:          string;
  image:         StaticImageData;
  github:        string;
  demo:          string;
  tags:          string[];
  featured:      boolean;
  security:      boolean;
  securityAngle?: string;
}

export type Difficulty = "Easy" | "Medium" | "Hard";
export type Impact     = "Low"  | "Medium" | "High";

export interface SecurityProjectIdea {
  title:      string;
  desc:       string;
  tags:       string[];
  difficulty: Difficulty;
  impact:     Impact;
  why:        string;
}

export const PROJECTS: Project[] = [
  {
    title:    "DDoS Shield",
    desc:     "Cybersecurity education platform explaining DDoS attack vectors (volumetric, protocol, application-layer), mitigation strategies, and protection tier configurations.",
    image:    ddosshield,
    github:   "https://github.com/shaikhsameer18/DDoS-Shield",
    demo:     "https://ddos-shield.vercel.app/",
    tags:     ["Next.js", "Framer Motion", "TypeScript"],
    featured: true,
    security: true,
    securityAngle: "Already security-focused. Enhance: add live traffic simulator, Cloudflare/AWS Shield API integration demo, and a CVE lookup widget.",
  },
  {
    title:    "CodeCollab",
    desc:     "Real-time collaborative coding platform with JWT auth, encrypted WebSocket channels, CSP headers, and XSS-safe input handling. Integrates OpenAI and GitHub APIs.",
    image:    codecollab,
    github:   "https://github.com/shaikhsameer18/CodeCollabFinal",
    demo:     "https://codecollabfinal.vercel.app/",
    tags:     ["React", "Node.js", "Socket.io", "MongoDB", "OpenAI"],
    featured: true,
    security: false,
    securityAngle: "Add: JWT refresh-token rotation, rate limiting on code execution, sandboxed code runner (Docker isolate), and audit logs for session events.",
  },
  {
    title:    "LotteryVault",
    desc:     "Blockchain lottery dApp with Solidity smart contracts featuring reentrancy guards, access controls, and verifiable randomness via Chainlink VRF.",
    image:    lotteryvault,
    github:   "https://github.com/shaikhsameer18/LotteryVault",
    demo:     "",
    tags:     ["Solidity", "MetaMask", "React", "Smart Contracts"],
    featured: true,
    security: true,
    securityAngle: "Add: MythX / Slither static analysis report, on-chain event audit trail, formal verification, and bug-bounty documentation in the README.",
  },
  {
    title:    "GeekyTechh",
    desc:     "Freelance services website with secure contact form, performance-optimised image pipeline, strict CSP headers, and HSTS enforcement.",
    image:    geeky3,
    github:   "https://github.com/shaikhsameer18/GeekyTechh3.0",
    demo:     "https://www.geekytechh.in/",
    tags:     ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: true,
    security: false,
    securityAngle: "Add: Vercel WAF rules, rate-limited contact API (already partial), and a publicly visible security.txt file at /.well-known/security.txt.",
  },
  {
    title:    "Alvira Bags",
    desc:     "E-commerce platform with CMS-driven content, secure checkout flow, and server-side data fetching to avoid client-side credential exposure.",
    image:    alvira,
    github:   "https://github.com/shaikhsameer18/alvirabag",
    demo:     "https://alvirabag.vercel.app/",
    tags:     ["Next.js", "Sanity.io", "TypeScript"],
    featured: false,
    security: false,
    securityAngle: "Add: Sanity webhook signature verification, input sanitisation on search, and PCI-DSS note if payments are added.",
  },
  {
    title:    "Search Bag",
    desc:     "Manufacturer & wholesaler marketplace with server-validated search, rate-limited APIs, and HTTPS-enforced deployment.",
    image:    searchBag,
    github:   "https://github.com/shaikhsameer18/SearchBag",
    demo:     "https://www.searchbag.in/",
    tags:     ["React", "Node.js", "MongoDB"],
    featured: false,
    security: false,
    securityAngle: "Add: MongoDB injection guards (parameterized queries), OWASP ZAP automated scan in CI, and security.txt.",
  },
  {
    title:    "Imposter Game",
    desc:     "Multiplayer social deduction game with server-side role validation, anti-cheat socket room management, and secure session handling.",
    image:    impostor,
    github:   "https://github.com/shaikhsameer18/ImposterGame",
    demo:     "https://imposterhunt.vercel.app/",
    tags:     ["React", "Node.js", "TypeScript", "Socket.io"],
    featured: false,
    security: false,
    securityAngle: "Add: server-side authoritative game state (prevent client tampering), socket room auth tokens, and anti-cheat event validation.",
  },
  {
    title:    "Grocery Management",
    desc:     "Grocery marketplace with shopping cart, input validation, and secure checkout flow.",
    image:    grocery,
    github:   "https://github.com/shaikhsameer18/grocery-management",
    demo:     "https://grocery-management-psi.vercel.app/",
    tags:     ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    security: false,
    securityAngle: "Add: CSRF tokens on checkout, rate limiting on add-to-cart API, and server-side price validation.",
  },
  {
    title:    "DA Tech",
    desc:     "Custom computer systems site with product catalog, build options, and service request system.",
    image:    datech,
    github:   "https://github.com/shaikhsameer18/DA-Tech",
    demo:     "https://datechnologies.vercel.app/",
    tags:     ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
    security: false,
    securityAngle: "Add: Zod-validated contact form, honeypot spam protection, and CSP headers via Vercel config.",
  },
  {
    title:    "ScienceAI",
    desc:     "AI-powered defect analyser using computer vision to detect and classify museum exhibit defects.",
    image:    scienceai,
    github:   "https://github.com/shaikhsameer18/ScienceAI",
    demo:     "https://science-ai.vercel.app/",
    tags:     ["Next.js", "TensorFlow.js", "TypeScript"],
    featured: false,
    security: false,
    securityAngle: "Add: image upload validation (type + size + magic bytes check), adversarial input detection, and model output sanitisation.",
  },
];

export const SECURITY_PROJECT_IDEAS: SecurityProjectIdea[] = [
  {
    title:      "ThreatMap — Threat Intelligence Dashboard",
    desc:       "Real-time OSINT aggregator pulling from AbuseIPDB, Shodan, VirusTotal, and MITRE ATT&CK. Visualises threat actors, IOCs, and TTPs on an interactive map.",
    tags:       ["Next.js", "Shodan API", "AbuseIPDB", "VirusTotal", "MITRE ATT&CK", "D3.js"],
    difficulty: "Medium",
    impact:     "High",
    why:        "Showcases OSINT + threat intelligence skills — directly relevant to SOC Analyst roles",
  },
  {
    title:      "SecureVault — Password Manager with E2E Encryption",
    desc:       "End-to-end encrypted password manager using AES-256-GCM + PBKDF2, zero-knowledge architecture, TOTP 2FA, and breach detection via HaveIBeenPwned API.",
    tags:       ["React", "Node.js", "WebCrypto API", "TOTP", "HaveIBeenPwned", "MongoDB"],
    difficulty: "Hard",
    impact:     "High",
    why:        "Demonstrates deep cryptography knowledge and zero-trust design patterns",
  },
  {
    title:      "NetSentry — Network Scanner & Vulnerability Reporter",
    desc:       "Web UI over Nmap + Shodan that scans a target, identifies open ports/services, correlates with CVE database, and generates PDF pentest-style reports.",
    tags:       ["Python", "FastAPI", "Nmap", "NVD API", "React", "Docker"],
    difficulty: "Hard",
    impact:     "High",
    why:        "Combines your pentest + full-stack skills — instant portfolio differentiator for security engineering roles",
  },
  {
    title:      "GRC Compass — Compliance Assessment Tool",
    desc:       "Web app that guides users through SEBI CSCRF / ISO 27001 control checklists, tracks gap status, assigns risk scores, and exports audit-ready Excel reports.",
    tags:       ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "ExcelJS"],
    difficulty: "Medium",
    impact:     "High",
    why:        "Directly maps to your GRC Analyst role at Zoffec — no one else in the market has this specific project",
  },
  {
    title:      "PhishGuard — Phishing Email Analyzer",
    desc:       "Upload an .eml file, the app parses headers, checks SPF/DKIM/DMARC alignment, extracts URLs for VirusTotal scanning, and produces an IOC report.",
    tags:       ["Python", "FastAPI", "VirusTotal API", "React", "email-parser"],
    difficulty: "Medium",
    impact:     "Medium",
    why:        "Great for SOC/Blue Team portfolio — shows email threat analysis capability",
  },
];

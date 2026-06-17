"use client";

import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  ExternalLink,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Shield,
  ClipboardCheck,
  Search,
  X,
  Send,
  ChevronRight,
  MapPin,
  Award,
  Code2,
  Network,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiPostman,
  SiVercel,
  SiSocketdotio,
  SiWireshark,
} from "react-icons/si";
import { ZoffecLogo } from "@/components/ZoffecLogo";

import profilePic   from "@/public/assets/samcrop.jpg";
import mhsscoe      from "@/public/assets/mhsscoe.png";
import xaviers      from "@/public/assets/xaviers.jpeg";
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

/* ═══════════════════════════════════════════════════════════════════════════
   ANIMATION HELPERS
═══════════════════════════════════════════════════════════════════════════ */

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (delay = 0.07) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay } },
});

function useReveal() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return { ref, inView };
}

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — SKILLS
═══════════════════════════════════════════════════════════════════════════ */

const SKILLS = [
  // ── Cybersecurity & Network ──────────────────────────────────────────────
  { name: "Sophos Firewall",     icon: Shield,         color: "#3a5a40", size: "lg", cat: "cybersecurity" },
  { name: "Firewall Policies",   icon: Shield,         color: "#3a5a40", size: "md", cat: "cybersecurity" },
  { name: "IPsec VPN",           icon: Shield,         color: "#588157", size: "sm", cat: "cybersecurity" },
  { name: "NAT Rules",           icon: Network,        color: "#3a5a40", size: "sm", cat: "cybersecurity" },
  { name: "Nmap",                icon: Search,         color: "#344e41", size: "md", cat: "cybersecurity" },
  { name: "Wireshark",           icon: SiWireshark,    color: "#1D67CF", size: "md", cat: "cybersecurity" },
  { name: "Burp Suite",          icon: Shield,         color: "#c05c3a", size: "sm", cat: "cybersecurity" },
  { name: "OWASP Top 10",        icon: Shield,         color: "#3a5a40", size: "sm", cat: "cybersecurity" },
  { name: "Endpoint Security",   icon: Shield,         color: "#588157", size: "sm", cat: "cybersecurity" },
  // ── GRC & Compliance ─────────────────────────────────────────────────────
  { name: "SEBI CSCRF",          icon: ClipboardCheck, color: "#588157", size: "lg", cat: "grc" },
  { name: "Gap Assessments",     icon: ClipboardCheck, color: "#3a5a40", size: "md", cat: "grc" },
  { name: "Control Validation",  icon: ClipboardCheck, color: "#588157", size: "md", cat: "grc" },
  { name: "Audit Evidence",      icon: ClipboardCheck, color: "#344e41", size: "sm", cat: "grc" },
  { name: "CCMP / BCP / DR",     icon: ClipboardCheck, color: "#588157", size: "sm", cat: "grc" },
  { name: "RTO / RPO",           icon: ClipboardCheck, color: "#3a5a40", size: "sm", cat: "grc" },
  { name: "Risk Identification",  icon: ClipboardCheck, color: "#588157", size: "sm", cat: "grc" },
  { name: "Remediation Tracking", icon: ClipboardCheck, color: "#344e41", size: "sm", cat: "grc" },
  // ── SOC & Operations ─────────────────────────────────────────────────────
  { name: "SOC Agent Deployment", icon: Award,         color: "#3a5a40", size: "lg", cat: "soc" },
  { name: "Alert Triage",         icon: Award,         color: "#588157", size: "md", cat: "soc" },
  { name: "Log Review",           icon: Award,         color: "#3a5a40", size: "md", cat: "soc" },
  { name: "Incident Support",     icon: Award,         color: "#588157", size: "sm", cat: "soc" },
  // ── Networking ───────────────────────────────────────────────────────────
  { name: "TCP/IP",              icon: Network,        color: "#344e41", size: "md", cat: "network" },
  { name: "DNS & DHCP",          icon: Network,        color: "#344e41", size: "sm", cat: "network" },
  { name: "OSI Model",           icon: Network,        color: "#344e41", size: "sm", cat: "network" },
  // ── Full-Stack ───────────────────────────────────────────────────────────
  { name: "React",               icon: FaReact,        color: "#61DAFB", size: "lg", cat: "fullstack" },
  { name: "Next.js",             icon: SiNextdotjs,    color: "#1a1f1b", size: "lg", cat: "fullstack" },
  { name: "Node.js",             icon: FaNodeJs,       color: "#339933", size: "lg", cat: "fullstack" },
  { name: "TypeScript",          icon: SiTypescript,   color: "#3178C6", size: "md", cat: "fullstack" },
  { name: "MongoDB",             icon: SiMongodb,      color: "#47A248", size: "md", cat: "fullstack" },
  { name: "Express.js",          icon: SiExpress,      color: "#344e41", size: "md", cat: "fullstack" },
  { name: "Tailwind CSS",        icon: SiTailwindcss,  color: "#06B6D4", size: "md", cat: "fullstack" },
  { name: "JavaScript",          icon: SiJavascript,   color: "#F7DF1E", size: "sm", cat: "fullstack" },
  { name: "Socket.io",           icon: SiSocketdotio,  color: "#1a1f1b", size: "sm", cat: "fullstack" },
  { name: "Framer Motion",       icon: SiFramer,       color: "#BB4BFF", size: "sm", cat: "fullstack" },
  // ── Tools & Platforms ─────────────────────────────────────────────────────
  { name: "Linux",               icon: FaLinux,        color: "#FCC624", size: "md", cat: "tools" },
  { name: "Windows",             icon: FaWindows,      color: "#0078D6", size: "sm", cat: "tools" },
  { name: "Docker",              icon: FaDocker,       color: "#2496ED", size: "md", cat: "tools" },
  { name: "AWS",                 icon: FaAws,          color: "#FF9900", size: "sm", cat: "tools" },
  { name: "Git",                 icon: FaGitAlt,       color: "#F05032", size: "md", cat: "tools" },
  { name: "GitHub",              icon: FaGithub,       color: "#1a1f1b", size: "sm", cat: "tools" },
  { name: "Postman",             icon: SiPostman,      color: "#FF6C37", size: "sm", cat: "tools" },
  { name: "Vercel",              icon: SiVercel,       color: "#1a1f1b", size: "sm", cat: "tools" },
  // ── Languages ─────────────────────────────────────────────────────────────
  { name: "Python",              icon: FaPython,       color: "#3776AB", size: "md", cat: "languages" },
  { name: "Java",                icon: FaJava,         color: "#ED1D25", size: "sm", cat: "languages" },
  { name: "HTML5",               icon: FaHtml5,        color: "#E34F26", size: "sm", cat: "languages" },
  { name: "CSS3",                icon: FaCss3Alt,      color: "#1572B6", size: "sm", cat: "languages" },
] as const;

type SkillCat = "all" | "cybersecurity" | "grc" | "soc" | "network" | "fullstack" | "tools" | "languages";

const CATEGORIES: { key: SkillCat; label: string }[] = [
  { key: "all",           label: "All"               },
  { key: "cybersecurity", label: "Cybersecurity"      },
  { key: "grc",           label: "GRC & Compliance"   },
  { key: "soc",           label: "SOC Operations"     },
  { key: "network",       label: "Networking"         },
  { key: "fullstack",     label: "Full-Stack Dev"     },
  { key: "tools",         label: "Tools & Platforms"  },
  { key: "languages",     label: "Languages"          },
];

const SKILL_SIZE_CLS: Record<string, string> = {
  lg: "px-4 py-2.5 text-sm gap-2.5",
  md: "px-3 py-2   text-xs gap-2",
  sm: "px-2.5 py-1.5 text-xs gap-1.5",
};

const SKILL_ICON_CLS: Record<string, string> = {
  lg: "text-xl",
  md: "text-base",
  sm: "text-sm",
};

/* ═══════════════════════════════════════════════════════════════════════════
   DATA — PROJECTS
═══════════════════════════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    title:    "CodeCollab",
    desc:     "Real-time collaborative coding platform with whiteboard, AI assistance (OpenAI), and GitHub integration. Enables developers to pair-program remotely.",
    image:    codecollab,
    github:   "https://github.com/shaikhsameer18/CodeCollabFinal",
    demo:     "https://codecollabfinal.vercel.app/",
    tags:     ["React", "Node.js", "Socket.io", "MongoDB", "OpenAI"],
    featured: true,
  },
  {
    title:    "GeekyTechh",
    desc:     "Freelance service-provider website with services, portfolio showcase, and client testimonials.",
    image:    geeky3,
    github:   "https://github.com/shaikhsameer18/GeekyTechh3.0",
    demo:     "https://www.geekytechh.in/",
    tags:     ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    title:    "Alvira Bags",
    desc:     "E-commerce platform for a luxury bag brand with CMS-driven content, product catalog, and checkout.",
    image:    alvira,
    github:   "https://github.com/shaikhsameer18/alvirabag",
    demo:     "https://alvirabag.vercel.app/",
    tags:     ["Next.js", "Sanity.io", "TypeScript"],
    featured: true,
  },
  {
    title:    "Search Bag",
    desc:     "Manufacturer & wholesaler bag marketplace with advanced product listings and modern UX.",
    image:    searchBag,
    github:   "https://github.com/shaikhsameer18/SearchBag",
    demo:     "https://www.searchbag.in/",
    tags:     ["React", "Node.js", "MongoDB"],
    featured: true,
  },
  {
    title:    "Grocery Management",
    desc:     "Grocery & fruits marketplace with shopping cart, categories, and checkout flow.",
    image:    grocery,
    github:   "https://github.com/shaikhsameer18/grocery-management",
    demo:     "https://grocery-management-psi.vercel.app/",
    tags:     ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
  {
    title:    "Imposter Game",
    desc:     "Multiplayer social deduction game with real-time gameplay and role assignments via Socket.io.",
    image:    impostor,
    github:   "https://github.com/shaikhsameer18/ImposterGame",
    demo:     "https://imposterhunt.vercel.app/",
    tags:     ["React", "Node.js", "TypeScript", "Socket.io"],
    featured: false,
  },
  {
    title:    "LotteryVault",
    desc:     "Blockchain-based lottery dApp — smart contract picks a random winner from ticket holders.",
    image:    lotteryvault,
    github:   "https://github.com/shaikhsameer18/LotteryVault",
    demo:     "",
    tags:     ["Solidity", "MetaMask", "React"],
    featured: false,
  },
  {
    title:    "DA Tech",
    desc:     "Custom computer systems site with product catalog, build options, and service requests.",
    image:    datech,
    github:   "https://github.com/shaikhsameer18/DA-Tech",
    demo:     "https://datechnologies.vercel.app/",
    tags:     ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
  {
    title:    "DDoS Shield",
    desc:     "DDoS protection service site explaining attack vectors and protection tiers.",
    image:    ddosshield,
    github:   "https://github.com/shaikhsameer18/DDoS-Shield",
    demo:     "https://ddos-shield.vercel.app/",
    tags:     ["Next.js", "Framer Motion", "TypeScript"],
    featured: false,
  },
  {
    title:    "ScienceAI",
    desc:     "AI-powered exhibit defect analyser using computer vision to detect and classify museum exhibit defects.",
    image:    scienceai,
    github:   "https://github.com/shaikhsameer18/ScienceAI",
    demo:     "https://science-ai.vercel.app/",
    tags:     ["Next.js", "TensorFlow.js", "TypeScript"],
    featured: false,
  },
];

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION: HERO
═══════════════════════════════════════════════════════════════════════════ */

function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16"
      style={{ background: "#f8f5f0" }}
    >
      {/* Subtle dot grid — earthy sage tones */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(88,129,87,0.09) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft fern glow — top right */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at top right, rgba(88,129,87,0.07) 0%, transparent 65%)",
        }}
      />

      {/* Soft pine glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(circle at bottom left, rgba(52,78,65,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl w-full">

        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <span className="domain-tag-blue">
            <Shield className="w-3 h-3" aria-hidden="true" />
            <TypeAnimation
              sequence={[
                "Cybersecurity Analyst",     2500,
                "GRC & Compliance Analyst",  2200,
                "Sophos Certified Engineer", 2000,
                "SOC Specialist",            2000,
                "Full-Stack Developer",      2000,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              aria-live="polite"
            />
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-[#1a1f1b]"
        >
          Sameer Ahmed
        </motion.h1>

        {/* Role stack */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-space text-lg sm:text-xl font-semibold text-[#3a5a40]"
        >
          Full-Stack Developer&ensp;·&ensp;Cybersecurity Analyst&ensp;·&ensp;GRC Analyst
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="font-inter text-base sm:text-lg text-[#6e7f71] max-w-2xl leading-relaxed"
        >
          Cybersecurity Engineer and GRC Analyst at{" "}
          <strong className="font-semibold text-[#3d4f41]">Zoffec Infotech Pvt. Ltd.</strong>, with
          hands-on experience in firewall security, SEBI CSCRF compliance, SOC operations, vulnerability
          assessment, and secure full-stack development.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="https://github.com/shaikhsameer18"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="GitHub profile"
          >
            <FaGithub className="w-4 h-4" aria-hidden="true" /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/sameerahmed08"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
          </a>
          <a
            href="mailto:sameer.shaikh0425@gmail.com"
            className="btn-ghost"
            aria-label="Send email"
          >
            <Mail className="w-4 h-4" aria-hidden="true" /> Email
          </a>
          <a
            href="/Sameer.pdf"
            download
            className="btn-primary"
            aria-label="Download resume"
          >
            <Download className="w-4 h-4" aria-hidden="true" /> Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg mt-3"
          role="list"
          aria-label="Key statistics"
        >
          {[
            { value: "50+",  label: "Firewall Policies" },
            { value: "10+",  label: "Clients Secured"   },
            { value: "100+", label: "SOC Agents"        },
            { value: "9.06", label: "CGPA"              },
          ].map(({ value, label }) => (
            <div
              key={label}
              role="listitem"
              className="flex flex-col items-center p-4 rounded-xl border border-[#dad7cd] bg-white shadow-[0_1px_4px_rgba(58,90,64,0.08)]"
            >
              <span className="font-playfair text-2xl font-bold text-[#3a5a40]">{value}</span>
              <span className="font-space text-[11px] text-[#6e7f71] mt-1 text-center">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#a3b18a] hover:text-[#588157] transition-colors"
      >
        <span className="font-space text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </motion.button>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION: ABOUT
═══════════════════════════════════════════════════════════════════════════ */

function AboutSection() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" aria-labelledby="about-heading" className="section-alt">
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger()}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Photo */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#a3b18a] shadow-[0_8px_30px_rgba(88,129,87,0.14)]">
                <Image
                  src={profilePic}
                  alt="Sameer Ahmed Shaikh — Cybersecurity Analyst & GRC Analyst"
                  fill
                  className="object-cover scale-110 translate-x-2"
                  sizes="(max-width: 640px) 240px, 288px"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#dad7cd] rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(58,90,64,0.10)]">
                <p className="font-space text-xs font-bold text-[#3a5a40]">B.E. Information Technology</p>
                <p className="font-space text-[10px] text-[#6e7f71] mt-0.5">CGPA 9.06 · MHSSCOE</p>
              </div>
              {/* Sophos badge */}
              <div className="absolute -top-3 -left-3 bg-[#eef3e8] border border-[#c5d9b5] rounded-xl px-3 py-1.5 shadow-sm">
                <p className="font-space text-[10px] font-bold text-[#3a5a40]">Sophos Certified</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div variants={fadeUp} className="flex flex-col gap-5">
            <div>
              <p className="section-label">Who I am</p>
              <h2 id="about-heading" className="section-title mt-1">About Me</h2>
              <div className="forest-divider" />
            </div>

            <p className="font-inter text-[#3d4f41] leading-relaxed text-sm sm:text-base">
              I&apos;m <strong className="font-semibold text-[#1a1f1b]">Sameer Ahmed Shaikh</strong>, a
              Cybersecurity Engineer and GRC Analyst at{" "}
              <strong className="font-semibold text-[#1a1f1b]">Zoffec Infotech Pvt. Ltd.</strong>, Mumbai.
              I specialise in enterprise firewall security, regulatory compliance (SEBI CSCRF), SOC
              monitoring, and vulnerability assessments across multi-client environments.
            </p>
            <p className="font-inter text-[#3d4f41] leading-relaxed text-sm sm:text-base">
              Alongside my security work, I build high-quality web applications through my freelance
              venture{" "}
              <a
                href="https://www.geekytechh.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3a5a40] underline underline-offset-2 hover:text-[#344e41] transition-colors"
              >
                Geeky Techh
              </a>
              , delivering full-stack solutions using React, Next.js, and Node.js. I bring secure
              development practices to every project.
            </p>

            {/* Quick facts */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" aria-label="Key qualifications">
              {[
                "Cybersecurity Engineer at Zoffec Infotech",
                "GRC Analyst — SEBI CSCRF specialist",
                "Sophos Firewall Certified Engineer",
                "SOC operations & incident response",
                "Vulnerability assessment (Nmap, Burp Suite)",
                "Full-stack development (MERN / Next.js)",
              ].map((fact) => (
                <li key={fact} className="flex items-start gap-2 font-space text-xs text-[#3d4f41]">
                  <CheckCircle2 className="w-4 h-4 text-[#588157] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-1">
              <a href="https://github.com/shaikhsameer18" target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs" aria-label="GitHub">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
              <a href="https://linkedin.com/in/sameerahmed08" target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" aria-hidden="true" /> LinkedIn
              </a>
              <a href="/Sameer.pdf" download className="btn-primary text-xs py-2" aria-label="Download resume">
                <Download className="w-3.5 h-3.5" aria-hidden="true" /> Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION: SKILLS
═══════════════════════════════════════════════════════════════════════════ */

function SkillsSection() {
  const { ref, inView }     = useReveal();
  const [active, setActive] = useState<SkillCat>("all");

  const filtered = active === "all"
    ? SKILLS
    : SKILLS.filter((s) => s.cat === active);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-main">
      <div className="section-inner">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger(0.06)}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="section-label">Technical expertise</motion.p>
          <motion.h2 id="skills-heading" variants={fadeUp} className="section-title mt-1">
            Skills & Competencies
          </motion.h2>
          <motion.div variants={fadeUp} className="forest-divider" />
          <motion.p variants={fadeUp} className="section-subtitle mt-3">
            Ordered by domain — cybersecurity and GRC skills listed first, followed by full-stack and tooling.
          </motion.p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          role="group"
          aria-label="Filter skills by domain"
          className="flex flex-wrap gap-2 mb-8"
        >
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              aria-pressed={active === key}
              className={`px-3.5 py-1.5 rounded-lg font-space text-xs font-semibold border transition-all duration-150 ${
                active === key
                  ? "bg-[#3a5a40] text-white border-[#3a5a40]"
                  : "border-[#dad7cd] text-[#3d4f41] hover:border-[#a3b18a] hover:text-[#3a5a40] hover:bg-[#f2f5ee]"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Skill cloud */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2.5"
            role="list"
            aria-label={`Skills — ${active}`}
          >
            {filtered.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  role="listitem"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.025 }}
                  className={`skill-badge ${SKILL_SIZE_CLS[skill.size]}`}
                  title={skill.name}
                >
                  <Icon
                    className={`${SKILL_ICON_CLS[skill.size]} flex-shrink-0`}
                    style={{ color: skill.color }}
                    aria-hidden="true"
                  />
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION: EXPERIENCE
   Note: Zoffec company logo (ZoffecLogo component) is used here ONLY as a
   company/employer identifier — not as a personal brand element.
═══════════════════════════════════════════════════════════════════════════ */

function ExperienceSection() {
  const { ref, inView } = useReveal();

  const jobs = [
    {
      company:  "Zoffec Infotech Pvt. Ltd.",
      role:     "Cybersecurity Engineer & GRC Analyst",
      type:     "Full-time",
      period:   "Oct 2025 – Present",
      location: "Mumbai, India",
      logo:     "zoffec" as const,
      desc:     "Working as a Cybersecurity Engineer and GRC Analyst, managing enterprise firewall security, SOC operations, SEBI CSCRF compliance activities, and vulnerability assessments across multiple client environments.",
      bullets: [
        "Configured and maintained Sophos Firewall policies, NAT rules, access rules, and traffic filtering across multi-client environments.",
        "Supported SEBI CSCRF compliance through gap assessments, audit evidence collection, and control validation.",
        "Deployed SOC agents on client endpoints; verified agent connectivity, visibility, and reporting status.",
        "Reviewed security alerts and event logs to identify threats, triage incidents, and reduce false positives.",
        "Performed vulnerability assessments using Nmap, Wireshark, and Burp Suite to identify exposed services and misconfigurations.",
        "Maintained CCMP, BCP, and DR documentation with RTO/RPO inputs.",
        "Assisted in internal cybersecurity audits covering access management, endpoint protection, and vulnerability management.",
        "Documented security configurations, issue observations, and remediation steps for internal and client reporting.",
      ],
      tags:     ["Sophos Firewall", "SEBI CSCRF", "SOC Operations", "GRC", "Vulnerability Assessment", "Endpoint Security"],
      tagStyle: "domain-tag-blue" as const,
    },
    {
      company:  "Geeky Techh",
      role:     "Full-Stack Developer",
      type:     "Freelance",
      period:   "2023 – Present",
      location: "Remote",
      logo:     "code" as const,
      desc:     "Delivering high-quality web applications and full-stack solutions for clients worldwide through my freelance service company.",
      bullets: [
        "Built and deployed full-stack web applications for clients across diverse industries.",
        "Developed GeekyTechh company website using Next.js, Tailwind CSS, and Framer Motion.",
        "Created the Alvira Bags e-commerce platform with Sanity CMS-driven content.",
        "Implemented real-time features using Socket.io for collaborative applications.",
        "Managed cloud deployments on Vercel and AWS for production-grade performance.",
      ],
      tags:     ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      tagStyle: "domain-tag-neutral" as const,
    },
  ];

  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-alt">
      <div className="section-inner">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger(0.08)}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="section-label">Professional background</motion.p>
          <motion.h2 id="experience-heading" variants={fadeUp} className="section-title mt-1">
            Experience
          </motion.h2>
          <motion.div variants={fadeUp} className="forest-divider" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8">
          <div className="timeline-bar" aria-hidden="true" />

          {jobs.map((job, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.15 }}
              aria-label={`${job.role} at ${job.company}`}
              className="mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-[-5px] w-3 h-3 rounded-full border-2 border-white shadow-sm mt-5"
                style={{ background: "#588157" }}
                aria-hidden="true"
              />

              <div className="pro-card p-6 sm:p-7 ml-2 sm:ml-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl border border-[#dad7cd] bg-white flex items-center justify-center flex-shrink-0 shadow-[0_1px_4px_rgba(58,90,64,0.08)]">
                    {job.logo === "zoffec" ? (
                      <ZoffecLogo size={30} aria-label="Zoffec Infotech logo" />
                    ) : (
                      <Code2 className="w-5 h-5 text-[#3a5a40]" aria-hidden="true" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#1a1f1b]">
                      {job.role}
                    </h3>
                    <p className="font-space text-sm font-semibold text-[#3a5a40] mt-0.5">{job.company}</p>
                    <p className="font-space text-xs text-[#6e7f71] mt-0.5">
                      {job.type} &bull; {job.period} &bull; {job.location}
                    </p>
                  </div>
                </div>

                <p className="font-inter text-sm text-[#3d4f41] leading-relaxed mb-4">{job.desc}</p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-2 font-inter text-sm text-[#3d4f41]">
                      <ChevronRight className="w-4 h-4 text-[#588157] mt-0.5 flex-shrink-0" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2" aria-label="Technologies / domains">
                  {job.tags.map((tag) => (
                    <span key={tag} className={job.tagStyle}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION: PROJECTS
═══════════════════════════════════════════════════════════════════════════ */

function ProjectsSection() {
  const { ref, inView }     = useReveal();
  const [search,  setSearch]  = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = PROJECTS.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const visible = search ? filtered : showAll ? filtered : filtered.filter((p) => p.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-main">
      <div className="section-inner">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger(0.07)}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="section-label">Technical portfolio</motion.p>
          <motion.h2 id="projects-heading" variants={fadeUp} className="section-title mt-1">
            Projects
          </motion.h2>
          <motion.div variants={fadeUp} className="forest-divider" />
          <motion.p variants={fadeUp} className="section-subtitle mt-3">
            Full-stack web projects demonstrating technical breadth. Secure development practices are applied throughout.
          </motion.p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.22 }}
          className="mb-8"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a3b18a]" aria-hidden="true" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects or technologies…"
              aria-label="Search projects"
              className="form-input pl-10 pr-10"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a3b18a] hover:text-[#1a1f1b] transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Grid */}
        {visible.length === 0 ? (
          <p className="font-space text-[#6e7f71] py-16">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                aria-label={project.title}
                className="pro-card overflow-hidden flex flex-col group"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-[#f2ede6]">
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  {project.featured && (
                    <span className="absolute top-2.5 left-2.5 domain-tag-blue text-[10px] py-0.5 px-2">
                      Featured
                    </span>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="font-playfair text-base font-semibold text-[#1a1f1b]">{project.title}</h3>
                  <p className="font-inter text-xs text-[#6e7f71] leading-relaxed flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <span key={tag} className="domain-tag-neutral text-[10px] py-0.5 px-2">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#dad7cd]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code on GitHub`}
                      className="flex items-center gap-1.5 font-space text-xs text-[#6e7f71] hover:text-[#344e41] transition-colors"
                    >
                      <FaGithub className="w-3.5 h-3.5" aria-hidden="true" /> Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="flex items-center gap-1 font-space text-xs text-[#3a5a40] hover:text-[#344e41] font-medium transition-colors"
                      >
                        Live Demo <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="font-space text-xs text-[#a3b18a]">Demo unavailable</span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Controls */}
        {!search && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {!showAll && (
              <button onClick={() => setShowAll(true)} className="btn-outline" aria-label="Show all projects">
                Show All {PROJECTS.length} Projects
              </button>
            )}
            <a
              href="https://github.com/shaikhsameer18"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="All projects on GitHub"
            >
              <FaGithub aria-hidden="true" /> View on GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION: EDUCATION
═══════════════════════════════════════════════════════════════════════════ */

function EducationSection() {
  const { ref, inView } = useReveal();

  const edu = [
    {
      degree:   "Bachelor of Engineering — Information Technology",
      school:   "M.H. Saboo Siddik College of Engineering",
      period:   "2021 – 2025",
      location: "Mumbai, India",
      cgpa:     "9.06 / 10",
      desc:     "Graduated with distinction. Specialisation in networking, cybersecurity fundamentals, and modern software development.",
      image:    mhsscoe,
      subjects: ["Network Security", "Cryptography", "Operating Systems", "Data Structures", "Database Management", "Web Technologies"],
    },
    {
      degree:   "Higher Secondary Certificate (HSC) — Science",
      school:   "St. Xavier's College",
      period:   "2019 – 2021",
      location: "Mumbai, India",
      cgpa:     null,
      desc:     "Completed higher secondary education with a strong foundation in Mathematics, Physics, and Computer Science.",
      image:    xaviers,
      subjects: ["Mathematics", "Physics", "Computer Science", "Chemistry"],
    },
  ];

  return (
    <section id="education" aria-labelledby="education-heading" className="section-alt">
      <div className="section-inner">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger(0.07)}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="section-label">Academic background</motion.p>
          <motion.h2 id="education-heading" variants={fadeUp} className="section-title mt-1">
            Education
          </motion.h2>
          <motion.div variants={fadeUp} className="forest-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {edu.map((e, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              aria-label={`${e.degree} at ${e.school}`}
              className="pro-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#dad7cd] flex-shrink-0">
                  <Image src={e.image} alt={e.school} fill className="object-cover" sizes="48px" loading="lazy" />
                </div>
                <div>
                  <h3 className="font-space text-sm font-semibold text-[#1a1f1b] leading-tight">{e.school}</h3>
                  <p className="font-space text-xs text-[#6e7f71] mt-0.5">
                    {e.period} · {e.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-[#3a5a40] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="font-space text-xs font-semibold text-[#3a5a40]">{e.degree}</p>
              </div>

              {e.cgpa && (
                <div className="mb-3">
                  <span className="domain-tag-green text-xs">CGPA: <strong>{e.cgpa}</strong></span>
                </div>
              )}

              <p className="font-inter text-xs text-[#6e7f71] leading-relaxed mb-4">{e.desc}</p>

              <div className="flex flex-wrap gap-1.5" aria-label="Subjects">
                {e.subjects.map((s) => (
                  <span key={s} className="domain-tag-neutral text-[10px] py-0.5">{s}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 pro-card p-6 flex items-start gap-4"
          aria-label="Sophos Firewall Certified Engineer certification"
        >
          <div className="w-12 h-12 rounded-xl bg-[#eef3e8] border border-[#c5d9b5] flex items-center justify-center flex-shrink-0">
            <Award className="w-6 h-6 text-[#588157]" aria-hidden="true" />
          </div>
          <div>
            <p className="font-space text-xs text-[#588157] font-semibold uppercase tracking-wide mb-0.5">Certification</p>
            <h3 className="font-playfair text-lg font-semibold text-[#1a1f1b]">Sophos Firewall Certified Engineer</h3>
            <p className="font-space text-sm text-[#3a5a40] mt-0.5">Sophos · 2026</p>
            <p className="font-inter text-xs text-[#6e7f71] mt-2 leading-relaxed">
              Professional certification validating expertise in Sophos Firewall configuration, policy management, and network security operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION: CONTACT
   Security notes:
   - Honeypot field (_trap) is hidden from legitimate users via CSS/aria-hidden
   - Submission is routed through /api/contact (server-side) — Formspree
     endpoint never reaches the client
   - Client-side validation mirrors server-side Zod schema for UX only;
     real enforcement happens in the API route
═══════════════════════════════════════════════════════════════════════════ */

type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactForm {
  name:    string;
  email:   string;
  subject: string;
  message: string;
}

function ContactSection() {
  const { ref, inView } = useReveal();
  const [form,   setForm]   = useState<ContactForm>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const validate = (): Partial<ContactForm> => {
    const errs: Partial<ContactForm> = {};
    if (!form.name.trim() || form.name.length < 2)
      errs.name = "Name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email address.";
    if (!form.subject.trim() || form.subject.length < 3)
      errs.subject = "Subject must be at least 3 characters.";
    if (!form.message.trim() || form.message.length < 10)
      errs.message = "Message must be at least 10 characters.";
    return errs;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus("loading");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ ...form, _trap: "" }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else if (res.status === 429) {
        setStatus("error");
        setErrors({ message: "Too many requests. Please try again later." });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-main">
      <div className="section-inner">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={stagger(0.07)}
          className="mb-10"
        >
          <motion.p variants={fadeUp} className="section-label">Get in touch</motion.p>
          <motion.h2 id="contact-heading" variants={fadeUp} className="section-title mt-1">
            Contact Me
          </motion.h2>
          <motion.div variants={fadeUp} className="forest-divider" />
          <motion.p variants={fadeUp} className="section-subtitle mt-3">
            Open to cybersecurity consulting, GRC engagements, and full-stack development projects.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Contact form (3 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div
                role="alert"
                aria-live="polite"
                className="flex flex-col items-center justify-center gap-4 py-16 px-8 pro-card text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-[#588157]" aria-hidden="true" />
                <h3 className="font-playfair text-xl font-semibold text-[#1a1f1b]">Message sent!</h3>
                <p className="font-inter text-sm text-[#6e7f71]">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline text-sm mt-2"
                  aria-label="Send another message"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="pro-card p-6 sm:p-8 space-y-5"
              >
                {/* Honeypot — hidden from real users, catches bots */}
                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
                  <label htmlFor="_trap">Leave this blank</label>
                  <input
                    type="text"
                    id="_trap"
                    name="_trap"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="form-label">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`form-input ${errors.name ? "border-red-400 focus:ring-red-400" : ""}`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="font-space text-xs text-red-500 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="form-label">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`form-input ${errors.email ? "border-red-400 focus:ring-red-400" : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="font-space text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`form-input ${errors.subject ? "border-red-400 focus:ring-red-400" : ""}`}
                  />
                  {errors.subject && (
                    <p id="subject-error" role="alert" className="font-space text-xs text-red-500 mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your enquiry, project, or opportunity…"
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`form-input resize-none ${errors.message ? "border-red-400 focus:ring-red-400" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="font-space text-xs text-red-500 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit row */}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    aria-label="Send message"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {status === "error" && (
                      <motion.p
                        role="alert"
                        aria-live="assertive"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-space text-xs text-red-500"
                      >
                        {errors.message ?? "Something went wrong. Please try again."}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            )}
          </motion.div>

          {/* ── Contact info sidebar (2 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info cards */}
            <div className="pro-card p-6 space-y-5">
              <h3 className="font-playfair text-lg font-semibold text-[#1a1f1b]">Contact Information</h3>
              {[
                { icon: Mail,      label: "Email",        value: "sameer.shaikh0425@gmail.com",                  href: "mailto:sameer.shaikh0425@gmail.com" },
                { icon: MapPin,    label: "Location",     value: "Mumbai, Maharashtra, India",                   href: null },
                { icon: Briefcase, label: "Current Role", value: "Cybersecurity Engineer at Zoffec Infotech",    href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8efe9] border border-[#c5d9b5] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#3a5a40]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-space text-[10px] font-semibold text-[#6e7f71] uppercase tracking-wide">{label}</p>
                    {href ? (
                      <a href={href} className="font-inter text-sm text-[#3a5a40] hover:text-[#344e41] transition-colors break-all">{value}</a>
                    ) : (
                      <p className="font-inter text-sm text-[#3d4f41]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="pro-card p-6 space-y-3">
              <h3 className="font-space text-sm font-semibold text-[#1a1f1b]">Connect</h3>
              <div className="flex flex-col gap-2">
                {[
                  { label: "GitHub",   href: "https://github.com/shaikhsameer18",       icon: FaGithub,  external: true,  download: false },
                  { label: "LinkedIn", href: "https://linkedin.com/in/sameerahmed08",   icon: Linkedin,  external: true,  download: false },
                  { label: "Resume",   href: "/Sameer.pdf",                             icon: Download,  external: false, download: true  },
                ].map(({ label, href, icon: Icon, external, download: dl }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    {...(dl ? { download: true } : {})}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-[#dad7cd] hover:border-[#a3b18a] hover:bg-[#e8efe9] text-[#3d4f41] hover:text-[#344e41] transition-all font-space text-sm"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="rounded-xl border border-[#c5d9b5] bg-[#eef3e8] p-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full bg-[#588157] animate-pulse" aria-hidden="true" />
                <span className="font-space text-xs font-bold text-[#3a5a40] uppercase tracking-wide">Available</span>
              </div>
              <p className="font-inter text-xs text-[#3d4f41] leading-relaxed">
                Open to cybersecurity consulting, GRC advisory, compliance projects, and full-stack development engagements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE EXPORT
═══════════════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}

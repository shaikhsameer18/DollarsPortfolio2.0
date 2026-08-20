"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Linkedin, Download, ChevronRight, GraduationCap, Shield } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { fadeUp, stagger } from "@/lib/animations";
import { useReveal } from "@/lib/hooks/useReveal";
import RuleEyebrow from "@/components/RuleEyebrow";
import newProfilePic from "@/public/assets/sam.jpg";

const QUICK_FACTS = [
  "B.E. Information Technology — MHSSCOE, Mumbai (CGPA 9.06/10)",
  "Cybersecurity Engineer & GRC (Governance, Risk & Compliance) Analyst at Zoffec Infotech",
  "Hands-on SEBI CSCRF gap assessments, control validation & audit evidence for regulated entities",
  "SOC Agent Deployment & Alert Triage across 100+ enterprise endpoints",
  "Firewall policy design: IPsec VPN, WAF, NAT, IPS on Sophos XGS appliances",
  "Full-Stack developer with 2+ years of freelance experience building production apps",
];

export default function AboutSection() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" aria-label="About" className="section-alt relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(0,255,136,0.04) 0%, transparent 60%)" }} />

      <div className="section-inner relative z-10">
        <m.div
          ref={ref}
          variants={stagger()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center"
        >
          {/* Left: Text */}
          <div className="flex-1 min-w-0 order-2 lg:order-1">
            <m.div variants={fadeUp} className="mb-3">
              <RuleEyebrow n={1} target="/about" label="About Me" />
            </m.div>
            <m.h2 variants={fadeUp} className="section-title mb-2">
              Security-First.<br />
              <span className="text-cyber-gradient">Always.</span>
            </m.h2>
            <div className="cyber-divider mb-6" />

            <m.p variants={fadeUp} className="font-inter-var text-sm sm:text-base text-[#6B8EAD] leading-relaxed mb-4">
              I&apos;m a Cybersecurity Engineer and GRC (Governance, Risk &amp; Compliance) professional
              passionate about building robust defences and secure systems. Currently at{" "}
              <a href="https://www.zoffec.com" target="_blank" rel="noopener noreferrer"
                className="text-[#00D4FF] hover:text-[#22E0FF] underline underline-offset-2 transition-colors">
                Zoffec Infotech Pvt. Ltd.
              </a>{" "}
              — designing firewall architectures, leading SEBI CSCRF compliance assessments,
              and operating SOC tooling across enterprise environments.
            </m.p>
            <m.p variants={fadeUp} className="font-inter-var text-sm sm:text-base text-[#6B8EAD] leading-relaxed mb-8">
              I also build production-grade full-stack applications, bringing the same
              security-first mindset from the network edge to the application layer.
            </m.p>

            <m.ul variants={stagger(0.05)} className="space-y-3 mb-8" aria-label="Quick facts">
              {QUICK_FACTS.map((fact) => (
                <m.li key={fact} variants={fadeUp}
                  className="flex items-start gap-3 font-inter-var text-sm text-[#6B8EAD]">
                  <ChevronRight className="w-4 h-4 text-[#00D4FF] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  {fact}
                </m.li>
              ))}
            </m.ul>

            <m.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a href="https://github.com/shaikhsameer18" target="_blank" rel="noopener noreferrer"
                className="btn-cyber-outline text-xs py-2 px-4">
                <FaGithub className="w-3.5 h-3.5" /> GitHub
              </a>
              <a href="https://linkedin.com/in/sameerahmed08" target="_blank" rel="noopener noreferrer"
                className="btn-cyber-outline text-xs py-2 px-4">
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a href="/Sameer.pdf" download className="btn-cyber text-xs py-2 px-4">
                <Download className="w-3.5 h-3.5" /> Download CV
              </a>
            </m.div>
          </div>

          {/* Right: Profile photo */}
          <m.div variants={fadeUp}
            className="flex-shrink-0 flex flex-col items-center gap-5 order-1 lg:order-2 w-full lg:w-auto">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl opacity-50 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(0,255,136,0.04))" }}
                aria-hidden="true" />
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 shadow-[0_0_40px_rgba(0,212,255,0.10)]"
                style={{ borderColor: "rgba(0,212,255,0.35)" }}>
                <Image
                  src={newProfilePic}
                  alt="Sameer Ahmed Shaikh — Cybersecurity Engineer & GRC Analyst"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                  priority
                />
              </div>
              {/* Badges */}
              <div className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-[#00FF88]/30 bg-[#0A1628] shadow-[0_0_12px_rgba(0,255,136,0.10)]"
                aria-label="B.E. IT">
                <GraduationCap className="w-4 h-4 text-[#00FF88]" aria-hidden="true" />
                <span className="font-mono-jet text-xs text-[#C4DCF0]">B.E. IT</span>
              </div>
              <div className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl border border-[#00D4FF]/30 bg-[#0A1628] shadow-[0_0_12px_rgba(0,212,255,0.10)]"
                aria-label="GRC Analyst">
                <Shield className="w-4 h-4 text-[#00D4FF]" aria-hidden="true" />
                <span className="font-mono-jet text-xs text-[#C4DCF0]">GRC Analyst</span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/04">
              <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" aria-hidden="true" />
              <span className="font-mono-jet text-xs text-[#00FF88]">Open to opportunities</span>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Terminal, MapPin, ChevronRight, ExternalLink } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { useReveal } from "@/lib/hooks/useReveal";
import zoffecLogo from "@/public/assets/zoffec.png";
import geekyLogo  from "@/public/assets/geeky.png";

const EXPERIENCE = [
  {
    role:     "Cybersecurity Engineer & GRC Analyst",
    company:  "Zoffec Infotech Pvt. Ltd.",
    website:  "https://www.zoffec.com",
    period:   "Oct 2024 — Present",
    location: "Mumbai, India · On-Site",
    type:     "Full-Time",
    logoSrc:  zoffecLogo,
    logoBg:   "#0A1628",
    color:    "#00D4FF",
    bullets: [
      "Designed & deployed 50+ Sophos XGS firewall policies — WAF rules, IPsec site-to-site VPN tunnels, NAT/PAT configurations, and IPS signature tuning across multiple enterprise clients.",
      "Led SEBI CSCRF gap assessments for 10+ regulated entities (stockbrokers, depositories) — mapped controls to framework requirements and drafted client-specific remediation roadmaps.",
      "Deployed and managed 100+ Sophos Central endpoint & server protection agents; performed alert triage, threat investigation, and incident containment.",
      "Authored CCMP, BCP, and DR documentation aligned with SEBI guidelines; performed RTO/RPO mapping for critical business processes and IT assets.",
      "Managed audit evidence collection for SEBI regulatory submissions; coordinated compliance readiness reviews and stakeholder walkthroughs.",
      "Performed vulnerability assessments on client web apps and network infrastructure using Nmap, Burp Suite, and Wireshark; reported findings with CVSS scoring.",
      "Configured SD-WAN, QoS policies, and network segmentation (VLANs) for enterprise clients to enforce zero-trust principles.",
      "Provided security hardening guidance to client IT teams — endpoint configuration, patch management, and policy enforcement best practices.",
    ],
    tags: ["Sophos XGS", "SEBI CSCRF", "GRC", "SOC", "IPsec VPN", "WAF", "Vulnerability Assessment", "BCP/DR", "Zero Trust"],
  },
  {
    role:     "Full-Stack Developer",
    company:  "Geeky Techh",
    website:  "https://www.geekytechh.in",
    period:   "Jan 2023 — Sep 2024",
    location: "Remote · Freelance",
    type:     "Freelance",
    logoSrc:  geekyLogo,
    logoBg:   "#ffffff",
    color:    "#8B5CF6",
    bullets: [
      "Designed, developed, and deployed 10+ production-grade web applications for clients across e-commerce, logistics, and services verticals.",
      "Built GeekyTechh.in, Alvira Bags, and Search Bag — live platforms with real users; implemented secure auth, HTTPS enforcement, and CSP headers.",
      "Applied OWASP Top 10 security practices: input validation, secure session management, and API rate limiting across all projects.",
      "Managed full SDLC — requirements, UI/UX design, development, deployment (Vercel/AWS), and post-launch monitoring.",
    ],
    tags: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Vercel", "OWASP"],
  },
];

export default function ExperienceSection() {
  const { ref, inView } = useReveal();

  return (
    <section id="experience" aria-label="Work Experience" className="section-alt relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-25" aria-hidden="true" />

      <div className="section-inner relative z-10">
        <m.div ref={ref} variants={stagger()} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <m.p variants={fadeUp} className="section-label mb-3">Career</m.p>
          <m.h2 variants={fadeUp} className="section-title mb-2">
            Work <span className="text-cyber-gradient">Experience</span>
          </m.h2>
          <div className="cyber-divider mb-12" />

          <div className="relative pl-6">
            <div className="cyber-timeline-bar" aria-hidden="true" />

            <div className="space-y-8">
              {EXPERIENCE.map((exp) => (
                <m.div key={exp.company} variants={fadeUp}>
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 w-3 h-3 rounded-full border-2 border-[#030811] -translate-x-[5px] mt-6"
                    style={{ background: exp.color, boxShadow: `0 0 10px ${exp.color}80` }}
                    aria-hidden="true"
                  />

                  <div className="cyber-card p-5 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                      {/* Company logo — white-background logos get a white chip, dark logos get dark chip */}
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-xl border border-[#1E3050] flex items-center justify-center overflow-hidden p-1.5"
                        style={{ background: exp.logoBg }}
                        aria-hidden="true"
                      >
                        <Image
                          src={exp.logoSrc}
                          alt={exp.company}
                          width={44}
                          height={44}
                          className="object-contain w-full h-full"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="font-pliant text-lg sm:text-xl font-bold text-[#C4DCF0] leading-tight">{exp.role}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <a href={exp.website} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono-jet text-sm font-semibold hover:underline transition-colors"
                            style={{ color: exp.color }}>
                            {exp.company}
                            <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                          </a>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="inline-flex items-center gap-1 font-mono-jet text-[10px] text-[#2E4560]">
                            <Terminal className="w-3 h-3" aria-hidden="true" /> {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1 font-mono-jet text-[10px] text-[#2E4560]">
                            <MapPin className="w-3 h-3" aria-hidden="true" /> {exp.location}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono-jet font-medium"
                            style={{ background: `${exp.color}12`, border: `1px solid ${exp.color}30`, color: exp.color }}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-5">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-xs sm:text-sm text-[#6B8EAD] leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: exp.color }} aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#162030]">
                      {exp.tags.map((tag) => <span key={tag} className="neon-tag">{tag}</span>)}
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Terminal, Award } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { useReveal } from "@/lib/hooks/useReveal";
import mhsscoe from "@/public/assets/mhsscoe.png";
import xaviers from "@/public/assets/xaviers.jpeg";

const EDUCATION = [
  {
    institution: "M.H. Saboo Siddik College of Engineering",
    degree: "B.E. Information Technology",
    period: "2021 — 2025",
    result: "CGPA: 9.06 / 10",
    logo: mhsscoe,
    logoBg: "#ffffff",
    subjects: [
      "Cybersecurity",
      "Computer Networks",
      "Cloud Computing",
      "Data Structures",
      "DBMS",
      "OS",
    ],
    color: "#00D4FF",
  },
  {
    institution: "St. Xavier's High School",
    degree: "SSC — Maharashtra State Board",
    period: "2020 — 2021",
    result: "84%",
    logo: xaviers,
    logoBg: "#ffffff",
    subjects: ["Mathematics", "Science", "Technology"],
    color: "#00FF88",
  },
];

export default function EducationSection() {
  const { ref, inView } = useReveal();

  return (
    <section
      id="education"
      aria-label="Education"
      className="section-alt relative overflow-hidden"
    >
      <div
        className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-25"
        aria-hidden="true"
      />

      <div className="section-inner relative z-10">
        <m.div
          ref={ref}
          variants={stagger()}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <m.p variants={fadeUp} className="section-label mb-3">
            Education
          </m.p>
          <m.h2 variants={fadeUp} className="section-title mb-2">
            Academic <span className="text-cyber-gradient">Foundation</span>
          </m.h2>
          <div className="cyber-divider mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {EDUCATION.map((edu) => (
              <m.div key={edu.institution} variants={fadeUp}>
                <div className="cyber-card p-6 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-xl border border-[#1E3050] flex items-center justify-center overflow-hidden p-1.5"
                      style={{ background: edu.logoBg }}
                      aria-hidden="true"
                    >
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        width={48}
                        height={48}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-pliant text-base sm:text-lg font-bold text-[#C4DCF0] leading-tight">
                        {edu.institution}
                      </h3>
                      <p
                        className="font-mono-jet text-xs sm:text-sm mt-1"
                        style={{ color: edu.color }}
                      >
                        {edu.degree}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 font-mono-jet text-[11px] text-[#2E4560]">
                      <Terminal className="w-3 h-3" aria-hidden="true" />{" "}
                      {edu.period}
                    </span>
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono-jet font-semibold"
                      style={{
                        background: `${edu.color}12`,
                        border: `1px solid ${edu.color}30`,
                        color: edu.color,
                      }}
                    >
                      {edu.result}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {edu.subjects.map((s) => (
                      <span key={s} className="neon-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          <m.div variants={fadeUp}>
            <div
              className="cyber-card p-5 sm:p-6 border-l-2"
              style={{ borderLeftColor: "#00D4FF" }}
              aria-label="Professional Certification"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl border border-[#00D4FF]/30 bg-[#00D4FF]/08 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <Award className="w-5 h-5 text-[#00D4FF]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-pliant text-base font-bold text-[#C4DCF0]">
                      Sophos Firewall Certified Engineer
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono-jet font-semibold text-[#00D4FF] border border-[#00D4FF]/30 bg-[#00D4FF]/08">
                      CERTIFIED
                    </span>
                  </div>
                  <p className="font-mono-jet text-xs text-[#6B8EAD]">
                    Sophos — Official Certification
                  </p>
                  <p className="font-inter-var text-sm text-[#6B8EAD] mt-1">
                    Certified in Sophos XGS Firewall deployment, policy architecture, IPsec VPN, WAF rules, and advanced threat protection on Sophos Central.
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

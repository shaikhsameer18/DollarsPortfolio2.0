"use client";

import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import HeroNetworkCanvas from "@/components/HeroNetworkCanvas";

// A short authentication log — typed line by line, echoing the access-control
// language of Sameer's actual work instead of a generic boot message.
const AUTH_LOG = [
  { cmd: "whoami",              out: "sameer-ahmed-shaikh"                              },
  { cmd: "id",                  out: "groups=(security,grc,fullstack-dev)"              },
  { cmd: "./verify-clearance.sh", out: "ACCESS GRANTED", ok: true                       },
] as const;

function useTypedLog(lines: readonly { cmd: string; out: string; ok?: boolean }[]) {
  const [done, setDone] = useState<{ cmd: string; out: string; ok?: boolean }[]>([]);
  const [typing, setTyping] = useState({ field: "cmd" as "cmd" | "out", text: "" });

  useEffect(() => {
    let lineIdx = 0;
    let field: "cmd" | "out" = "cmd";
    let charIdx = 0;
    let timer: ReturnType<typeof setInterval>;

    const tick = () => {
      const line = lines[lineIdx];
      const source = field === "cmd" ? line.cmd : line.out;

      if (charIdx <= source.length) {
        setTyping({ field, text: source.slice(0, charIdx) });
        charIdx++;
        return;
      }

      if (field === "cmd") {
        field = "out";
        charIdx = 0;
        return;
      }

      setDone((prev) => [...prev, line]);
      lineIdx++;
      field = "cmd";
      charIdx = 0;

      if (lineIdx >= lines.length) clearInterval(timer);
    };

    timer = setInterval(tick, 32);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { done, typing };
}

export default function HeroSection() {
  const { done, typing } = useTypedLog(AUTH_LOG);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-24 overflow-hidden"
      style={{ background: "#050C14" }}
    >
      <HeroNetworkCanvas />
      <div className="absolute inset-0 pointer-events-none cyber-grid-bg" aria-hidden="true" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        aria-hidden="true"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)" }}
      />

      <div className="absolute top-20 left-6 sm:left-10 pointer-events-none" aria-hidden="true">
        <div className="w-8 h-[1px] bg-[#00D4FF]/30" />
        <div className="h-8 w-[1px] bg-[#00D4FF]/30" />
      </div>
      <div className="absolute top-20 right-6 sm:right-10 flex flex-col items-end pointer-events-none" aria-hidden="true">
        <div className="w-8 h-[1px] bg-[#00D4FF]/30" />
        <div className="h-8 w-[1px] bg-[#00D4FF]/30 self-end" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center gap-5 max-w-4xl w-full">

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-lg text-left font-mono-jet text-xs rounded-lg border border-[#162030] bg-[#030811] px-4 pt-3 pb-4"
          aria-label="Terminal boot sequence"
        >
          <div className="flex gap-1.5 mb-3" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B5C]/60 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800]/60 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF88]/60 inline-block" />
          </div>

          {done.map((line, i) => (
            <div key={i} className="mb-1.5 last:mb-0">
              <span className="text-[#00FF88]">root@sameer</span>
              <span className="text-[#2E4560]">:~$ </span>
              <span className="text-[#C4DCF0]">{line.cmd}</span>
              <div className={line.ok ? "text-[#00FF88] font-bold pl-4" : "text-[#6B8EAD] pl-4"}>
                {line.ok ? "✓ " : ""}
                {line.out}
              </div>
            </div>
          ))}

          {done.length < AUTH_LOG.length && (
            <div>
              <span className="text-[#00FF88]">root@sameer</span>
              <span className="text-[#2E4560]">:~$ </span>
              {typing.field === "cmd" ? (
                <span className="text-[#C4DCF0]">{typing.text}</span>
              ) : (
                <span className="text-[#C4DCF0]">{AUTH_LOG[done.length].cmd}</span>
              )}
              {typing.field === "out" && (
                <div className="text-[#6B8EAD] pl-4">{typing.text}</div>
              )}
              <span className="inline-block w-[7px] h-[14px] bg-[#00D4FF] align-middle ml-0.5 animate-[cursor-blink_1s_step-end_infinite]" aria-hidden="true" />
            </div>
          )}
        </m.div>

        <m.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/05 font-mono-jet text-xs text-[#00D4FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" aria-hidden="true" />
            <TypeAnimation
              sequence={[
                "Cybersecurity Engineer",    2500,
                "GRC Analyst",              2200,
                "SOC Specialist",           2000,
                "Full-Stack Developer",     2000,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              aria-live="polite"
            />
          </span>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h1 className="font-orbitron leading-none tracking-widest">
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#C4DCF0]"
              style={{ textShadow: "0 0 40px rgba(196,220,240,0.15)" }}
            >
              SAMEER
            </span>
            <span
              className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-cyber-gradient"
              style={{ textShadow: "0 0 60px rgba(0,212,255,0.3)" }}
            >
              AHMED
            </span>
          </h1>
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="font-mono-jet text-xs sm:text-sm font-medium text-[#6B8EAD]"
        >
          <span className="text-[#00D4FF]">Security</span>
          {" · "}
          <span className="text-[#00FF88]">Compliance</span>
          {" · "}
          <span className="text-[#8B5CF6]">Development</span>
        </m.p>

        <m.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="font-inter-var text-sm sm:text-base text-[#6B8EAD] max-w-2xl leading-relaxed"
        >
          Cybersecurity Engineer and GRC Analyst at{" "}
          <a
            href="https://www.zoffec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#C4DCF0] hover:text-[#00D4FF] transition-colors underline-offset-2"
          >
            Zoffec Infotech Pvt. Ltd.
          </a>{" "}
          — hands-on in firewall security, SEBI&nbsp;CSCRF compliance, SOC operations,
          vulnerability assessment, and secure full-stack development.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <a href="https://github.com/shaikhsameer18" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono-jet text-xs font-medium border border-[#1E3050] text-[#6B8EAD] bg-[#0A1628] hover:border-[#00D4FF]/40 hover:text-[#C4DCF0] hover:bg-[#0D1E34] transition-all duration-200"
            aria-label="GitHub profile">
            <FaGithub className="w-3.5 h-3.5 group-hover:text-[#00D4FF] transition-colors" /> GitHub
          </a>
          <a href="https://linkedin.com/in/sameerahmed08" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono-jet text-xs font-medium border border-[#1E3050] text-[#6B8EAD] bg-[#0A1628] hover:border-[#0A66C2]/60 hover:text-[#C4DCF0] hover:bg-[#0D1E34] transition-all duration-200"
            aria-label="LinkedIn profile">
            <Linkedin className="w-3.5 h-3.5 group-hover:text-[#0A66C2] transition-colors" /> LinkedIn
          </a>
          <a href="mailto:sameer.shaikh0425@gmail.com"
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono-jet text-xs font-medium border border-[#00D4FF]/30 text-[#00D4FF] bg-[#00D4FF]/05 hover:border-[#00D4FF]/60 hover:bg-[#00D4FF]/10 transition-all duration-200"
            aria-label="Send email">
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
          <a href="/Sameer.pdf" download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono-jet text-xs font-semibold text-[#050C14] bg-[#00D4FF] hover:bg-[#22E0FF] shadow-[0_0_16px_rgba(0,212,255,0.3)] hover:shadow-[0_0_28px_rgba(0,212,255,0.55)] transition-all duration-200 hover:-translate-y-0.5"
            aria-label="Download resume">
            <Download className="w-3.5 h-3.5" /> Resume
          </a>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-lg mt-2"
          role="list"
          aria-label="Key statistics"
        >
          {[
            { value: "50+",  label: "Firewall Rules",  color: "#00D4FF", bg: "rgba(0,212,255,0.06)" },
            { value: "10+",  label: "Clients Secured", color: "#00FF88", bg: "rgba(0,255,136,0.06)" },
            { value: "100+", label: "SOC Agents",      color: "#8B5CF6", bg: "rgba(139,92,246,0.06)" },
            { value: "9.06", label: "CGPA",            color: "#FFB800", bg: "rgba(255,184,0,0.06)" },
          ].map(({ value, label, color, bg }) => (
            <div key={label} role="listitem"
              className="flex flex-col items-center p-3 sm:p-4 rounded-xl border border-[#162030] hover:border-[#1E3050] transition-all duration-200"
              style={{ background: bg }}
            >
              <span className="font-orbitron text-xl sm:text-2xl font-bold" style={{ color }}>{value}</span>
              <span className="font-mono-jet text-[9px] sm:text-[10px] text-[#2E4560] mt-1 text-center leading-tight">{label}</span>
            </div>
          ))}
        </m.div>
      </div>

      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#2E4560] hover:text-[#00D4FF] transition-colors duration-200"
      >
        <span className="font-mono-jet text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </m.button>
    </section>
  );
}

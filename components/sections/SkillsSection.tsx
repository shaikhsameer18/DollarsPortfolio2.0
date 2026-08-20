"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { useReveal } from "@/lib/hooks/useReveal";
import RuleEyebrow from "@/components/RuleEyebrow";
import { SKILLS, CATEGORIES, SKILL_SIZE_CLS, SKILL_ICON_CLS, type SkillCat } from "@/lib/data/skills";

export default function SkillsSection() {
  const { ref, inView } = useReveal();
  const [active, setActive] = useState<SkillCat>("all");

  const filtered = active === "all" ? SKILLS : SKILLS.filter((s) => s.cat === active);

  return (
    <section id="skills" aria-label="Skills" className="section-main relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-30" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)" }} />

      <div className="section-inner relative z-10">
        <m.div ref={ref} variants={stagger()} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <m.div variants={fadeUp} className="mb-3">
            <RuleEyebrow n={2} target="/skills" label="Capabilities" />
          </m.div>
          <m.h2 variants={fadeUp} className="section-title mb-2">
            My <span className="text-cyber-gradient">Arsenal</span>
          </m.h2>
          <div className="cyber-divider mb-4" />
          <m.p variants={fadeUp} className="section-subtitle mb-8">
            Dual-domain expertise — defensive &amp; offensive security paired with modern full-stack engineering.
            <span className="text-[#2E4560] font-mono-jet text-xs ml-2">({SKILLS.length} skills)</span>
          </m.p>

          {/* Category tabs */}
          <m.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10"
            role="tablist" aria-label="Filter skills by category">
            {CATEGORIES.map(({ key, label, icon: Icon, color }) => {
              const count = key === "all" ? SKILLS.length : SKILLS.filter(s => s.cat === key).length;
              const isActive = active === key;
              return (
                <button key={key} role="tab" aria-selected={isActive} onClick={() => setActive(key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono-jet text-xs font-medium border transition-all duration-200 ${
                    isActive
                      ? "text-[#C4DCF0]"
                      : "border-[#162030] text-[#2E4560] hover:border-[#1E3050] hover:text-[#6B8EAD] bg-transparent"
                  }`}
                  style={isActive ? { backgroundColor: `${color}12`, borderColor: `${color}40`, color } : {}}
                >
                  <Icon className="w-3 h-3" aria-hidden="true" style={isActive ? { color } : {}} />
                  {label}
                  <span className="text-[10px] px-1 rounded"
                    style={isActive
                      ? { background: `${color}20`, color }
                      : { background: "rgba(46,69,96,0.3)", color: "#2E4560" }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </m.div>

          {/* Skills grid */}
          <AnimatePresence mode="wait">
            <m.div key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap justify-center gap-x-3 gap-y-3 sm:gap-x-4" role="list" aria-label="Skills list">
              {filtered.map(({ name, icon: Icon, color, size }) => (
                <div key={name} role="listitem" className={`skill-badge ${SKILL_SIZE_CLS[size]}`}
                  style={{ borderColor: `${color}22` }}>
                  <Icon className={`${SKILL_ICON_CLS[size]} flex-shrink-0`} style={{ color }} aria-hidden="true" />
                  {name}
                </div>
              ))}
            </m.div>
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}

"use client";

import { useState, type ChangeEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, X, Terminal, ExternalLink, ShieldCheck, Lightbulb, ChevronRight, Zap } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { fadeUp, stagger } from "@/lib/animations";
import { useReveal } from "@/lib/hooks/useReveal";
import { PROJECTS, SECURITY_PROJECT_IDEAS, type Difficulty, type Impact } from "@/lib/data/projects";

export default function ProjectsSection() {
  const { ref, inView } = useReveal();
  const [query,   setQuery]   = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);

  const filtered = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const displayed = showAll || query ? filtered : filtered.filter((p) => p.featured);

  const DIFF_COLOR: Record<Difficulty, string> = {
    Easy:   "#00FF88",
    Medium: "#FFB800",
    Hard:   "#FF3B5C",
  };

  const IMPACT_COLOR: Record<Impact, string> = {
    Low:    "#6B8EAD",
    Medium: "#FFB800",
    High:   "#00FF88",
  };

  return (
    <section id="projects" aria-label="Projects" className="section-main relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-30" aria-hidden="true" />

      <div className="section-inner relative z-10">
        <m.div ref={ref} variants={stagger()} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <m.p variants={fadeUp} className="section-label mb-3">Portfolio</m.p>
          <m.h2 variants={fadeUp} className="section-title mb-2">
            Featured <span className="text-cyber-gradient">Projects</span>
          </m.h2>
          <div className="cyber-divider mb-4" />
          <m.p variants={fadeUp} className="section-subtitle mb-8">
            Production-grade applications built with security and performance as first-class requirements.
          </m.p>

          {/* Search */}
          <m.div variants={fadeUp} className="relative max-w-sm mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2E4560] pointer-events-none" aria-hidden="true" />
            <input type="search" placeholder="Search projects..."
              value={query} onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
              className="form-input pl-10 pr-10" aria-label="Search projects" />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2E4560] hover:text-[#C4DCF0] transition-colors">
                <X className="w-4 h-4" />
              </button>
            )}
          </m.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <m.div key={`${showAll}-${query}`}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {displayed.length === 0 ? (
                <div className="col-span-full text-center py-16">
                  <p className="font-mono-jet text-sm text-[#2E4560]">// No projects match &quot;{query}&quot;</p>
                </div>
              ) : (
                displayed.map((project, i) => (
                  <m.article key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="cyber-card group flex flex-col"
                    aria-label={`Project: ${project.title}`}>

                    {/* Image */}
                    <div className="relative h-44 overflow-hidden rounded-t-xl flex-shrink-0">
                      <Image src={project.image} alt={`${project.title} screenshot`} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/20 to-transparent" />
                      {project.security && (
                        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#00FF88]/15 border border-[#00FF88]/35 backdrop-blur-sm">
                          <ShieldCheck className="w-3 h-3 text-[#00FF88]" aria-hidden="true" />
                          <span className="font-mono-jet text-[10px] text-[#00FF88] font-semibold">Security</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col flex-1 p-5">
                      <h3 className="font-pliant text-lg font-bold text-[#C4DCF0] mb-2 group-hover:text-[#00D4FF] transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="font-inter-var text-xs sm:text-sm text-[#6B8EAD] leading-relaxed mb-3 flex-1">{project.desc}</p>

                      {/* Security angle badge */}
                      {project.securityAngle && (
                        <div className="mb-3 p-2.5 rounded-lg border border-[#00FF88]/15 bg-[#00FF88]/04">
                          <p className="font-mono-jet text-[10px] text-[#00FF88]/80 leading-relaxed">
                            <ShieldCheck className="inline w-3 h-3 mr-1" aria-hidden="true" />
                            {project.securityAngle}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => <span key={tag} className="neon-tag">{tag}</span>)}
                      </div>

                      <div className="flex gap-2 pt-3 border-t border-[#162030]">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-lg font-mono-jet text-xs font-medium border border-[#1E3050] text-[#6B8EAD] bg-transparent hover:border-[#00D4FF]/40 hover:text-[#C4DCF0] hover:bg-[#0D1E34] transition-all duration-200"
                          aria-label={`GitHub repo for ${project.title}`}>
                          <FaGithub className="w-3.5 h-3.5" /> Code
                        </a>
                        {project.demo ? (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-lg font-mono-jet text-xs font-semibold text-[#050C14] bg-[#00D4FF] hover:bg-[#22E0FF] shadow-[0_0_10px_rgba(0,212,255,0.2)] hover:shadow-[0_0_18px_rgba(0,212,255,0.4)] transition-all duration-200"
                            aria-label={`Live demo for ${project.title}`}>
                            <ExternalLink className="w-3.5 h-3.5" /> Live
                          </a>
                        ) : (
                          <span className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-lg font-mono-jet text-[10px] text-[#2E4560] border border-[#162030] cursor-not-allowed">
                            No Demo
                          </span>
                        )}
                      </div>
                    </div>
                  </m.article>
                ))
              )}
            </m.div>
          </AnimatePresence>

          {/* Show all toggle */}
          {!query && (
            <m.div variants={fadeUp} className="flex justify-center gap-3 flex-wrap mb-10">
              <button onClick={() => setShowAll((v) => !v)} className="btn-cyber-outline text-xs py-2.5 px-6" aria-expanded={showAll}>
                {showAll ? (
                  <><X className="w-4 h-4" /> Show Featured Only</>
                ) : (
                  <><Terminal className="w-4 h-4" /> View All {PROJECTS.length} Projects</>
                )}
              </button>
              <button onClick={() => setShowRoadmap((v) => !v)} className="btn-cyber text-xs py-2.5 px-6" aria-expanded={showRoadmap}>
                <Lightbulb className="w-4 h-4" />
                {showRoadmap ? "Hide" : "Security Project Roadmap"}
              </button>
            </m.div>
          )}

          {/* Security Project Roadmap */}
          <AnimatePresence>
            {showRoadmap && (
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="rounded-xl border border-[#00FF88]/20 bg-[#00FF88]/03 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-[#00FF88]/10 border border-[#00FF88]/30 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#00FF88]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-pliant text-lg font-bold text-[#C4DCF0]">Security Project Roadmap</h3>
                      <p className="font-mono-jet text-xs text-[#2E4560]">// Build these next to accelerate your security career</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {SECURITY_PROJECT_IDEAS.map((idea) => (
                      <div key={idea.title} className="cyber-card p-5">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h4 className="font-pliant text-base font-bold text-[#C4DCF0] leading-tight">{idea.title}</h4>
                          <div className="flex gap-1.5 flex-shrink-0">
                            <span className="px-1.5 py-0.5 rounded font-mono-jet text-[10px] font-semibold"
                              style={{ background: `${DIFF_COLOR[idea.difficulty]}15`, border: `1px solid ${DIFF_COLOR[idea.difficulty]}30`, color: DIFF_COLOR[idea.difficulty] }}>
                              {idea.difficulty}
                            </span>
                            <span className="px-1.5 py-0.5 rounded font-mono-jet text-[10px] font-semibold"
                              style={{ background: `${IMPACT_COLOR[idea.impact]}15`, border: `1px solid ${IMPACT_COLOR[idea.impact]}30`, color: IMPACT_COLOR[idea.impact] }}>
                              {idea.impact} impact
                            </span>
                          </div>
                        </div>
                        <p className="font-inter-var text-xs text-[#6B8EAD] leading-relaxed mb-3">{idea.desc}</p>
                        <div className="flex items-start gap-2 p-2.5 rounded-lg bg-[#8B5CF6]/06 border border-[#8B5CF6]/15 mb-3">
                          <ChevronRight className="w-3 h-3 text-[#8B5CF6] mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <p className="font-mono-jet text-[10px] text-[#8B5CF6]/90 leading-relaxed">{idea.why}</p>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {idea.tags.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded font-mono-jet text-[10px] text-[#2E4560] border border-[#162030] bg-[#0A1628]">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}

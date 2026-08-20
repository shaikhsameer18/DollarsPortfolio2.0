"use client";

import { useState, type ChangeEvent } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, X, Terminal, ExternalLink, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { fadeUp, stagger } from "@/lib/animations";
import { useReveal } from "@/lib/hooks/useReveal";
import RuleEyebrow from "@/components/RuleEyebrow";
import { PROJECTS, SECURITY_PROJECT_IDEAS } from "@/lib/data/projects";

const IMPACT_COLOR: Record<string, string> = {
  High:   "#00FF88",
  Medium: "#FFB800",
  Low:    "#6B8EAD",
};

export default function ProjectsSection() {
  const { ref, inView } = useReveal();
  const [query,   setQuery]   = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.desc.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const displayed = showAll || query ? filtered : filtered.filter((p) => p.featured);

  return (
    <section id="projects" aria-label="Projects" className="section-main relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg pointer-events-none opacity-30" aria-hidden="true" />

      <div className="section-inner relative z-10">
        <m.div ref={ref} variants={stagger()} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <m.div variants={fadeUp} className="mb-3">
            <RuleEyebrow n={4} target="/projects" label="Portfolio" />
          </m.div>
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

                    {/* Image — object-contain so the whole screenshot is visible, no crop */}
                    <div className="relative h-48 overflow-hidden rounded-t-xl flex-shrink-0 bg-[#030811]">
                      <Image src={project.image} alt={`${project.title} screenshot`} fill
                        className="object-contain object-center group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030811]/70 via-transparent to-transparent" />
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

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => <span key={tag} className="neon-tag">{tag}</span>)}
                      </div>

                      <div className="flex gap-2 pt-3 border-t border-[#162030]">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 rounded-lg font-mono-jet text-xs font-medium border border-[#1E3050] text-[#6B8EAD] bg-transparent hover:border-[#00D4FF]/40 hover:text-[#C4DCF0] hover:bg-[#0D1E34] transition-all duration-200"
                            aria-label={`GitHub repo for ${project.title}`}>
                            <FaGithub className="w-3.5 h-3.5" /> Code
                          </a>
                        )}
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

          {!query && (
            <m.div variants={fadeUp} className="flex justify-center mt-6">
              <button onClick={() => setShowAll((v) => !v)} className="btn-cyber-outline text-xs py-2.5 px-6" aria-expanded={showAll}>
                {showAll ? (
                  <><X className="w-4 h-4" /> Show Featured Only</>
                ) : (
                  <><Terminal className="w-4 h-4" /> View All {PROJECTS.length} Projects</>
                )}
              </button>
            </m.div>
          )}

          {/* Planned builds — the queue, not vaporware: next things in progress */}
          <m.div variants={fadeUp} className="mt-16 pt-10 border-t border-[#162030]">
            <div className="mb-2">
              <RuleEyebrow n={5} target="/projects/queue" label="Planned Builds" verdict="LOG" />
            </div>
            <p className="font-inter-var text-xs sm:text-sm text-[#6B8EAD] mb-6 max-w-xl">
              Scoped and queued — security-focused builds mapped directly to the GRC/SOC work I do day-to-day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SECURITY_PROJECT_IDEAS.map((idea) => (
                <div key={idea.title}
                  className="rounded-xl border border-dashed border-[#1E3050] bg-[#0A1628]/40 p-4 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-pliant text-sm font-bold text-[#C4DCF0]">{idea.title}</h3>
                    <span className="font-mono-jet text-[9px] px-1.5 py-0.5 rounded flex-shrink-0"
                      style={{ background: `${IMPACT_COLOR[idea.impact]}15`, color: IMPACT_COLOR[idea.impact] }}>
                      {idea.impact} impact
                    </span>
                  </div>
                  <p className="font-inter-var text-xs text-[#6B8EAD] leading-relaxed mb-3 flex-1">{idea.desc}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {idea.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="font-mono-jet text-[9px] px-1.5 py-0.5 rounded border border-[#1E3050] text-[#2E4560]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono-jet text-[10px] text-[#2E4560] pt-2 border-t border-[#162030]">
                    <span className="text-[#00D4FF]/60">// </span>{idea.why}
                  </p>
                </div>
              ))}
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

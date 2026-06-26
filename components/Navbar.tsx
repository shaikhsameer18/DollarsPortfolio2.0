"use client";

import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Shield } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home",       href: "#hero"       },
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Education",  href: "#education"  },
  { label: "Contact",    href: "#contact"    },
] as const;

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setIsOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050C14] border-b border-[#162030] shadow-[0_1px_20px_rgba(0,212,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          aria-label="Go to top — Sameer Ahmed"
          className="flex items-center gap-3 group focus-visible:outline-none rounded-lg"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#00D4FF]/30 transition-all duration-200 group-hover:border-[#00D4FF]/70 group-hover:shadow-[0_0_14px_rgba(0,212,255,0.3)]"
            style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.12) 0%, rgba(0,212,255,0.04) 100%)" }}
            aria-hidden="true"
          >
            <Terminal className="w-4 h-4 text-[#00D4FF]" />
          </div>
          <div className="leading-none">
            <span className="font-pliant text-sm font-bold text-[#C4DCF0] tracking-tight group-hover:text-[#00D4FF] transition-colors duration-200">
              sameer<span className="text-[#00D4FF]">.exe</span>
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav role="navigation" aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3 py-2 font-mono-jet text-xs rounded-lg transition-all duration-150 ${
                  isActive
                    ? "text-[#00D4FF] font-semibold"
                    : "text-[#6B8EAD] hover:text-[#C4DCF0] font-medium"
                }`}
              >
                {isActive && (
                  <m.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(0,212,255,0.08)",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}

          <a
            href="/Sameer.pdf"
            download
            className="ml-3 btn-cyber py-2 px-4 text-xs"
            aria-label="Download Sameer Ahmed's resume"
          >
            <Shield className="w-3 h-3" /> Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#6B8EAD] hover:text-[#00D4FF] hover:bg-[#00D4FF]/08 border border-[#162030] hover:border-[#00D4FF]/30 transition-all"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute top-full left-0 right-0 border-b border-[#162030] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            style={{ background: "rgba(5,12,20,0.98)", backdropFilter: "blur(20px)" }}
          >
            <nav className="flex flex-col p-3 gap-1">
              {NAV_ITEMS.map(({ label, href }) => {
                const isActive = active === href.slice(1);
                return (
                  <button
                    key={href}
                    onClick={() => scrollTo(href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-left px-4 py-3 rounded-xl font-mono-jet text-xs transition-all ${
                      isActive
                        ? "bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/25 font-semibold"
                        : "text-[#6B8EAD] hover:bg-[#0A1628] hover:text-[#C4DCF0] font-medium"
                    }`}
                  >
                    {isActive && <span className="text-[#00D4FF]/60 mr-1">›</span>}
                    {label}
                  </button>
                );
              })}
              <a
                href="/Sameer.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="mt-2 btn-cyber justify-center text-xs py-3"
                aria-label="Download resume"
              >
                <Shield className="w-3.5 h-3.5" /> Download Resume
              </a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}

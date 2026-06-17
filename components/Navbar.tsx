"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f8f5f0]/95 backdrop-blur-xl border-b border-[#dad7cd] shadow-[0_1px_8px_rgba(58,90,64,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* ── $ Logo — personal brand mark ── */}
        <button
          onClick={() => scrollTo("#hero")}
          aria-label="Go to top — Sameer Ahmed"
          className="flex items-center gap-3 group focus-visible:outline-none rounded-lg"
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_2px_10px_rgba(58,90,64,0.30)]"
            style={{ background: "linear-gradient(135deg, #3a5a40 0%, #344e41 100%)" }}
            aria-hidden="true"
          >
            <span
              className="text-[#dad7cd] font-bold leading-none select-none"
              style={{ fontFamily: "Georgia, serif", fontSize: "18px" }}
            >
              $
            </span>
          </div>
          <div className="leading-none">
            <span className="font-space text-sm font-semibold text-[#1a1f1b] tracking-tight">
              Sameer Ahmed
            </span>
          </div>
        </button>

        {/* ── Desktop navigation ── */}
        <nav role="navigation" aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3 py-2 font-space text-sm rounded-lg transition-colors duration-150 ${
                  isActive
                    ? "text-[#344e41] font-semibold"
                    : "text-[#3d4f41] hover:text-[#344e41] font-medium"
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "rgba(52,78,65,0.09)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            );
          })}

          <a
            href="/Sameer.pdf"
            download
            className="ml-3 btn-primary py-2 px-4 text-xs"
            aria-label="Download Sameer Ahmed's resume"
          >
            Resume
          </a>
        </nav>

        {/* ── Mobile toggle ── */}
        <button
          className="md:hidden p-2 rounded-lg text-[#3d4f41] hover:text-[#344e41] hover:bg-[#e8efe9] transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#f8f5f0] border-b border-[#dad7cd] shadow-lg"
          >
            <nav className="flex flex-col p-3 gap-1">
              {NAV_ITEMS.map(({ label, href }) => {
                const isActive = active === href.slice(1);
                return (
                  <button
                    key={href}
                    onClick={() => scrollTo(href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-left px-4 py-3 rounded-xl font-space text-sm transition-colors ${
                      isActive
                        ? "bg-[#e8efe9] text-[#344e41] font-semibold"
                        : "text-[#3d4f41] hover:bg-[#f2f5ee] font-medium"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
              <a
                href="/Sameer.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="mt-1 btn-primary justify-center text-sm py-2.5"
                aria-label="Download resume"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

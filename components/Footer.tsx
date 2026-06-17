import { Github, Linkedin, Mail } from "lucide-react";

const SOCIAL = [
  { label: "GitHub",   href: "https://github.com/shaikhsameer18",     icon: Github,   external: true  },
  { label: "LinkedIn", href: "https://linkedin.com/in/sameerahmed08", icon: Linkedin, external: true  },
  { label: "Email",    href: "mailto:sameer.shaikh0425@gmail.com",     icon: Mail,     external: false },
] as const;

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[#dad7cd] py-8 px-4"
      style={{ backgroundColor: "#f8f5f0" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Identity with $ logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
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
          <div>
            <p className="font-space text-sm font-semibold text-[#1a1f1b] leading-none">
              Sameer Ahmed Shaikh
            </p>
            <p className="font-space text-[11px] text-[#6e7f71] mt-0.5">
              Cybersecurity Analyst · GRC Analyst · Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="font-space text-xs text-[#a3b18a] text-center order-last sm:order-none">
          &copy; {new Date().getFullYear()} Sameer Ahmed Shaikh. All rights reserved.
        </p>

        {/* Social */}
        <nav aria-label="Social media links" className="flex items-center gap-2">
          {SOCIAL.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#dad7cd] text-[#6e7f71] hover:border-[#a3b18a] hover:text-[#3a5a40] hover:bg-[#e8efe9] transition-all duration-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

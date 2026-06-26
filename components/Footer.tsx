import { Github, Linkedin, Mail, Terminal } from "lucide-react";

const SOCIAL = [
  { label: "GitHub",   href: "https://github.com/shaikhsameer18",     icon: Github,   external: true  },
  { label: "LinkedIn", href: "https://linkedin.com/in/sameerahmed08", icon: Linkedin, external: true  },
  { label: "Email",    href: "mailto:sameer.shaikh0425@gmail.com",     icon: Mail,     external: false },
] as const;

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[#162030] py-8 px-4"
      style={{ backgroundColor: "#030811" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">

        {/* Identity */}
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#00D4FF]/30"
            style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(0,212,255,0.03) 100%)" }}
            aria-hidden="true"
          >
            <Terminal className="w-4 h-4 text-[#00D4FF]" />
          </div>
          <div>
            <p className="font-pliant text-sm font-bold text-[#C4DCF0] leading-none">
              Sameer Ahmed Shaikh
            </p>
            <p className="font-mono-jet text-[10px] text-[#2E4560] mt-1">
              Cybersecurity · GRC · Full-Stack
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p className="font-mono-jet text-xs text-[#2E4560] text-center order-last sm:order-none">
          <span className="text-[#00D4FF]/40">// </span>
          &copy; {new Date().getFullYear()} Sameer Ahmed Shaikh
        </p>

        {/* Social */}
        <nav aria-label="Social media links" className="flex items-center gap-2">
          {SOCIAL.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#162030] text-[#2E4560] hover:border-[#00D4FF]/40 hover:text-[#00D4FF] hover:bg-[#00D4FF]/05 hover:shadow-[0_0_8px_rgba(0,212,255,0.15)] transition-all duration-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

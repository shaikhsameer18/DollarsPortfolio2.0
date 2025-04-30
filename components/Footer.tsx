import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200/30 dark:border-zinc-800/30">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left: Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 text-transparent bg-clip-text">
          SAMMY
        </div>

        {/* Center: Copyright */}
        <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
          &copy; {new Date().getFullYear()} Sameer Ahmed. All rights reserved.
        </div>

        {/* Right: Socials */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/shaikhsameer18"
            className="text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/sameerahmed08"
            className="text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:sameer.shaikh0425@gmail.com"
            className="text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 transition-transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

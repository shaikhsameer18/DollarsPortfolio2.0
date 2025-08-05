import Link from "next/link";
import { Code2, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600 dark:text-zinc-300 gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-5 w-5 text-violet-600" />
          <span className="text-lg font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 text-transparent bg-clip-text">
            SAMMY
          </span>
        </Link>

        <span>
          {" "}
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium">Sameer Ahmed</span>. All rights
          reserved.
        </span>

        {/* Social Icons */}
        <div className="flex gap-6">
          <Link
            href="https://linkedin.com/in/sameerahmed08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/shaikhsameer18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:sameer.shaikh0425@gmail.com"
            className="hover:text-violet-500 transition"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

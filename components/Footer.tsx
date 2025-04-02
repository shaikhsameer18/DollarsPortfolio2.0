import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left - SAMMY */}
          <div className="flex-shrink-0">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                SAMMY
              </span>
          </div>
          
          {/* Center - Copyright */}
          <div className="hidden sm:block">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Sameer Ahmed. All rights reserved.
            </span>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center space-x-4">
              <Link
                href="https://github.com/shaikhsameer18"
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
              <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/sameerahmed08"
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
              <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:sameer.shaikh0425@gmail.com"
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
              <Mail className="h-5 w-5" />
              </Link>
          </div>
        </div>
        
        {/* Mobile Copyright */}
        <div className="sm:hidden text-center mt-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Sameer Ahmed. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

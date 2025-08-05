"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Moon, Sun } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-md border-b border-zinc-200/30 dark:border-zinc-800/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Code2 className="h-6 w-6 text-violet-500 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-extrabold bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 text-transparent bg-clip-text">
            SAMMY
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative text-sm font-medium px-3 py-2 transition-colors duration-300 ${
                pathname === item.path
                  ? "text-violet-600 dark:text-violet-300"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-violet-500"
              }`}
            >
              {item.name}
              {pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] w-full bg-violet-500 rounded"
                />
              )}
            </Link>
          ))}

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Dark Mode"
            className="ml-4 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:scale-110 transition"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-zinc-600" />
            )}
          </button>
        </nav>

        {/* Mobile Toggle Buttons */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-zinc-600" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-zinc-900 z-50 flex flex-col px-6 py-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 text-transparent bg-clip-text">
                SAMMY
              </span>
              <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
                <X className="h-7 w-7 text-zinc-700 dark:text-zinc-300" />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-lg font-medium ${
                    pathname === item.path
                      ? "text-violet-600 dark:text-violet-300"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-violet-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Moon, Sun } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-md border-b border-zinc-200/30 dark:border-zinc-800/30'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Code2 className="h-7 w-7 text-violet-500 group-hover:scale-105 transition-transform" />
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 text-transparent bg-clip-text">
            SAMMY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${pathname === item.path
                  ? 'bg-violet-100 dark:bg-violet-800/40 text-violet-600 dark:text-violet-300 shadow-sm'
                  : 'text-zinc-700 dark:text-zinc-300 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-violet-100/40 dark:hover:bg-violet-800/30'
                }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-2 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:scale-110 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5 text-zinc-300" /> : <Moon className="h-5 w-5 text-zinc-600" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-5 w-5 text-zinc-300" /> : <Moon className="h-5 w-5 text-zinc-600" />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200/30 dark:border-zinc-800/30 shadow-md"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-base font-medium py-2 rounded-md transition-all ${pathname === item.path
                      ? 'text-violet-600 dark:text-violet-300 bg-violet-100 dark:bg-violet-800/30'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-violet-100/40 dark:hover:bg-violet-800/30 hover:text-violet-500 dark:hover:text-violet-400'
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
    </nav>
  )
}

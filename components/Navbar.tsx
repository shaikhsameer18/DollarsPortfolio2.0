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
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Remove transition during theme change
    document.documentElement.style.setProperty('--tw-bg-opacity', '1')
    document.documentElement.classList.add('disable-transitions')
    setTimeout(() => {
      document.documentElement.classList.remove('disable-transitions')
    }, 100)
  }, [isDark])

  return (
    <nav className={`fixed w-full z-50 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-800/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <Code2 className="h-8 w-8 text-indigo-500 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                SAMMY
              </span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? 'text-indigo-500 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/30 shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-2"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sm:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block px-4 py-3 text-base font-medium transition-colors duration-200 ${
                    pathname === item.path
                      ? 'text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30'
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

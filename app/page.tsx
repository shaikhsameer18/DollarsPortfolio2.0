"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Terminal, Github, Coffee } from 'lucide-react';
import { TypeAnimation } from "react-type-animation";
import CodeSnippet from "./components/CodeSnippet";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-slate-900 text-gray-800 dark:text-gray-200 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 dark:bg-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Section - 7 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 dark:border-violet-400/10 backdrop-blur-sm"
              >
                <Code2 className="w-4 h-4 mr-2 text-violet-600 dark:text-violet-400" />
                <TypeAnimation
                  sequence={[
                    "Software Developer", 2000,
                    "Full Stack Developer", 2000,
                    "Web Developer", 2000
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-sm font-medium text-violet-700 dark:text-violet-300"
                  repeat={Infinity}
                />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight"
              >
                Hi, I&apos;m{" "}
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 dark:from-violet-400 dark:via-fuchsia-300 dark:to-pink-400">
                    Sameer Ahmed
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 dark:from-violet-400 dark:via-fuchsia-300 dark:to-pink-400 rounded-full opacity-70"></span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
              >
                I build modern, responsive web applications with a focus on clean code,
                performance, and user experience.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full overflow-hidden bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium shadow-lg transition-all duration-300 hover:shadow-violet-500/20 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full overflow-hidden bg-transparent border-2 border-violet-500 dark:border-violet-400 text-violet-600 dark:text-violet-300 font-medium transition-all duration-300 hover:bg-violet-50 dark:hover:bg-violet-900/20"
              >
                Get in Touch
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 dark:bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-1"
            >
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Terminal className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="font-medium">Clean Code</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Github className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="font-medium">Open Source</span>
              </div>
          
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Coffee className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <span className="font-medium">Problem Solver</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - 5 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <CodeSnippet />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

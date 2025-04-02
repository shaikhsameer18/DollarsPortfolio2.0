"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Terminal, Github } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import CodeSnippet from "./components/CodeSnippet";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 dark:border-indigo-400/20"
              >
                <Code2 className="w-4 h-4 mr-2" />
                <TypeAnimation
                  sequence={[
                    'Software Developer',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'Web Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
              
              <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
                Hi, I&apos;m{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Sameer Ahmed
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Terminal className="w-5 h-5 text-indigo-500" />
                <span className="font-medium">Clean Code</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Github className="w-5 h-5 text-indigo-500" />
                <span className="font-medium">Open Source</span>
              </div>
            </div>
          </motion.div>

          <CodeSnippet />
        </div>
      </div>
    </div>
  );
}

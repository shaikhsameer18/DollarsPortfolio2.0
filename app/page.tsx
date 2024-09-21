"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-space-grotesk bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Sameer Ahmed
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-600 mb-8 font-inter">
            Full Stack Developer & AI/ML Enthusiast
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-x-4"
          >
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              Learn More
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition duration-150 ease-in-out"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

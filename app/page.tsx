"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDark(); // set initial value
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-between transition-colors duration-500 bg-gradient-to-br dark:from-violet-900 dark:via-black dark:to-gray-900 from-purple-100 via-white to-indigo-100 text-gray-900 dark:text-white">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill={isDark ? "#7c3aed" : "#c084fc"}
          fillOpacity={isDark ? "0.1" : "0.2"}
          d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,229.3C672,245,768,203,864,186.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6 max-w-3xl"
        >
          {/* Role Animation */}
          <div className="text-sm font-medium px-4 py-1.5 rounded-full inline-flex items-center gap-2 text-purple-800 bg-purple-200 dark:text-violet-300 dark:bg-violet-800/30">
            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "Full Stack Engineer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Hey, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-500 to-pink-500 text-transparent bg-clip-text">
              Sameer Ahmed
            </span>
            <br />I build modern web apps.
          </h1>

          {/* About Text */}
          <p className="text-base text-gray-600 dark:text-zinc-300">
            Passionate about creating seamless user experiences with efficient
            and maintainable code. I specialize in building fast, scalable, and
            accessible web applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 transition duration-300 shadow-lg"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500 dark:border-violet-400 text-purple-700 dark:text-violet-300 hover:bg-purple-100 dark:hover:bg-violet-800 transition duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

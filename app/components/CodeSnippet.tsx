"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CodeSnippet() {
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  const codeLines = [
    'const developer = {',
    '  name: "Sameer Ahmed",',
    '  role: "Full Stack Developer",',
    '  skills: [',
    '    "React",',
    '    "Node.js",',
    '    "TypeScript",',
    '    "Next.js",',
    '    "TailwindCSS"',
    '  ],',
    '  passion: "Building amazing web apps",',
    '  available: true',
    '};',
  ];

  useEffect(() => {
    if (!isTyping) return;

    const totalLines = codeLines.length;

    if (currentLine < totalLines) {
      const currentLineText = codeLines[currentLine];

      if (currentChar < currentLineText.length) {
        const timer = setTimeout(() => {
          setCurrentChar((prev) => prev + 1);
        }, 25 + Math.random() * 50); // Random typing speed for realism

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setCurrentChar(0);
        }, 100);

        return () => clearTimeout(timer);
      }
    } else {
      setIsTyping(false);
    }
  }, [isTyping, currentLine, currentChar, codeLines]);

  // Function to render the code with syntax highlighting
  const renderCode = () => {
    return codeLines.map((line, lineIndex) => {
      if (lineIndex > currentLine) return null;

      if (lineIndex === currentLine) {
        line = line.substring(0, currentChar);
      }

      return (
        <div key={lineIndex} className="line">
          {highlightSyntax(line)}
        </div>
      );
    });
  };

  // Function to apply syntax highlighting
  const highlightSyntax = (line: string) => {
    if (line.startsWith("const ")) {
      return (
        <>
          <span className="text-pink-600 dark:text-pink-400">const</span>
          <span className="text-gray-800 dark:text-gray-200">
            {line.replace("const ", " ")}
          </span>
        </>
      );
    }

    if (line.includes(":")) {
      const [key, value] = line.split(":").map((part) => part.trim());
      return (
        <>
          <span className="text-emerald-600 dark:text-emerald-400">{key}</span>
          <span className="text-gray-600 dark:text-gray-400">: </span>
          {value && (
            <span
              className={
                value.includes('"')
                  ? "text-amber-600 dark:text-amber-400"
                  : value.includes("true") || value.includes("false")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
              }
            >
              {value}
            </span>
          )}
        </>
      );
    }

    if (line.includes("{") || line.includes("}") || line.includes("[") || line.includes("]")) {
      return <span className="text-gray-600 dark:text-gray-400">{line}</span>;
    }

    if (line.includes('"')) {
      return <span className="text-amber-600 dark:text-amber-400">{line}</span>;
    }

    return <span className="text-gray-800 dark:text-gray-200">{line}</span>;
  };

  // Cursor animation variants
  const cursorVariants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop" as const,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur-xl opacity-20 dark:opacity-30 animate-pulse"></div>

      {/* Main container */}
      <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Code editor header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs font-mono text-gray-500 dark:text-gray-400 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700">
            developer.js
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {isTyping ? "typing..." : "ready"}
          </div>
        </div>

        {/* Code content */}
        <div className="font-mono text-sm p-6 bg-gray-50 dark:bg-gray-900 overflow-x-auto">
          <pre className="relative">
            <code className="language-javascript">
              {renderCode()}
              {isTyping && (
                <motion.span
                  variants={cursorVariants}
                  animate="blink"
                  className="absolute h-5 w-0.5 bg-gray-800 dark:bg-gray-200"
                  style={{
                    left: `${currentChar * 0.6}rem`,
                    top: `${currentLine * 1.5}rem`,
                  }}
                />
              )}
            </code>
          </pre>
        </div>

        {/* Code editor footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
          <div>JavaScript</div>
          <div>UTF-8</div>
          <div>{isTyping ? `${Math.round((currentLine / codeLines.length) * 100)}%` : "100%"}</div>
        </div>
      </div>
    </motion.div>
  );
}
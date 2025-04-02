"use client";

import { motion } from "framer-motion";

export default function CodeSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
      <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/20 dark:border-gray-800/20 rounded-2xl shadow-xl p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">developer.js</div>
          </div>
          <div className="font-mono text-sm">
            <pre className="!bg-gray-50 dark:!bg-gray-800/90 !p-4 rounded-lg overflow-x-auto">
              <code>
                <span className="text-blue-600 dark:text-blue-400">const</span>{" "}
                <span className="text-violet-600 dark:text-violet-400">developer</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">=</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
                {"\n  "}
                <span className="text-emerald-600 dark:text-emerald-400">name</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-amber-600 dark:text-amber-400">&quot;Sameer Ahmed&quot;</span>
                <span className="text-gray-600 dark:text-gray-400">,</span>
                {"\n  "}
                <span className="text-emerald-600 dark:text-emerald-400">role</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-amber-600 dark:text-amber-400">&quot;Full Stack Developer&quot;</span>
                <span className="text-gray-600 dark:text-gray-400">,</span>
                {"\n  "}
                <span className="text-emerald-600 dark:text-emerald-400">skills</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">[</span>
                {"\n    "}
                <span className="text-amber-600 dark:text-amber-400">&quot;React&quot;</span>
                <span className="text-gray-600 dark:text-gray-400">,</span>
                {"\n    "}
                <span className="text-amber-600 dark:text-amber-400">&quot;Node.js&quot;</span>
                <span className="text-gray-600 dark:text-gray-400">,</span>
                {"\n    "}
                <span className="text-amber-600 dark:text-amber-400">&quot;TypeScript&quot;</span>
                {"\n  "}
                <span className="text-gray-600 dark:text-gray-400">]</span>
                <span className="text-gray-600 dark:text-gray-400">,</span>
                {"\n  "}
                <span className="text-emerald-600 dark:text-emerald-400">passion</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-amber-600 dark:text-amber-400">&quot;Building amazing web apps&quot;</span>
                {"\n"}
                <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
                <span className="text-gray-600 dark:text-gray-400">;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 
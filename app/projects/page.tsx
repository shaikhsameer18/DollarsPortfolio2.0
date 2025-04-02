"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Code2, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { sharedStyles } from "@/app/styles/shared";
import geeky from "@/public/assets/project/geeky2.png";
import alvira from "@/public/assets/project/alvira.png";
import ddosshield from "@/public/assets/project/ddosshield.png";
import scienceai from "@/public/assets/project/scienceai.png";
import tribute from "@/public/assets/project/tribute.png";
import technical from "@/public/assets/project/technical.png";

const projects = [
  {
    title: "Geeky Techh",
    description: "A freelance service-providing company.",
    image: geeky,
    github: "https://github.com/shaikhsameer18/GeekyTechh-2.0",
    demo: "https://www.geekytechh.in/",
    tags: ["Next", "Tailwind CSS", "Framer-Motion", "FormSpree"],
    status: "Completed",
    featured: true,
  },
  {
    title: "Alvira Bags",
    description:
      "An e-commerce platform for a luxury bag brand, featuring advanced filtering.",
    image: alvira,
    github: "https://github.com/shaikhsameer18/alvirabag",
    demo: "https://alvirabag.vercel.app/",
    tags: ["Next", "Tailwind CSS", "Sanity.io"],
    status: "Completed",
    featured: true,
  },
  {
    title: "Science AI",
    description: "A website for AI-powered exhibit defect analysis.",
    image: scienceai,
    github: "https://github.com/shaikhsameer18/ScienceAI",
    demo: "https://science-ai.vercel.app/",
    tags: ["Next", "Tailwind CSS", "Framer-Motion", "Shadcn"],
    status: "In Progress",
    featured: true,
  },
  {
    title: "DDoS Shield",
    description: "A website offering DDoS protection for cloud systems.",
    image: ddosshield,
    github: "https://github.com/shaikhsameer18/DDoS-Shield",
    demo: "https://ddos-shield.vercel.app/",
    tags: ["Next", "Tailwind CSS", "Framer-Motion", "Shadcn"],
    status: "In Progress",
    featured: true,
  },
  {
    title: "Tribute Page",
    description: "A tribute page dedicated to the GOAT of football.",
    image: tribute,
    github: "https://github.com/shaikhsameer18/Web",
    demo: "https://shaikhsameer18.github.io/Web/tribute.html",
    tags: ["HTML", "CSS"],
    status: "Completed",
    featured: false,
  },
  {
    title: "Technical Documentation",
    description:
      "A technical documentation page for the Python programming language.",
    image: technical,
    github: "https://github.com/shaikhsameer18/Web",
    demo: "https://shaikhsameer18.github.io/Web/technical.html",
    tags: ["HTML", "CSS"],
    status: "Completed",
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className={sharedStyles.pageContainer}>
      <div className={sharedStyles.backgroundEffects.pattern} />
      <div className={sharedStyles.maxWidthContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className={sharedStyles.iconContainer}>
            <Code2 className="w-6 h-6" />
          </div>
          <h1 className={sharedStyles.sectionTitle}>Featured Projects</h1>
          <p className={sharedStyles.sectionSubtitle}>
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {/* Featured Projects */}
          <div className="space-y-8">
            <div className={sharedStyles.grid.twoCol}>
              {projects
                .filter((project) => project.featured)
                .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
              >
                    <div className={`${sharedStyles.card} p-0 overflow-hidden`}>
                      <div className="relative h-64 overflow-hidden">
                  <Image
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    src={project.image}
                    alt={project.title}
                          fill
                          priority
                  />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <h3 className="text-2xl font-bold text-white font-space-grotesk">
                            {project.title}
                          </h3>
                  <div
                            className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md ${
                      project.status === "In Progress"
                                ? "bg-yellow-100/90 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
                                : "bg-green-100/90 text-green-800 dark:bg-green-900/50 dark:text-green-300"
                            }`}
                          >
                            {project.status === "In Progress" ? (
                              <Clock className="w-4 h-4" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4" />
                            )}
                            <span>{project.status}</span>
                          </div>
                  </div>
                </div>
                      <div className="p-6 space-y-4">
                        <p className={sharedStyles.text}>
                    {project.description}
                  </p>
                        <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                              className={sharedStyles.tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700/50">
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300"
                            >
                              <Github className="h-5 w-5" />
                            </Link>
                            <Link
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-300"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </Link>
                          </div>
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={sharedStyles.button}
                          >
                            View Project
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div className="space-y-8">
            <h2 className={sharedStyles.heading}>Other Projects</h2>
            <div className={sharedStyles.grid.threeCol}>
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`${sharedStyles.card} p-0 overflow-hidden`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          src={project.image}
                          alt={project.title}
                          fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <div className="p-4 space-y-3">
                        <p className={sharedStyles.text}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className={sharedStyles.tag}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700/50">
                          <div className="flex space-x-3">
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                            >
                              <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </Link>
                          </div>
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                          >
                            View Project
                    </Link>
                        </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

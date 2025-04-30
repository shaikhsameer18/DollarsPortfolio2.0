"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Code2, ArrowRight, Clock, CheckCircle2, Filter, X, Search } from 'lucide-react';
import { sharedStyles } from "@/app/styles/shared";

// Project images
import lotteryvaultImg from "@/public/assets/project/lotteryvault.png";
import impostergameImg from "@/public/assets/project/impostergame.png";
import codecollabImg from "@/public/assets/project/codecollab.png";
import geeky3Img from "@/public/assets/project/geeky2.png";
import datechImg from "@/public/assets/project/datech.png";
import ddosshieldImg from "@/public/assets/project/ddosshield.png";
import scienceaiImg from "@/public/assets/project/scienceai.png";
import alviraImg from "@/public/assets/project/alvira.png";
import grocery from "@/public/assets/project/grocery.png";

// Define all possible tech tags for filtering
// const allTechTags = [
//   "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
//   "MongoDB", "Tailwind CSS", "Framer Motion", "Solidity", "MetaMask",
//   "MERN", "Tldraw", "GitHub REST API", "OpenAI", "Formspree", "Sanity.io"
// ];

const projects = [
  {
    title: "CodeCollab",
    description: "Real-time collaborative coding platform with whiteboard, chat, GitHub & OpenAI integration. Enables developers to code together, share ideas, and get AI assistance.",
    image: codecollabImg,
    github: "https://github.com/shaikhsameer18/CodeCollabFinal",
    demo: "https://codecollabfinal.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tldraw", "Tailwind CSS", "GitHub REST API", "OpenAI", "Socket.io"],
    status: "Completed",
    featured: true,
  },
  {
    title: "Imposter Game",
    description: "Multiplayer web game: regular players identify imposters while imposters evade detection. Features real-time gameplay, chat functionality, and role assignments.",
    image: impostergameImg,
    github: "https://github.com/shaikhsameer18/ImposterGame",
    demo: "https://imposterhunt.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "Socket.io"],
    status: "Completed",
    featured: true,
  },
  {
    title: "GeekyTechh",
    description: "Freelance service provider website offering web development & tech solutions. Showcases services, portfolio, and client testimonials with a modern, responsive design.",
    image: geeky3Img,
    github: "https://github.com/shaikhsameer18/GeekyTechh3.0",
    demo: "https://www.geekytechh.in/",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS", "Formspree"],
    status: "Completed",
    featured: true,
  },
  {
    title: "Alvira Bag",
    description: "E-commerce platform for luxury bags with CMS-driven content. Features product catalog, shopping cart, user accounts, and secure checkout process.",
    image: alviraImg,
    github: "https://github.com/shaikhsameer18/alvirabag",
    demo: "https://alvirabag.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Sanity.io", "TypeScript"],
    status: "Completed",
    featured: true,
  },
  {
    title: "Grocery Management",
    description: "A dummy grocery management tool simulating inventory & order workflows. Includes inventory tracking, order processing, and reporting features.",
    image: grocery,
    github: "https://github.com/shaikhsameer18/DummyGroceryManagement",
    demo: "",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    status: "Completed",
    featured: true,
  },
  {
    title: "LotteryVault",
    description: "A blockchain-based lottery dApp where users buy tickets and an admin selects a random winner. Implements smart contracts for secure, transparent lottery operations.",
    image: lotteryvaultImg,
    github: "https://github.com/shaikhsameer18/LotteryVault",
    demo: "",
    tags: ["Solidity", "MetaMask", "React", "Node.js", "MongoDB", "Express", "JavaScript"],
    status: "Completed",
    featured: true,
  },



  {
    title: "DA Tech",
    description: "Mumbai-based tech solutions site for custom computer systems & laptops. Features product catalog, custom build options, and service request functionality.",
    image: datechImg,
    github: "https://github.com/shaikhsameer18/DA-Tech",
    demo: "https://datechnologies.vercel.app/",
    tags: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind CSS"],
    status: "Completed",
    featured: true,
  },
  {
    title: "DDoS Shield",
    description: "Website offering DDoS protection services for cloud systems. Explains attack vectors, protection strategies, and service tiers with interactive visualizations.",
    image: ddosshieldImg,
    github: "https://github.com/shaikhsameer18/DDoS-Shield",
    demo: "https://ddos-shield.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    status: "In Progress",
    featured: true,
  },
  {
    title: "ScienceAI",
    description: "AI-powered exhibit defect analyzer using intelligent visual assessments. Uses computer vision to detect and classify defects in museum exhibits.",
    image: scienceaiImg,
    github: "https://github.com/shaikhsameer18/ScienceAI",
    demo: "https://science-ai.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "TensorFlow.js"],
    status: "In Progress",
    featured: true,
  },


];

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Apply filters and search
  useEffect(() => {
    let result = projects;

    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        project =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }

    // Apply tag filters
    if (activeFilters.length > 0) {
      result = result.filter(project =>
        activeFilters.some(filter => project.tags.includes(filter))
      );
    }

    setFilteredProjects(result);
  }, [searchTerm, activeFilters]);

  const toggleFilter = (tag: string) => {
    setActiveFilters(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setSearchTerm("");
  };

  // Get all unique tags from projects for filter menu
  const uniqueTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 min-h-screen py-16">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Search and filter controls */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center mt-10 justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
              {activeFilters.length > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  {activeFilters.length}
                </span>
              )}
            </button>

            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Filter menu */}
        <AnimatePresence>
          {isFilterMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Filter by technology</h3>
                <button
                  onClick={() => setIsFilterMenuOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {uniqueTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleFilter(tag)}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${activeFilters.includes(tag)
                      ? "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200 dark:border-purple-800"
                      : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      } border`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active filters display */}
        {activeFilters.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {activeFilters.map(filter => (
              <span
                key={filter}
                className="inline-flex items-center gap-1 px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border border-purple-200 dark:border-purple-800"
              >
                {filter}
                <button
                  onClick={() => toggleFilter(filter)}
                  className="ml-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Projects grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects match your filters. Try adjusting your search criteria.</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
              >
                {/* Project image with overlay */}
                <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`flex items-center px-3 py-1 text-xs font-medium rounded-full ${project.status === "In Progress"
                          ? "bg-amber-100 text-amber-900 dark:bg-amber-900/60 dark:text-amber-200"
                          : "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-200"
                          }`}
                      >
                        {project.status === "In Progress" ? (
                          <Clock className="w-3 h-3 mr-1.5" />
                        ) : (
                          <CheckCircle2 className="w-3 h-3 mr-1.5" />
                        )}
                        {project.status}
                      </span>
                    </div>

                    {/* Project title and tags */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/20">
                            +{project.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project description and links */}
                <div className="p-5 flex-grow flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <div className="flex space-x-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github className="h-4 w-4" />
                      </Link>

                      {project.demo && project.demo !== "#" && (
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      )}
                    </div>

                    {project.demo && project.demo !== "#" ? (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="text-sm flex items-center font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                      >
                        View Project
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        Demo unavailable
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 dark:group-hover:border-purple-400 rounded-xl pointer-events-none transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        )}

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            href="https://github.com/shaikhsameer18"
            target="_blank"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            View All Projects on GitHub
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

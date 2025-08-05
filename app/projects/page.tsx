"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Code2, ArrowRight, X, Search } from "lucide-react";

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
import searchBagImg from "@/public/assets/project/search.png";

const projects = [
  {
    title: "CodeCollab",
    description:
      "Real-time collaborative coding platform with whiteboard, chat, GitHub & OpenAI integration. Enables developers to code together, share ideas, and get AI assistance.",
    image: codecollabImg,
    github: "https://github.com/shaikhsameer18/CodeCollabFinal",
    demo: "https://codecollabfinal.vercel.app/",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tldraw",
      "Tailwind CSS",
      "GitHub REST API",
      "OpenAI",
      "Socket.io",
    ],
    status: "Completed",
    featured: true,
  },

  {
    title: "GeekyTechh",
    description:
      "Freelance service provider website offering web development & tech solutions. Showcases services, portfolio, and client testimonials with a modern, responsive design.",
    image: geeky3Img,
    github: "https://github.com/shaikhsameer18/GeekyTechh3.0",
    demo: "https://www.geekytechh.in/",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "Formspree",
    ],
    status: "Completed",
    featured: true,
  },

  {
    title: "Search Bag",
    description:
      "Manufacturer and Wholesaler of bags, offering a wide range of products including backpacks, handbags, and travel bags.",
    image: searchBagImg,
    github: "https://github.com/shaikhsameer18/SearchBag",
    demo: "https://www.searchbag.in/",
    tags: [
      "Solidity",
      "MetaMask",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
    ],
    status: "Completed",
    featured: true,
  },

  {
    title: "Grocery Management",
    description:
      "A grocery and fruits selling website with a user-friendly interface for browsing and purchasing products. It features a shopping cart, product categories, and secure payment options.",
    image: grocery,
    github: "https://github.com/shaikhsameer18/grocery-management",
    demo: "https://grocery-management-psi.vercel.app/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React Query"],
    status: "Completed",
    featured: true,
  },
  {
    title: "Alvira Bag",
    description:
      "E-commerce platform for luxury bags with CMS-driven content. Features product catalog, shopping cart, user accounts, and secure checkout process.",
    image: alviraImg,
    github: "https://github.com/shaikhsameer18/alvirabag",
    demo: "https://alvirabag.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Sanity.io", "TypeScript"],
    status: "Completed",
    featured: true,
  },
  {
    title: "Imposter Game",
    description:
      "Multiplayer web game: regular players identify imposters while imposters evade detection. Features real-time gameplay, chat functionality, and role assignments.",
    image: impostergameImg,
    github: "https://github.com/shaikhsameer18/ImposterGame",
    demo: "https://imposterhunt.vercel.app/",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
    ],
    status: "Completed",
    featured: true,
  },
  {
    title: "LotteryVault",
    description:
      "A blockchain-based lottery dApp where users buy tickets and an admin selects a random winner. Implements smart contracts for secure, transparent lottery operations.",
    image: lotteryvaultImg,
    github: "https://github.com/shaikhsameer18/LotteryVault",
    demo: "",
    tags: [
      "Solidity",
      "MetaMask",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
    ],
    status: "Completed",
    featured: true,
  },
  {
    title: "DA Tech",
    description:
      "Mumbai-based tech solutions site for custom computer systems & laptops. Features product catalog, custom build options, and service request functionality.",
    image: datechImg,
    github: "https://github.com/shaikhsameer18/DA-Tech",
    demo: "https://datechnologies.vercel.app/",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
    ],
    status: "Completed",
    featured: true,
  },
  {
    title: "DDoS Shield",
    description:
      "Website offering DDoS protection services for cloud systems. Explains attack vectors, protection strategies, and service tiers with interactive visualizations.",
    image: ddosshieldImg,
    github: "https://github.com/shaikhsameer18/DDoS-Shield",
    demo: "https://ddos-shield.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    status: "In Progress",
    featured: true,
  },
  {
    title: "ScienceAI",
    description:
      "AI-powered exhibit defect analyzer using intelligent visual assessments. Uses computer vision to detect and classify defects in museum exhibits.",
    image: scienceaiImg,
    github: "https://github.com/shaikhsameer18/ScienceAI",
    demo: "https://science-ai.vercel.app/",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "TensorFlow.js",
    ],
    status: "In Progress",
    featured: true,
  },
];

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const term = searchTerm.toLowerCase();
    setFilteredProjects(
      projects.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.tags.some((tag) => tag.toLowerCase().includes(term))
      )
    );
  }, [searchTerm]);

  return (
    <div className="relative min-h-screen py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg">
            <Code2 className="w-6 h-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent drop-shadow-sm bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400">
            Featured Projects
          </h1>
        </motion.div>

        {/* Search Bar */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Projects */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative w-full pt-[56.25%]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto border-t pt-4 border-gray-100 dark:border-gray-700">
                    <div className="flex space-x-3">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </div>

                    {project.demo ? (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="text-sm flex items-center font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
                      >
                        View Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    ) : (
                      <span className="text-sm text-gray-400 dark:text-gray-500">
                        Demo unavailable
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
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
  },
  {
    title: "Science AI",
    description: "A website for AI-powered exhibit defect analysis.",
    image: scienceai,
    github: "https://github.com/shaikhsameer18/ScienceAI",
    demo: "https://science-ai.vercel.app/",
    tags: ["Next", "Tailwind CSS", "Framer-Motion", "Shadcn"],
    status: "In Progress",
  },
  {
    title: "DDoS Shield",
    description: "A website offering DDoS protection for cloud systems.",
    image: ddosshield,
    github: "https://github.com/shaikhsameer18/DDoS-Shield",
    demo: "https://ddos-shield.vercel.app/",
    tags: ["Next", "Tailwind CSS", "Framer-Motion", "Shadcn"],
    status: "In Progress",
  },
  {
    title: "Tribute Page",
    description: "A tribute page dedicated to the GOAT of football.",
    image: tribute,
    github: "https://github.com/shaikhsameer18/Web",
    demo: "https://shaikhsameer18.github.io/Web/tribute.html",
    tags: ["HTML", "CSS"],
    status: "Completed",
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
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl mt-6 font-bold text-blue-600 mb-2 font-space-grotesk">
            Projects
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-inter">
            My Recent Work
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    className="w-full h-full object-contain"
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                  />
                  <div
                    className={`absolute top-0 right-0 m-2 px-2 py-1 rounded-full text-xs font-semibold ${
                      project.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2 font-space-grotesk">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-inter">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <Github className="h-6 w-6" />
                    </Link>
                    <Link
                      href={project.demo}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

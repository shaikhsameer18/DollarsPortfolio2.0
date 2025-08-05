"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Download,
  GraduationCap,
  Briefcase,
  Mail,
  ExternalLink,
  Code,
} from "lucide-react";

import profilePic from "@/public/assets/samcrop.jpg";
import geeky from "@/public/assets/geeky.png";
import xaviers from "@/public/assets/xaviers.jpeg";
import mhsscoe from "@/public/assets/mhsscoe.png";

export default function About() {
  const [activeTab, setActiveTab] = useState("experience");

  const education = [
    {
      degree: "Bachelor's Degree in Information Technology",
      school: "M.H. Saboo Siddik College of Engineering",
      period: "2020 - 2024",
      location: "Mumbai, India",
      description:
        "Pursuing advanced studies in Information Technology, focusing on modern software development and emerging technologies.",
      image: mhsscoe,
      skills: [
        "Web Development",
        "Data Structures",
        "Algorithms",
        "Database Management",
      ],
    },
    {
      degree: "Higher Secondary Education",
      school: "St. Xavier's College",
      period: "2018 - 2020",
      location: "Mumbai, India",
      description:
        "Completed higher secondary education with focus on science and mathematics.",
      image: xaviers,
      skills: ["Mathematics", "Physics", "Computer Science"],
    },
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Geeky Techh",
      period: "2021 - Present",
      location: "Remote",
      description:
        "Working as a freelance developer, delivering high-quality web applications and solutions for clients worldwide.",
      image: geeky,
      projects: [
        {
          name: "Geeky Techh",
          description:
            "Freelance service-providing company site built with Next.js and Tailwind.",
          link: "/projects#geeky-techh",
          technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        },
        {
          name: "Alvira Bags",
          description:
            "An e-commerce platform for a luxury bag brand with advanced filtering.",
          link: "/projects#alvira-bags",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
      ],
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Profile Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-violet-600 shadow-xl mb-6">
            <Image
              src={profilePic}
              alt="Sameer Ahmed"
              fill
              className="object-cover scale-110  translate-x-2"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Sameer Ahmed{" "}
            <Code className="inline-block ml-2 w-7 h-7 text-violet-600" />
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-sm sm:text-base">
            A passionate Full Stack Developer with a deep love for building
            modern, scalable, and elegant digital experiences. With a strong
            background in both frontend and backend, I strive to create seamless
            and performant web applications.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Link
              href="https://github.com/shaikhsameer18"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <Github className="w-5 h-5" /> GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/sameerahmed08"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </Link>
            <Link
              href="mailto:sameer.shaikh0425@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <Mail className="w-5 h-5" /> Email
            </Link>
            <a
              href="/Sameer.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition"
            >
              <Download className="w-5 h-5" /> Resume
            </a>
          </div>
        </motion.div>

        {/* Tabs for Education / Experience */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            {["experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full transition text-sm font-medium ${
                  activeTab === tab
                    ? "bg-violet-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {tab === "experience" ? (
                  <Briefcase className="inline-block w-4 h-4 mr-1" />
                ) : (
                  <GraduationCap className="inline-block w-4 h-4 mr-1" />
                )}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {activeTab === "experience" &&
            experience.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl mb-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.image}
                    alt={item.company}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-gray-300 dark:border-gray-600"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-violet-600 dark:text-violet-400">
                      {item.company}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <h4 className="font-semibold mb-2">Projects</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {item.projects.map((proj, pIdx) => (
                    <Link
                      key={pIdx}
                      href={proj.link}
                      className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-violet-500 transition"
                    >
                      <div className="flex justify-between mb-2">
                        <h5 className="font-semibold text-gray-800 dark:text-gray-100">
                          {proj.name}
                        </h5>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap mt-2 gap-2">
                        {proj.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

          {activeTab === "education" &&
            education.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl mb-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.image}
                    alt={item.school}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-gray-300 dark:border-gray-600"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <p className="text-sm text-violet-600 dark:text-violet-400">
                      {item.school}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </motion.div>
      </section>
    </main>
  );
}

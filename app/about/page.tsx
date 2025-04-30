"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  Calendar,
  MapPin,
  Github,
  Linkedin,
  Download,
  GraduationCap,
  Briefcase,
  Quote,
  Mail,
  ExternalLink,
  Code,
} from "lucide-react"

// Note: These imports would work with your actual project structure
// For the CodeProject, we're assuming these images exist
import profilePic from "@/public/assets/samcrop.jpg"
import geeky from "@/public/assets/geeky.png"
import xaviers from "@/public/assets/xaviers.jpeg"
import mhsscoe from "@/public/assets/mhsscoe.png"

export default function About() {
  const [activeTab, setActiveTab] = useState("experience")

  const education = [
    {
      degree: "Bachelor's Degree in Information Technology",
      school: "M.H. Saboo Siddik College of Engineering",
      period: "2020 - 2024",
      location: "Mumbai, India",
      description:
        "Pursuing advanced studies in Information Technology, focusing on modern software development and emerging technologies.",
      image: mhsscoe,
      skills: ["Web Development", "Data Structures", "Algorithms", "Database Management"],
    },
    {
      degree: "Higher Secondary Education",
      school: "St. Xavier's College",
      period: "2018 - 2020",
      location: "Mumbai, India",
      description: "Completed higher secondary education with focus on science and mathematics.",
      image: xaviers,
      skills: ["Mathematics", "Physics", "Computer Science"],
    },
  ]

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
          description: "A freelance service-providing company website built with Next.js and Tailwind CSS.",
          link: "/projects#geeky-techh",
          technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
        },
        {
          name: "Alvira Bags",
          description: "An e-commerce platform for a luxury bag brand with advanced filtering capabilities.",
          link: "/projects#alvira-bags",
          technologies: ["React", "Node.js", "MongoDB", "Express"],
        },
      ],
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-200 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05)_0%,rgba(255,255,255,0)_60%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* Hero Section */}
        <motion.section initial="hidden" animate="visible" variants={containerVariants} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full blur-md opacity-75 dark:opacity-50 animate-pulse"></div>
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                  <Image
                    src={profilePic || "/placeholder.svg"}
                    alt="Sameer Ahmed"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
                  <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-full p-2 text-white">
                    <Code className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Info */}
            <motion.div variants={containerVariants} className="lg:col-span-8 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <motion.span
                  variants={itemVariants}
                  className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium"
                >
                  Full Stack Developer
                </motion.span>
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  <span className="block">I&apos;m </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                    Sameer Ahmed
                  </span>
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
                >
                  A passionate developer focused on creating beautiful, functional, and user-friendly web applications
                  with modern technologies.
                </motion.p>
              </div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
              >
                <a
                  href="https://github.com/shaikhsameer18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sameerahmed08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:contact@sameerahmed.dev"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-700 dark:text-gray-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="/Sammy.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-violet-500/20"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-2xl blur-lg"></div>
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="flex flex-col items-center mb-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 mb-4">
                    <Quote className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-center">About Me</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-4"></div>
                </div>

                <div className="space-y-6 text-gray-600 dark:text-gray-300">
                  <p>
                    I am a freelance developer with a passion for web development. I have expertise in React, Next.js,
                    Node.js, and a range of other technologies. My goal is to create user-friendly and visually
                    appealing web applications that deliver value to users.
                  </p>
                  <p>
                    With a strong foundation in both frontend and backend development, I enjoy tackling complex problems
                    and turning ideas into reality. I&apos;m constantly learning and exploring new technologies to stay at
                    the forefront of web development.
                  </p>
                  <p>
                    When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                    projects, or sharing my knowledge with the developer community.
                  </p>
                </div>


              </div>
            </div>
          </div>
        </motion.section>

        {/* Experience & Education Tabs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="mb-20"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore my professional experience and educational background that have shaped my career as a developer.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1 rounded-full bg-gray-100 dark:bg-gray-800">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === "experience"
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === "education"
                    ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Education
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="relative">
              {/* Experience Tab */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeTab === "experience" ? 1 : 0,
                  y: activeTab === "experience" ? 0 : 20,
                  display: activeTab === "experience" ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl blur-md"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-700">
                              <Image
                                src={exp.image || "/placeholder.svg"}
                                alt={exp.company}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                              <p className="text-violet-600 dark:text-violet-400 font-medium">{exp.company}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
                            <div className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{exp.description}</p>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                            <span className="w-5 h-0.5 bg-violet-500 mr-2"></span>
                            Notable Projects
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {exp.projects.map((project, projectIndex) => (
                              <Link
                                key={projectIndex}
                                href={project.link}
                                className="group block p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-200 border border-gray-100 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-800"
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                                    {project.name}
                                  </h5>
                                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-violet-500 transition-colors duration-200" />
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {project.technologies.map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education Tab */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: activeTab === "education" ? 1 : 0,
                  y: activeTab === "education" ? 0 : 20,
                  display: activeTab === "education" ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl blur-md"></div>
                      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-700">
                              <Image
                                src={edu.image || "/placeholder.svg"}
                                alt={edu.school}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                              <p className="text-violet-600 dark:text-violet-400 font-medium">{edu.school}</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-3 mt-4 md:mt-0">
                            <div className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300">
                              <Calendar className="w-4 h-4 mr-1" />
                              {edu.period}
                            </div>
                            <div className="flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-600 dark:text-gray-300">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{edu.description}</p>
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white flex items-center">
                            <span className="w-5 h-0.5 bg-violet-500 mr-2"></span>
                            Key Subjects & Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="text-sm px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}

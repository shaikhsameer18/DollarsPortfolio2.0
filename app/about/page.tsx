"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Github, Linkedin, Download, GraduationCap, Briefcase, Quote } from "lucide-react";
import { sharedStyles } from "@/app/styles/shared";
import profilePic from "@/public/assets/sam.jpg";

export default function About() {
  const education = [
    {
      degree: "Bachelor's Degree in Information Technology",
      school: "M.H. Saboo Siddik College of Engineering",
      period: "2020 - 2024",
      location: "Mumbai, India",
      description: "Pursuing advanced studies in Information Technology, focusing on modern software development and emerging technologies.",
    },
    {
      degree: "Higher Secondary Education",
      school: "St. Xavier's College",
      period: "2018 - 2020",
      location: "Mumbai, India",
      description: "Completed higher secondary education with focus on science and mathematics.",
    }
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Geeky Techh",
      period: "2021 - Present",
      location: "Remote",
      description: "Working as a freelance developer, delivering high-quality web applications and solutions for clients worldwide.",
      projects: [
        {
          name: "Geeky Techh",
          description: "A freelance service-providing company website built with Next.js and Tailwind CSS.",
          link: "/projects#geeky-techh"
        },
        {
          name: "Alvira Bags",
          description: "An e-commerce platform for a luxury bag brand with advanced filtering capabilities.",
          link: "/projects#alvira-bags"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
              <div className="relative w-full h-full rounded-full border-2 border-indigo-500/20 overflow-hidden">
                <Image
                  src={profilePic}
                  alt="Sameer Ahmed"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Sameer Ahmed
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
                Full Stack Developer
              </p>
            </div>

            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://github.com/shaikhsameer18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-200 hover:scale-110"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/in/sameerahmed08"
                    target="_blank"
                    rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="/Sammy.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Statement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                <Quote className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Working as a freelance developer, I&apos;ve successfully delivered various web applications and solutions
                for clients worldwide. My work includes full-stack development, API integration, and responsive
                design implementation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                <Briefcase className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Experience
              </h2>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={sharedStyles.card}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
            </h3>
                      <p className="text-indigo-500 dark:text-indigo-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Notable Projects:
                    </h4>
                    {exp.projects.map((project, projectIndex) => (
                      <Link
                        key={projectIndex}
                        href={project.link}
                        className="block p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {project.name}
                            </h5>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                <GraduationCap className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={sharedStyles.card}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-indigo-500 dark:text-indigo-400 font-medium">
                        {edu.school}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                </div>
              </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

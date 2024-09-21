"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  Globe,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Codepen,
} from "lucide-react";
import sam from "@/public/assets/sam.jpg";

const socialLinks = [
  { icon: Github, href: "https://github.com/shaikhsameer18" },
  { icon: Linkedin, href: "https://linkedin.com/in/sameerahmed08" },
  { icon: Twitter, href: "https://twitter.com/shaikhsam_08" },
  { icon: Codepen, href: "https://codepen.io/SameerAhmed25" },
];

const skills = [
  "Java",
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Redux",
  "REST API",
  "MySQL",
  "AWS",
  "Docker",
  "GitHub",
];

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4 font-space-grotesk">
            About Me
          </h2>
          <p className="text-xl text-gray-600 font-inter">
            My Journey and Aspirations
          </p>
        </motion.div>

        <div className="space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="w-80 h-80 relative overflow-hidden rounded-lg shadow-lg mb-6">
                <Image
                  src={sam}
                  alt="Sameer Ahmed"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="h-6 w-6 text-blue-600 hover:text-blue-800 transition-colors duration-200" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-3xl font-bold text-blue-600 font-space-grotesk mb-4">
                Hi, I am Sameer Ahmed Shaikh
              </h3>
              <p className="text-xl text-gray-700 font-inter mb-4">
                A Passionate Full-Stack Web Developer!
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-600 mb-2">
                  Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2 text-gray-600 font-inter">
                <p>I am currently learning: Machine Learning</p>
                <p>
                  👨‍💻 All my links:{" "}
                  <Link
                    href="https://linktr.ee/shaikhsameer18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://linktr.ee/shaikhsameer18
                  </Link>
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-500" />
                  <span>sameer.shaikh0425@gmail.com</span>
                </p>
                <p>⚡ Hobbies: Reading, Coding and Web Designing</p>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-blue-600 font-space-grotesk mb-6">
              Education
            </h3>
            <div className="space-y-6 text-gray-600 font-inter">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="flex items-center mb-2">
                  <Book className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="font-semibold">
                    Bachelor&apos;s Degree in Information Technology
                  </span>
                </p>
                <Link
                  href="https://www.mhssce.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-9 text-blue-600 hover:underline block"
                >
                  M.H. Saboo Siddik College of Engineering
                </Link>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="flex items-center mb-2">
                  <Book className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0" />
                  <span className="font-semibold">Previous Education</span>
                </p>
                <Link
                  href="https://xaviers.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-9 text-blue-600 hover:underline block"
                >
                  St. Xavier&apos;s College, Mumbai
                </Link>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-6 font-space-grotesk">
              Personal Statement
            </h3>
            <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
              <blockquote className="text-2xl text-blue-600 italic font-space-grotesk border-l-4 border-blue-500 pl-4">
                &ldquo;Life Always Begins With One Step Outside Your Comfort
                Zone.&rdquo;
              </blockquote>
              <p className="text-gray-600 font-inter leading-relaxed">
                I&apos;m passionate about technology and its potential to change
                the world. My dream is to become financially independent and
                explore the world while contributing to innovative projects in
                software development and AI/ML. I believe in pushing boundaries
                and constantly learning to stay at the forefront of
                technological advancements.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-6 font-space-grotesk">
              Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center bg-white rounded-lg p-6 shadow-md">
                <Globe className="h-10 w-10 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 font-space-grotesk mb-1">
                    English
                  </h4>
                  <p className="text-gray-600 font-inter">Proficient</p>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-lg p-6 shadow-md">
                <Globe className="h-10 w-10 text-blue-500 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-600 font-space-grotesk mb-1">
                    French
                  </h4>
                  <p className="text-gray-600 font-inter">Basic Knowledge</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

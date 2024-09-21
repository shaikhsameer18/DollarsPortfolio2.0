"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cplusplus" },
    ],
  },
  {
    category: "Web Development",
    technologies: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Sass", icon: "sass" },
      { name: "PHP", icon: "php" },
    ],
  },
  {
    category: "Backend & Databases",
    technologies: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Django", icon: "django" },
      { name: "Flask", icon: "flask" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redux", icon: "redux" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Jenkins", icon: "jenkins" },
    ],
  },
  {
    category: "Machine Learning & AI",
    technologies: [
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Pandas", icon: "pandas" },
      { name: "NumPy", icon: "numpy" },
      { name: "Jupyter", icon: "jupyter" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4 font-space-grotesk">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 mb-8 font-inter">
            My Technical Proficiencies and Tools I Work With
          </p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-6 font-space-grotesk">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillCategory.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center mb-4">
                      <Image
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                        alt={tech.name}
                        width={50}
                        height={50}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-plain.svg`;
                        }}
                      />
                    </div>
                    <p className="text-center text-sm font-medium font-inter text-gray-700">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Layout, Server, Wrench, Code2 } from "lucide-react";
import {
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaPython,
  FaAws,
  FaCode
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDjango,
  SiJest,
  SiJira,
  SiFigma
} from "react-icons/si";
import { sharedStyles } from "@/app/styles/shared";

interface Technology {
  name: string;
  icon: JSX.Element;
  proficiency: number;
}

interface SkillCategory {
  category: string;
  icon: JSX.Element;
  description: string;
  technologies: Technology[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    description: "Building responsive and interactive user interfaces",
    technologies: [
      { name: "React", icon: <FaReact className="w-6 h-6" />, proficiency: 90 },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" />, proficiency: 85 },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" />, proficiency: 80 },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" />, proficiency: 90 },
      { name: "HTML5", icon: <SiHtml5 className="w-6 h-6" />, proficiency: 95 },
      { name: "CSS3", icon: <SiCss3 className="w-6 h-6" />, proficiency: 90 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" />, proficiency: 90 },
      { name: "Material UI", icon: <SiMui className="w-6 h-6" />, proficiency: 85 },
      { name: "Redux", icon: <SiRedux className="w-6 h-6" />, proficiency: 80 },
      { name: "Framer Motion", icon: <SiFramer className="w-6 h-6" />, proficiency: 75 },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    description: "Creating robust and scalable server-side applications",
    technologies: [
      { name: "Node.js", icon: <FaNode className="w-6 h-6" />, proficiency: 85 },
      { name: "Express.js", icon: <SiExpress className="w-6 h-6" />, proficiency: 80 },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" />, proficiency: 85 },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6" />, proficiency: 75 },
      { name: "GraphQL", icon: <SiGraphql className="w-6 h-6" />, proficiency: 75 },
      { name: "Python", icon: <FaPython className="w-6 h-6" />, proficiency: 70 },
      { name: "Django", icon: <SiDjango className="w-6 h-6" />, proficiency: 65 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6" />,
    description: "Essential tools and practices for modern development",
    technologies: [
      { name: "Git", icon: <FaGitAlt className="w-6 h-6" />, proficiency: 90 },
      { name: "GitHub", icon: <FaGithub className="w-6 h-6" />, proficiency: 90 },
      { name: "Docker", icon: <FaDocker className="w-6 h-6" />, proficiency: 75 },
      { name: "AWS", icon: <FaAws className="w-6 h-6" />, proficiency: 70 },
      { name: "Jest", icon: <SiJest className="w-6 h-6" />, proficiency: 85 },
      { name: "Jira", icon: <SiJira className="w-6 h-6" />, proficiency: 80 },
      { name: "Figma", icon: <SiFigma className="w-6 h-6" />, proficiency: 75 },
      { name: "VS Code", icon: <FaCode className="w-6 h-6" />, proficiency: 95 },
    ],
  },
];

export default function Skills() {
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
          <h1 className={sharedStyles.sectionTitle}>Technical Skills</h1>
          <p className={sharedStyles.sectionSubtitle}>
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="mt-12 space-y-16">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className={sharedStyles.iconContainer}>
                  {skillCategory.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{skillCategory.category}</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skillCategory.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategory.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.02 }}
                    className={`${sharedStyles.card} p-4 flex items-center gap-4 group`}
                  >
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{tech.name}</h3>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        />
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {tech.proficiency}%
                      </span>
                    </div>
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

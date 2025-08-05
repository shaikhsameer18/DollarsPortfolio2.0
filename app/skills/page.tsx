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
  SiBootstrap,
  SiGreensock,
  SiFastapi,
  SiFlask,
  SiApollographql,
  SiFirebase,
  SiMongoose,
  SiPrisma,
  SiRedis,
  SiSocketdotio,
  SiSupabase,
  SiPostman,
  SiGooglecolab,
  SiHuggingface,
  SiJupyter,
  SiKeras,
  SiLangchain,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

interface Technology {
  name: string;
  icon: JSX.Element;
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
    description: "Interactive & responsive user interfaces",
    technologies: [
      { name: "React", icon: <FaReact color="#61DBFB" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
      { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
      { name: "HTML5", icon: <SiHtml5 color="#e34f26" /> },
      { name: "CSS3", icon: <SiCss3 color="#264de4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38bdf8" /> },
      { name: "Material UI", icon: <SiMui color="#007fff" /> },
      { name: "Redux", icon: <SiRedux color="#764abc" /> },
      { name: "Framer Motion", icon: <SiFramer color="black" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" /> },
      { name: "GSAP", icon: <SiGreensock color="#88CE02" /> },
    ],
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    description: "Scalable server-side apps & APIs",
    technologies: [
      { name: "Node.js", icon: <FaNode color="#68a063" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "GraphQL", icon: <SiGraphql color="#e10098" /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "REST API", icon: <SiApollographql color="#311C87" /> },
      { name: "Redis", icon: <SiRedis color="#d82c20" /> },
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "Supabase", icon: <SiSupabase color="#3ecf8e" /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Mongoose", icon: <SiMongoose color="#880000" /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6" />,
    description: "Modern tools & developer workflow",
    technologies: [
      { name: "Git", icon: <FaGitAlt color="#f34f29" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Docker", icon: <FaDocker color="#2496ed" /> },
      { name: "AWS", icon: <FaAws color="#FF9900" /> },
      { name: "Jest", icon: <SiJest color="#99425b" /> },
      { name: "Postman", icon: <SiPostman color="#ff6c37" /> },
    ],
  },
  {
    category: "AI / ML / Data Science",
    icon: <Code2 className="w-6 h-6" />,
    description: "Data-driven models & AI libraries",
    technologies: [
      { name: "Python", icon: <FaPython color="#3776ab" /> },
      { name: "NumPy", icon: <SiNumpy color="#013243" /> },
      { name: "Pandas", icon: <SiPandas color="#150458" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn color="#f7931e" /> },
      { name: "TensorFlow", icon: <SiTensorflow color="#ff6f00" /> },
      { name: "Keras", icon: <SiKeras color="#D00000" /> },
      { name: "PyTorch", icon: <SiPytorch color="#ee4c2c" /> },
      { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
      { name: "Jupyter", icon: <SiJupyter color="#f37626" /> },
      { name: "Google Colab", icon: <SiGooglecolab color="#F9AB00" /> },
      { name: "Hugging Face", icon: <SiHuggingface color="#ffcc00" /> },
      { name: "LangChain", icon: <SiLangchain /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100" />

      <div className="relative max-w-7xl mx-auto z-10">
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
            Skills & Stack
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tools & technologies I use to build and scale products
          </p>
        </motion.div>

        <div className="mt-12 space-y-16">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-md">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    {category.category}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.08 }}
                    className="flex flex-col items-center gap-2 p-4 bg-white/60 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl shadow hover:shadow-xl transition"
                  >
                    <div className="text-3xl text-gray-800 dark:text-white">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-semibold text-center text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

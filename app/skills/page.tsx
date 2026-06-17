"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Network,
  Monitor,
  FileSearch,
  Lock,
  Wrench,
  Code2,
  ClipboardCheck,
} from "lucide-react";
import {
  FaLinux,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaJava,
  FaWindows,
} from "react-icons/fa";
import {
  SiWireshark,
  SiPostman,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

interface Skill {
  name: string;
  icon?: React.ReactNode;
}

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Firewall & Network Security",
    icon: <Shield className="w-5 h-5" />,
    description: "Perimeter security, traffic control, and VPN management",
    color: "cyan",
    skills: [
      { name: "Sophos Firewall" },
      { name: "Firewall Policies" },
      { name: "Access Rules" },
      { name: "NAT Rules" },
      { name: "Traffic Filtering" },
      { name: "Basic IPsec VPN" },
      { name: "Network Troubleshooting" },
    ],
  },
  {
    category: "Security Operations (SOC)",
    icon: <Monitor className="w-5 h-5" />,
    description: "Monitoring, triage, and incident response support",
    color: "blue",
    skills: [
      { name: "SOC Agent Deployment" },
      { name: "Security Monitoring" },
      { name: "Alert Triage" },
      { name: "Log Review" },
      { name: "Incident Support" },
      { name: "False Positive Validation" },
    ],
  },
  {
    category: "Endpoint Security",
    icon: <Lock className="w-5 h-5" />,
    description: "Endpoint protection, policy configuration, and troubleshooting",
    color: "teal",
    skills: [
      { name: "Endpoint Protection" },
      { name: "Agent Deployment" },
      { name: "Policy Configuration" },
      { name: "Windows Security" },
      { name: "Client System Troubleshooting" },
    ],
  },
  {
    category: "GRC & Compliance",
    icon: <ClipboardCheck className="w-5 h-5" />,
    description: "Governance, risk, compliance, and audit readiness",
    color: "emerald",
    skills: [
      { name: "SEBI CSCRF" },
      { name: "Gap Assessments" },
      { name: "Internal Audits" },
      { name: "Audit Evidence Collection" },
      { name: "Control Validation" },
      { name: "Risk Identification" },
      { name: "CCMP / BCP / DR" },
      { name: "RTO / RPO" },
      { name: "Remediation Tracking" },
      { name: "Asset Inventory" },
      { name: "Access Control Review" },
    ],
  },
  {
    category: "Vulnerability Assessment",
    icon: <FileSearch className="w-5 h-5" />,
    description: "Identifying security gaps and misconfigurations",
    color: "orange",
    skills: [
      { name: "Nmap" },
      { name: "Wireshark", icon: <SiWireshark className="text-blue-500" /> },
      { name: "Burp Suite" },
      { name: "OWASP Top 10" },
      { name: "VA & Basic Pentesting" },
      { name: "Security Config Checks" },
    ],
  },
  {
    category: "Networking Fundamentals",
    icon: <Network className="w-5 h-5" />,
    description: "Core networking protocols and architecture",
    color: "sky",
    skills: [
      { name: "TCP/IP" },
      { name: "DNS & DHCP" },
      { name: "HTTP/HTTPS" },
      { name: "Ports & Protocols" },
      { name: "Routing & Switching" },
      { name: "OSI Model" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    description: "Security and development tooling",
    color: "violet",
    skills: [
      { name: "Linux", icon: <FaLinux className="text-yellow-500" /> },
      { name: "Windows", icon: <FaWindows className="text-blue-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "Virtual Machines" },
      { name: "Microsoft Excel" },
    ],
  },
  {
    category: "Programming & Development",
    icon: <Code2 className="w-5 h-5" />,
    description: "Scripting and application development for security tooling",
    color: "pink",
    skills: [
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress /> },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string }> = {
  cyan:    { bg: "bg-cyan-50 dark:bg-cyan-900/20",    border: "border-cyan-200 dark:border-cyan-700",    text: "text-cyan-700 dark:text-cyan-300",    icon: "bg-cyan-100 dark:bg-cyan-800/40 text-cyan-600 dark:text-cyan-400" },
  blue:    { bg: "bg-blue-50 dark:bg-blue-900/20",    border: "border-blue-200 dark:border-blue-700",    text: "text-blue-700 dark:text-blue-300",    icon: "bg-blue-100 dark:bg-blue-800/40 text-blue-600 dark:text-blue-400" },
  teal:    { bg: "bg-teal-50 dark:bg-teal-900/20",    border: "border-teal-200 dark:border-teal-700",    text: "text-teal-700 dark:text-teal-300",    icon: "bg-teal-100 dark:bg-teal-800/40 text-teal-600 dark:text-teal-400" },
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-700", text: "text-emerald-700 dark:text-emerald-300", icon: "bg-emerald-100 dark:bg-emerald-800/40 text-emerald-600 dark:text-emerald-400" },
  orange:  { bg: "bg-orange-50 dark:bg-orange-900/20",  border: "border-orange-200 dark:border-orange-700",  text: "text-orange-700 dark:text-orange-300",  icon: "bg-orange-100 dark:bg-orange-800/40 text-orange-600 dark:text-orange-400" },
  sky:     { bg: "bg-sky-50 dark:bg-sky-900/20",     border: "border-sky-200 dark:border-sky-700",     text: "text-sky-700 dark:text-sky-300",     icon: "bg-sky-100 dark:bg-sky-800/40 text-sky-600 dark:text-sky-400" },
  violet:  { bg: "bg-violet-50 dark:bg-violet-900/20",  border: "border-violet-200 dark:border-violet-700",  text: "text-violet-700 dark:text-violet-300",  icon: "bg-violet-100 dark:bg-violet-800/40 text-violet-600 dark:text-violet-400" },
  pink:    { bg: "bg-pink-50 dark:bg-pink-900/20",    border: "border-pink-200 dark:border-pink-700",    text: "text-pink-700 dark:text-pink-300",    icon: "bg-pink-100 dark:bg-pink-800/40 text-pink-600 dark:text-pink-400" },
};

export default function Skills() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25">
            <Shield className="w-7 h-7" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-400">
            Skills & Expertise
          </h1>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Security tools, GRC frameworks, and technical capabilities across cybersecurity domains
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, index) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-2xl border p-6 ${colors.bg} ${colors.border}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${colors.icon}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                      {category.category}
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition"
                    >
                      {skill.icon && (
                        <span className="text-lg leading-none">{skill.icon}</span>
                      )}
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

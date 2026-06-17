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
  Shield,
  Award,
  CheckCircle2,
} from "lucide-react";

import profilePic from "@/public/assets/samcrop.jpg";
import mhsscoe from "@/public/assets/mhsscoe.png";

const experience = [
  {
    title: "Cybersecurity Engineer",
    company: "Zoffec Infotech Pvt. Ltd.",
    period: "Oct 2025 – Present",
    location: "Mumbai, India",
    description:
      "Working as a Cybersecurity Engineer and GRC Analyst, managing firewall security, SOC operations, compliance activities, and vulnerability assessments across multiple client environments.",
    responsibilities: [
      "Configured and maintained firewall policies, access rules, NAT rules, and traffic filtering settings across multiple client environments.",
      "Supported SEBI CSCRF and cybersecurity compliance activities through gap assessments, audit evidence collection, and control validation.",
      "Deployed SOC agents on client endpoints and verified agent connectivity, visibility, and reporting status for security monitoring.",
      "Reviewed security alerts and event logs to identify suspicious activity, validate potential threats, and reduce false positives.",
      "Performed vulnerability assessments using Nmap, Wireshark, and Burp Suite Basics to identify exposed services and security gaps.",
      "Supported basic IPsec VPN configuration and troubleshooting for secure connectivity between client locations.",
      "Maintained governance documentation including CCMP, BCP, and DR documentation with RTO/RPO inputs.",
      "Assisted in internal cybersecurity audits reviewing access management, endpoint protection, and vulnerability management processes.",
      "Documented security configurations, issue observations, and remediation steps for internal tracking and client reporting.",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "M.H. Saboo Siddik College of Engineering",
    period: "2021 – 2025",
    location: "Mumbai, India",
    cgpa: "9.06 / 10",
    description:
      "Graduated with distinction in Information Technology with strong focus on networking, security, and software development fundamentals.",
    image: mhsscoe,
    skills: [
      "Network Security",
      "Cryptography",
      "Operating Systems",
      "Data Structures",
      "Database Management",
      "Web Technologies",
    ],
  },
];

const certifications = [
  {
    name: "Sophos Firewall Certified Engineer",
    issuer: "Sophos",
    issued: "2026",
    description:
      "Professional certification validating expertise in Sophos Firewall configuration, policy management, and network security.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type Tab = "experience" | "education" | "certifications";

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("experience");

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 text-gray-800 dark:text-gray-100">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Profile Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl shadow-cyan-500/20 mb-6">
            <Image
              src={profilePic}
              alt="Sameer Ahmed Shaikh"
              fill
              className="object-cover scale-110 translate-x-2"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-1">
            Sameer Ahmed Shaikh{" "}
            <Shield className="inline-block ml-2 w-7 h-7 text-cyan-500" />
          </h1>
          <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">
            Cybersecurity Engineer &amp; GRC Analyst
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-sm sm:text-base">
            Cybersecurity professional with practical experience in firewall
            configuration, endpoint security, SOC agent deployment, vulnerability
            assessment, and SEBI CSCRF compliance across client environments.
            Sophos Firewall Certified Engineer.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Link
              href="https://github.com/shaikhsameer18"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition"
            >
              <Github className="w-5 h-5" /> GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/sameerahmed08"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </Link>
            <Link
              href="mailto:sameer.shaikh0425@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition"
            >
              <Mail className="w-5 h-5" /> Email
            </Link>
            <a
              href="/Sameer.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-5 h-5" /> Resume
            </a>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-gray-100 dark:bg-slate-800 p-1 rounded-full flex-wrap justify-center">
            {(["experience", "education", "certifications"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full transition text-sm font-medium ${
                  activeTab === tab
                    ? "bg-cyan-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                {tab === "experience" && (
                  <Briefcase className="inline-block w-4 h-4 mr-1" />
                )}
                {tab === "education" && (
                  <GraduationCap className="inline-block w-4 h-4 mr-1" />
                )}
                {tab === "certifications" && (
                  <Award className="inline-block w-4 h-4 mr-1" />
                )}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          {/* Experience Tab */}
          {activeTab === "experience" &&
            experience.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl mb-8 shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">
                      {item.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {item.period} &bull; {item.location}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
                <h4 className="font-semibold mb-3 text-sm text-gray-700 dark:text-gray-200">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {/* Education Tab */}
          {activeTab === "education" &&
            education.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl mb-8 shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.image}
                    alt={item.school}
                    width={50}
                    height={50}
                    className="rounded-full border-2 border-gray-300 dark:border-slate-600"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">
                      {item.school}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {item.period} &bull; {item.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    CGPA:
                  </span>
                  <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-sm rounded-full font-bold">
                    {item.cgpa}
                  </span>
                </div>
                <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          {/* Certifications Tab */}
          {activeTab === "certifications" &&
            certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl mb-8 shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Issued: {cert.issued}
                    </p>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </section>
    </main>
  );
}

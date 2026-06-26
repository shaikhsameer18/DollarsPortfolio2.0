import {
  Shield, Lock, Activity, Eye, Cpu, Database, Globe, Zap,
  Bug, KeyRound, AlertTriangle, Fingerprint, ShieldCheck, ShieldAlert,
  ScanLine, Radar, Server, Network, ClipboardCheck, CheckCircle2,
  ChevronRight, Terminal, Code2,
} from "lucide-react";
import {
  FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt,
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaLinux, FaWindows,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiMongodb,
  SiExpress, SiTailwindcss, SiFramer, SiPostman, SiVercel,
  SiSocketdotio, SiWireshark, SiKalilinux, SiSplunk, SiElastic,
  SiOwasp,
} from "react-icons/si";
import type { ElementType } from "react";

export type SkillCat = "all" | "defense" | "pentest" | "siem" | "grc" | "network" | "fullstack" | "tools" | "languages";

export interface Skill {
  name: string;
  icon: ElementType;
  color: string;
  size: "lg" | "md" | "sm";
  cat: SkillCat;
}

export const SKILLS: Skill[] = [
  { name: "Sophos XGS Firewall",  icon: Shield,         color: "#00D4FF", size: "lg", cat: "defense" },
  { name: "IPsec VPN",            icon: Lock,           color: "#00FF88", size: "md", cat: "defense" },
  { name: "WAF Rules",            icon: ShieldCheck,    color: "#00D4FF", size: "sm", cat: "defense" },
  { name: "NAT / PAT",            icon: Network,        color: "#6B8EAD", size: "sm", cat: "defense" },
  { name: "IDS / IPS",            icon: ShieldAlert,    color: "#FFB800", size: "md", cat: "defense" },
  { name: "Endpoint Security",    icon: Cpu,            color: "#00FF88", size: "sm", cat: "defense" },
  { name: "Zero Trust",           icon: Fingerprint,    color: "#8B5CF6", size: "sm", cat: "defense" },
  { name: "SD-WAN",               icon: Globe,          color: "#00D4FF", size: "sm", cat: "defense" },
  { name: "Kali Linux",           icon: SiKalilinux,    color: "#268BF0", size: "lg", cat: "pentest" },
  { name: "Metasploit",           icon: Bug,            color: "#FF3B5C", size: "lg", cat: "pentest" },
  { name: "Burp Suite",           icon: ScanLine,       color: "#FF6C37", size: "md", cat: "pentest" },
  { name: "Nmap",                 icon: Radar,          color: "#8B5CF6", size: "md", cat: "pentest" },
  { name: "Wireshark",            icon: SiWireshark,    color: "#1D67CF", size: "md", cat: "pentest" },
  { name: "SQLmap",               icon: Database,       color: "#FFB800", size: "sm", cat: "pentest" },
  { name: "Hydra",                icon: KeyRound,       color: "#FF3B5C", size: "sm", cat: "pentest" },
  { name: "Nikto",                icon: Terminal,       color: "#00FF88", size: "sm", cat: "pentest" },
  { name: "OWASP Top 10",         icon: SiOwasp,        color: "#FFB800", size: "sm", cat: "pentest" },
  { name: "Splunk",               icon: SiSplunk,       color: "#FF6C37", size: "lg", cat: "siem" },
  { name: "Wazuh / OSSEC",        icon: Activity,       color: "#00D4FF", size: "lg", cat: "siem" },
  { name: "Elastic SIEM",         icon: SiElastic,      color: "#00BFB3", size: "md", cat: "siem" },
  { name: "Microsoft Sentinel",   icon: Shield,         color: "#0078D4", size: "md", cat: "siem" },
  { name: "SOC Agent Deploy",     icon: Zap,            color: "#00FF88", size: "md", cat: "siem" },
  { name: "Alert Triage",         icon: AlertTriangle,  color: "#FFB800", size: "sm", cat: "siem" },
  { name: "Threat Hunting",       icon: Eye,            color: "#8B5CF6", size: "sm", cat: "siem" },
  { name: "Log Analysis",         icon: Terminal,       color: "#6B8EAD", size: "sm", cat: "siem" },
  { name: "SEBI CSCRF",           icon: ClipboardCheck, color: "#00FF88", size: "lg", cat: "grc" },
  { name: "Gap Assessments",      icon: ClipboardCheck, color: "#00D4FF", size: "md", cat: "grc" },
  { name: "Control Validation",   icon: CheckCircle2,   color: "#00FF88", size: "md", cat: "grc" },
  { name: "Audit Evidence",       icon: ClipboardCheck, color: "#6B8EAD", size: "sm", cat: "grc" },
  { name: "BCP / DR Plans",       icon: Activity,       color: "#FFB800", size: "sm", cat: "grc" },
  { name: "RTO / RPO Mapping",    icon: ClipboardCheck, color: "#00D4FF", size: "sm", cat: "grc" },
  { name: "Risk Identification",  icon: Eye,            color: "#8B5CF6", size: "sm", cat: "grc" },
  { name: "Remediation Tracking", icon: ChevronRight,   color: "#00FF88", size: "sm", cat: "grc" },
  { name: "TCP / IP",             icon: Network,        color: "#00D4FF", size: "md", cat: "network" },
  { name: "DNS & DHCP",           icon: Globe,          color: "#00FF88", size: "sm", cat: "network" },
  { name: "OSI Model",            icon: Network,        color: "#6B8EAD", size: "sm", cat: "network" },
  { name: "VLANs",                icon: Server,         color: "#8B5CF6", size: "sm", cat: "network" },
  { name: "React",                icon: FaReact,        color: "#61DAFB", size: "lg", cat: "fullstack" },
  { name: "Next.js",              icon: SiNextdotjs,    color: "#C4DCF0", size: "lg", cat: "fullstack" },
  { name: "Node.js",              icon: FaNodeJs,       color: "#339933", size: "lg", cat: "fullstack" },
  { name: "TypeScript",           icon: SiTypescript,   color: "#3178C6", size: "md", cat: "fullstack" },
  { name: "MongoDB",              icon: SiMongodb,      color: "#47A248", size: "md", cat: "fullstack" },
  { name: "Express.js",           icon: SiExpress,      color: "#C4DCF0", size: "md", cat: "fullstack" },
  { name: "Tailwind CSS",         icon: SiTailwindcss,  color: "#06B6D4", size: "md", cat: "fullstack" },
  { name: "JavaScript",           icon: SiJavascript,   color: "#F7DF1E", size: "sm", cat: "fullstack" },
  { name: "Socket.io",            icon: SiSocketdotio,  color: "#C4DCF0", size: "sm", cat: "fullstack" },
  { name: "Framer Motion",        icon: SiFramer,       color: "#BB4BFF", size: "sm", cat: "fullstack" },
  { name: "Linux",                icon: FaLinux,        color: "#FCC624", size: "md", cat: "tools" },
  { name: "Windows Server",       icon: FaWindows,      color: "#0078D6", size: "sm", cat: "tools" },
  { name: "Docker",               icon: FaDocker,       color: "#2496ED", size: "md", cat: "tools" },
  { name: "AWS",                  icon: FaAws,          color: "#FF9900", size: "sm", cat: "tools" },
  { name: "Git",                  icon: FaGitAlt,       color: "#F05032", size: "md", cat: "tools" },
  { name: "Postman",              icon: SiPostman,      color: "#FF6C37", size: "sm", cat: "tools" },
  { name: "Vercel",               icon: SiVercel,       color: "#C4DCF0", size: "sm", cat: "tools" },
  { name: "Python",               icon: FaPython,       color: "#3776AB", size: "md", cat: "languages" },
  { name: "Java",                 icon: FaJava,         color: "#ED1D25", size: "sm", cat: "languages" },
  { name: "HTML5",                icon: FaHtml5,        color: "#E34F26", size: "sm", cat: "languages" },
  { name: "CSS3",                 icon: FaCss3Alt,      color: "#1572B6", size: "sm", cat: "languages" },
];

export interface Category {
  key:   SkillCat;
  label: string;
  icon:  ElementType;
  color: string;
}

export const CATEGORIES: Category[] = [
  { key: "all",       label: "All",         icon: Database,       color: "#6B8EAD" },
  { key: "defense",   label: "Defense",     icon: Shield,         color: "#00D4FF" },
  { key: "pentest",   label: "Pen Testing", icon: Bug,            color: "#FF3B5C" },
  { key: "siem",      label: "SIEM & SOC",  icon: Activity,       color: "#FFB800" },
  { key: "grc",       label: "GRC",         icon: ClipboardCheck, color: "#00FF88" },
  { key: "network",   label: "Networking",  icon: Network,        color: "#8B5CF6" },
  { key: "fullstack", label: "Full-Stack",  icon: Code2,          color: "#61DAFB" },
  { key: "tools",     label: "Tools",       icon: Terminal,       color: "#FF6C37" },
  { key: "languages", label: "Languages",   icon: Cpu,            color: "#FCC624" },
];

export const SKILL_SIZE_CLS: Record<string, string> = {
  lg: "px-3.5 py-2 text-xs gap-2",
  md: "px-3.5 py-2 text-xs gap-2",
  sm: "px-3.5 py-2 text-xs gap-2",
};

export const SKILL_ICON_CLS: Record<string, string> = {
  lg: "text-base",
  md: "text-base",
  sm: "text-base",
};

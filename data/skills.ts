import type { Skill, TechItem } from "@/types";

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5 & CSS3", level: 95, category: "Frontend" },
  { name: "JavaScript (ES2024)", level: 92, category: "Frontend" },
  { name: "TypeScript", level: 88, category: "Frontend" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 93, category: "Frontend" },
  { name: "GSAP & Animations", level: 82, category: "Frontend" },
  { name: "Framer Motion", level: 80, category: "Frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Express.js", level: 78, category: "Backend" },
  { name: "Laravel", level: 75, category: "Backend" },
  { name: "PHP", level: 72, category: "Backend" },
  { name: "REST API Design", level: 85, category: "Backend" },

  // Database
  { name: "MySQL", level: 78, category: "Database" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "MongoDB", level: 72, category: "Database" },
  { name: "Redis", level: 65, category: "Database" },

  // UI/UX
  { name: "Figma", level: 90, category: "UI/UX" },
  { name: "Design Systems", level: 85, category: "UI/UX" },
  { name: "Prototyping", level: 88, category: "UI/UX" },
  { name: "User Research", level: 78, category: "UI/UX" },
  { name: "Wireframing", level: 85, category: "UI/UX" },

  // Tools
  { name: "Git & GitHub", level: 88, category: "Tools" },
  { name: "VS Code", level: 92, category: "Tools" },
  { name: "Postman", level: 82, category: "Tools" },
  { name: "Webpack / Vite", level: 75, category: "Tools" },

  // DevOps
  { name: "Docker", level: 65, category: "DevOps" },
  { name: "CI/CD (GitHub Actions)", level: 68, category: "DevOps" },
  { name: "Linux / Bash", level: 70, category: "DevOps" },
  { name: "Vercel / Netlify", level: 85, category: "DevOps" },
];

export const TECH_STACK: TechItem[] = [
  { name: "HTML5", icon: "/assets/icons/html5.svg", color: "#E44D26" },
  { name: "CSS3", icon: "/assets/icons/css3.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "/assets/icons/javascript.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/assets/icons/typescript.svg", color: "#3178C6" },
  { name: "React", icon: "/assets/icons/react.svg", color: "#61DAFB" },
  { name: "Next.js", icon: "/assets/icons/nextjs.svg", color: "#FFFFFF" },
  { name: "Tailwind", icon: "/assets/icons/tailwind.svg", color: "#06B6D4" },
  { name: "Node.js", icon: "/assets/icons/nodejs.svg", color: "#339933" },
  { name: "Express", icon: "/assets/icons/express.svg", color: "#FFFFFF" },
  { name: "Laravel", icon: "/assets/icons/laravel.svg", color: "#FF2D20" },
  { name: "PHP", icon: "/assets/icons/php.svg", color: "#777BB4" },
  { name: "MySQL", icon: "/assets/icons/mysql.svg", color: "#4479A1" },
  { name: "PostgreSQL", icon: "/assets/icons/postgresql.svg", color: "#4169E1" },
  { name: "MongoDB", icon: "/assets/icons/mongodb.svg", color: "#47A248" },
  { name: "Docker", icon: "/assets/icons/docker.svg", color: "#2496ED" },
  { name: "Git", icon: "/assets/icons/git.svg", color: "#F05032" },
  { name: "GitHub", icon: "/assets/icons/github.svg", color: "#FFFFFF" },
  { name: "Figma", icon: "/assets/icons/figma.svg", color: "#F24E1E" },
  { name: "GSAP", icon: "/assets/icons/gsap.svg", color: "#88CE02" },
  { name: "Framer", icon: "/assets/icons/framer.svg", color: "#FFFFFF" },
];

export const SKILL_CATEGORIES = ["Frontend", "Backend", "Database", "UI/UX", "Tools", "DevOps"] as const;

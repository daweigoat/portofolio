export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  role: string;
  results: string[];
  image: string;
  mockupImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyId?: string;
  featured: boolean;
  year: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  category: "Frontend" | "Backend" | "Database" | "UI/UX" | "Tools" | "DevOps";
  icon?: string;
}

export interface TechItem {
  name: string;
  icon: string; // SVG path or image URL
  color?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  startYear: string;
  endYear: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  type: "work" | "freelance" | "internship";
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  startYear: string;
  endYear: string | "Present";
  description: string;
  achievements: string[];
  logo?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
  category: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: "award" | "hackathon" | "competition" | "opensource";
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WorkflowStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
  tools: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface StoryItem {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface CaseStudy {
  projectId: string;
  overview: string;
  research: string;
  problem: string;
  wireframe: string;
  design: string;
  development: string;
  testing: string;
  lessons: string;
  images: string[];
}

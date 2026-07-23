import type { ExperienceItem } from "@/types";

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-01",
    company: "Freelance",
    role: "Web Developer & UI/UX Designer",
    period: "2024 — Sekarang",
    startYear: "2024",
    endYear: "Present",
    description:
      "Mengerjakan berbagai proyek web development dan desain UI/UX secara freelance untuk klien dari berbagai industri.",
    achievements: [
      "Bikin landing page dan company profile untuk beberapa klien",
      "Desain dan develop aplikasi web dengan Next.js dan Figma",
      "Handle proyek dari konsep sampai deployment",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "React"],
    type: "freelance",
  },
  {
    id: "exp-02",
    company: "Freelance",
    role: "UI/UX Designer",
    period: "2023 — 2024",
    startYear: "2023",
    endYear: "2024",
    description:
      "Fokus di desain UI/UX untuk berbagai klien, mulai dari wireframing, prototyping, sampai high-fidelity design di Figma.",
    achievements: [
      "Desain beberapa aplikasi mobile dan web",
      "Bikin design system dan komponen reusable di Figma",
      "Kolaborasi langsung sama klien untuk iterasi desain",
    ],
    technologies: ["Figma", "Adobe XD", "Illustrator", "HTML", "CSS"],
    type: "freelance",
  },
];

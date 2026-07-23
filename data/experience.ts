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
      "Ngerjain macem-macem project web dev dan desain UI/UX secara freelance buat klien dari berbagai bidang.",
    achievements: [
      "Bikin landing page sama company profile buat klien",
      "Ngedesain dan develop web app pakai Next.js & Figma",
      "Handle project dari awal banget sampe bisa diakses online",
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
      "Fokus ngedesain UI/UX buat klien. Mulai dari bikin oret-oretan (wireframing), prototype, sampai desain final yang cakep di Figma.",
    achievements: [
      "Ngedesain beberapa aplikasi mobile dan web",
      "Bikin design system biar desainnya konsisten",
      "Sering tektokan sama klien buat nyesuain desain yang mereka mau",
    ],
    technologies: ["Figma", "Adobe XD", "Illustrator", "HTML", "CSS"],
    type: "freelance",
  },
];

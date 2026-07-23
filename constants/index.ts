import type { NavLink, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Rayyan Alghifari",
  title: "Rayyan Alghifari — Web Developer & UI/UX Designer",
  description:
    "I craft premium digital experiences that merge beautiful design with exceptional engineering. Web Developer & UI/UX Designer based in Indonesia.",
  url: "https://rayyan.dev",
  ogImage: "/assets/images/og-image.jpg",
  author: "Rayyan Alghifari",
  keywords: [
    "Web Developer",
    "UI/UX Designer",
    "Next.js",
    "React",
    "Frontend Developer",
    "Indonesia",
    "Portfolio",
  ],
  location: "Indonesia",
  email: "rayyanalghifari97@gmail.com",
  availableForWork: true,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Tentang", href: "#about" },
  { label: "Keahlian", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/daweigoat",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rayyan-alghifari-48b5a63a7",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rynn.alg",
    icon: "instagram",
  },
];

export const STATS = [
  { value: 5, label: "Proyek Selesai", suffix: "+" },
  { value: 2, label: "Tahun Belajar", suffix: "+" },
  { value: 15, label: "Teknologi Dikuasai", suffix: "+" },
  { value: 10, label: "Klien Happy", suffix: "+" },
];

export const WORKFLOW_STEPS = [
  "Research",
  "Planning",
  "Wireframe",
  "Prototype",
  "Development",
  "Testing",
  "Deployment",
];

import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    id: "svc-01",
    title: "Web Development",
    description:
      "Pengembangan web end-to-end pakai teknologi modern. Dari arsitektur sampai deployment, aku bangun aplikasi yang cepat, scalable, dan gampang dimaintain.",
    features: ["Aplikasi Next.js / React", "REST API & Backend", "Desain Database", "Optimasi Performa", "Implementasi SEO"],
    icon: "code",
  },
  {
    id: "svc-02",
    title: "UI Design",
    description:
      "Interface yang indah dan pixel-perfect yang nyeimbangin estetika sama fungsionalitas. Setiap elemen didesain dengan tujuan dan maksud yang jelas.",
    features: ["Visual Design", "Design System", "Component Library", "Brand Identity", "Tema Dark/Light"],
    icon: "palette",
  },
  {
    id: "svc-03",
    title: "UX Design",
    description:
      "Proses desain yang berpusat pada pengguna buat ngurangin friction dan naikin engagement. Aku ubah masalah kompleks jadi pengalaman yang simpel dan intuitif.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Information Architecture"],
    icon: "users",
  },
  {
    id: "svc-04",
    title: "Landing Page",
    description:
      "Landing page dengan konversi tinggi yang dibangun buat impact. Gabungin struktur copywriting yang persuasif, visual yang memukau, dan performa yang optimal.",
    features: ["Desain Conversion-Focused", "Siap A/B Testing", "Integrasi Analytics", "Mobile-First", "Load Time Cepat"],
    icon: "layout",
  },
  {
    id: "svc-05",
    title: "Company Profile",
    description:
      "Website company yang profesional untuk bangun kredibilitas, ceritain brand story kamu, dan generate leads yang berkualitas.",
    features: ["Desain Korporat", "Dukungan Multi-bahasa", "Integrasi CMS", "Form Kontak", "Seksi Blog / Berita"],
    icon: "building",
  },
  {
    id: "svc-06",
    title: "Dashboard & SaaS",
    description:
      "Dashboard kaya data dan interface SaaS yang bikin informasi kompleks jadi mudah dipahami dan workflow jadi lancar.",
    features: ["Visualisasi Data Real-time", "Role-based Access", "Chart & Grafik Kustom", "Layout Responsif", "Dark Mode"],
    icon: "bar-chart",
  },
];

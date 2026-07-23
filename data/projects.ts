import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    title: "AbsensiDigital — Face Recognition",
    tagline: "Sistem absensi biometrik berbasis face recognition & liveness detection",
    description:
      "Aplikasi absensi digital berbasis web yang menggunakan face recognition dan liveness detection. User cukup ketik username dan sistem otomatis verifikasi kehadiran melalui kamera. Dibangun 100% di browser tanpa backend khusus.",
    problem:
      "Absensi manual memakan waktu dan rentan manipulasi. Solusi biometrik yang ada biasanya mahal dan butuh hardware khusus.",
    solution:
      "Membangun sistem absensi berbasis web yang memanfaatkan face-api.js dan browser APIs, sehingga bisa dipakai di device apapun yang punya kamera tanpa instalasi.",
    technologies: ["HTML", "CSS", "JavaScript", "face-api.js", "TensorFlow.js"],
    role: "Full Stack Developer",
    results: [
      "Absensi real-time via webcam tanpa hardware tambahan",
      "Liveness detection untuk cegah pemalsuan foto",
      "Login multi-role: Admin & User",
      "Berjalan 100% di browser tanpa backend",
    ],
    image: "/assets/images/projects/project-01.png",
    mockupImage: "/assets/images/projects/project-01.png",
    liveUrl: undefined,
    githubUrl: "https://github.com/daweigoat/face-recognition",
    caseStudyId: "face-recognition",
    featured: true,
    year: "2026",
    category: "Web App",
  },
  {
    id: "project-02",
    title: "Portfolio Website",
    tagline: "Personal portfolio dengan desain premium dan animasi sinematik",
    description:
      "Website portfolio personal yang dibangun dengan Next.js, TypeScript, dan Framer Motion. Menampilkan proyek, keahlian, dan perjalanan karir dengan desain minimalis premium terinspirasi dari Apple.",
    problem:
      "Butuh platform untuk showcase karya dan skill secara profesional dengan tampilan yang berkesan dan tidak generik.",
    solution:
      "Bangun portfolio sendiri dari scratch dengan stack modern, animasi halus, dark mode, dan desain yang fully responsive.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    role: "Designer & Developer",
    results: [
      "Fully responsive di semua device",
      "Animasi smooth dengan Framer Motion",
      "Dark mode premium dengan glassmorphism",
      "TypeScript zero error",
    ],
    image: "",
    mockupImage: "",
    liveUrl: undefined,
    githubUrl: "https://github.com/daweigoat",
    featured: true,
    year: "2026",
    category: "UI/UX",
  },
  {
    id: "project-03",
    title: "StudyFlow — UI/UX Case Study",
    tagline: "Aplikasi produktivitas untuk membantu mahasiswa manajemen waktu dan fokus",
    description:
      "Desain UI/UX lengkap untuk aplikasi produktivitas mahasiswa. Dikerjakan mulai dari riset pengguna, wireframing, hingga high-fidelity prototype interaktif di Figma dengan design system yang rapi.",
    problem:
      "Mahasiswa sering kesulitan membagi waktu antara tugas kuliah, proyek sampingan, dan kehidupan pribadi.",
    solution:
      "Merancang aplikasi dengan fitur tracker pomodoro, dashboard interaktif untuk melihat statistik belajar harian, dan manajemen tugas terintegrasi.",
    technologies: ["Figma", "UI/UX Research", "Prototyping"],
    role: "UI/UX Designer",
    results: [
      "Desain dashboard produktivitas interaktif",
      "Fokus pada aksesibilitas dan kemudahan penggunaan",
      "Design system lengkap (Warna, Tipografi, Ikon)",
    ],
    image: "/assets/images/projects/project-03.png",
    mockupImage: "/assets/images/projects/project-03.png",
    liveUrl: undefined,
    githubUrl: undefined,
    featured: true,
    year: "2024",
    category: "UI/UX",
  },
];

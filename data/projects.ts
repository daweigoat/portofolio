import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "project-01",
    title: "AbsensiDigital — Face Recognition",
    tagline: "Sistem absen biometrik pake face recognition & liveness detection",
    description:
      "Web app buat absensi yang pakai face recognition sama liveness detection. User tinggal ketik username dan sistem bakal ngecek wajah otomatis lewat kamera. Kerennya, ini jalan 100% di browser tanpa butuh backend khusus.",
    problem:
      "Absen manual tuh makan waktu dan gampang diakalin. Solusi biometrik yang ada biasanya mahal dan butuh alat khusus.",
    solution:
      "Bikin sistem absen berbasis web pakai face-api.js. Jadinya bisa dipake di device apa aja yang ada kameranya, tanpa ribet instalasi.",
    technologies: ["HTML", "CSS", "JavaScript", "face-api.js", "TensorFlow.js"],
    role: "Full Stack Developer",
    results: [
      "Absen real-time via webcam tanpa alat tambahan",
      "Ada liveness detection buat cegah foto palsu",
      "Bisa login sebagai Admin atau User",
      "Jalan 100% di browser tanpa backend",
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
    tagline: "Portfolio personal dengan desain premium dan animasi smooth",
    description:
      "Website portfolio ini aku bangun pakai Next.js, TypeScript, dan Framer Motion. Tujuannya buat nampilin proyek, skill, dan perjalananku dengan desain minimalis ala-ala Apple yang keliatan premium.",
    problem:
      "Butuh tempat buat pamerin karya dan skill secara profesional, tapi pengen tampilannya beda dan nggak generik.",
    solution:
      "Nulis kode dari nol buat portfolio ini pakai stack modern. Fokus ke animasi yang halus, dark mode yang enak dilihat, dan pastinya responsive di HP.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    role: "Designer & Developer",
    results: [
      "Responsive banget di semua device",
      "Animasi super smooth pakai Framer Motion",
      "Dark mode premium gaya glassmorphism",
      "Kodenya rapi dan TypeScript zero error",
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
    tagline: "Aplikasi produktivitas buat bantu mahasiswa ngatur waktu",
    description:
      "Proyek desain UI/UX komplit buat aplikasi produktivitas mahasiswa. Aku kerjain mulai dari riset user, bikin wireframe, sampai jadi prototype interaktif di Figma pakai design system yang rapi.",
    problem:
      "Mahasiswa sering banget keteteran ngebagi waktu antara tugas kampus, proyek sampingan, dan waktu nongkrong.",
    solution:
      "Rancang aplikasi yang ada fitur tracker pomodoro, dashboard interaktif buat ngecek statistik belajar, dan to-do list yang gampang dipakai.",
    technologies: ["Figma", "UI/UX Research", "Prototyping"],
    role: "UI/UX Designer",
    results: [
      "Desain dashboard yang interaktif dan clean",
      "Fokus bikin aplikasinya gampang dipake siapa aja",
      "Design system-nya lengkap dari warna sampai ikon",
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

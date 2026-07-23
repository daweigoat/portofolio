"use client";

import { motion } from "framer-motion";
import { Star, GitFork, BookOpen } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import SectionTitle from "@/components/ui/SectionTitle";

const pinnedRepos = [
  {
    name: "face-recognition",
    description: "Sistem absensi biometrik berbasis face recognition & liveness detection. Berjalan langsung di browser tanpa backend.",
    language: "HTML",
    stars: 1,
    forks: 0,
    url: "https://github.com/daweigoat/face-recognition",
  },
  {
    name: "portfolio",
    description: "Website portfolio personal dengan desain premium, animasi Framer Motion, dan dark mode glassmorphism.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    url: "https://github.com/daweigoat",
  },
  {
    name: "ui-designs",
    description: "Kumpulan UI/UX design assets, komponen, dan template yang aku buat selama freelance.",
    language: "CSS",
    stars: 0,
    forks: 0,
    url: "https://github.com/daweigoat",
  },
];

const langColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  CSS: "#1572B6",
  HTML: "#E34C26",
};

const githubStats = [
  { label: "Repo Publik", value: "3" },
  { label: "Total Stars", value: "1+" },
  { label: "Kontribusi", value: "2026" },
  { label: "Status", value: "Aktif" },
];

export default function GitHub() {
  return (
    <section id="github" className="section-padding" aria-labelledby="github-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Open Source"
          title="Build di depan umum."
          subtitle="Aku percaya harus give back ke komunitas. Ini yang lagi aku kerjain di GitHub."
          id="github-title"
        />

        {/* Statistik GitHub */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {githubStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 rounded-2xl glass border border-white/[0.06] text-center space-y-1"
            >
              <p className="text-display-sm font-light text-primary">{stat.value}</p>
              <p className="text-xs text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Repos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-2xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 space-y-4 block"
            >
              <div className="flex items-start gap-3">
                <BookOpen size={16} className="text-muted mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-primary font-medium text-sm group-hover:underline underline-offset-2">
                    daweigoat/{repo.name}
                  </h3>
                  <p className="text-secondary text-xs leading-relaxed mt-1">{repo.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-5 text-xs text-muted">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: langColors[repo.language] || "#888" }}
                  />
                  <span>{repo.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={11} />
                  <span>{repo.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={11} />
                  <span>{repo.forks}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/daweigoat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/[0.1] text-secondary hover:text-primary hover:border-white/20 transition-all duration-300 text-sm"
          >
            <GitHubIcon size={16} />
            Lihat semua di GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

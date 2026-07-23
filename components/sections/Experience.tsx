"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { EXPERIENCE } from "@/data/experience";
import { cn } from "@/lib/utils";

const typeLabel: Record<string, string> = {
  work: "Full-time",
  freelance: "Freelance",
  internship: "Magang",
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding" aria-labelledby="exp-title">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              eyebrow="Pengalaman"
              title="Tempat-tempat aku pernah tumbuh."
              subtitle="Setiap peran ngajarin aku hal baru soal cara bikin produk yang bener-bener bagus."
              id="exp-title"
            />
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="space-y-0">
              {EXPERIENCE.map((exp, i) => (
                <motion.article
                  key={exp.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-14 pb-14 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[14px] top-1 w-3 h-3 rounded-full bg-surface border-2 border-white/20" />

                  {/* Card */}
                  <div className="p-6 rounded-2xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-primary font-light text-lg tracking-tight">{exp.role}</h3>
                        <p className="text-secondary text-sm">{exp.company}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs glass border border-white/[0.08] text-secondary mb-1">
                          {typeLabel[exp.type]}
                        </span>
                        <p className="text-xs text-muted">{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-secondary text-sm leading-relaxed">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-muted">
                          <div className="w-1 h-1 rounded-full bg-white/20 shrink-0 mt-1.5" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded text-xs bg-white/[0.03] border border-white/[0.06] text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { PROJECTS } from "@/data/projects";

const phases = [
  { label: "Overview", description: "Tujuan proyek, stakeholder, dan metrik keberhasilan didefinisikan dengan jelas sebelum ada satu piksel pun yang dibuat." },
  { label: "Riset", description: "Wawancara user, analisis kompetitor, dan evaluasi heuristik untuk temuin pain point yang ada." },
  { label: "Problem", description: "Hasil riset disintesis jadi pernyataan masalah yang jelas dan user journey map yang menonjolkan friction." },
  { label: "Wireframe", description: "Eksplorasi cepat layout dan solusi flow dalam bentuk low-fidelity sebelum investasi ke visual." },
  { label: "Desain UI", description: "High-fidelity design di Figma lengkap dengan design system yang konsisten, motion spec, dan layout responsif." },
  { label: "Development", description: "Dibangun pakai Next.js dan TypeScript, implementasi design spec dengan presisi pixel-perfect." },
  { label: "Testing", description: "Usability testing, QA lintas browser, audit Lighthouse, dan pengecekan aksesibilitas." },
  { label: "Pelajaran", description: "Apa yang berhasil, apa yang kurang, dan gimana proyek ini bentuk keputusan desain dan engineering ke depannya." },
];

export default function CaseStudies() {
  const featured = PROJECTS[0];

  return (
    <section id="case-studies" className="section-padding" aria-labelledby="case-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Case Study"
          title="Gimana aku selesaiin masalah kompleks."
          subtitle="Deep dive ke proses desain dan development aku — dari riset sampai hasil nyata."
          id="case-title"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group p-6 rounded-2xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                  <span className="text-xs text-muted font-mono">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-primary font-light">{phase.label}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{phase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-3xl glass border border-white/[0.06] space-y-4"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted">Case Study Lengkap</p>
          <h3 className="text-display-sm font-light text-primary">{featured.title}</h3>
          <p className="text-secondary leading-relaxed max-w-2xl">{featured.description}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {featured.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs glass border border-white/[0.08] text-secondary">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted pt-2 italic">
            Case study lengkap coming soon — ganti bagian ini sama write-up detail proyek kamu.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

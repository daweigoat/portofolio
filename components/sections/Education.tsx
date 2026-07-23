"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { EDUCATION } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section-padding" aria-labelledby="edu-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Pendidikan"
          title="Pondasi akademis."
          id="edu-title"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.article
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-7 rounded-3xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <GraduationCap size={22} className="text-secondary" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-muted">{edu.period}</span>
              </div>

              <div>
                <h3 className="text-primary font-light text-lg tracking-tight">{edu.degree}</h3>
                <p className="text-secondary text-sm">{edu.field}</p>
                <p className="text-muted text-xs mt-1">{edu.institution}</p>
              </div>

              <p className="text-secondary text-sm leading-relaxed">{edu.description}</p>

              <ul className="space-y-2">
                {edu.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-xs text-muted">
                    <div className="w-1 h-1 rounded-full bg-white/20 shrink-0 mt-1.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

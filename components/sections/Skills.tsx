"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Marquee from "@/components/ui/Marquee";
import { SKILLS, SKILL_CATEGORIES, TECH_STACK } from "@/data/skills";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

const categoryColors: Record<string, string> = {
  Frontend: "rgba(59,130,246,0.1)",
  Backend: "rgba(16,185,129,0.1)",
  Database: "rgba(245,158,11,0.1)",
  "UI/UX": "rgba(236,72,153,0.1)",
  Tools: "rgba(139,92,246,0.1)",
  DevOps: "rgba(239,68,68,0.1)",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group p-4 rounded-2xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-default"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-primary font-light">{skill.name}</p>
        <span className="text-xs text-muted tabular-nums">{skill.level}%</span>
      </div>
      <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.04 + 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const filteredSkills = SKILLS.filter((s) => s.category === activeCategory);
  const marqueeItems = TECH_STACK.map((t) => t.name);

  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Keahlian"
          title="Toolkit yang dibangun untuk kualitas."
          subtitle="Terus belajar, terus shipping. Ini yang aku bawa ke setiap proyek."
          id="skills-title"
        />

        {/* Tab kategori */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kategori keahlian">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all duration-300",
                activeCategory === cat
                  ? "bg-white text-black"
                  : "glass border border-white/[0.08] text-secondary hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            role="tabpanel"
          >
            {filteredSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Marquee divider */}
        <div className="pt-8 space-y-4 border-t border-white/[0.06]">
          <Marquee items={marqueeItems} speed={35} />
          <Marquee items={[...marqueeItems].reverse()} speed={35} reverse />
        </div>
      </div>
    </section>
  );
}

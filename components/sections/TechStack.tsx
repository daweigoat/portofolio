"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { TECH_STACK } from "@/data/skills";

export default function TechStack() {
  return (
    <section id="tech" className="section-padding" aria-labelledby="tech-title">
      <div className="container-custom space-y-14">
        <SectionTitle
          eyebrow="Tech Stack"
          title="Tools yang aku pakai setiap hari."
          id="tech-title"
        />

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -6, scale: 1.1 }}
              className="group flex flex-col items-center gap-2 p-3 rounded-2xl glass border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 cursor-default"
              title={tech.name}
            >
              {/* Tech icon placeholder */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </div>
              <p className="text-[10px] text-muted group-hover:text-secondary transition-colors text-center leading-tight">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

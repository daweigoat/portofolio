"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { STORY } from "@/data/misc";
import { cn } from "@/lib/utils";

export default function Story() {
  return (
    <section id="story" className="section-padding" aria-labelledby="story-title">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Left — sticky title */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              eyebrow="Perjalananku"
              title="Cerita di balik semua ini."
              subtitle="Setiap baris kode punya cerita. Ini cerita aku — dari rasa penasaran sampai jadi craft yang serius."
              id="story-title"
            />
          </div>

          {/* Right — Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="space-y-0">
              {STORY.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-12 md:pl-16 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className={cn(
                      "absolute left-[10px] md:left-[18px] top-1 w-4 h-4 rounded-full border-2 transition-colors",
                      item.highlight
                        ? "bg-white border-white shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                        : "bg-surface border-white/20"
                    )}
                  />

                  {/* Year */}
                  <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">{item.year}</p>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-xl font-light tracking-tight mb-3",
                      item.highlight ? "text-primary" : "text-primary/80"
                    )}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary leading-relaxed text-sm max-w-lg">
                    {item.description}
                  </p>

                  {/* Highlight accent line */}
                  {item.highlight && (
                    <div className="mt-4 h-px w-16 bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

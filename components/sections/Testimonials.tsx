"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  const testimonial = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="section-padding" aria-labelledby="test-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Testimoni"
          title="Kata klien aku."
          subtitle="Hubungan yang aku bangun sama pentingnya dengan produk yang aku kirim."
          align="center"
          id="test-title"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 md:p-12 rounded-3xl glass border border-white/[0.08] text-center space-y-6"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote>
                  <p className="text-primary text-lg md:text-xl font-light leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <div className="space-y-1">
                  <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mx-auto text-sm">
                    {testimonial.name[0]}
                  </div>
                  <p className="text-primary font-medium text-sm">{testimonial.name}</p>
                  <p className="text-secondary text-xs">{testimonial.role} · {testimonial.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Testimoni sebelumnya"
              className="w-10 h-10 rounded-full glass border border-white/[0.08] flex items-center justify-center text-secondary hover:text-primary hover:border-white/20 transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ke testimoni ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Testimoni berikutnya"
              className="w-10 h-10 rounded-full glass border border-white/[0.08] flex items-center justify-center text-secondary hover:text-primary hover:border-white/20 transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

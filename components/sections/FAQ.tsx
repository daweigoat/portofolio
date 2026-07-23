"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { FAQ } from "@/data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-01");

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-title">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionTitle
              eyebrow="FAQ"
              title="Pertanyaan yang sering ditanya, udah dijawab."
              subtitle="Semua yang perlu kamu tau sebelum kita kerja bareng."
              id="faq-title"
            />
          </div>

          <div
            className="space-y-3"
            role="list"
            aria-label="Pertanyaan yang sering ditanya"
          >
            {FAQ.map((item, i) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "glass-md border-white/[0.12]"
                      : "glass border-white/[0.06] hover:border-white/[0.10]"
                  }`}
                  role="listitem"
                >
                  <button
                    onClick={() => toggle(item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="text-primary font-light text-sm md:text-base leading-snug">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <Plus size={16} className="text-secondary" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-secondary text-sm leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

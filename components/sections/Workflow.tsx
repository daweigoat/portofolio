"use client";

import { motion } from "framer-motion";
import { Search, Map, PenTool, Play, Code, TestTube, Rocket } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  { icon: Search, label: "Riset", description: "Pahami user, pasar, dan constraint secara mendalam sebelum nyentuh satu piksel atau baris kode pun." },
  { icon: Map, label: "Perencanaan", description: "Definisikan scope, arsitektur, dan metrik keberhasilan. Rencana yang jelas nghemat berminggu-minggu pekerjaan ulang." },
  { icon: PenTool, label: "Wireframe", description: "Eksplorasi cepat berbagai solusi layout dan flow dalam low-fidelity sebelum investasi ke visual." },
  { icon: Play, label: "Prototype", description: "Bikin prototype interaktif yang bisa diklik untuk user testing dan alignment sama stakeholder." },
  { icon: Code, label: "Development", description: "Build dengan kode yang bersih dan scalable. Implementasi setiap detail desain dengan presisi pixel-perfect." },
  { icon: TestTube, label: "Testing", description: "QA lintas device, audit aksesibilitas, profiling performa, dan validasi user." },
  { icon: Rocket, label: "Deployment", description: "Launch dengan percaya diri. Monitor, iterasi, dan terus improve setelah live." },
];

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding" aria-labelledby="workflow-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Proses Kerja"
          title="Gimana aku kerja."
          subtitle="Proses 7 langkah yang disiplin untuk memastikan setiap proyek deliver dengan kualitas tinggi, tepat waktu, dan tanpa kejutan."
          align="center"
          id="workflow-title"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Garis penghubung */}
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-start gap-6"
                >
                  {/* Lingkaran step */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl glass border border-white/[0.08] flex items-center justify-center shrink-0 group hover:border-white/20 transition-colors duration-300">
                    <Icon size={20} className="text-secondary" strokeWidth={1.5} />
                  </div>

                  {/* Konten */}
                  <div className="flex-1 py-3">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs text-muted font-mono">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-primary font-light">{step.label}</h3>
                    </div>
                    <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

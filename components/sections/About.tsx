"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Languages, Heart, Target } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Counter from "@/components/ui/Counter";
import { STATS } from "@/constants";

const infoItems = [
  { icon: MapPin, label: "Lokasi", value: "Indonesia 🇮🇩" },
  { icon: Code2, label: "Fokus", value: "Web Dev & UI/UX Design" },
  { icon: Languages, label: "Bahasa", value: "Indonesia, Inggris" },
  { icon: Heart, label: "Hobi", value: "Desain, Open Source, Kopi ☕" },
  { icon: Target, label: "Goal Sekarang", value: "Bangun produk SaaS & terus berkembang jadi developer-designer" },
];

export default function About() {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-title">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Kiri — Bio */}
          <div className="space-y-8">
            <SectionTitle
              eyebrow="Tentang Aku"
              title="Designer yang bisa ngoding, developer yang paham desain."
              id="about-title"
            />

            <div className="space-y-5 text-secondary leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Aku Rayyan Alghifari — Web Developer dan UI/UX Designer dari Indonesia. Aku spesialis bikin produk digital yang keren secara visual tapi juga solid dari sisi teknis.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Workflow-ku dimulai dari Figma — riset, wireframe, prototype — terus ke kode. Aku percaya semua detail itu penting: dari delay animasi 0.1 detik sampai warna abu-abu yang tepat di secondary text.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Kalau lagi ga ngoding, biasanya aku lagi ngulik website-website award-winning, kontribusi ke open source, atau explore gimana teknologi AI bisa ubah cara kita bikin user experience.
              </motion.p>
            </div>

            {/* Info grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-3 pt-4"
            >
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg glass border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-sm text-primary">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Kanan — Statistik */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 rounded-2xl glass border border-white/[0.06] space-y-1 hover:border-white/[0.12] transition-colors duration-300"
                >
                  <p className="text-display-md font-light tracking-tight text-primary tabular-nums">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-secondary">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Card ketersediaan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(59,130,246,0.12)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)", filter: "blur(20px)" }}
              />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-secondary uppercase tracking-wider">Lagi Tersedia</span>
                </div>
                <p className="text-primary font-light leading-relaxed">
                  Terbuka untuk proyek freelance, kerja full-time, dan kolaborasi seru. Yuk bikin sesuatu yang keren bareng!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-primary underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all"
                >
                  Hubungi aku →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

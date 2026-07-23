"use client";

import { motion } from "framer-motion";
import { Code, Palette, Users, Layout, Building, BarChart, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { SERVICES } from "@/data/services";
import type { Service } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  palette: Palette,
  users: Users,
  layout: Layout,
  building: Building,
  "bar-chart": BarChart,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group p-7 rounded-3xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 space-y-5 relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 100%)" }}
      />

      <div className="relative z-10 space-y-5">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Icon size={22} className="text-primary" strokeWidth={1.5} />
        </div>

        {/* Title & description */}
        <div className="space-y-2">
          <h3 className="text-lg font-light text-primary tracking-tight">{service.title}</h3>
          <p className="text-sm text-secondary leading-relaxed">{service.description}</p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-muted">
              <div className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-1 text-xs text-muted group-hover:text-secondary transition-colors duration-300 mt-2">
          <span>Selengkapnya</span>
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding" aria-labelledby="services-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Layanan"
          title="Apa yang bisa aku bangun buat kamu."
          subtitle="Dari konsep sampai deployment, aku handle seluruh proses pembuatan produk digital."
          id="services-title"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { CERTIFICATES } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="section-padding" aria-labelledby="cert-title">
      <div className="container-custom space-y-16">
        <SectionTitle
          eyebrow="Sertifikat"
          title="Bukti proses belajar tiada henti."
          subtitle="Beberapa sertifikasi dan kursus yang udah diselesaiin buat terus upgrade skill."
          id="cert-title"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-3xl glass border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-2xl bg-white/[0.03] text-primary">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/[0.05] text-secondary border border-white/[0.05]">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-secondary text-sm">
                    <ShieldCheck size={16} />
                    <span>{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary text-sm mt-2">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              {cert.credentialUrl && (
                <div className="mt-8 pt-4 border-t border-white/[0.06]">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    Lihat Sertifikat
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

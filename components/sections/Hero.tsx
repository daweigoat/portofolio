"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/SocialIcons";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/daweigoat" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/rayyan-alghifari-48b5a63a7" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/rynn.alg" },
];

export default function Hero() {
  // Fix hydration: mouse state hanya aktif setelah mounted di client
  const [mouse, setMouse] = useState({ normalizedX: 0, normalizedY: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      setMouse({
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Saat SSR, parallax = 0 supaya ga ada mismatch
  const parallaxX = mounted ? mouse.normalizedX * -15 : 0;
  const parallaxY = mounted ? mouse.normalizedY * -10 : 0;

  // Background gradient juga fix — pakai nilai statis saat SSR
  const bgGradientPos = mounted
    ? `${50 + mouse.normalizedX * 10}% ${50 + mouse.normalizedY * 10}%`
    : "50% 50%";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)", filter: "blur(80px)" }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)", filter: "blur(100px)" }}
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Mouse parallax highlight — hanya aktif di client */}
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: `radial-gradient(ellipse 40% 40% at ${bgGradientPos}, rgba(255,255,255,0.015) 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-custom relative z-10 pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:py-28">

          {/* Kiri — Teks konten */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge ketersediaan */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/[0.08] text-xs text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Tersedia untuk proyek baru
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-display-2xl font-light tracking-tight leading-none">
                <span className="text-primary block">Bikin</span>
                <span className="text-secondary block">pengalaman</span>
                <span className="text-primary block">digital yang</span>
                <span className="text-gradient block">berkesan.</span>
              </h1>
            </motion.div>

            {/* Deskripsi */}
            <motion.p
              variants={itemVariants}
              className="text-secondary text-lg leading-relaxed max-w-md"
            >
              Halo, aku <strong className="text-primary font-normal">Rayyan Alghifari</strong> — Web Developer & UI/UX Designer yang selalu obsesi sama tiap piksel, tiap interaksi, dan tiap milidetik.
            </motion.p>

            {/* Tombol CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <MagneticButton
                href="#projects"
                className="group px-7 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300 gap-2"
              >
                Lihat Proyek
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href="/assets/files/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full glass border border-white/[0.12] text-primary text-sm hover:bg-white/[0.06] transition-all duration-300 gap-2"
              >
                <Download size={15} />
                Download CV
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="px-7 py-3.5 rounded-full text-secondary text-sm hover:text-primary transition-colors duration-300 gap-2"
              >
                Hubungi Aku
              </MagneticButton>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted hover:text-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="h-4 w-px bg-white/10" />
              <span className="text-xs text-muted">Rayyan Alghifari</span>
            </motion.div>
          </motion.div>

          {/* Kanan — Foto profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              style={{ x: parallaxX, y: parallaxY }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="relative"
            >
              {/* Glow di belakang foto */}
              <div
                className="absolute inset-0 rounded-3xl scale-110 opacity-30"
                style={{
                  background: "radial-gradient(ellipse, rgba(59,130,246,0.4) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              {/* Container foto */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden glass border border-white/[0.08]">
                <Image
                  src="/assets/images/profile-v2.jpg"
                  alt="Rayyan Alghifari"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating info cards */}
              <motion.div
                className="absolute -left-8 bottom-16 px-4 py-3 rounded-2xl glass border border-white/[0.08] shadow-card hidden md:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs text-muted">Pengalaman</p>
                <p className="text-primary font-medium">2+ Tahun</p>
              </motion.div>

              <motion.div
                className="absolute -right-8 top-16 px-4 py-3 rounded-2xl glass border border-white/[0.08] shadow-card hidden md:block"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-xs text-muted">Proyek</p>
                <p className="text-primary font-medium">5+ Selesai</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}

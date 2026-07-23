"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { SITE_CONFIG, NAV_LINKS } from "@/constants";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/daweigoat" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/rayyan-alghifari-48b5a63a7" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/rynn.alg" },
  { icon: Mail, label: "Email", href: "mailto:rayyanalghifari97@gmail.com" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-background">
      {/* Gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-display-sm font-light tracking-tight text-primary">
                Rayyan<span className="text-secondary">.</span>
              </span>
            </Link>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Bikin pengalaman digital premium yang gabungin desain indah sama engineering yang solid.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full glass border border-white/[0.08] flex items-center justify-center text-secondary hover:text-primary hover:border-white/20 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted">Navigasi</h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted">Kontak</h3>
            <div className="space-y-3">
              <a
                href="mailto:rayyanalghifari97@gmail.com"
                className="block text-sm text-secondary hover:text-primary transition-colors"
              >
                rayyanalghifari97@gmail.com
              </a>
              <p className="text-sm text-secondary">Indonesia 🇮🇩</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-secondary">Tersedia untuk kerja</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.06]">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Rayyan Alghifari. Semua hak dilindungi.
          </p>
          <p className="text-xs text-muted">
            Didesain & dibangun pakai{" "}
            <span className="text-secondary">Next.js · TypeScript · Tailwind · GSAP</span>
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 rounded-full glass border border-white/[0.08] flex items-center justify-center text-secondary hover:text-primary hover:border-white/20 transition-all duration-300"
            aria-label="Kembali ke atas"
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

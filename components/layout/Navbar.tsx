"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";
import GoogleTranslate from "@/components/ui/GoogleTranslate";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for active section tracking
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[990] transition-all duration-500",
          isScrolled ? "py-3" : "py-5"
        )}
      >
        <div
          className={cn(
            "container-custom flex items-center justify-between transition-all duration-500",
            isScrolled && "max-w-5xl"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-medium tracking-tight hover:opacity-70 transition-opacity z-10"
            aria-label="Home"
          >
            <span className="text-primary">RA</span>
            <span className="text-secondary">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500",
              isScrolled
                ? "glass border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
                : "bg-transparent"
            )}
            aria-label="Navigasi utama"
          >
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-1.5 text-sm rounded-full transition-all duration-300",
                    isActive
                      ? "text-primary"
                      : "text-secondary hover:text-primary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/08"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Translate (Mobile & Desktop) + CTA (Desktop) */}
          <div className="flex items-center gap-3 md:gap-4">
            <GoogleTranslate />
            
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:block px-4 py-2 text-sm rounded-full glass border border-white/[0.08] text-primary hover:bg-white/[0.06] transition-all duration-300"
            >
              Ngobrol Yuk
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden text-primary z-10 p-2"
              aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
            >
            <AnimatePresence mode="wait">
              {isMobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[980] glass-strong flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-display-sm font-light text-primary hover:text-secondary transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 + 0.1 }}
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="mt-4 px-8 py-3 rounded-full border border-white/20 text-primary text-sm hover:bg-white/05 transition-all"
              >
                Ngobrol Yuk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

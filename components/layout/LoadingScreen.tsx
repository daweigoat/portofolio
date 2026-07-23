"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let rafId: number;
    const duration = 2200;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const eased = 1 - Math.pow(1 - Math.min(elapsed / duration, 1), 3);
      const current = Math.floor(eased * 100);
      setProgress(current);

      if (current < 100) {
        rafId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsLoading(false), 400);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Jangan render apapun di server
  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
        >
          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Nama */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center z-10"
          >
            <p className="text-xs tracking-[0.4em] text-secondary uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-display-lg font-light tracking-tight text-primary">
              Rayyan<br />
              <span className="text-secondary">Alghifari</span>
            </h1>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-16 left-0 right-0 px-8 md:px-16 z-10"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs text-muted tracking-widest uppercase">Loading</span>
              <span className="text-xs text-secondary font-mono tabular-nums">{progress}%</span>
            </div>
            <div className="h-px bg-surface-3 w-full overflow-hidden">
              <div
                className="h-full bg-white/40 transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>

          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

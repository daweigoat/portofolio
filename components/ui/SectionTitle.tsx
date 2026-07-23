"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  id?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  id,
}: SectionTitleProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-[0.4em] uppercase text-muted"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-display-lg font-light tracking-tight text-primary"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "text-secondary leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

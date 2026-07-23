"use client";

import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  className,
  strength = 0.3,
  onClick,
  href,
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = buttonRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    controls.start({ x, y, transition: { type: "spring", stiffness: 300, damping: 20 } });
  };

  const handleMouseLeave = () => {
    controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } });
  };

  const Component = href ? "a" : "button";

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.div animate={controls}>
        <Component
          href={href}
          target={target}
          rel={rel}
          onClick={onClick}
          aria-label={ariaLabel}
          className={cn("inline-flex items-center justify-center", className)}
        >
          {children}
        </Component>
      </motion.div>
    </div>
  );
}

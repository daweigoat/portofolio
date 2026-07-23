"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const mousePosition = useMousePosition();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const dotSpringConfig = { damping: 40, stiffness: 600, mass: 0.2 };

  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);
  }, [mousePosition.x, mousePosition.y, cursorX, cursorY, mounted]);

  // Render null di server dan saat belum mounted — fix hydration
  if (!mounted) return null;

  return (
    <>
      {/* Titik kursor */}
      <motion.div
        className="pointer-events-none fixed z-[9999] top-0 left-0 mix-blend-difference"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Ring kursor */}
      <motion.div
        className="pointer-events-none fixed z-[9998] top-0 left-0"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-8 h-8 rounded-full border border-white/30" />
      </motion.div>

      {/* Glow spotlight */}
      <motion.div
        className="pointer-events-none fixed z-[9990] top-0 left-0"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className="w-64 h-64 rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      </motion.div>
    </>
  );
}

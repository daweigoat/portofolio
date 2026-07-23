"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[999] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(59,130,246,0.6) 100%)",
      }}
    />
  );
}

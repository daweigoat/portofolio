"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function useLenis() {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenisInstance = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenisInstance?.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenisInstance?.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

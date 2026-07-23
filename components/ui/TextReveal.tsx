"use client";

import { useRef, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function TextReveal({
  text,
  className,
  delay = 0,
  once = true,
  as: Tag = "p",
}: TextRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.3, once });
  const words = text.split(" ");

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag
      ref={ref as any}
      className={cn("word-reveal-container", isInView && "revealed", className)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="word mr-[0.25em] last:mr-0">
          <span
            className="word-inner"
            style={{
              transitionDelay: `${delay + i * 0.06}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  );
}

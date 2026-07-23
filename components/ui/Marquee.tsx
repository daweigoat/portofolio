"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
  separator?: string;
}

export default function Marquee({
  items,
  speed = 40,
  reverse = false,
  className,
  separator = "·",
}: MarqueeProps) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className={cn("overflow-hidden w-full", className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "flex gap-8 whitespace-nowrap",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-8 shrink-0">
            <span className="text-secondary text-sm tracking-wider">{item}</span>
            <span className="text-muted text-sm">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

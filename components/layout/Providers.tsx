"use client";

import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  useLenis();
  return <>{children}</>;
}

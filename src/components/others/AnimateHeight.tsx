"use client";

import { m } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const AnimateHeight = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // Usar o primeiro e único componente
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        // Limpar após o componente ser removido
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <m.div
      animate={{ height }}
      className="overflow-hidden"
      transition={{ type: "spring", mass: 0.01 }}
    >
      <div ref={containerRef}>{children}</div>
    </m.div>
  );
};

export default AnimateHeight;

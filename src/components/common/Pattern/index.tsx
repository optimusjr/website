import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useId, useRef } from "react";

import variables from "@/styles/variables.module.scss";

import styles from "./pattern.module.scss";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Props {
  SVGPattern: React.ComponentType<{ id: string }>;
  backgroundColor: "green";
  gradient?: "linear" | "radial";
}

const Pattern = ({ SVGPattern, backgroundColor }: Props) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springedScrollYProgress = useSpring(scrollYProgress, {
    damping: 15,
    mass: 0.27,
    stiffness: 55,
  });

  const isTouch = useMediaQuery("(pointer: coarse)");
  const y = useTransform(
    isTouch ? scrollYProgress : springedScrollYProgress,
    [0, 1],
    ["-50%", "-30%"]
  );

  const patternId = useId();
  const gradientId = useId();

  return (
    <div className={[styles.pattern, styles[backgroundColor]].join(" ")} ref={containerRef}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <SVGPattern id={patternId} />

          <radialGradient id={gradientId}>
            <stop offset="50%" className={styles.gradientColor} />
            <stop offset="100%" className={styles.gradientTransparent} />
          </radialGradient>
        </defs>
        <m.rect fill={`url(#${patternId})`} style={{ y }} className={styles.patternRect} />
        <rect fill={`url(#${gradientId})`} height="100%" width="100%" />
      </svg>
    </div>
  );
};

export default Pattern;

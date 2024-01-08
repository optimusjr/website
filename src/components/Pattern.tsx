"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useId, useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import useMediaQuery from "@/hooks/useMediaQuery";

const pattern = tv({
  slots: {
    container: "absolute inset-0 -z-10 overflow-hidden",
    patternDiv: "absolute aspect-square min-h-full w-full",
    gradientDiv: "absolute size-full",
  },
  variants: {
    bgColor: {
      green: {
        container: "bg-secondary-100 fill-secondary-200",
        gradientDiv: "from-secondary-100",
      },
    },
    gradient: {
      radial: { gradientDiv: "top-[-30%] bg-gradient-radial" },
    },
  },
});

interface Props extends VariantProps<typeof pattern> {
  SVGPattern: React.ComponentType<{ id: string }>;
}

const Pattern = ({ SVGPattern, ...props }: Props) => {
  const { container, patternDiv, gradientDiv } = pattern(props);

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
    ["-50%", "-30%"],
  );

  const patternId = useId();

  return (
    <div className={container()} ref={containerRef}>
      <div className={patternDiv()}>
        <div className={gradientDiv()} />

        <svg className="size-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <SVGPattern id={patternId} />
          </defs>
          <m.rect className="h-[200vh] w-full" fill={`url(#${patternId})`} style={{ y }} />
        </svg>
      </div>
    </div>
  );
};

export default Pattern;

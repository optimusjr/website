"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useId, useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import useMediaQuery from "@/hooks/useMediaQuery";

const pattern = tv({
  slots: {
    container: "absolute inset-0 -z-10",
    svg: "absolute size-full",
    gradientDiv: "absolute size-full",
  },
  variants: {
    bgColor: {
      secondary: {
        container: "bg-secondary-100",
        svg: "fill-primary-200",
        gradientDiv: "from-secondary-100 from-50%",
      },
      tintSecondary: {
        container: "bg-secondary-600",
        svg: "fill-primary-800",
        gradientDiv: "from-secondary-600 from-50%",
      },
    },
    gradient: {
      radial: {
        gradientDiv: "bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]",
      },
      linear: { gradientDiv: "bg-gradient-to-b from-50%" },
    },
  },
});

interface Props extends VariantProps<typeof pattern> {
  SVGPattern: React.ComponentType<{ id: string }>;
}

const Pattern = ({ SVGPattern, ...props }: Props) => {
  const { container, svg, gradientDiv } = pattern(props);

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
    ["-100%", "0%"],
  );

  const patternId = useId();

  return (
    <div className={container()} ref={containerRef}>
      <svg className={svg()} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <SVGPattern id={patternId} />
        </defs>
        <m.rect
          className="h-[200%] min-h-full w-screen"
          fill={`url(#${patternId})`}
          style={{ y }}
        />
      </svg>
      <div className={gradientDiv()} />
    </div>
  );
};

export default Pattern;

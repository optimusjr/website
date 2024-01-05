"use client";

import {
  m,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useRef } from "react";

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

const Parallax = ({ children, baseVelocity }: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 15,
    mass: 0.27,
    stiffness: 55,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 10], {
    clamp: false,
  });

  // A função wrap vai de 0 até -100/(n° de vezes que children está sendo repetido)
  // Como atualmente ele está repetido 2 vezes então vai de 0 a -50
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  // Desacelerar on hover
  const hoverFactor = useSpring(1, { stiffness: 30 });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000) * hoverFactor.get();

    // Muda a direção da animação dependendo do scroll
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get() * hoverFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      onMouseEnter={() => {
        hoverFactor.set(1 / 4);
      }}
      onMouseLeave={() => {
        hoverFactor.set(1);
      }}
      className="flex w-full overflow-hidden"
    >
      <m.div className="flex w-min py-4 sm:py-8 md:py-16" style={{ x }}>
        {/*
          A quantidade de vezes que se deve repetir o children vai
          depender do tamanho do conteúdo e da tela.
          Atualmente ele está sendo repetido duas vezes.
          Cuidado que isso vai influencia nos valores que vão dentro da função wrap
        */}
        {children}
        {children}
      </m.div>
    </div>
  );
};

export default Parallax;

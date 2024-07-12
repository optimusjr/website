"use client";

import { m, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ArrowLeftIcon from "@/components/icons/ArrowLeft";
import ArrowRightIcon from "@/components/icons/ArrowRight";
import Button from "@/components/ui/Button";
import { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const Carousel = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLUListElement>(null);

  const [rightDragConstraint, setRightDragConstraint] = useState(0);
  const slideMarginRight = 32;

  useEffect(() => {
    const measureRightDragConstraint = () => {
      setRightDragConstraint(
        carouselRef.current && containerRef.current
          ? containerRef.current.clientWidth - carouselRef.current.scrollWidth - slideMarginRight
          : 0,
      );
    };
    measureRightDragConstraint();

    window.addEventListener("resize", measureRightDragConstraint);
    return () => {
      window.removeEventListener("resize", measureRightDragConstraint);
    };
  }, []);

  // Setup buttons functionality
  const buttonSpeed = 300;
  const x = useMotionValue(0);
  const moveFactor = useMotionValue(0);

  useAnimationFrame((t, delta) => {
    const moveBy = moveFactor.get() * (delta / 1000);
    const currentX = x.get();

    if (moveBy === 0) return;

    if (currentX === 0 && moveBy > 0) return;
    if (currentX === rightDragConstraint && moveBy < 0) return;

    if (currentX + moveBy > 0) return x.jump(0);
    if (currentX + moveBy < rightDragConstraint) return x.jump(rightDragConstraint);

    x.jump(currentX + moveBy);
  });

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <m.ul
        dragConstraints={{
          right: 0,
          left: rightDragConstraint,
        }}
        className="flex min-w-full cursor-grab gap-8 p-8 pb-0 active:cursor-grabbing"
        drag="x"
        ref={carouselRef}
        style={{ x }}
      >
        {children}
      </m.ul>

      <div className="flex justify-center gap-32 p-4 md:justify-end">
        <Button
          onPointerDown={() => moveFactor.set(buttonSpeed)}
          onPointerEnter={() => moveFactor.set(buttonSpeed / 2)}
          onPointerLeave={() => moveFactor.set(0)}
          onPointerUp={() => moveFactor.set(buttonSpeed / 2)}
          variant="text"
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          onPointerDown={() => moveFactor.set(-buttonSpeed)}
          onPointerEnter={() => moveFactor.set(-buttonSpeed / 2)}
          onPointerLeave={() => moveFactor.set(0)}
          onPointerUp={() => moveFactor.set(-buttonSpeed / 2)}
          variant="text"
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;

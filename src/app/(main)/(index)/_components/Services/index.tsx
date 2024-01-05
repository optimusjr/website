"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import GearIcon from "@/components/icons/Gear";
import useMediaQuery from "@/hooks/useMediaQuery";

import ServicesScreen from "./ServicesScreen";

const Services = () => {
  const isTouch = useMediaQuery("(pointer: coarse)");

  if (isTouch) {
    return <ServicesMobile />;
  } else {
    return <ServicesDesktop />;
  }
};

const ServicesDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  useEffect(() => {
    const loadMaxScroll = () => {
      const scrollWidth =
        scrollRef.current?.getBoundingClientRect().width || scrollRef.current?.offsetWidth;
      const containerWidth =
        containerRef.current?.getBoundingClientRect().width || containerRef.current?.offsetWidth;

      if (scrollWidth && containerWidth) {
        setMaxScroll(-scrollWidth + containerWidth);
      }
    };

    loadMaxScroll();
    addEventListener("resize", loadMaxScroll);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, maxScroll]);
  const springedX = useSpring(x, { damping: 15, mass: 0.27, stiffness: 55 });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, -maxScroll / 8]);
  const springedRotate = useSpring(rotate, { damping: 15, mass: 0.27, stiffness: 55 });

  return (
    <div className="h-[600vh] bg-secondary-100" ref={containerRef}>
      <div className="sticky top-0 overflow-hidden">
        <m.div
          className="absolute -left-32 -top-32 sm:-left-64 sm:-top-64"
          style={{ rotate: springedRotate }}
        >
          <GearIcon className="w-64 fill-white sm:w-[32rem]" />
        </m.div>

        <m.div
          className="absolute -bottom-32 -right-32 sm:-bottom-64 sm:-right-64"
          style={{ rotate: springedRotate }}
        >
          <GearIcon className="w-64 fill-white sm:w-[32rem]" />
        </m.div>

        <m.div className="w-min" ref={scrollRef} style={{ x: springedX }}>
          <ServicesScreen />
        </m.div>
      </div>
    </div>
  );
};

const ServicesMobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({
    container: containerRef,
  });

  const containerWidth: number = containerRef.current?.scrollWidth || 3000;
  const rotate = useTransform(scrollXProgress, [0, 1], [0, -containerWidth / 8]);

  return (
    <div className="h-screen bg-secondary-100">
      <div className="absolute z-0 h-screen w-screen overflow-hidden">
        <m.div className="absolute -left-32 -top-32 sm:-left-64 sm:-top-64" style={{ rotate }}>
          <GearIcon className="w-64 fill-white sm:w-[32rem]" />
        </m.div>

        <m.div
          className="absolute -bottom-32 -right-32 sm:-bottom-64 sm:-right-64"
          style={{ rotate }}
        >
          <GearIcon className="w-64 fill-white sm:w-[32rem]" />
        </m.div>
      </div>

      <div className="relative overflow-y-hidden overflow-x-scroll" ref={containerRef}>
        <ServicesScreen />
      </div>
    </div>
  );
};

export default Services;

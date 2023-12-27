"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import GearIcon from "@/components/icons/Gear";
import ServicesScreen from "@/components/screens/Services/ServicesScreen";
import useMediaQuery from "@/hooks/useMediaQuery";

import styles from "./services.module.scss";

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
    <div className={styles.screenContainer} ref={containerRef}>
      <div className={styles.sticky}>
        <m.div className={styles.gearTop} style={{ rotate: springedRotate }}>
          <GearIcon />
        </m.div>

        <m.div className={styles.gearBottom} style={{ rotate: springedRotate }}>
          <GearIcon />
        </m.div>

        <m.div className={styles.scroll} ref={scrollRef} style={{ x: springedX }}>
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
    <div className={styles.screenContainerMobile}>
      <div className={styles.gearsContainer}>
        <m.div className={styles.gearTop} style={{ rotate }}>
          <GearIcon />
        </m.div>

        <m.div className={styles.gearBottom} style={{ rotate }}>
          <GearIcon />
        </m.div>
      </div>

      <div className={styles.slide} ref={containerRef}>
        <ServicesScreen />
      </div>
    </div>
  );
};

export default Services;

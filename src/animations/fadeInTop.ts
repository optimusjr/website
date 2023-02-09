import type { AnimationProps } from "framer-motion";

export default {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.4 },
} as AnimationProps;

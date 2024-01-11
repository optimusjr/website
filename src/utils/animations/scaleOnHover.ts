import type { MotionProps } from "framer-motion";

export default {
  initial: { scale: 1 },
  transition: { type: "spring", duration: 0.3 },
  whileHover: { scale: 1.01 },
} as MotionProps;

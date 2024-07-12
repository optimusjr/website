"use client";

import { m } from "framer-motion";

const FiveStars = () => (
  <m.div
    transition={{
      delayChildren: 0.3,
      staggerChildren: 0.2,
    }}
    className="flex fill-[#ffab00]"
    initial="hidden"
    viewport={{ once: true }}
    whileInView="visible"
  >
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
    <StarIcon />
  </m.div>
);

const StarIcon = () => (
  <m.svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Estrela</title>
    <m.path
      variants={{
        hidden: {
          opacity: 0,
          y: "100%",
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
    />
  </m.svg>
);

export default FiveStars;

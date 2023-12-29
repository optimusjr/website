"use client";

import { m } from "framer-motion";

import Button from "@/components/Button";
import ArrowRightIcon from "@/components/icons/ArrowRight";
import Link from "@/components/Link";
import config from "@/config";

const QuoteButton = () => (
  <m.div animate="rest" whileHover="hover">
    <Button as={Link} href={config.QUOTE_URL}>
      Faça um Orçamento
      <ArrowRightIcon
        as={m.svg}
        variants={{ hover: { x: [0, 5, 0], transition: { repeat: Infinity } } }}
      />
    </Button>
  </m.div>
);

export default QuoteButton;

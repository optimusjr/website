"use client";

import { m } from "framer-motion";

import Button from "@/components/Button";
import ArrowLeftIcon from "@/components/icons/ArrowLeft";
import Link from "@/components/lib/Link";

const BackToHomeButton = () => (
  <m.div animate="rest" whileHover="hover">
    <Button as={Link} href="/">
      <ArrowLeftIcon
        as={m.svg}
        variants={{ hover: { x: [0, -5, 0], transition: { repeat: Infinity } } }}
      />
      Voltar para página inicial
    </Button>
  </m.div>
);

export default BackToHomeButton;

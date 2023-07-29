import { m } from "framer-motion";

import Button from "@/components/common/Button";
import Link from "@/components/common/Link";
import ArrowRightIcon from "@/components/icons/ArrowRight";
import config from "@/config";

const BudgetButton = () => {
  return (
    <m.div animate="rest" whileHover="hover">
      <Button as={Link} href={config.BUDGET_URL}>
        Faça um Orçamento
        <ArrowRightIcon
          as={m.svg}
          variants={{ hover: { x: [0, 5, 0], transition: { repeat: Infinity } } }}
        />
      </Button>
    </m.div>
  );
};

export default BudgetButton;

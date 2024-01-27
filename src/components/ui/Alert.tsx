"use client";

import { AnimatePresence, m } from "framer-motion";
import { tv, type VariantProps } from "tailwind-variants";

import ErrorIcon from "@/components/icons/Error";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

const alert = tv({
  base: "flex items-center gap-2 rounded-lg p-4 text-left",
  variants: {
    severity: {
      error: "bg-red-100 fill-red-900 text-red-900",
      // Implementar se necessário
      // warning:"",
      // info:"",
      // success:"".
    },
  },
});

interface Props extends PropsWithChildren, Required<VariantProps<typeof alert>> {
  show: boolean;
  className?: string;
}

const icons = {
  error: ErrorIcon,
};

const Alert = ({ children, className, severity, show }: Props) => {
  const Icon = icons[severity];

  return (
    <AnimatePresence>
      {show && (
        <m.div
          animate={{ opacity: 1, height: "auto" }}
          className="overflow-hidden"
          exit={{ opacity: 0, height: 0 }}
          initial={{ opacity: 0, height: 0 }}
        >
          <div className={alert({ severity, className })} role="alert">
            <Icon />
            <div>{children}</div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;

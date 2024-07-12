import { AnimatePresence, m } from "framer-motion";
import type { ComponentProps } from "react";

import LoadingIcon from "@/components/icons/Loading";
import SendIcon from "@/components/icons/Send";
import Button from "@/components/ui/Button";
import fadeSwap from "@/utils/animations/fadeSwap";

interface Props extends Omit<ComponentProps<typeof Button>, "children"> {
  loading?: boolean;
}

const SendButton = ({ loading, ...props }: Props) => {
  return (
    <Button type="submit" {...props}>
      <AnimatePresence initial={false}>
        <SendButtonContent loading={loading} />
      </AnimatePresence>
    </Button>
  );
};

export default SendButton;

const SendButtonContent = ({ loading }: { loading?: boolean }) => {
  if (loading) {
    return (
      <>
        <m.div {...fadeSwap} className="leading-0">
          <LoadingIcon
            animate={{ rotate: 360 }}
            as={m.svg}
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
          />
        </m.div>
        <m.div {...fadeSwap}>Enviando</m.div>
      </>
    );
  }
  return (
    <>
      <SendIcon as={m.svg} {...fadeSwap} /> <m.div {...fadeSwap}>Enviar</m.div>
    </>
  );
};

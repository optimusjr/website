import BackToHomeButton from "@/components/BackToHomeButton";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";

import Illustration from "./Illustration";

const Custom404 = () => (
  <Screen
    backgroundColor="secondary"
    className="grid justify-center md:grid-cols-[1fr_2fr]"
    firstFullHeight
  >
    <div className="flex flex-col items-center gap-4 md:items-start">
      <Typography
        className="text-[length:calc(0.5rem+4.5vw)] leading-1"
        color="primary"
        variant="h1"
      >
        Oops! Algo deu errado.
      </Typography>
      <Typography className="text-[length:calc(0.5rem+1.5vw)] leading-1">
        A Página que você está procurando não pôde ser encontrada.
      </Typography>

      <BackToHomeButton />
    </div>

    <Illustration />
  </Screen>
);

export default Custom404;

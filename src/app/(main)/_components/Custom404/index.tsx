import BackToHomeButton from "@/components/others/BackToHomeButton";
import Screen from "@/components/others/Screen";

import Illustration from "./Illustration";

const Custom404 = () => (
  <Screen
    bgColor="secondary"
    className="justify-center md:grid md:grid-cols-[1fr_2fr]"
    height="firstFull"
    gap
    padding
  >
    <div className="flex flex-col items-center gap-4 text-center md:items-start md:justify-self-end md:text-left">
      <h1 className="text-[length:calc(0.5rem+4.5vw)] font-extrabold uppercase leading-none text-primary-800">
        Oops! Algo deu errado.
      </h1>
      <p className="text-[length:calc(0.5rem+1.5vw)] leading-none">
        A Página que você está procurando não pôde ser encontrada.
      </p>

      <BackToHomeButton />
    </div>

    <Illustration />
  </Screen>
);

export default Custom404;

"use client";

import { useEffect, useState } from "react";

import Image from "@/components/lib/Image";
import Screen from "@/components/others/Screen";
import useToggle from "@/hooks/useToggle";
import bedroomOff from "@/images/bedroom-off.png";
import bedroomOn from "@/images/bedroom-on.png";

import Circuits from "./Circuits";
import Divider from "./Divider";

const Start = () => {
  const [isLightOn, toggleLight] = useToggle(false);
  const [isTimerDisabled, disableTimer] = useState(false);

  let timer: NodeJS.Timeout | undefined;

  useEffect(() => {
    if (!isTimerDisabled) {
      timer = setTimeout(toggleLight, 5000);
    }
  }, [isLightOn]);

  return (
    <Screen
      bgColor="secondary"
      className="relative z-20 justify-center overflow-hidden md:flex-row"
      height="firstFull"
      gap
      padding
    >
      <Circuits />
      <Divider />

      <div className="text-center animate-fade-in md:w-min md:text-left">
        <h1 className="text-[length:calc(2rem+6vw)] font-extrabold uppercase leading-none text-primary-800 md:text-[length:calc(0.5rem+4.5vw)]">
          Leve o futuro para o seu lar.
        </h1>
        <p className="text-[length:calc(1rem+2vw)] leading-none md:text-[length:calc(0.5rem+1.5vw)]">
          Transformamos sua casa com as nossas soluções de automação residencial.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl shadow-lg animate-fade-in">
        <Image alt="Quarto com as luzes apagadas" src={bedroomOff} priority />

        <Image
          alt="Quarto com as luzes acessas"
          className="absolute top-0 transition-opacity"
          src={bedroomOn}
          style={{ opacity: isLightOn ? 1 : 0 }}
          priority
        />

        <button
          onClick={() => {
            toggleLight();
            if (!isTimerDisabled) {
              disableTimer(true);
              clearTimeout(timer);
            }
          }}
          style={{
            // Isso faz com que o botão sempre flutue em cima da posição certa da imagem
            // Valores gerados usando o site https://zaneray.com/responsive-image-map/
            position: "absolute",
            left: "40.38%",
            top: "66.75%",
            width: "52.54%",
            height: "20.31%",

            opacity: 0,
          }}
          aria-label="Interruptor da luz"
        />
      </div>
    </Screen>
  );
};

export default Start;

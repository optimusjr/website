"use client";

import { useEffect, useState } from "react";

import Image from "@/components/Image";
import Screen from "@/components/Screen";
import Typography from "@/components/Typography";
import bedroomOff from "@/images/bedroom-off.png";
import bedroomOn from "@/images/bedroom-on.png";

import Circuits from "./Circuits";

const Start = () => {
  const [light, setLight] = useState(false);
  const [disableTimer, setDisableTimer] = useState(false);

  let timer: NodeJS.Timeout | undefined;

  useEffect(() => {
    if (!disableTimer) {
      timer = setTimeout(() => setLight(!light), 5000);
    }
  }, [light]);

  return (
    <Screen
      backgroundColor="secondary"
      className="relative overflow-hidden md:flex-row"
      height="firstFull"
    >
      <Circuits />

      <div className="text-center animate-fade-in md:w-min md:text-left">
        <Typography
          className="text-[length:calc(2rem+6vw)] leading-none md:text-[length:calc(0.5rem+4.5vw)]"
          color="white"
          variant="h1"
        >
          Leve o futuro para o seu lar.
        </Typography>
        <Typography
          className="text-[length:calc(1rem+2vw)] font-semibold leading-none md:text-[length:calc(0.5rem+1.5vw)]"
          color="white"
        >
          Transformamos sua casa com as nossas soluções de automação residencial.
        </Typography>
      </div>

      <div className="relative overflow-hidden rounded-3xl shadow-md animate-fade-in">
        <Image alt="Quarto com as luzes apagadas" src={bedroomOff} priority />

        <Image
          alt="Quarto com as luzes acessas"
          className="absolute left-0 top-0 transition-opacity"
          src={bedroomOn}
          style={{ opacity: light ? 1 : 0 }}
          priority
        />

        <button
          onClick={() => {
            setLight(!light);
            if (!disableTimer) {
              setDisableTimer(true);
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
          aria-label={light ? "Desligar Luzes" : "Ligar luzes"}
        />
      </div>
    </Screen>
  );
};

export default Start;

"use client";

import { useEffect, useState } from "react";

import Image from "@/components/Image";
import Screen from "@/components/Screen";
import bedroomOff from "@/images/bedroom-off.png";
import bedroomOn from "@/images/bedroom-on.png";

import Divider from "./Divider";
import styles from "./start.module.scss";

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
    <Screen backgroundColor="secondary" className={styles.start} firstFullHeight>
      <Divider />

      <div className={styles.text}>
        <h1>Leve o futuro para o seu lar.</h1>
        <p>Transformamos sua casa com as nossas soluções de automação residencial.</p>
      </div>

      <div className={styles.image}>
        <Image alt="Quarto com as luzes apagadas" src={bedroomOff} width={1924} priority />

        <Image
          alt="Quarto com as luzes acessas"
          className={styles.topImage}
          src={bedroomOn}
          style={{ opacity: light ? 1 : 0 }}
          width={1924}
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

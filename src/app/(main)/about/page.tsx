import { Metadata } from "next";

import CallToActionScreen from "@/components/others/CallToActionScreen";

import Information from "./_components/Information";
import Partners from "./_components/Partners";
import Start from "./_components/Start";

export const metadata: Metadata = {
  title: "Sobre nós",
};

const About = () => (
  <>
    <Start />
    <Information />
    <Partners />
    <CallToActionScreen />
  </>
);

export default About;

import { Metadata } from "next";

import CallToActionScreen from "@/components/others/CallToActionScreen";

import Information from "./_components/Information";
import Start from "./_components/Start";

export const metadata: Metadata = {
  title: "Sobre nós",
};

const About = () => (
  <>
    <Start />
    <Information />
    <CallToActionScreen />
  </>
);

export default About;

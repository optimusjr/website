import { Metadata } from "next";

import CallToActionScreen from "@/components/others/CallToActionScreen";

import Gallery from "./_components/Gallery";
import Information from "./_components/Information";
import Start from "./_components/Start";

export const metadata: Metadata = {
  title: "Sobre nós",
};

const About = () => (
  <>
    <Start />
    <Information />
    <Gallery />
    <CallToActionScreen />
  </>
);

export default About;

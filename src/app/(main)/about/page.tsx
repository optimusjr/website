import { Metadata } from "next";

import Information from "./_components/Information";
import Start from "./_components/Start";

export const metadata: Metadata = {
  title: "Sobre nós",
};

const About = () => (
  <>
    <Start />
    <Information />
  </>
);

export default About;

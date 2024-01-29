import { Metadata } from "next";

import JuniorCompany from "./_components/JuniorCompany";
import Start from "./_components/Start";

export const metadata: Metadata = {
  title: "Sobre nós",
};

const About = () => (
  <>
    <Start />
    <JuniorCompany />
  </>
);

export default About;

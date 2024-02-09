import { Metadata } from "next";

import JuniorEnterpriseMovement from "./_components/JuniorEnterpriseMovement";
import OurHistory from "./_components/OurHistory";
import Start from "./_components/Start";

export const metadata: Metadata = {
  title: "Sobre nós",
};

const About = () => (
  <>
    <Start />
    <OurHistory />
    <JuniorEnterpriseMovement />
  </>
);

export default About;

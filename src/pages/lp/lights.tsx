import Head from "next/head";

import LightsPageStart from "@/components/screens/LightsPageStart";
import Testimonials from "@/components/screens/Testimonials";

const Lights = () => {
  return (
    <>
      <Head>
        <title>Automação de lâmpadas: torne sua casa mais inteligente e economize energia</title>
      </Head>

      <LightsPageStart />
      <Testimonials />
    </>
  );
};

export default Lights;

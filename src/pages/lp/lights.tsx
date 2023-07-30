import Head from "next/head";

import CallToAction from "@/components/screens/CallToAction";
import FAQ from "@/components/screens/FAQ";
import LightsPageStart from "@/components/screens/LightsPageStart";
import Showcase from "@/components/screens/Showcase";
import Testimonials from "@/components/screens/Testimonials";

const Lights = () => (
  <>
    <Head>
      <title>Automação de lâmpadas: torne sua casa mais inteligente e economize energia</title>
    </Head>

    <LightsPageStart />
    <Testimonials />
    <Showcase />
    <FAQ />
    <CallToAction />
  </>
);

export default Lights;

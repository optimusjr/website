import Head from "next/head";

import Benefits from "@/components/pages/Benefits";
import Differentials from "@/components/pages/Differentials";
import Services from "@/components/pages/Services";
import Start from "@/components/pages/Start";

const Home = () => {
  return (
    <>
      <Head>
        <title>OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador</title>
      </Head>

      <Start />
      <Differentials />
      <Services />
      <Benefits />
    </>
  );
};

export default Home;

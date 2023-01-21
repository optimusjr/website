import Head from "next/head";

import Benefits from "@/components/pages/Benefits";
import Differentials from "@/components/pages/Differentials";
import Start from "@/components/pages/Start";

const Home = () => {
  return (
    <>
      <Head>
        <title>OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador</title>
      </Head>

      <Start />
      <Differentials />
      <Benefits />
    </>
  );
};

export default Home;

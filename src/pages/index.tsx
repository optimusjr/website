import Head from "next/head";

import Benefits from "@/components/pages/Benefits";
import Start from "@/components/pages/Start";

const Home = () => {
  return (
    <>
      <Head>
        <title>OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador</title>
      </Head>

      <Start />
      <Benefits />
    </>
  );
};

export default Home;

import Head from "next/head";

import Benefits from "@/components/screens/Benefits";
import Contacts from "@/components/screens/Contacts";
import Differentials from "@/components/screens/Differentials";
import Services from "@/components/screens/Services";
import Start from "@/components/screens/Start";

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
      <Contacts />
    </>
  );
};

export default Home;

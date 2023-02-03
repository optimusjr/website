import Head from "next/head";

import Custom404 from "@/components/pages/Custom404";

const Custom404Page = () => {
  return (
    <>
      <Head>
        <title>Página não encontrada</title>
      </Head>

      <Custom404 />
    </>
  );
};

export default Custom404Page;

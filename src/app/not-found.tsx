import { Metadata } from "next";

import Custom404 from "@/components/screens/Custom404";

// Este componente deveria estar na pasta (main), mas o Next.Js precisa que ele esteja na raiz
import Layout from "./(main)/layout";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

const Custom404Page = () => (
  <Layout>
    <Custom404 />
  </Layout>
);

export default Custom404Page;

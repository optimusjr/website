import { Metadata } from "next";

// Este componente deveria estar na pasta (main), mas o Next.Js precisa que ele esteja na raiz
import Custom404 from "./(main)/_components/Custom404";
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

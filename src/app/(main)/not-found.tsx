import { Metadata } from "next";

import Custom404 from "@/components/screens/Custom404";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

const Custom404Page = () => <Custom404 />;

export default Custom404Page;

"use client";

import { LazyMotion } from "framer-motion";

import Layout from "./_components/Layout";

const loadFeatures = () => import("../../utils/helpers/framer-extra").then((res) => res.default);

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={loadFeatures} strict>
    <Layout>{children}</Layout>
  </LazyMotion>
);

export default MainLayout;

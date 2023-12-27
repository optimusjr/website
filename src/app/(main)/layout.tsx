"use client";

import { domAnimation, LazyMotion } from "framer-motion";

import Layout from "@/components/Layout";

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    <Layout>{children}</Layout>
  </LazyMotion>
);

export default MainLayout;

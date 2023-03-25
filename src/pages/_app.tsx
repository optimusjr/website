import "@/styles/globals.scss";

import { domAnimation, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";
import { League_Spartan } from "next/font/google";
import Head from "next/head";
import { ReactTagManager } from "react-gtm-ts";

import Layout from "@/components/Layout";

const league = League_Spartan({
  subsets: ["latin"],
  fallback: ["Roboto", "sans-serif"],
  display: "swap",
});

ReactTagManager.init({
  code: "GTM-MQSMFGT", // GTM Code
  debug: false, // debug mode (default false)
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        {/* A Tag Viewport não deve ser usada no _document.tsx, por isso está nesse arquivo */}
        {/* Para mais informações acesse: https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>

      <LazyMotion features={domAnimation} strict>
        <Layout className={league.className}>
          <Component {...pageProps} />
        </Layout>
      </LazyMotion>
    </>
  );
};

export default MyApp;

import "@/styles/globals.scss";

import { League_Spartan } from "@next/font/google";
import { domAnimation, LazyMotion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import Layout from "@/components/Layout";

const league = League_Spartan({
  subsets: ["latin"],
  fallback: ["Roboto", "sans-serif"],
  display: "swap",
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
        <Layout font={league}>
          <Component {...pageProps} />
        </Layout>
      </LazyMotion>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NJZG4JZ');
      `}
      </Script>
    </>
  );
};

export default MyApp;

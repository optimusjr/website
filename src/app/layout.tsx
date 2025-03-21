import "@/utils/tailwind.css";

import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";

import config from "@/config";

export const viewport: Viewport = {
  themeColor: "#efefef",
};

const league = League_Spartan({
  subsets: ["latin"],
  fallback: ["Roboto", "sans-serif"],
  display: "swap",
  variable: "--font-league-spartan",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | OPTIMUS Jr.",
    default: "OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador",
  },
  description:
    "Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente.",
  authors: [{ name: "OPTIMUS Jr. Controle e Automação" }],
  metadataBase: new URL(config.SITE_URL),

  twitter: {
    creator: "@OPTIMUSJrBA",
  },
  openGraph: {
    url: config.SITE_URL,
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/card.png",
        width: 1200,
        height: 628,
        alt: "ícone da OPTIMUS Jr. em um fundo branco. O ícone é um circulo verde com uma engrenagem dentro, e dentro da engrenagem um sinal de onda.",
      },
    ],
  },
  icons: {
    shortcut: `${config.SITE_URL}/favicon.ico`,
    other: {
      rel: "mask-icon",
      color: "#136041",
      url: `${config.SITE_URL}/icons/safari-pinned-tab.svg`,
    },
  },
};

import { GoogleTagManager } from "@next/third-parties/google";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={league.variable} dir="ltr" lang="pt-BR">
    <head>
      <meta content="text/html" httpEquiv="content-type" />
    </head>
    <body>{children}</body>
    <GoogleTagManager gtmId="GTM-MQSMFGT" />
  </html>
);

export default RootLayout;

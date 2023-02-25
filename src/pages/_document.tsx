import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html dir="ltr" lang="pt-br">
        <Head>
          {/* Primary Meta Tags*/}
          <meta charSet="utf-8" />
          <meta content="text/html" httpEquiv="content-type" />

          {/* SEO Meta Tags*/}
          <meta content="OPTIMUS Jr. Controle e Automação" name="author" />
          <meta
            content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
            name="description"
          />

          {/* Open Graph / Facebook*/}
          <meta content="website" property="og:type" />
          <meta content={process.env.SITE_URL} property="og:url" />
          <meta
            content="OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador"
            property="og:title"
          />
          <meta content={`${process.env.SITE_URL}/card.png`} property="og:image" />
          <meta
            content="ícone da OPTIMUS Jr. em um fundo branco. O ícone é um circulo verde com uma engrenagem dentro, e dentro da engrenagem um sinal de onda."
            property="og:image:alt"
          />
          <meta content="pt_BR" property="og:locale" />
          <meta
            content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
            property="og:description"
          />

          {/* Twitter*/}
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={process.env.SITE_URL} name="twitter:url" />
          <meta content="OPTIMUS Jr. Controle e Automação" name="twitter:title" />
          <meta content={`${process.env.SITE_URL}/card.png`} name="twitter:image" />
          <meta content="@OPTIMUSJrBA" name="twitter:creator" />
          <meta
            content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
            name="twitter:description"
          />

          {/* Icons*/}
          <link
            href={`${process.env.SITE_URL}/icons/apple-touch-icon.png`}
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href={`${process.env.SITE_URL}/icons/favicon-32x32.png`}
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href={`${process.env.SITE_URL}/icons/favicon-16x16.png`}
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link href={`${process.env.SITE_URL}/icons/site.webmanifest`} rel="manifest" />
          <link
            color="#f45d22"
            href={`${process.env.SITE_URL}/icons/safari-pinned-tab.svg`}
            rel="mask-icon"
          />
          <link href={`${process.env.SITE_URL}/icons/favicon.ico`} rel="shortcut icon" />
          <meta content="#da532c" name="msapplication-TileColor" />
          <meta
            content={`${process.env.SITE_URL}/icons/browserconfig.xml`}
            name="msapplication-config"
          />
          <meta content="#efefef" name="theme-color" />
        </Head>
        <body>
          <Main />
          <NextScript />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MQSMFGT" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
        </body>
      </Html>
    );
  }
}

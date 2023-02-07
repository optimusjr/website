import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br" dir="ltr">
        <Head>
          {/* Primary Meta Tags*/}
          <meta charSet="utf-8" />
          <meta httpEquiv="content-type" content="text/html" />

          {/* SEO Meta Tags*/}
          <meta name="author" content="OPTIMUS Jr. Controle e Automação" />
          <meta
            name="description"
            content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
          />

          {/* Open Graph / Facebook*/}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={process.env.SITE_URL} />
          <meta
            property="og:title"
            content="OPTIMUS Jr. Controle e Automação | Empresa de Automação em Salvador"
          />
          <meta property="og:image" content={`${process.env.SITE_URL}/card.png`} />
          <meta
            property="og:image:alt"
            content="ícone da OPTIMUS Jr. em um fundo branco. O ícone é um circulo verde com uma engrenagem dentro, e dentro da engrenagem um sinal de onda."
          />
          <meta property="og:locale" content="pt_BR" />
          <meta
            property="og:description"
            content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
          />

          {/* Twitter*/}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={process.env.SITE_URL} />
          <meta name="twitter:title" content="OPTIMUS Jr. Controle e Automação" />
          <meta name="twitter:image" content={`${process.env.SITE_URL}/card.png`} />
          {
            // TODO: Criar um Twitter para a OPTIMUS e colocar o @ aqui
            // <meta name="twitter:creator" content="@???" />
          }
          <meta
            name="twitter:description"
            content="Empresa júnior de automação residencial, oferecemos soluções inovadoras e personalizadas para tornar sua casa mais inteligente."
          />

          {/* Icons*/}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${process.env.SITE_URL}/icons/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${process.env.SITE_URL}/icons/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${process.env.SITE_URL}/icons/favicon-16x16.png`}
          />
          <link rel="manifest" href={`${process.env.SITE_URL}/site.webmanifest`} />
          <link
            rel="mask-icon"
            href={`${process.env.SITE_URL}/icons/safari-pinned-tab.svg`}
            color="#f45d22"
          />
          <link rel="shortcut icon" href={`${process.env.SITE_URL}/icons/favicon.ico`} />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta
            name="msapplication-config"
            content={`${process.env.SITE_URL}/icons/browserconfig.xml`}
          />
          <meta name="theme-color" content="#efefef" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

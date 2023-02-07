# OPTIMUS Jr.

Este repositório contém o código-fonte do site da OPTIMUS Jr. desenvolvido utilizando o framework [Svelte](https://svelte.dev/).

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
pnpm install
```

## Execução em modo de desenvolvimento

Para iniciar o site em modo de desenvolvimento, execute o seguinte comando:

```bash
pnpm dev
```

Este comando iniciará um servidor de desenvolvimento local, que permitirá visualizar e testar o site enquanto ele é desenvolvido.

## Compilação automática usando GitHub Actions

Uma nova versão do site é automaticamente compilada usando GitHub Actions a cada vez que é realizado um commit na branch `master`.

## Estrutura de pastas

A estrutura de pastas deste projeto é a seguinte:

- `src`: Contém os arquivos de código-fonte do site, incluindo os componentes Svelte, os arquivos de estilo CSS e os arquivos JavaScript.
- `static`: Contém os arquivos estáticos do site, como imagens, fonts e arquivos HTML pré-compilados.
- `.github/workflows`: Contém os arquivos de configuração do GitHub Actions.

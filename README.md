# OPTIMUS Jr.

Este repositório contém o código-fonte do site da OPTIMUS Jr. desenvolvido utilizando o framework [Next.Js](https://nextjs.org/).

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

Uma nova versão do site é automaticamente compilada usando GitHub Actions a cada vez que é realizado um commit na branch `master`. Por segurança não é possível modificar diretamente a branch `master`. É necessário escrever suas mudanças na branch `develop` e fazer um pull request para a branch `master`.

## Estrutura de pastas

A estrutura de pastas deste projeto é a seguinte:

- `src`: Contém os arquivos de código-fonte do site, incluindo os componentes React, os arquivos de estilo CSS e os arquivos TypeScript.
- `public`: Contém os arquivos estáticos do site, como imagens, ícones e etc.
- `.github/workflows`: Contém os arquivos de configuração do GitHub Actions.

# Pasta `components`

A pasta `components` serve como o diretório principal que abriga os componentes React do projeto, sendo estes não específicos de apenas uma página. Componentes específicos de páginas individuais devem ser armazenados na pasta `app`, dentro da subpasta `_components`, junto de suas respectivas páginas.

Os componentes dentro da pasta `components` estão divididos em quatro subpastas, para melhor organização:

## icons

A subpasta `icons` armazena ícones utilizados no projeto. Esses ícones podem ser importados e utilizados nos componentes para melhorar a experiência visual e a identidade do aplicativo. São ícones SVG, em sua maioria ícones do retirados do [Material Design Icons](https://pictogrammers.com/library/mdi/), mas transformados em componentes React Genéricos (com a funcionalidade de poder substituir o component `<svg>` por outra tag qualquer, inclusive outro component React como `<m.svg>` do Framer Motion).

## lib

A subpasta `lib` contém componentes muito simples, com nenhum ou muito pouco estilo aplicado. Geralmente tem a função de wrapper (Abstrair a lógica de um componente externo) ou apenas implementar alguma lógica javascript que pode ser reaproveitada em varias partes do site.

## others

A subpasta `others` contém todos os outros componentes que não se encaixam nas outras pastas. Eles geralmente são componentes criados apenas para evitar repetição de código, ou são elementos que se repetem em muitas páginas mesmo não sendo componentes do tipo `ui`.

## patterns

A pasta patterns abriga componentes que retornam um elemento `<pattern>` do SVG, muitas vezes retirados site site [Hero Patterns](https://heropatterns.com/). Esses componentes são feitos para serem utilizados em conjunto com o componente Pattern (`src/components/others/Pattern.tsx`), que efetivamente desenha um retângulo onde o pattern (desenho SVG que é repetido em um plano de fundo) é aplicado.

## ui

A subpasta `ui` é destinada a componentes específicos da interface do usuário (UI), desempenhando um papel crucial na definição da aparência e interatividade visual do aplicativo. Esses componentes são verdadeiramente reutilizáveis e podem ser encontrados, com variações de estilo, em uma ampla variedade de websites.

Como eles são peças fundamentais do design de interfaces, em muitos projetos é comum utilizar bibliotecas como [Material UI](https://mui.com/) e [Ant Design](https://ant.design/), para evitar a necessidade de reescrever esses componentes do zero. Ao desenvolver componentes para a subpasta ui, tenha em mente os padrões de código adotados pelas bibliotecas acima, para poder criar componentes simples e reutilizáveis.

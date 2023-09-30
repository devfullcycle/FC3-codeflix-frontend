# Fundamentos de Roteamento

## Terminologia

- Árvore: Uma convenção para visualizar uma estrutura hierárquica. Por exemplo, uma árvore de componentes com componentes pais e filhos, uma estrutura de pastas, etc.
- Subárvore: Parte de uma árvore, começando em uma nova raiz (primeira) e terminando nas folhas (últimas).
- Raiz: O primeiro nó em uma árvore ou subárvore, como um layout raiz.
- Folha: Nós em uma subárvore que não têm filhos, como o último segmento em um caminho de URL.
- Segmento de URL: Parte do caminho da URL delimitada por barras.
- Caminho de URL: Parte da URL que vem após o domínio (composta por segmentos).

## O Roteador do App

Na versão 13, o Next.js introduziu um novo Roteador de App baseado em Componentes de Servidor React, que suporta layouts compartilhados, roteamento aninhado, estados de carregamento, tratamento de erros e mais.

O Roteador do App funciona em um novo diretório chamado "app". O diretório "app" funciona em paralelo com o diretório "pages" para permitir a adoção incremental. Isso permite que você escolha algumas rotas de sua aplicação para o novo comportamento enquanto mantém outras rotas no diretório "pages" com o comportamento anterior. Se a sua aplicação usa o diretório "pages", veja também a documentação do Roteador de Páginas.

Por padrão, os componentes dentro de "app" são Componentes de Servidor React. Isso é uma otimização de desempenho e permite que você os adote facilmente, e você também pode usar Componentes Cliente.

## Papéis de Pastas e Arquivos

O Next.js usa um roteador baseado no sistema de arquivos onde:

Pastas são usadas para definir rotas. Uma rota é um único caminho de pastas aninhadas, seguindo a hierarquia do sistema de arquivos desde a pasta raiz até uma pasta folha final que inclui um arquivo "page.js". Veja Definindo Rotas.
Arquivos são usados para criar UI que é mostrada para um segmento de rota. Veja arquivos especiais.

## Segmentos de Rota

Cada pasta em uma rota representa um segmento de rota. Cada segmento de rota é mapeado para um segmento correspondente em um caminho de URL.

## Rotas Aninhadas

Para criar uma rota aninhada, você pode aninhar pastas dentro de outras. Por exemplo, você pode adicionar uma nova rota /dashboard/configurações aninhando duas novas pastas no diretório "app".

A rota /dashboard/configurações é composta por três segmentos:

/ (Segmento Raiz)
dashboard (Segmento)
configurações (Segmento Folha)

## Convenções de Arquivos

O Next.js fornece um conjunto de arquivos especiais para criar a UI com comportamento específico em rotas aninhadas:

- layout: UI compartilhada para um segmento e seus filhos.
- page: UI única de uma rota e torna as rotas publicamente acessíveis.
- loading: UI de carregamento para um segmento e seus filhos.
- not-found: UI de "não encontrado" para um segmento e seus filhos.
- error: UI de erro para um segmento e seus filhos.
- global-error: UI de erro global.
- route: Endpoint da API do lado do servidor.
- template: UI de Layout re-renderizado especializado.
- default: UI de fallback para Rotas Paralelas.

## Hierarquia de Componentes

Os componentes React definidos em arquivos especiais de um segmento de rota são renderizados em uma hierarquia específica:

- layout.js
- template.js
- error.js (React error boundary)
- loading.js (React suspense boundary)
- not-found.js (React error boundary)
- page.js ou layout.js aninhado

## Colocação

Além dos arquivos especiais, você tem a opção de colocar seus próprios arquivos (por exemplo, componentes, estilos, testes, etc.) dentro de pastas no diretório "app".

Isso ocorre porque, enquanto as pastas definem rotas, apenas os conteúdos retornados por "page.js" ou "route.js" são publicamente endereçáveis.

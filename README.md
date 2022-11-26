<!--
Title:    MY NEW TAB - WEB PAGE PERSONAL  
Author:   Marcus Faria
Date:     26.11.2022  
Comment:  My new tab. A web page similar to browsers' home pages
-->


Personal New Tab
===

<div align="center">

![Home Page][image-capture-1]

<br />

Imagina só... uma página de nova guia totalmente personalizado, que permite inserir atalhos na tela, e que possui alguns easter-eggs.

</div><br />


## APRESENTAÇÃO

Geralmente, as páginas de "nova guia" permitem um grau de personalisação considerável. Entretanto, _cansado de mais do mesmo_ 😅, decidi montar um guia de inicialização pessoal e totalmente personalizado.

Com tal intuito, comecei a montar minha aba de inicialização pessoal.

<br />


## INPUT-SEARCH

O primeiro elemento adicionado na página foi o input de consultas a dominios, sites na internet.

O input é capaz de identificar textos simples ou urls. Para tal efeito foi montado um regex, que se encontra no caminho `scripts/input.js`. Ele irá identificar alguns padrões no texto inserido, e classificar entre URL e não URL.

<br />


## SHORTCUTS

Para os atalhos na tela, foram definidos alguns atalhos fixos, os que são exibidos no cabeçalho da página, e cabeçalhos dinâmicos (regra para a API ainda está em desenvolvimento).

<br />


## EASTER-EGGS

Foram adicionados alguns _easter-eggs_ de fácil identificação 😅. Dentre eles se encontra uma ascii-art que utiliza da construção de desenhos 3D em uma área de plotagem 2D (o elemento exibido foi baseado no código de [a1k0n.net][donut-math]).

<!-- VARIABLES - LINK IMAGES -->
[image-capture-1]: img/print/capture1.png

<!-- VARIABLES - LINKS -->
[donut-math]: https://www.a1k0n.net/2011/07/20/donut-math.html

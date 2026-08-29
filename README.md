# gabrielbribeiroo.github.io

Site pessoal de **Gabriel Barbosa Ribeiro de Oliveira** — co-fundador e dev lead na NextAct, fundador da Connecta CI, estudante de Ciência da Computação na UFPB.

Online em <https://gabrielbribeiroo.github.io>

## Stack

HTML + CSS + JavaScript puro, sem build step e sem dependências externas (a única chamada de rede é para o Google Fonts). Tema claro/escuro, alternância PT/EN e idioma do currículo persistidos em `localStorage`.

```
index.html      página única
css/main.css    design system editorial (tokens em :root) + camadas de movimento
js/main.js      tema, i18n, rolagem suavizada, seções presas, reveal
images/         fotos, capas de projeto e a logo do ScorePredictor
docs/           currículo em PDF (PT e EN)
```

## Design

Sistema editorial — papel e tinta, sem gradiente nem sombra, estrutura por fios de 1px. Três tipografias com papéis distintos: Instrument Serif nos títulos, Inter no corpo, JetBrains Mono em caixa alta espaçada para rótulos e datas.

## Movimento

- Cortina de abertura e títulos que sobem palavra por palavra atrás de uma máscara.
- Rolagem suavizada por interpolação (sem biblioteca), só no ponteiro fino; teclado e âncoras continuam exatos.
- **Ventures** e **Trajetória** usam scrollytelling: a seção fica presa enquanto o conteúdo avança (cards que se substituem / cabeçalho fixo com um razão ao lado).
- Parallax leve no retrato, ticker de tecnologias que acelera com a velocidade da rolagem, barras de progresso com dados reais (meses de operação de cada venture, progresso do curso).
- Tudo respeita `prefers-reduced-motion`: nada fica oculto ou depende de animação para ser lido.

## Conteúdo

Os cards de Ventures e Projetos são clicáveis por inteiro (âncora real esticada, não `div` com clique) e apontam para os sites/demos reais — NextAct, Connecta CI, Instagram da Ajuda Enem, e as demos publicadas do ScorePredictor e do TaxCalcBR.

## Rodar localmente

```bash
python -m http.server 8000
```

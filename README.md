# Trilha JS Developer - Pokedex

Uma Pokedex simples criada com HTML, CSS e JavaScript, que consome a [PokeAPI](https://pokeapi.co/) para exibir a primeira geração de Pokémon.

## Visão Geral

Este projeto lista os 151 Pokémon originais, exibindo seus nomes, tipos e uma imagem. A página carrega um número inicial de Pokémon e possui um botão "Load More" para carregar mais.

![Placeholder para Screenshot da Pokedex](https://via.placeholder.com/600x400.png?text=Pokedex+Screenshot)

## Tecnologias Utilizadas

*   **HTML5**
*   **CSS3** (com Flexbox e Grid Layout)
*   **JavaScript** (ES6+)
*   [PokeAPI](https://pokeapi.co/) - A API de Pokémon
*   [Normalize.css](https://necolas.github.io/normalize.css/) - Para resetar e normalizar os estilos do navegador.
*   [Roboto Font](https://fonts.google.com/specimen/Roboto) - A fonte utilizada no projeto.

## Como Executar

Como este é um projeto front-end estático, você não precisa de um servidor complexo. Basta abrir o arquivo `index.html` diretamente no seu navegador.

1.  Clone este repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2.  Navegue até o diretório do projeto.
3.  Abra o arquivo `index.html` no seu navegador de preferência.

E pronto! A Pokedex será exibida.

## Evolução do Projeto

Este projeto passou por diversas melhorias e refatorações. As principais alterações incluem:

### Melhorias Iniciais e Refatoração
*   **Estrutura HTML:** Ajuste de caminhos absolutos para relativos em `index.html` e uso de tags semânticas (`<main>`).
*   **Estilização Global:** Otimização do CSS global para melhor responsividade e adição de estilos base para o `body`.
*   **Organização CSS:** Centralização das definições de cores de tipo em `assets/css/pokemon-types.css` utilizando variáveis CSS para remover duplicação e facilitar a manutenção em outros arquivos CSS (`pokedex.css` e `pokemon-detail.css`).
*   **Reset CSS:** Criação de `assets/css/reset.css` e inclusão em todas as páginas HTML para padronização de estilos entre navegadores.
*   **Efeito de Hover:** Adição de um efeito visual de "hover" nos cards de Pokémon na página principal.

### Funcionalidade de Detalhes do Pokémon
*   **Nova Janela de Detalhes:** Implementação de uma nova janela (pop-up) para exibir detalhes completos de um Pokémon ao clicar em seu card.
*   **Tamanho e Comportamento da Janela:** Configuração da nova janela para ter um tamanho fixo (1184x864), não ser redimensionável e não possuir barras de rolagem.
*   **Layout Visual:**
    *   Aplicação de uma imagem de fundo (Pokedex) na janela de detalhes.
    *   Posicionamento do conteúdo (imagem do Pokémon, nome, número, tipos) na "tela esquerda" da imagem de fundo.
    *   Posicionamento das estatísticas do Pokémon na "tela direita" da imagem de fundo.
    *   A tela esquerda agora possui a cor de fundo baseada no tipo do Pokémon, assim como os cards da página principal.
    *   **Layout Responsivo:** Adaptação do layout para telas menores, posicionando as seções 'left-screen' e 'right-screen' verticalmente, cada uma ocupando 100% da altura da tela, sem espaçamentos.
    *   **Cores de Texto Adaptativas:** As cores do texto agora se ajustam automaticamente para garantir contraste e legibilidade em relação ao fundo de cada tipo de Pokémon.

## Estrutura de Cores e Temas

Para garantir uma estilização consistente e de fácil manutenção, as cores dos tipos de Pokémon são gerenciadas através de variáveis CSS (Custom Properties) definidas no arquivo `assets/css/pokemon-types.css`.

Cada tipo de Pokémon possui duas variáveis associadas:

*   `--color-<tipo>-bg`: Define a cor de fundo principal para o tipo.
*   `--color-<tipo>-text`: Define a cor do texto que melhor contrasta com a cor de fundo, garantindo legibilidade.

Essas variáveis são utilizadas em `assets/css/pokedex.css` e `assets/css/pokemon-detail.css` para aplicar dinamicamente as cores aos cards de Pokémon e aos detalhes, assegurando uma experiência visual coesa e acessível.
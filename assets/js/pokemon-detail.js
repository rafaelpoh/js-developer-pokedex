document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonId = urlParams.get("id");
  const pokedexContainer = document.getElementById("pokedex-container");

  if (pokemonId) {
    pokeApi.getPokemon(pokemonId).then((pokemon) => {
      const pokemonHtml = convertPokemonToDetailHtml(pokemon);
      pokedexContainer.innerHTML = pokemonHtml;

      

      
    });
  }
});

function convertPokemonToDetailHtml(pokemon) {
  const mainType = pokemon.type;
  return `
        <div class="left-screen ${mainType}">
            <div class="pokemon-content-card ${mainType} pokemon-content-card-left">
                <h1 class="name">${pokemon.name}</h1>
                <span class="number">#${pokemon.number}</span>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>
            </div>
        </div>
        <div class="right-screen ${mainType}">
            <div class="pokemon-content-card ${mainType} pokemon-content-card-right">
                <div class="stats">
                    <h2>Base Stats</h2>
                    <table>
                        ${pokemon.stats
                          .map(
                            (stat) =>
                              `<tr><td>${stat.stat.name.replace(
                                "-",
                                " "
                              )}</td><td>${stat.base_stat}</td></tr>`
                          )
                          .join("")}
                    </table>
                </div>
            </div>
        </div>
    `;
}

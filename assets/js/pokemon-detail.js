document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pokemonId = urlParams.get("id");
  const pokedexContainer = document.getElementById("pokedex-container");

  if (pokemonId) {
    pokeApi.getPokemon(pokemonId).then((pokemon) => {
      const pokemonHtml = convertPokemonToDetailHtml(pokemon);
      pokedexContainer.innerHTML = pokemonHtml;

      // --- Swipe functionality ---
      const leftScreen = pokedexContainer.querySelector(".left-screen");
      const rightScreen = pokedexContainer.querySelector(".right-screen");

      let startX = 0;
      let currentScreen = "left"; // Initially show the left screen

      // Function to update screen visibility
      function updateScreenVisibility() {
        if (window.innerWidth <= 1161) {
          // Apply only on smaller screens
          if (currentScreen === "left") {
            pokedexContainer.classList.add("left-page");
            pokedexContainer.classList.remove("right-page");
          } else {
            pokedexContainer.classList.add("right-page");
            pokedexContainer.classList.remove("left-page");
          }
        } else {
          // On larger screens, show both
          pokedexContainer.classList.remove("left-page");
          pokedexContainer.classList.remove("right-page");
        }
      }

      // Initial setup
      updateScreenVisibility();

      // Listen for window resize to adjust screen visibility
      window.addEventListener("resize", updateScreenVisibility);

      pokedexContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      });

      pokedexContainer.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;
        const swipeThreshold = 50; // Minimum pixels for a swipe

        if (window.innerWidth <= 1161 && Math.abs(diffX) > swipeThreshold) {
          if (diffX < 0 && currentScreen === "left") {
            // Swiped left
            currentScreen = "right";
          } else if (diffX > 0 && currentScreen === "right") {
            // Swiped right
            currentScreen = "left";
          }
          updateScreenVisibility();
        }
      });
      // --- End Swipe functionality ---

      
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

// Função para buscar e carregar os pokémons do arquivo JSON
async function loadPokemons() {
  try {
    const response = await fetch('data/pokemons.json');
    const pokemons = await response.json();

    const listElement = document.getElementById('pokemon-list');
    listElement.innerHTML = '';

    pokemons.forEach(pokemon => {
      const card = document.createElement('div');
      card.className = 'pokemon-card';

      const typesHTML = pokemon.types
        .map(type => `<span class="pokemon-type type-${type.toLowerCase()}">${type}</span>`)
        .join('');

      card.innerHTML = `
        <img src="${pokemon.image}" alt="${pokemon.name}" />
        <div class="pokemon-name">${pokemon.name}</div>
        <div class="pokemon-types">${typesHTML}</div>
      `;

      listElement.appendChild(card);
    });
  } catch (error) {
    console.error('Erro ao carregar os Pokémon:', error);
  }
}

// Carregar pokémons ao carregar a página
window.addEventListener('DOMContentLoaded', loadPokemons);

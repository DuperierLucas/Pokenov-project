const base_url = 'https://pokeapi.co/api/v2';

function getPokemons(id: string | number = '') {
    const allPokemons = fetch(base_url + '/pokemon/' + id).then((res) =>
        res.json(),
    );

    return allPokemons;
}

function getUpdatedPokemon(url: string) {
    const allPokemons = fetch(url).then((res) => res.json());

    return allPokemons;
}

export default { getPokemons, getUpdatedPokemon };

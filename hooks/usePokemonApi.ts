const base_url = 'https://pokeapi.co/api/v2';

function getPokemon(id: string | number = '') {
    const allPokemons = fetch(base_url + '/pokemon/' + id).then((res) =>
        res.json(),
    );

    return allPokemons;
}

export default { getPokemon };

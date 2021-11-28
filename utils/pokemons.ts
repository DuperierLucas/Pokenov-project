const MIN_POKEMON_ID = 1;
const MAX_POKEMON_ID = 898;

export function getRandomPokemon() {
    const randomId =
        Math.floor(Math.random() * MAX_POKEMON_ID) + MIN_POKEMON_ID;
    return randomId;
}

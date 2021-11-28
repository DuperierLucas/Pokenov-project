import {
    NamedAPIResourceList,
    Pokemon,
    PokemonClient,
    UtilityClient,
} from 'pokenode-ts';

const api = new PokemonClient();
const utilsAPI = new UtilityClient();

type PokeApiHelper = {
    getPokemons: () => Promise<NamedAPIResourceList>;
    getPokemonById: (id: number) => Promise<Pokemon>;
    getFromUrl: (url: string) => Promise<any>;
};

const usePokemonAPI = (): PokeApiHelper => {
    function getPokemons(): Promise<NamedAPIResourceList> {
        return api.listPokemons();
    }

    function getPokemonById(id: number): Promise<Pokemon> {
        return api.getPokemonById(id);
    }

    function getFromUrl(url: string): Promise<any> {
        return utilsAPI.getResourceByUrl(url);
    }

    return { getPokemons, getPokemonById, getFromUrl };
};
export default usePokemonAPI;

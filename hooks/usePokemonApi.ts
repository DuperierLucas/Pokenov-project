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
    getPokemonsList: (
        offset: number,
        limit: number,
    ) => Promise<NamedAPIResourceList>;
    getPokemonById: (id: number) => Promise<Pokemon>;
    getFromUrl: (url: string) => Promise<any>;
};

const usePokemonAPI = (): PokeApiHelper => {
    function getPokemons(): Promise<NamedAPIResourceList> {
        return api.listPokemons();
    }

    function getPokemonsList(offset, limit): Promise<NamedAPIResourceList> {
        return api.listPokemons(offset, limit);
    }

    function getPokemonById(id: number): Promise<Pokemon> {
        return api.getPokemonById(id);
    }

    function getFromUrl(url: string): Promise<any> {
        return utilsAPI.getResourceByUrl(url);
    }

    return { getPokemons, getPokemonById, getFromUrl, getPokemonsList };
};
export default usePokemonAPI;

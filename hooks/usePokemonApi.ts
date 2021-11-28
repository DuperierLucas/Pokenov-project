import {
    NamedAPIResourceList,
    PokemonClient,
    UtilityClient,
} from 'pokenode-ts';

const api = new PokemonClient();
const utilsAPI = new UtilityClient();

type PokeApiHelper = {
    getPokemons: () => Promise<NamedAPIResourceList>;
    getFromUrl: (url: string) => Promise<any>;
};

const usePokemonAPI = (): PokeApiHelper => {
    function getPokemons(): Promise<NamedAPIResourceList> {
        return api.listPokemons();
    }

    function getFromUrl(url: string): Promise<any> {
        return utilsAPI.getResourceByUrl(url);
    }

    return { getPokemons, getFromUrl };
};
export default usePokemonAPI;

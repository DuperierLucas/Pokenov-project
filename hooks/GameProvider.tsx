import React, { createContext, useContext, useState } from 'react';
import { Pokemon } from 'pokenode-ts';

type Game = {
    pokemonTeam: Pokemon[];
    capturedPokemons: Pokemon[];
    catchPokemon: (pokemon: Pokemon) => void;
    addPokemonToTeam: (pokemon: Pokemon, slotIndex: number) => boolean;
};

const GameContext = createContext<Game>({} as any);

type Props = {
    children: JSX.Element;
};

const DEFAULT_TEAM_STATE: Pokemon[] = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
];

const Provider = ({ children }: Props): JSX.Element => {
    const [username, setUsername] = useState<string>('Anonyme');
    const [pokemonTeam, setPokemonTeam] =
        useState<Pokemon[]>(DEFAULT_TEAM_STATE);
    const [wildsPokemons, setWildPokemons] = useState<Pokemon[]>([]);
    const [topTeams, setTopTeams] = useState([]);
    const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);

    function catchPokemon(pokemon: Pokemon) {
        const newCapturedPokemons = [...capturedPokemons, pokemon];
        setCapturedPokemons(newCapturedPokemons);
    }

    function addPokemonToTeam(pokemon: Pokemon, slotIndex) {
        if (
            pokemonTeam.find((poke) => poke?.id === pokemon.id) ||
            slotIndex > 5 ||
            slotIndex < 0
        ) {
            return false;
        }

        const newTeam = [...pokemonTeam];
        newTeam[slotIndex] = pokemon;
        setPokemonTeam(newTeam);
        return true;
    }

    const providerValues: Game = {
        pokemonTeam,
        capturedPokemons,
        catchPokemon,
        addPokemonToTeam,
    };

    return (
        <GameContext.Provider value={providerValues}>
            {children}
        </GameContext.Provider>
    );
};

export const GameProvider = Provider;

export default function useGame(): Game {
    return useContext<Game>(GameContext);
}

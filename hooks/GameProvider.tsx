import React, { createContext, useContext, useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Game = {
    pokemonTeam: Pokemon[];
    capturedPokemons: Pokemon[];
    catchPokemon: (pokemon: Pokemon) => void;
    addPokemonToTeam: (pokemon: Pokemon, slotIndex: number) => boolean;
    deletePokemonFromTeam: (slotIndex: number) => void;
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
    const [pokemonTeam, setPokemonTeam] =
        useState<Pokemon[]>(DEFAULT_TEAM_STATE);
    const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);
    const [wildsPokemons, setWildPokemons] = useState<Pokemon[]>([]);
    const [topTeams, setTopTeams] = useState([]);
    const [username, setUsername] = useState<string>('Anonyme');

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        saveData();
    }, [pokemonTeam, capturedPokemons, wildsPokemons, topTeams, username]);

    async function getData() {
        const data = await AsyncStorage.getItem('game');
        if (data) {
            const parsedData = JSON.parse(data);
            setPokemonTeam(parsedData.pokemonTeam);
            setCapturedPokemons(parsedData.capturedPokemons);
            setWildPokemons(parsedData.wildsPokemons);
            setTopTeams(parsedData.topTeams);
            setUsername(parsedData.username);
        }
    }

    async function saveData() {
        const data = JSON.stringify({
            pokemonTeam,
            capturedPokemons,
            username,
            wildsPokemons,
            topTeams,
        });
        await AsyncStorage.setItem('game', data);
    }

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

    function deletePokemonFromTeam(index: number) {
        const newTeam = [...pokemonTeam];
        newTeam[index] = undefined;
        setPokemonTeam(newTeam);
    }

    const providerValues: Game = {
        pokemonTeam,
        capturedPokemons,
        catchPokemon,
        addPokemonToTeam,
        deletePokemonFromTeam,
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

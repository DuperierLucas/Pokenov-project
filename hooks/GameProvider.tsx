import React, { createContext, useContext, useEffect, useState } from 'react';
import { Pokemon } from 'pokenode-ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRandomPokemon } from '../utils/pokemons';
import usePokemonAPI from './usePokemonApi';
import { PokemonToCapture, PokemonFull, TeamRecapPokemon } from '../types';

type Game = {
    pokemonTeam: PokemonFull[];
    capturedPokemons: Pokemon[];
    catchPokemon: () => void;
    addPokemonToTeam: (pokemon: PokemonFull, slotIndex: number) => boolean;
    setPokemonLevel: (pokemon: PokemonFull, slotIndex: number) => boolean;
    deletePokemonFromTeam: (slotIndex: number) => void;
    resetGame: () => void;
    getPokemonToCapture: () => PokemonToCapture | undefined;
    wildsPokemons: PokemonToCapture[];
    skipWildPokemon: () => void;
    username: string;
    getRandomEnnemyTeam: () => Promise<TeamRecapPokemon[]>;
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
    const { getPokemonById, getPokemonsList } = usePokemonAPI();
    const [pokemonTeam, setPokemonTeam] =
        useState<Pokemon[]>(DEFAULT_TEAM_STATE);
    const [capturedPokemons, setCapturedPokemons] = useState<Pokemon[]>([]);
    const [wildsPokemons, setWildPokemons] = useState<PokemonToCapture[]>([]);
    const [topTeams, setTopTeams] = useState([]);
    const [username, setUsername] = useState<string>('Anonyme');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        initGame();
    }, []);

    async function initGame() {
        await getData();
        setMounted(true);
    }

    useEffect(() => {
        if (wildsPokemons.length < 1 && mounted) {
            generatePokemonsToCapture();
        }
    }, [mounted, wildsPokemons]);

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

    function resetGame() {
        setWildPokemons([]);
        setUsername('Anonyme');
        setTopTeams([]);
        setCapturedPokemons([]);
        setPokemonTeam([]);
    }

    async function generatePokemonsToCapture() {
        const randomPokemons: PokemonToCapture[] = [];
        const startTime = new Date();
        for (let i = 0; i < 10; i++) {
            const index = i;
            const randomId = getRandomPokemon();
            const randomPokemon = await getPokemonById(randomId);
            const baseDate = new Date(startTime);
            randomPokemons.push({
                pokemon: randomPokemon,
                apparitionDate: baseDate.getTime() + 1000 * index * 10 * 60,
                disparitionDate:
                    baseDate.getTime() + 1000 * (index + 1) * 10 * 60,
            });
        }
        setWildPokemons(
            randomPokemons.sort(
                (p1, p2) => p1.apparitionDate - p2.apparitionDate,
            ),
        );
    }

    async function getRandomEnnemyTeam(): Promise<TeamRecapPokemon[]> {
        const offset = Math.floor(Math.random() * 100) + 100;

        const { results } = await getPokemonsList(offset, 6);
        const fetchDetailsRequests = results.map((pokemon) =>
            getPokemonById(pokemon.id ?? pokemon.name),
        );
        const pokemons = await Promise.all(fetchDetailsRequests);
        return pokemons.map((p) => {
            const lvl = Math.floor(Math.random() * 100) + 1;
            return { ...p, isAlive: true, lvl };
        });
    }

    function getPokemonToCapture() {
        const pokemonIndex = wildsPokemons.findIndex(
            (wildPokemon) =>
                wildPokemon.apparitionDate <= Date.now() &&
                wildPokemon.disparitionDate >= Date.now(),
        );
        let pokemon = null;
        if (
            (pokemonIndex === -1 && wildsPokemons?.length < 1) ||
            wildsPokemons[wildsPokemons.length - 1].disparitionDate < Date.now()
        ) {
            console.log('generate');
            generatePokemonsToCapture();
            pokemon = wildsPokemons.find(
                (wildPokemon) =>
                    wildPokemon.apparitionDate <= Date.now() &&
                    wildPokemon.disparitionDate >= Date.now(),
            );
            return pokemon;
        }
        if (pokemonIndex > 0) {
            const newWildsPokemons = wildsPokemons.slice(pokemonIndex);
            setWildPokemons(newWildsPokemons);
        }
        return wildsPokemons[pokemonIndex];
    }

    function catchPokemon() {
        const newCapturedPokemons = [
            ...capturedPokemons,
            wildsPokemons[0].pokemon,
        ];
        setWildPokemons(wildsPokemons.slice(1));
        setCapturedPokemons(newCapturedPokemons);
    }

    function skipWildPokemon() {
        setWildPokemons(wildsPokemons.slice(1));
    }

    function addPokemonToTeam(pokemon: PokemonFull, slotIndex) {
        if (
            pokemonTeam.find((poke) => poke?.id === pokemon.id) ||
            slotIndex > 5 ||
            slotIndex < 0
        ) {
            return false;
        }

        const newTeam = [...pokemonTeam];
        pokemon.lvl = 1;
        pokemon.currentSteps = 0;
        pokemon.stepsToReach = 10;

        newTeam[slotIndex] = pokemon;
        setPokemonTeam(newTeam);
        return true;
    }

    function setPokemonLevel(pokemon: PokemonFull, slotIndex) {
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
        setPokemonLevel,
        deletePokemonFromTeam,
        resetGame,
        getPokemonToCapture,
        wildsPokemons,
        skipWildPokemon,
        username,
        getRandomEnnemyTeam,
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

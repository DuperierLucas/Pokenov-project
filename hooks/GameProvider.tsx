import React, { createContext, useContext, useState } from 'react';

type Game = {
    logUser: () => void;
};

const GameContext = createContext<Game>({} as any);

type Props = {
    children: JSX.Element;
};

const Provider = ({ children }: Props): JSX.Element => {
    const [user, setUser] = useState();
    const [wildsPokemons, setWildPokemons] = useState([]);
    const [topTeams, setTopTeams] = useState([]);

    function logUser() {
        console.log('user');
    }

    const providerValues: Game = {
        logUser,
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

type User = {
    name;
    pokemonTeam;
    pokemonsCaptured;
};

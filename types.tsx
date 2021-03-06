/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pokemon } from 'pokenode-ts';

declare global {
    namespace ReactNavigation {}
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
    Fight: undefined;
    Settings: undefined;
    Catch: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    Favorites: undefined;
    Home: undefined;
    Team: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >;

export type PokemonToCapture = {
    pokemon: Pokemon;
    apparitionDate: number;
    disparitionDate: number;
};

export interface PokemonFull extends Pokemon {
    lvl?: number;
    currentSteps?: number;
    stepsToReach?: number;
}

export interface TeamRecapPokemon extends PokemonFull {
    isAlive: boolean;
}

export type FightHistoryEntry = {
    result: 'win' | 'loose';
};

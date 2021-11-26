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

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
    Login: undefined;
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

export type Recipe = {
    title: string;
    imageUrl: string;
};

export type RecipeCategory = {
    name: string;
    thumbnailUrl: string;
};

export type pokemonList = {
    count: number;
    next: string;
    previous: string;
    results: Array<Pokemon>;
};

export type Pokemon = {
    name: string;
    url: string;
};

export type PokemonDetail = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        back_default: string;
    };
};

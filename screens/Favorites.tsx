import * as React from 'react';

import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

import MarmitonPokemon from '../components/MarmitonPokemon';
import { RootTabScreenProps, pokemonList } from '../types';

import usePokemonApi from '../hooks/usePokemonApi';

import { styles } from '../styles/screens/Favorites.style';

export default function Favorites({}: RootTabScreenProps<'Favorites'>) {
    const { getPokemon } = usePokemonApi;

    const [pokemons, setPokemons] = useState<pokemonList>();

    useEffect(() => {
        fetchPokemons();
    }, []);

    async function fetchPokemons() {
        try {
            console.log('all');
            const allPokemons = await getPokemon();

            console.log(allPokemons);
            setPokemons(allPokemons);
        } catch (err) {
            console.log(err);
        }
    }

    function getPokemonList() {
        if (pokemons)
            return pokemons.results.length > 0 ? (
                pokemons.results.map((pokemon) => (
                    <MarmitonPokemon key={pokemon.name} pokemon={pokemon} />
                ))
            ) : (
                <Text style={styles.title}>No pokemons founds</Text>
            );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mes favoris</Text>

            <ScrollView
                contentContainerStyle={styles.innerContainer}
                showsVerticalScrollIndicator={false}
            >
                {getPokemonList()}
            </ScrollView>
        </View>
    );
}

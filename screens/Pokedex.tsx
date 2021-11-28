import React from 'react';
import { ScrollView, Image, TouchableOpacity, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import MarmitonPokemon from '../components/MarmitonPokemon';

import { styles } from '../styles/screens/Favorites.style';
import usePokemonAPI from '../hooks/usePokemonApi';
import { NamedAPIResourceList } from 'pokenode-ts';

export default function Pokedex(): JSX.Element {
    const { getPokemons, getFromUrl } = usePokemonAPI();

    const [pokemons, setPokemons] = useState<NamedAPIResourceList>();

    useEffect(() => {
        fetchPokemons();
    }, []);

    async function fetchPokemons(url = '') {
        try {
            console.log('all');
            let allPokemons;
            url === ''
                ? (allPokemons = await getPokemons())
                : (allPokemons = await getFromUrl(url));

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

    const previousButton = () => {
        return pokemons?.previous ? (
            <TouchableOpacity
                onPress={() => {
                    fetchPokemons(pokemons.previous);
                }}
            >
                <Image
                    style={[styles.image, styles.arrowLeft]}
                    source={require('../assets/images/arrow-down.png')}
                />
            </TouchableOpacity>
        ) : (
            <View></View>
        );
    };

    const nextButton = () => {
        return pokemons?.next ? (
            <TouchableOpacity
                onPress={() => {
                    fetchPokemons(pokemons.next);
                }}
            >
                <Image
                    style={[styles.image, styles.arrowRight]}
                    source={require('../assets/images/arrow-down.png')}
                />
            </TouchableOpacity>
        ) : (
            <View></View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokédex</Text>

            <ScrollView
                contentContainerStyle={styles.innerContainer}
                showsVerticalScrollIndicator={false}
            >
                {getPokemonList()}
            </ScrollView>
            <View style={styles.footer}>
                {previousButton()}
                {nextButton()}
            </View>
        </View>
    );
}

import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/components/MarmitonPokemon.style';
import usePokemonApi from '../hooks/usePokemonApi';
import { useEffect, useState } from 'react';

import { Pokemon, PokemonDetail } from '../types';
type Props = {
    pokemon: Pokemon;
};

const MarmitonPokemon = (props: Props) => {
    const { pokemon } = props;
    console.log(pokemon);

    const { getPokemon } = usePokemonApi;
    const [currentPokemon, setCurrentPokemon] = useState<PokemonDetail>();

    useEffect(() => {
        fetchPokemonInfos();
    }, []);

    async function fetchPokemonInfos() {
        try {
            const currentPokemon = await getPokemon(pokemon.name);

            setCurrentPokemon(currentPokemon);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{pokemon.name}</Text>
            <Image
                style={styles.image}
                source={{ uri: currentPokemon?.sprites.front_default }}
            />
        </View>
    );
};

export default MarmitonPokemon;

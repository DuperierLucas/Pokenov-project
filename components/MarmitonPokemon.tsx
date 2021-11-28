import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/components/MarmitonPokemon.style';
import usePokemonApi from '../hooks/usePokemonApi';
import { useEffect, useState } from 'react';

import { PokemonDetail } from '../types';
import { NamedAPIResource } from 'pokenode-ts';
type Props = {
    pokemon: NamedAPIResource;
};

const MarmitonPokemon = (props: Props) => {
    const { pokemon } = props;

    const { getFromUrl } = usePokemonApi();
    const [currentPokemon, setCurrentPokemon] = useState<PokemonDetail>();
    const [currentPokemonImg, switchCurrentPokemonImg] =
        useState<boolean>(true);

    setTimeout(() => {
        switchCurrentPokemonImg(!currentPokemonImg);
    }, 1000);

    useEffect(() => {
        fetchPokemonInfos();
    }, []);

    async function fetchPokemonInfos() {
        try {
            const currentPokemon = await getFromUrl(pokemon.url);

            setCurrentPokemon(currentPokemon);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{pokemon.name}</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={[
                        currentPokemonImg ? styles.hideImage : styles.image,
                    ]}
                    source={{
                        uri: currentPokemon?.sprites.front_default,
                    }}
                />
                <Image
                    style={[
                        currentPokemonImg ? styles.image : styles.hideImage,
                    ]}
                    source={{
                        uri: currentPokemon?.sprites.back_default,
                    }}
                />
            </View>
        </View>
    );
};

export default MarmitonPokemon;

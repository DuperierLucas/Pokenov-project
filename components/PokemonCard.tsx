import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from '../styles/components/PokemonCard.style';
import usePokemonApi from '../hooks/usePokemonApi';
import { useEffect, useState } from 'react';

import { NamedAPIResource, Pokemon } from 'pokenode-ts';
type Props = {
    pokemon: NamedAPIResource;
    openModal: Function;
};

const PokemonCard = (props: Props): JSX.Element => {
    const { pokemon, openModal } = props;

    const { getFromUrl } = usePokemonApi();
    const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();
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

    function onPress() {
        openModal(currentPokemon);
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => {
                    onPress();
                }}
                style={styles.containerCard}
            >
                <Text style={styles.title}>{pokemon.name.toUpperCase()}</Text>
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
            </Pressable>
        </View>
    );
};

export default PokemonCard;

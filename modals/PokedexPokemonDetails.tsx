import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../styles/modals/PokedexPokemonDetails.style';
import CloseIcon from '../assets/images/close.svg';

import { Pokemon } from 'pokenode-ts';

type Props = {
    pokemon: Pokemon;
    close: () => void;
};

const PokedexPokemonDetails = ({ close, pokemon }: Props): JSX.Element => {
    function getCurrentPokemonTypes() {
        return pokemon?.types?.map((type) => (
            <Text style={styles.currentPokemonTypes}>
                {type.type.name.toLocaleUpperCase()}
            </Text>
        ));
    }

    function getCurrentPokemonBaseStats() {
        return pokemon?.stats?.map((stat) => (
            <View style={styles.containerContentDetailsItem}>
                <Text style={styles.subTitle}>{stat.stat.name}</Text>
                <Text style={styles.text}>{stat.base_stat}</Text>
            </View>
        ));
    }

    return (
        <View style={styles.modalView}>
            <TouchableOpacity onPress={close} style={styles.closeIcon}>
                <View style={styles.closeIconContainer}>
                    <CloseIcon width={20} height={20} fill={'white'} />
                </View>
            </TouchableOpacity>

            <View style={styles.containerModalView}>
                <Text style={styles.title}>{pokemon?.name.toUpperCase()}</Text>

                <View style={styles.containerContent}>
                    <View style={styles.containerContentDetails}>
                        <View>
                            <Text style={styles.subTitle}>
                                Id : {pokemon?.id}
                            </Text>
                        </View>
                        <View style={styles.containerContentDetailsItem}>
                            <Text style={styles.subTitle}>
                                Type
                                {pokemon?.types.length > 1 ? 's' : ''}
                            </Text>
                            <View style={styles.containerCurrentPokemonTypes}>
                                {getCurrentPokemonTypes()}
                            </View>
                        </View>
                        <View style={styles.containerContentDetailsItem}>
                            <Text style={styles.subTitle}>Weight</Text>
                            <Text style={styles.text}>
                                {pokemon?.weight} kg
                            </Text>
                        </View>
                        <View style={styles.containerContentDetailsItem}>
                            <Text style={styles.subTitle}>Height</Text>
                            <Text style={styles.text}>
                                {pokemon?.height} cm
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Image
                            style={styles.currentPokemonImg}
                            source={{
                                uri: pokemon?.sprites.front_default,
                            }}
                        />
                        <Image
                            style={styles.currentPokemonImg}
                            source={{
                                uri: pokemon?.sprites.back_default,
                            }}
                        />
                    </View>
                    <View>{getCurrentPokemonBaseStats()}</View>
                </View>
            </View>
        </View>
    );
};

export default PokedexPokemonDetails;

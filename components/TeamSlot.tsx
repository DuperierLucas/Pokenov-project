import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Pokemon } from 'pokenode-ts';
import { styles, THUMBNAIL_SIZE } from '../styles/components/TeamSlot.style';

type Props = {
    pokemon: Pokemon;
    index: number;
    onPress: ({
        index,
        pokemon,
    }: {
        index?: number;
        pokemon?: Pokemon;
    }) => void;
};

import AddIcon from '../assets/images/plus-icon.svg';
import { colors } from '../styles/shared/Color';

const TeamSlot = (props: Props): JSX.Element => {
    const { pokemon, index, onPress } = props;

    function onPressSlot() {
        onPress({ index, pokemon });
    }

    let content;

    if (!pokemon) {
        content = (
            <AddIcon
                height={THUMBNAIL_SIZE * 0.5}
                width={THUMBNAIL_SIZE * 0.5}
                fill={colors.main.orange}
            />
        );
    } else {
        content = (
            <>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: pokemon.sprites.front_default }}
                />
                <Text style={styles.title}>{pokemon.name}</Text>
            </>
        );
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.containerInner}
                activeOpacity={0.7}
                onPress={onPressSlot}
            >
                {content}
            </TouchableOpacity>
        </View>
    );
};

export default TeamSlot;

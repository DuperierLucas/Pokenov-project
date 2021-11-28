import React from 'react';
import { Image, Text, View } from 'react-native';
import { Pokemon } from 'pokenode-ts';
import { styles, THUMBNAIL_SIZE } from '../styles/components/TeamSlot.style';

type Props = {
    pokemon?: Pokemon;
};

import AddIcon from '../assets/images/plus-icon.svg';
import { colors } from '../styles/shared/Color';

const TeamSlot = (props: Props): JSX.Element => {
    const { pokemon } = props;
    let content;

    if (!pokemon) {
        content = (
            <AddIcon
                height={THUMBNAIL_SIZE * 0.75}
                width={THUMBNAIL_SIZE * 0.75}
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
            <View style={styles.containerInner}>{content}</View>
        </View>
    );
};

export default TeamSlot;

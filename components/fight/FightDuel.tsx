import React from 'react';
import { Image, View, Text } from 'react-native';
import { TeamRecapPokemon } from '../../types';
import styles from '../../styles/components/fight/FightDuel.style';

type Props = {
    ennemyPokemon: TeamRecapPokemon;
    myPokemon: TeamRecapPokemon;
};

const FightDuel = ({ ennemyPokemon, myPokemon }: Props): JSX.Element => {
    return (
        <View>
            <View style={styles.ennemyPokemonContainer}>
                <Text style={styles.pokemonLevelLabel}>
                    lvl. {ennemyPokemon.lvl}
                </Text>
                <Image
                    style={[styles.image]}
                    source={{ uri: ennemyPokemon.sprites.front_default }}
                />
            </View>
            <View style={styles.myPokemonContainer}>
                <Text style={styles.pokemonLevelLabel}>
                    lvl. {myPokemon.lvl}
                </Text>
                <Image
                    style={[styles.image]}
                    source={{ uri: myPokemon.sprites.back_default }}
                />
            </View>
        </View>
    );
};

export default FightDuel;
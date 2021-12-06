import React from 'react';
import { Image, View, Text, Animated } from 'react-native';
import { TeamRecapPokemon } from '../../types';
import styles from '../../styles/components/fight/FightDuel.style';
import useAnimation from '../../animations/components/fight/FightDuel.animations';

type Props = {
    ennemyPokemon: TeamRecapPokemon;
    myPokemon: TeamRecapPokemon;
};

const FightDuel = ({ ennemyPokemon, myPokemon }: Props): JSX.Element => {
    const { animatedEnnemyStyle, animatedPokemonStyle } = useAnimation(
        ennemyPokemon,
        myPokemon,
    );
    function displayEnnemyPokemon() {
        return (
            <Animated.View style={animatedEnnemyStyle}>
                <Text style={styles.pokemonLevelLabel}>
                    lvl. {ennemyPokemon.lvl}
                </Text>
                <Image
                    style={[styles.image]}
                    source={{ uri: ennemyPokemon.sprites.front_default }}
                />
            </Animated.View>
        );
    }

    function displayMyPokemon() {
        return (
            <Animated.View style={animatedPokemonStyle}>
                <Text style={styles.pokemonLevelLabel}>
                    lvl. {myPokemon.lvl}
                </Text>
                <Image
                    style={[styles.image]}
                    source={{ uri: myPokemon.sprites.back_default }}
                />
            </Animated.View>
        );
    }

    return (
        <View>
            {ennemyPokemon && displayEnnemyPokemon()}
            {myPokemon && displayMyPokemon()}
        </View>
    );
};

export default FightDuel;

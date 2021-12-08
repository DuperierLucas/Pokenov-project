import React from 'react';
import { Animated, Image, Text, View } from 'react-native';
import { TeamRecapPokemon } from '../../types';
import styles from '../../styles/components/fight/TeamRecap.style';
import useGame from '../../hooks/GameProvider';
import useAnimation from '../../animations/components/fight/TeamRecap.animations';
type Props = {
    team: TeamRecapPokemon[];
    align: 'left' | 'right' | 'center';
    playerName?: string;
};

const TeamRecap = ({ team, align, playerName }: Props): JSX.Element => {
    const { username } = useGame();
    const { animatedStyle } = useAnimation(align);
    function getPokemonImage(poke) {
        return (
            <>
                <Image
                    style={styles.pokemonImage}
                    source={{ uri: poke?.sprites?.front_default }}
                />
                {!poke.isAlive && <View style={styles.pokemonIsAmateur} />}
            </>
        );
    }
    const name = playerName ?? (align === 'left' ? 'Bot' : username);
    return (
        <Animated.View
            style={[
                styles.container,
                styles[`${align}Container`],
                animatedStyle,
            ]}
        >
            <Text style={styles.name}>{name}</Text>
            {team.map((pokemon, index) => (
                <View
                    style={styles.pokemonContainer}
                    key={pokemon?.sprites?.front_default ?? index}
                >
                    {pokemon && getPokemonImage(pokemon)}
                </View>
            ))}
        </Animated.View>
    );
};

export default TeamRecap;

import React from 'react';
import { Image, Text, View } from 'react-native';
import { TeamRecapPokemon } from '../../types';
import styles from '../../styles/components/fight/TeamRecap.style';
import useGame from '../../hooks/GameProvider';
type Props = {
    team: TeamRecapPokemon[];
    align: 'left' | 'right';
};

const TeamRecap = ({ team, align }: Props): JSX.Element => {
    const { username } = useGame();
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
    return (
        <View
            style={[
                styles.container,
                align === 'left' ? styles.leftContainer : styles.rightContainer,
            ]}
        >
            <Text style={styles.name}>
                {align === 'left' ? 'Bot' : username}
            </Text>
            {team.map((pokemon, index) => (
                <View
                    style={styles.pokemonContainer}
                    key={pokemon?.sprites?.front_default ?? index}
                >
                    {pokemon && getPokemonImage(pokemon)}
                </View>
            ))}
        </View>
    );
};

export default TeamRecap;

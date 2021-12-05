import React from 'react';
import { Image, View } from 'react-native';
import { TeamRecapPokemon } from '../../types';
import styles from '../../styles/components/fight/TeamRecap.style';
type Props = {
    team: TeamRecapPokemon[];
    align: 'left' | 'right';
};

const TeamRecap = ({ team, align }: Props): JSX.Element => {
    console.log(team);
    function getPokemonImage(poke) {
        return (
            <>
                <Image
                    style={styles.pokemonImage}
                    source={{ uri: poke.imageUrl }}
                />
                {!poke.isAlive && <View style={styles.pokemonIsAmateur} />}
            </>
        );
    }
    return (
        <View
            style={[
                styles.container,
                { alignSelf: align === 'left' ? 'flex-start' : 'flex-end' },
                { flexDirection: align === 'left' ? 'row' : 'row-reverse' },
            ]}
        >
            {team.map((pokemon, index) => (
                <View
                    style={styles.pokemonContainer}
                    key={pokemon?.imageUrl ?? index}
                >
                    {pokemon && getPokemonImage(pokemon)}
                </View>
            ))}
        </View>
    );
};

export default TeamRecap;

import React from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../styles/screens/Team.style';
import useGame from '../hooks/GameProvider';
import TeamSlot from '../components/TeamSlot';

export default function Team(): JSX.Element {
    const { pokemonTeam } = useGame();

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <TeamSlot pokemon={pokemonTeam[0]} />
                <TeamSlot pokemon={pokemonTeam[1]} />
            </View>
            <View style={styles.rowContainer}>
                <TeamSlot pokemon={pokemonTeam[2]} />
                <TeamSlot pokemon={pokemonTeam[3]} />
            </View>
            <View style={styles.rowContainer}>
                <TeamSlot pokemon={pokemonTeam[4]} />
                <TeamSlot pokemon={pokemonTeam[5]} />
            </View>
        </View>
    );
}

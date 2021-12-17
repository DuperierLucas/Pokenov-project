import useGame from '../hooks/GameProvider';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from '../styles/modals/DisplayStats.style';

type Props = {
    close: () => void;
};

export default function DisplayStats({ close }: Props): JSX.Element {
    const { capturedPokemons } = useGame();
    const { pokemonTeam } = useGame();
    const { fightHistory } = useGame();

    const highestLevelPokemon = () => {
        if (pokemonTeam.length >= 1)
            return Math.max(...pokemonTeam.map((pokemon) => pokemon.lvl));
        else return '-';
    };

    const nbFight = (status) => {
        return fightHistory.filter((fight) => fight.result == status).length;
    };

    return (
        <View style={styles.statCard}>
            <View>
                <Text style={styles.statTitle}>Statistiques</Text>
                <View style={styles.statContainer}>
                    <View style={styles.statItem}>
                        <Text style={[styles.statItem, styles.statNumber]}>
                            {capturedPokemons.length}
                        </Text>
                        <Text style={styles.statItem}>Pokemons possédé(s)</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={[styles.statItem, styles.statNumber]}>
                            {highestLevelPokemon()}
                        </Text>
                        <Text style={styles.statItem}>
                            Niveau max de pokémon
                        </Text>
                    </View>
                </View>
                <View style={styles.statContainer}>
                    <View style={styles.statItem}>
                        <Text style={[styles.statItem, styles.statNumber]}>
                            {nbFight('win')}
                        </Text>
                        <Text style={styles.statItem}>Combats Gagnés</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={[styles.statItem, styles.statNumber]}>
                            {nbFight('loose')}
                        </Text>
                        <Text style={styles.statItem}>Combats Perdus</Text>
                    </View>
                </View>
            </View>
            <View style={styles.statFooter}>
                <TouchableOpacity style={styles.statBackBtn} onPress={close}>
                    <Text>Retour</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

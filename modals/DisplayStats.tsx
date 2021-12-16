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
            return Math.max.apply(
                Math,
                pokemonTeam.map((pokemon) => pokemon.lvl),
            );
        else return 'Votre équipe est vide';
    };

    const nbFight = (status) => {
        return fightHistory.filter((fight) => fight.result == status).length;
    };

    console.log(fightHistory.filter((fight) => fight.result == 'win').length);

    return (
        <View style={styles.statCard}>
            <View>
                <Text style={styles.statTitle}>Statistiques</Text>
                <View style={styles.statItem}>
                    <Text>Pokemons possédé : {capturedPokemons.length}</Text>
                </View>
                <View style={styles.statItem}>
                    <Text>
                        Pokémon le plus haut niveau : lvl{' '}
                        {highestLevelPokemon()}
                    </Text>
                </View>
                <View style={styles.statItem}>
                    <Text>Combats Gagnés : {nbFight('win')}</Text>
                </View>
                <View style={styles.statItem}>
                    <Text>Combats Perdus : {nbFight('loose')}</Text>
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

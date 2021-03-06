import React, { useState } from 'react';
import { Modal, View, ScrollView } from 'react-native';
import { styles } from '../styles/screens/Team.style';
import useGame from '../hooks/GameProvider';
import TeamSlot from '../components/TeamSlot';
import TeamPokemonDetails from '../modals/TeamPokemonDetails';
import AddToTeam from '../modals/AddToTeam';
import { Pokemon } from 'pokenode-ts';
import TeamHeader from '../components/TeamHeader';

export default function Team(): JSX.Element {
    const { pokemonTeam } = useGame();
    const [pokemonDetailVisible, setPokemonDetailVisible] = useState(false);
    const [addPokemonVisible, setAddPokemonVisible] = useState(false);
    const [pokemonIndex, setPokemonIndex] = useState(0);

    function onPress({
        index,
        pokemon,
    }: {
        index?: number;
        pokemon?: Pokemon;
    }) {
        setPokemonIndex(index);
        if (pokemon) {
            setPokemonDetailVisible(true);
        } else {
            setAddPokemonVisible(true);
        }
    }

    return (
        <View style={styles.container}>
            <TeamHeader />
            <ScrollView
                contentContainerStyle={styles.innerContainer}
                bounces={false}
            >
                <View style={styles.rowContainer}>
                    <TeamSlot
                        pokemon={pokemonTeam[0]}
                        index={0}
                        onPress={onPress}
                    />
                    <TeamSlot
                        pokemon={pokemonTeam[1]}
                        index={1}
                        onPress={onPress}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <TeamSlot
                        pokemon={pokemonTeam[2]}
                        index={2}
                        onPress={onPress}
                    />
                    <TeamSlot
                        pokemon={pokemonTeam[3]}
                        index={3}
                        onPress={onPress}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <TeamSlot
                        pokemon={pokemonTeam[4]}
                        index={4}
                        onPress={onPress}
                    />
                    <TeamSlot
                        pokemon={pokemonTeam[5]}
                        index={5}
                        onPress={onPress}
                    />
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={pokemonDetailVisible}
                    onRequestClose={() => setPokemonDetailVisible(false)}
                >
                    <TeamPokemonDetails
                        index={pokemonIndex}
                        pokemon={pokemonTeam[pokemonIndex]}
                        close={() => setPokemonDetailVisible(false)}
                    />
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={addPokemonVisible}
                    onRequestClose={() => setAddPokemonVisible(false)}
                >
                    <AddToTeam
                        index={pokemonIndex}
                        close={() => setAddPokemonVisible(false)}
                    />
                </Modal>
            </ScrollView>
        </View>
    );
}

import React, { useState } from 'react';
import { Alert, Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/modals/TeamPokemonDetails.style';
import CloseIcon from '../assets/images/close.svg';
import useGame from '../hooks/GameProvider';
import { Pokemon } from 'pokenode-ts';
import PedometerDetails from './PedometerDetails';
import { PokemonFull } from 'types';

type Props = {
    pokemon: PokemonFull;
    index: number;
    close: () => void;
};
const TeamPokemonDetails = ({ index, close, pokemon }: Props): JSX.Element => {
    const { deletePokemonFromTeam } = useGame();
    const [pedometerVisible, setPedometerVisible] = useState(false);

    function onPressLevelUp(){
        setPedometerVisible(true);
    }

    function onPressDelete() {
        Alert.alert("Supprimer ce pokémon de l'équipe ?", '', [
            {
                text: 'Annuler',
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => {
                    deletePokemonFromTeam(index);
                    close();
                },
            },
        ]);
    }

    function getStats() {
        const stats = [
            {
                title: 'Level',
                value: `${pokemon.lvl}`,
            },
            {
                title: 'Taille',
                value: `${pokemon.height}cm`,
            },
            {
                title: 'Poids',
                value: `${pokemon.weight}kg`,
            },
            {
                title: 'Expérience/lvl',
                value: `${pokemon.base_experience}xp`,
            },
        ];
        return (
            <View style={styles.statContainer}>
                {stats.map((stat) => (
                    <View style={styles.statRow} key={stat.title}>
                        <Text style={styles.statTitle}>{stat.title}</Text>
                        <Text>{stat.value}</Text>
                    </View>
                ))}
            </View>
        );
    }
    if (!pokemon) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{pokemon.name}</Text>
                <TouchableOpacity onPress={close}>
                    <View style={styles.closeIconContainer}>
                        <CloseIcon width={20} height={20} fill={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.detailsContainer}>
                {getStats()}
                <View style={styles.spritesContainer}>
                    <Image
                        style={styles.spriteImage}
                        source={{ uri: pokemon.sprites.front_default }}
                    />
                    <Image
                        style={styles.spriteImage}
                        source={{ uri: pokemon.sprites.back_default }}
                    />
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={pedometerVisible}
                onRequestClose={() => setPedometerVisible(false)}
            >
                <PedometerDetails
                    index={index}
                    pokemon={pokemon}
                    close={() => setPedometerVisible(false)}
                />
            </Modal>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onPressDelete}>
                    <View style={styles.deleteContainer}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <Text style={styles.buttonLabel}>Retirer de l'équipe</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressLevelUp}>
                    <View style={styles.levelUpContainer}>
                        <Text style={styles.buttonLabel}>Level up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TeamPokemonDetails;

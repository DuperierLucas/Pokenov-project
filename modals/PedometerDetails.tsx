import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/modals/PedometerDetails.style';
import { PokemonFull } from '../types';
import { Pedometer } from 'expo-sensors';
import { Icon } from 'react-native-elements';
import useGame from '../hooks/GameProvider';

type Props = {
    pokemon: PokemonFull;
    index: number;
    close: () => void;
};

let subscription;

const PedometerDetails = ({ index, close, pokemon }: Props): JSX.Element => {
    const [isPedometerAvailable, setPedometerAvailable] = useState<string>(
        'Vérification disponiblité podomètre...',
    );
    const [currentStepCount, setCurrentStepCount] = useState<number>(
        pokemon.currentSteps,
    );
    const [stepCountToReach, setStepCountToReach] = useState<number>(
        pokemon.stepsToReach,
    );
    const [currentLevel, setCurrentLevel] = useState<number>(pokemon.lvl);
    const [nextLevel, setNextLevel] = useState<number>(pokemon.lvl + 1);
    const { setPokemonLevel } = useGame();

    useEffect(() => {
        subscribe();
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        savePokemonLevel();
    }, [currentStepCount]);

    function onPressStop() {
        savePokemonLevel();
        unsubscribe();
        close();
    }

    function savePokemonLevel() {
        if (currentStepCount >= stepCountToReach) {
            setCurrentStepCount(0);
            setStepCountToReach(stepCountToReach + 10);
            setCurrentLevel(nextLevel);
            setNextLevel(nextLevel + 1);
        }

        const p2 = { ...pokemon };

        p2.lvl = currentLevel;
        p2.currentSteps = currentStepCount;
        p2.stepsToReach = stepCountToReach;

        setPokemonLevel(p2, index);
    }

    async function subscribe() {
        subscription = Pedometer.watchStepCount((result) => {
            setCurrentStepCount(result.steps);
        });

        Pedometer.isAvailableAsync().then(
            () => {
                setPedometerAvailable('Podomètre disponible');
            },
            (error) => {
                setPedometerAvailable('Podomètre indisponible : ' + error);
            },
        );
    }

    async function unsubscribe() {
        subscription && subscription.remove();
        subscription = null;
    }

    if (!pokemon) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Level</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.textLevel}>{currentLevel}</Text>
                <Icon
                    name="arrow-forward-outline"
                    size={50}
                    color="white"
                    type="ionicon"
                    tvParallaxProperties
                />
                <Text style={styles.textLevel}>{nextLevel}</Text>
            </View>
            <View style={styles.progressStepContainer}>
                <Text style={styles.text}>
                    Nombre de pas : {currentStepCount}
                </Text>
                <Text style={styles.text}>
                    Objectif pas à atteindre: {stepCountToReach}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onPressStop}>
                    <View style={styles.stopContainer}>
                        <Text style={styles.buttonLabel}>Arrêter</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.progressStepContainer}>
                <Text style={styles.textFooter}>{isPedometerAvailable}</Text>
            </View>
        </View>
    );
};

export default PedometerDetails;

import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
    Platform,
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
} from 'react-native';
import useGame from '../../hooks/GameProvider';
import { PokemonToCapture } from '../../types';
import { styles } from '../../styles/screens/Catch.style';
const background = require('../../assets/images/catch_background.jpeg');

let timer;

type Props = {
    close: () => void;
};

export default function CatchModal({ close }: Props): JSX.Element {
    const {
        getPokemonToCapture,
        catchPokemon,
        wildsPokemons,
        skipWildPokemon,
    } = useGame();
    const [wildPokemon, setWildPokemon] = useState<PokemonToCapture>(undefined);
    const [timeToDisparition, setTimeToDisparition] = useState('');
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        fetchPokemonToCapture();
        return () => {
            clearInterval(timer);
        };
    }, []);

    function fetchPokemonToCapture() {
        const wPokemon = getPokemonToCapture();
        console.log(wPokemon);
        setWildPokemon(wPokemon);
    }

    useEffect(() => {
        wildPokemon && launchCountDown();
    }, [wildPokemon]);

    function launchCountDown() {
        clearInterval(timer);
        timer = setInterval(() => {
            const disparitionTime = Math.floor(
                (wildPokemon.disparitionDate - Date.now()) / 1000,
            );
            console.log(wildsPokemons);
            console.log(disparitionTime);
            if (disparitionTime < 1) {
                fetchPokemonToCapture();
            } else {
                setTimeToDisparition(
                    `Disparait dans ${Math.floor(disparitionTime / 60)}min ${
                        disparitionTime % 60
                    }s`,
                );
            }
        }, 1000);
    }

    function onPressCapture() {
        const win = Math.floor(Math.random() * 2) === 0;
        if (win) {
            catchPokemon();
            close();
        } else {
            skipWildPokemon();
            setFailed(true);
        }
    }

    function getButton() {
        if (failed) {
            return (
                <>
                    <View style={styles.captureButtonFailed}>
                        <Text style={styles.captureButtonLabel}>{'Raté'}</Text>
                    </View>
                </>
            );
        } else {
            return (
                <>
                    <TouchableOpacity
                        style={styles.captureButtonContainer}
                        onPress={onPressCapture}
                    >
                        <Text style={styles.captureButtonLabel}>
                            {'Capturer'}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.disparitionTime}>
                        {timeToDisparition}
                    </Text>
                </>
            );
        }
    }
    function displayPokemon() {
        return (
            <>
                <Text style={styles.title}>
                    Un {wildPokemon.pokemon.name} sauvage est apparu !{' '}
                </Text>
                <Animated.View style={styles.pokemonImageContainer}>
                    <View style={styles.pokemonImageContainerInner}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: wildPokemon.pokemon.sprites.front_default,
                            }}
                        />
                    </View>
                </Animated.View>
                <View>{getButton()}</View>
            </>
        );
    }

    function displayWaitingTimer() {
        if (!wildsPokemons[0]) {
            return;
        }
        const apparitionDate = Math.floor(
            (wildsPokemons[0].apparitionDate - Date.now()) / 1000 / 60,
        );
        return (
            <View>
                <Text style={styles.title}>
                    Prochain pokémon dans {apparitionDate} min
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image
                    source={background}
                    resizeMode={'cover'}
                    style={styles.backgroundImage}
                />
                {wildPokemon ? displayPokemon() : displayWaitingTimer()}
                <TouchableOpacity style={styles.closeButton} onPress={close}>
                    <Text style={styles.closeButtonLabel}>Retour</Text>
                </TouchableOpacity>
            </View>

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

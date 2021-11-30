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
import useGame from '../hooks/GameProvider';
import { PokemonToCapture } from '../types';
import { styles } from '../styles/screens/Catch.style';
import { useNavigation } from '@react-navigation/native';
const background = require('../assets/images/catch_background.jpeg');

let timer;

export default function Catch(): JSX.Element {
    const {
        getPokemonToCapture,
        catchPokemon,
        wildsPokemons,
        skipWildPokemon,
    } = useGame();
    const [wildPokemon, setWildPokemon] = useState<PokemonToCapture>(undefined);
    const [timeToDisparition, setTimeToDisparition] = useState('');
    const [failed, setFailed] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        fetchPokemonToCapture();
        return () => {
            clearInterval(timer);
        };
    }, []);

    function fetchPokemonToCapture() {
        const wPokemon = getPokemonToCapture();
        setWildPokemon(wPokemon);
    }

    useEffect(() => {
        wildPokemon && launchCountDown();
    }, [wildPokemon]);

    function launchCountDown() {
        timer = setInterval(() => {
            const disparitionTime = Math.floor(
                (wildPokemon.disparitionDate - Date.now()) / 1000,
            );
            if (disparitionTime < 1) {
                fetchPokemonToCapture();
            }
            setTimeToDisparition(
                `Disparait dans ${Math.floor(disparitionTime / 60)}min ${
                    disparitionTime % 60
                }s`,
            );
        }, 1000);
    }

    function onPressCapture() {
        const win = Math.floor(Math.random() * 5) === 0;
        console.log(win);
        if (win) {
            catchPokemon();
            // @ts-ignore rip ts, amateur
            navigation.navigate('Team');
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
        if(!wildsPokemons[0]) {
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
            </View>

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

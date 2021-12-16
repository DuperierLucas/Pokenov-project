import React, { useEffect, useState } from 'react';
import { styles } from '../styles/screens/Home.style';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FightHistory from '../components/home/FightHistory';
import { Audio } from 'expo-av';

const sound = new Audio.Sound();

export default function Home(): JSX.Element {
    const navigation = useNavigation();

    useEffect(() => {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: true,
            playThroughEarpieceAndroid: true
        });

        sound.loadAsync(require('../assets/sounds/billycrawford.mp3'), {
            shouldPlay: true
        }, false);
        sound.setStatusAsync({ isLooping: false })

        sound.playAsync();
    }, [])

    function openFight() {
        sound.stopAsync();
        sound.unloadAsync();
        navigation.navigate('Fight' as any);
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/home-background.jpg')}
                style={styles.background}
            >
                <Text style={styles.title}>Classement</Text>
                <FightHistory />
                <Image
                    source={require('../assets/gif/cat-front.gif')}
                    style={styles.pokemonFront}
                />
                <Image
                    source={require('../assets/gif/drake-back.gif')}
                    style={styles.pokemonBack}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.innerButton}
                    onPress={openFight}
                >
                    <View style={styles.battleButton}>
                        <Image
                            source={require('../assets/images/battle-icon.png')}
                            style={{ width: 60, height: 60 }}
                        />
                        <Text style={styles.battleButtonText}>Fight</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

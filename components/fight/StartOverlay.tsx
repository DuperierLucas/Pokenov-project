import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/components/fight/StartOverlay.style';
import { useNavigation } from '@react-navigation/native';
import TeamRecap from './TeamRecap';
import useGame from '../../hooks/GameProvider';
import { Audio } from 'expo-av';

type Props = {
    ready: boolean;
    onPressFight: () => void;
};

const PLACEHOLDER_TEAM = [null, null, null, null, null, null];

const soundBattle = new Audio.Sound();

const StartOverlay = ({ ready, onPressFight }: Props): JSX.Element => {
    const navigation = useNavigation();
    const { pokemonTeam } = useGame();
    const [myTeam, setMyTeam] = useState(PLACEHOLDER_TEAM);

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

        soundBattle.loadAsync(require('../../assets/sounds/battle.mp3'), {
            shouldPlay: true
        }, false);
        soundBattle.setStatusAsync({ isLooping: false })

        soundBattle.playAsync();

        setupMyTeam();
    }, []);

    function returnHome() {
        soundBattle.unloadAsync();
        soundBattle.stopAsync();
        navigation.goBack();
    }

    function setupMyTeam(): void {
        const mt = [];
        pokemonTeam.forEach((p) => {
            if (p) {
                mt.push({
                    isAlive: true,
                    ...p,
                });
            }
        });
        while (mt.length < 6) {
            mt.push(null);
        }
        setMyTeam(mt);
    }

    return (
        <View style={styles.container}>
            <View style={styles.recapContainer}>
                <TeamRecap team={myTeam} align={'center'} playerName={''} />
            </View>
            <Text style={styles.presentationLabel}>
                Les combats se déroulent automatiquement, vous affronterez une
                équipe constituée aléatoirement
            </Text>
            <Text style={styles.presentationLabel}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                L'équipe adverse comportera entre 2 et 4 pokémons
            </Text>
            <Text style={styles.presentationLabel}>
                Ces pokémons seront de niveau 10 à 80
            </Text>
            <Text style={styles.presentationLabel}>
                Prêt à relever le défi ?
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={ready && myTeam[0] ? onPressFight : undefined}
            >
                <Text style={styles.buttonLabel}>Lancer le combat</Text>
            </TouchableOpacity>
            {!ready && <Text style={styles.loader}>chargement ...</Text>}
            <TouchableOpacity
                style={styles.backButton}
                onPress={returnHome}
            >
                <Text style={styles.backButtonLabel}>Retour</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StartOverlay;

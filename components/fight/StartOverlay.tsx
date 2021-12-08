import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/components/fight/StartOverlay.style';
import { useNavigation } from '@react-navigation/native';
import TeamRecap from './TeamRecap';
import useGame from '../../hooks/GameProvider';

type Props = {
    ready: boolean;
    onPressFight: () => void;
};

const PLACEHOLDER_TEAM = [null, null, null, null, null, null];

const StartOverlay = ({ ready, onPressFight }: Props): JSX.Element => {
    const navigation = useNavigation();
    const { pokemonTeam } = useGame();
    const [myTeam, setMyTeam] = useState(PLACEHOLDER_TEAM);

    useEffect(() => {
        setupMyTeam();
    }, []);

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
                onPress={navigation.goBack}
            >
                <Text style={styles.backButtonLabel}>Retour</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StartOverlay;

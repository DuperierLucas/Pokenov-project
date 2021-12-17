import React, { useEffect, useState } from 'react';
import { styles } from '../styles/screens/Home.style';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FightHistory from '../components/home/FightHistory';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});
import { Audio } from 'expo-av';

const sound = new Audio.Sound();
import DisplayStats from '../modals/DisplayStats';

export default function Home(): JSX.Element {
    const [statsVisible, setStatshVisible] = useState(false);

    const navigation = useNavigation<any>();

    useEffect(() => {
        //Deeplink sur la capture quand l'app est lancée
        const notificationInteractionSubscription =
            Notifications.addNotificationResponseReceivedListener(() => {
                navigation.navigate('Catch');
            });

        return () => {
            notificationInteractionSubscription.remove();
        };
    }, []);

    function onPressDisplayStats() {
        setStatshVisible(true);
    }

    useEffect(() => {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            interruptionModeAndroid:
                Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: true,
            playThroughEarpieceAndroid: true,
        });

        sound.loadAsync(
            require('../assets/sounds/billycrawford.mp3'),
            {
                shouldPlay: true,
            },
            false,
        );
        sound.setStatusAsync({ isLooping: false });

        sound.playAsync();
    }, []);

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
                <Text style={styles.title}>Historique</Text>
                <FightHistory />

                <TouchableOpacity
                    onPress={onPressDisplayStats}
                    style={styles.statButton}
                >
                    <Image
                        style={styles.statIcon}
                        source={require('../assets/images/stats-icon.png')}
                    />
                </TouchableOpacity>

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
                        <Text style={styles.battleButtonText}>Combat</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
            {statsVisible && (
                <Modal animationType="fade" visible={statsVisible}>
                    <DisplayStats close={() => setStatshVisible(false)} />
                </Modal>
            )}
        </View>
    );
}

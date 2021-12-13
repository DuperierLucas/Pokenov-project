import React from 'react';
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

export default function Home(): JSX.Element {
    const navigation = useNavigation();

    function openFight() {
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

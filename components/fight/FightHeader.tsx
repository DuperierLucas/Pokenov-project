import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles, {
    GRADIENT_COLORS,
} from '../../styles/components/fight/FightHeader.style';
import { useNavigation } from '@react-navigation/native';

const FightHeader = (): JSX.Element => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient} colors={GRADIENT_COLORS}>
                <Text style={styles.title}>COMBAT</Text>
                <TouchableOpacity
                    onPress={navigation.goBack}
                    style={styles.backButton}
                >
                    <Text>retour</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

export default FightHeader;

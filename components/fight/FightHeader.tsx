import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles, {
    GRADIENT_COLORS,
} from '../../styles/components/fight/FightHeader.style';

const FightHeader = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <LinearGradient colors={GRADIENT_COLORS}>
                <Text style={styles.title}>COMBAT</Text>
            </LinearGradient>
        </View>
    );
};

export default FightHeader;

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/components/fight/StartOverlay.style';
import { useNavigation } from '@react-navigation/native';

type Props = {
    ready: boolean;
    onPressFight: () => void;
};

const StartOverlay = ({ ready, onPressFight }: Props): JSX.Element => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={ready ? onPressFight : undefined}
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

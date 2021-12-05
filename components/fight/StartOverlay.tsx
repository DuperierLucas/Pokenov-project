import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../../styles/components/fight/StartOverlay.style';

type Props = {
    ready: boolean;
    onPressFight: () => void;
};

const StartOverlay = ({ ready, onPressFight }: Props): JSX.Element => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPressFight}>
                <Text style={styles.buttonLabel}>Lancer le combat</Text>
            </TouchableOpacity>
            {!ready && <Text style={styles.loader}>chargement ...</Text>}
        </View>
    );
};

export default StartOverlay;

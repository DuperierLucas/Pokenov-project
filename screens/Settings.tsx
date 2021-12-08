import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useGame from '../hooks/GameProvider';
import { styles } from '../styles/screens/Settings.style';

const Settings = (): JSX.Element => {
    const { resetGame, catchPokemon, generatePokemonsToCapture } = useGame();

    return (
        <View>
            <TouchableOpacity onPress={resetGame} style={styles.button}>
                <Text>Remettre à 0 le jeu</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={catchPokemon} style={styles.button}>
                <Text>Capturer un pokémon</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={generatePokemonsToCapture}
                style={styles.button}
            >
                <Text>Regénérer les pokémons sauvages</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Settings;

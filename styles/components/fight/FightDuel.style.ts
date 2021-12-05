import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginTop: -25,
        resizeMode: 'contain',
    },
    pokemonLevelLabel: {
        width: 200,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    ennemyPokemonContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        justifyContent: 'center',
    },
    myPokemonContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

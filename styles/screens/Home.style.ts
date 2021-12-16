import { StyleSheet } from 'react-native';
import { colors } from './../shared/Color';
import { viewportHeight, viewportWidth } from '../metrics.style';

import chroma from 'chroma-js';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'relative',
    },
    carouselContainer: {
        paddingBottom: 10,
        minWidth: viewportWidth,
    },
    innerContainer: {
        alignItems: 'center',

        paddingBottom: 175,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 35,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.main.white,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

    background: {
        paddingBottom: 25,
    },

    contanerPokemon: {
        position: 'relative',
    },

    pokemonFront: {
        width: 100,
        height: 130,

        position: 'absolute',
        right: viewportWidth * 0.12,
        bottom: viewportHeight * 0.48,
    },

    pokemonBack: {
        position: 'absolute',
        left: viewportWidth * -0.4,
        bottom: viewportHeight * 0.14,
    },

    innerButton: {
        alignItems: 'flex-end',

        marginBottom: 75,
        marginRight: 25,
    },

    battleButton: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        shadowColor: colors.main.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,
        borderWidth: 1,
        backgroundColor: chroma(colors.main.white).alpha(0.3).css(),
    },

    battleButtonText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.main.white,
        textTransform: 'uppercase',
        textShadowRadius: 5,
        textShadowColor: colors.main.white,
    },

    statButton: {
        position: 'absolute',
        left: viewportWidth * 0.1,
        top: viewportHeight * 0.25,
        shadowColor: colors.main.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,
        backgroundColor: colors.main.modal,
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
    },

    statIcon: {
        width: 30,
        height: 30,
    },

    win: {
        backgroundColor: colors.main.background,
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },

    loose: {
        backgroundColor: colors.light.red,
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
});

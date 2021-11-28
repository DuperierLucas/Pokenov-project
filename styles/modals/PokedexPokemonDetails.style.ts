import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';
import chroma from 'chroma-js';

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: colors.main.orange,
    },
    closeIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    closeIconContainer: {
        justifyContent: 'center',
        margin: 20,
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: chroma('black').alpha(0.2).css(),
    },

    modalView: {
        position: 'relative',

        backgroundColor: colors.main.color,

        padding: 35,
        height: '100%',
        opacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    containerModalView: {
        alignItems: 'center',
    },
    currentPokemonImg: {
        width: 100,
        height: 100,
    },
    containerCurrentPokemonTypes: {
        backgroundColor: colors.main.color,
        display: 'flex',
        flexDirection: 'row',
    },
    currentPokemonTypes: {
        marginHorizontal: 5,
        color: colors.main.orange,
    },
    containerContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerContentDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerContentDetailsItem: {
        alignItems: 'center',
        marginBottom: 10,
    },
});

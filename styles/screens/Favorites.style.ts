import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50,
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 175,
        backgroundColor: colors.main.background,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    footer: {
        padding: 20,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: colors.main.background,
    },
    arrowLeft: {
        transform: [{ rotate: '90deg' }],
    },
    arrowRight: {
        transform: [{ rotate: '270deg' }],
    },
    modalView: {
        backgroundColor: colors.main.color,

        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
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
        backgroundColor: colors.main.color,
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
    },
});

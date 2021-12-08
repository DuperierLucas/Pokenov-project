import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';
import { viewportHeight, viewportWidth } from '../metrics.style';
import chroma from 'chroma-js';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: viewportWidth,
        height: viewportHeight,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    containerInner: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
    },
    pokemonImageContainer: {
        backgroundColor: chroma('white').alpha(0.1).css(),
        borderRadius: 200,
        padding: 20,
    },
    pokemonImageContainerInner: {
        backgroundColor: chroma('white').alpha(0.2).css(),
        borderRadius: 200,
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        height: 200,
        width: 200,
    },
    captureButtonContainer: {
        width: 250,
        paddingVertical: 20,
        backgroundColor: colors.main.orange,
        borderRadius: 40,
    },
    captureButtonFailed: {
        width: 250,
        paddingVertical: 20,
        backgroundColor: chroma(colors.main.orange).alpha(0.5).css(),
        borderRadius: 40,
    },
    captureButtonLabel: {
        color: colors.main.white,
        textTransform: 'uppercase',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    disparitionTime: {
        color: colors.main.white,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: chroma(colors.main.black).alpha(0.5).css(),
        textShadowRadius: 10,
        padding: 10,
    },
    closeButton: {
        backgroundColor: colors.main.black,
        padding: 20,
        borderRadius: 40,
        shadowColor: colors.main.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButtonLabel: {
        color: colors.main.white,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

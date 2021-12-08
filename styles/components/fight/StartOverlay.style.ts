import { colors } from '../../shared/Color';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: chroma(colors.main.black).alpha(0.7).css(),
    },
    recapContainer: {
        position: 'absolute',
        top: 100,
    },
    button: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: colors.main.yellow,
    },
    backButton: {
        marginTop: 50,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.main.white,
        position: 'absolute',
        bottom: 100,
    },
    buttonLabel: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
    },
    backButtonLabel: {
        textTransform: 'uppercase',
        fontSize: 10,
    },
    loader: {
        marginTop: 5,
        fontSize: 12,
    },
    presentationLabel: {
        color: colors.main.white,
        shadowColor: colors.main.white,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        fontWeight: 'bold',
        padding: 10,
    },
});

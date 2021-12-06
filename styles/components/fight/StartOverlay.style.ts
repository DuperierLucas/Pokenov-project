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
    button: {
        padding: 15,
        borderRadius: 20,
        backgroundColor: colors.main.yellow,
    },
    backButton: {
        marginTop: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.main.white,
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
});

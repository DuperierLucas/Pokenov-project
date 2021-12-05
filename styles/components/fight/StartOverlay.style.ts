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
        padding: 20,
        borderRadius: 20,
        backgroundColor: colors.main.yellow,
    },
    buttonLabel: {
        textTransform: 'uppercase',
    },
    loader: {
        marginTop: 5,
        fontSize: 12,
    },
});

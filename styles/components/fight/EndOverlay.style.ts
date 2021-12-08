import { colors } from '../../shared/Color';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import { viewportHeight } from '../../metrics.style';

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: chroma(colors.main.black).alpha(0.7).css(),
    },
    message: {
        position: 'absolute',
        bottom: viewportHeight / 2,
        textAlign: 'center',
        color: colors.main.white,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 20,
    },
    backButton: {
        marginTop: 50,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.main.white,
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

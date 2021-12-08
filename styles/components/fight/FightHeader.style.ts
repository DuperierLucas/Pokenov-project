import { colors } from '../../shared/Color';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import { viewportWidth } from '../../metrics.style';

export const GRADIENT_COLORS = [
    chroma(colors.main.black).alpha(1).css(),
    chroma(colors.main.black).alpha(0.9).css(),
    chroma(colors.main.black).alpha(0.7).css(),
    chroma(colors.main.black).alpha(0.5).css(),
    chroma(colors.main.black).alpha(0).css(),
];

export default StyleSheet.create({
    container: {
        position: 'absolute',
        width: viewportWidth,
    },
    gradient: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35,
        paddingBottom: 50,
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 10,
        backgroundColor: chroma(colors.main.white).alpha(0.2).css(),
        alignItems: 'center',
        borderRadius: 50,
        padding: 5,
    },
    backButtonLabel: {
        color: colors.main.white,
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
    },
    title: {
        alignSelf: 'center',
        textTransform: 'uppercase',
        color: colors.main.white,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: colors.main.white,
        textShadowRadius: 2,
        letterSpacing: 1.5,
    },
});

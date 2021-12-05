import { colors } from '../../shared/Color';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';

export const GRADIENT_COLORS = [
    chroma(colors.main.black).alpha(1).css(),
    chroma(colors.main.black).alpha(0.9).css(),
    chroma(colors.main.black).alpha(0.7).css(),
    chroma(colors.main.black).alpha(0.5).css(),
    chroma(colors.main.black).alpha(0).css(),
];

export default StyleSheet.create({
    container: {},
    title: {
        paddingTop: 35,
        paddingBottom: 15,
        textTransform: 'uppercase',
        color: colors.main.white,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: colors.main.white,
        textShadowRadius: 2,
        letterSpacing: 1.5,
    },
});

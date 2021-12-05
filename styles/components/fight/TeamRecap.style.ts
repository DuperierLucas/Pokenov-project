import { colors } from '../../shared/Color';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import { viewportWidth } from '../../metrics.style';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: viewportWidth * 0.7,
        backgroundColor: chroma(colors.main.white).alpha(0.2).css(),
    },
    pokemonContainer: {
        width: 30,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.main.black,
    },
    pokemonImage: {
        width: 30,
        height: 30,
    },
    pokemonIsAmateur: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 20,
        backgroundColor: chroma(colors.main.black).alpha(0.6).css(),
    },
});

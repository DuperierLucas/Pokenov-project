import { colors } from '../../shared/Color';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import { viewportWidth } from '../../metrics.style';

const IMAGE_SIZE = viewportWidth * 0.1;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: viewportWidth * 0.8,
        backgroundColor: chroma(colors.main.white).alpha(0.2).css(),
        padding: 10,
    },
    leftContainer: {
        borderTopRightRadius: IMAGE_SIZE,
        borderBottomEndRadius: IMAGE_SIZE,
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    rightContainer: {
        borderTopLeftRadius: IMAGE_SIZE,
        borderBottomStartRadius: IMAGE_SIZE,
        alignSelf: 'flex-end',
        flexDirection: 'row-reverse',
    },
    pokemonContainer: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
        borderWidth: 1,
        borderColor: colors.main.black,
    },
    pokemonImage: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
    },
    pokemonIsAmateur: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: IMAGE_SIZE / 2,
        backgroundColor: chroma(colors.main.black).alpha(0.6).css(),
    },
    name: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        position: 'absolute',
        top: -20,
        paddingHorizontal: 10,
    },
});

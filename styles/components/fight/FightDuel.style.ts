import { colors } from '../../shared/Color';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import { viewportWidth } from '../../metrics.style';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: viewportWidth * 0.8,
        backgroundColor: chroma(colors.main.white).alpha(0.2).css(),
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: -25,
        resizeMode: 'contain',
    },
    pokemonLevelLabel: {
        width: 200,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    ennemyPokemonContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    myPokemonContainer: {
        alignItems: 'flex-start',
    },
});

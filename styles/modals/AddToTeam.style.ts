import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import { colors } from '../shared/Color';
import { viewportHeight, viewportWidth } from '../metrics.style';

export const THUMBNAIL_SIZE = viewportHeight * 0.15;

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: viewportWidth,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: viewportHeight * 0.8,
        backgroundColor: colors.main.modal,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontWeight: 'bold',
        paddingLeft: 20,
        textTransform: 'uppercase',
        fontSize: 18,
    },
    closeIconContainer: {
        justifyContent: 'center',
        margin: 20,
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: chroma('black').alpha(0.2).css(),
    },
    thumbnail: {
        width: THUMBNAIL_SIZE,
        height: THUMBNAIL_SIZE,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: colors.main.orange,
    },

    pokemonCardList: {
        display: 'flex',
        marginLeft: '10%',
        marginRight: '10%',
    },

    pokemonCard: {
        borderRadius: 20,
        borderWidth: 1,
        width: 100,
        alignItems: 'center',
    },
});

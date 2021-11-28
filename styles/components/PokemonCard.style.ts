import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';

const ITEM_SIZE = 75;

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: colors.main.color,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        borderRadius: ITEM_SIZE / 2,
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        overflow: 'hidden',
    },
    hideImage: {
        height: 0,
        width: 0,
        opacity: 0,
    },
    title: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.main.orange,
    },
});

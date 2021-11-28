import { StyleSheet } from 'react-native';

const ITEM_SIZE = 75;

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    image: {
        borderRadius: ITEM_SIZE / 2,
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        overflow: 'hidden',
    },
    title: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold',
    },
});

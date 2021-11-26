import { StyleSheet } from 'react-native';

const ITEM_SIZE = 75;

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#845EC2',
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
        color: '#FF9671',
    },
});

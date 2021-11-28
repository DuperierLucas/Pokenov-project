import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    withEmailContainer: {
        borderWidth: 1,
        borderColor: chroma('black').alpha(0.2).css(),
        borderRadius: 10,
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 15,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

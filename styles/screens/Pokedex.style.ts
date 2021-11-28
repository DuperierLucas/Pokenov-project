import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';

export const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: colors.main.orange,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 50,
        height: 50,
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 175,
        backgroundColor: colors.main.background,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    footer: {
        padding: 20,
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: colors.main.background,
    },
    arrowLeft: {
        transform: [{ rotate: '90deg' }],
    },
    arrowRight: {
        transform: [{ rotate: '270deg' }],
    },
});

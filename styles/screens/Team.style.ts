import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.main.background,
    },
    rowContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

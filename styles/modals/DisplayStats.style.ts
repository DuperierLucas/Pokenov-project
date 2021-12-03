import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';

export const styles = StyleSheet.create({
    statCard: {
        backgroundColor: colors.main.modal,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 30,
    },

    statTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },

    statItem: {
        display: 'flex',
    },

    statFooter: {},

    statBackBtn: {
        backgroundColor: colors.main.buttonSuccess,

        padding: 10,
        borderRadius: 5,
    },
});

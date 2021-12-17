import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';
import { viewportWidth } from '../metrics.style';

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
    statContainer: {
        width: viewportWidth,
        height: 200,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    statTitle: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    statNumber: {
        fontSize: 35,
        fontWeight: 'bold',
        shadowRadius: 3,
        shadowColor: colors.main.black,
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    statItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    statFooter: {},

    statBackBtn: {
        backgroundColor: colors.main.white,

        padding: 10,
        borderRadius: 5,
    },
});

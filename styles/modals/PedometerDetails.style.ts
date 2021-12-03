import { StyleSheet } from 'react-native';
import { colors } from '../shared/Color';
import { viewportHeight, viewportWidth } from '../metrics.style';
import chroma from 'chroma-js';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: chroma(colors.main.black).alpha(0.8).css(),
        position: 'absolute',
        bottom: 0,
        width: viewportWidth,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: viewportHeight * 1,
    },
    header: {
        flexDirection: 'row',
        textAlign: 'center',
        alignSelf: 'center',
        padding: 50
    },
    headerTitle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 50,
        color: 'white'
    },
    stopContainer: {
        borderWidth: 1,
        borderColor: '#CF0A0B',
        backgroundColor: colors.main.buttonDanger,
        borderRadius: 10,
        padding: 12,
        margin: 0,
    },
    buttonLabel: {
        color: 'white',
        textTransform: 'uppercase',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    textLevel: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    },
    textFooter: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 15,
        textAlign: 'center'
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: colors.main.orange,
    },
    detailContainer: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center',
    },
    progressStepContainer: {
        marginTop: 30,
        textAlign: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignSelf: 'center'
    },
    statContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 20,
    },
    statRow: {
        alignItems: 'center',
        paddingVertical: 40,
        justifyContent: 'space-between',
    },
});

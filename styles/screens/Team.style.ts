import { StyleSheet } from 'react-native';
import { viewportHeight } from '../metrics.style';
import { colors } from '../shared/Color';
import chroma from 'chroma-js';

export const styles = StyleSheet.create({
    container: {
        height: viewportHeight,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: chroma(colors.main.black).alpha(0.9).css(),
        paddingHorizontal: 10,
        paddingTop: 35,
        paddingBottom: 10,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rowContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        color: colors.main.white,
    },
    iconContainer: {
        padding: 10,
        backgroundColor: chroma(colors.main.white).alpha(0.2).css(),
        borderRadius: 25,
    },
    icon: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

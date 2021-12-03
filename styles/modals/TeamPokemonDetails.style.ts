import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';
import { colors } from '../shared/Color';
import { viewportHeight, viewportWidth } from '../metrics.style';

export const THUMBNAIL_SIZE = viewportHeight * 0.15;

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: viewportWidth,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height: viewportHeight * 0.8,
        backgroundColor: colors.main.modal,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontWeight: 'bold',
        paddingLeft: 20,
        textTransform: 'uppercase',
        fontSize: 18,
    },
    spritesContainer: {
        flex: 2,
        justifyContent: 'space-around',
    },
    spriteImage: {
        marginVertical: 20,
        width: 160,
        height: 160,
        backgroundColor: chroma(colors.main.grey1).alpha(0.2).css(),
        borderRadius: 100 / 4,
    },
    closeIconContainer: {
        justifyContent: 'center',
        margin: 20,
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: chroma('black').alpha(0.2).css(),
    },
    deleteContainer: {
        borderWidth: 1,
        borderColor: '#CF0A0B',
        backgroundColor: '#EE0608',
        borderRadius: 10,
        padding: 12,
        margin: 0,
    },
    levelUpContainer: {
        borderWidth: 1,
        borderColor: '#0E992A',
        backgroundColor: '#1FC040',
        borderRadius: 10,
        padding: 12,
        margin: 0,
        marginLeft: 5
    },
    buttonLabel: {
        color: 'white',
        textTransform: 'uppercase',
    },
    thumbnail: {
        width: THUMBNAIL_SIZE,
        height: THUMBNAIL_SIZE,
    },
    title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: colors.main.orange,
    },
    detailsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    statContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 20,
    },
    statRow: {
        alignItems: 'center',
        paddingVertical: 20,
        //flexDirection: 'row',
        justifyContent: 'space-between',
    },
    statTitle: {
        fontWeight: 'bold',
    },
});

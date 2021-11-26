import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 175,
        backgroundColor: '#D65DB1',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    carouselContainer: {
        paddingBottom: 10
    },
    innerContainer: {
        alignItems: "center",
        paddingBottom: 175
    },
    categoriesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
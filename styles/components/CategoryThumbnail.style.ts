import {StyleSheet} from "react-native";

const ITEM_SIZE = 125;

export const styles = StyleSheet.create({
    container: {
        margin: 20,
        alignItems: "center"
    },
    image: {
        borderRadius: 20,
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        overflow: "hidden"
    },
    title: {
        marginTop: 10,
        fontSize: 12,
        fontWeight: 'bold',
    },
});
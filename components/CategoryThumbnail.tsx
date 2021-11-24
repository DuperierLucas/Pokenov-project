import React from 'react';
import {Image, View, Text} from "react-native";
import {styles} from "../styles/components/CategoryThumbnail.style";
import {Category} from "../types";

type Props = {
    category: Category
}

const CategoryThumbnail = (props: Props) => {
    const {category} = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: category.thumbnailUrl}} />
            <Text style={styles.title}>{category.name}</Text>
        </View>
    );
};

export default CategoryThumbnail;
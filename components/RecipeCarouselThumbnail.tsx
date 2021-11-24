import React from 'react';
import {Image, View, Text} from "react-native";
import {styles} from "../styles/components/RecipeCarouselThumbnail.style";
import {Recipe} from "../types";

type Props = {
   recipe: Recipe
}

const RecipeCarouselThumbnail = (props: Props) => {
    const {recipe} = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: recipe.imageUrl}} />
            <Text style={styles.title}>{recipe.title}</Text>
        </View>
    );
};

export default RecipeCarouselThumbnail;
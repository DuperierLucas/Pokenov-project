import React from 'react';
import { Image, View, Text } from 'react-native';
import { styles } from '../styles/components/RecipeCarouselThumbnail.style';

type Props = {
    recipe: any;
};

const RecipeCarouselThumbnail = (props: Props) => {
    const { recipe } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: recipe.imageUrl }} />
            <Text style={styles.title}>{recipe.title}</Text>
        </View>
    );
};

export default RecipeCarouselThumbnail;

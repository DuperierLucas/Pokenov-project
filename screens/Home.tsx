import * as React from 'react';
import { Text, View } from '../components/Themed';
import {styles} from "../styles/screens/Home.style";
import {ScrollView} from "react-native";
import RecipeCarouselThumbnail from "../components/RecipeCarouselThumbnail";
import {useEffect, useState} from "react";
import {Recipe, RecipeCategory} from "../types";
import SearchBar from "../components/SearchBar";
import CategoryThumbnail from "../components/CategoryThumbnail";

const RANDOM_RECIPES = [
    {
        title: 'Équipe 1',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 2',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 3',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 4',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 5',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 6',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 7',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 8',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 9',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Équipe 10',
        imageUrl: 'https://source.unsplash.com/random'
    },
]

export default function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        setRecipes(RANDOM_RECIPES)
    }, [])

    function getCarousel() {
        return recipes.map((recipe, index) => <RecipeCarouselThumbnail recipe={recipe} key={index}/>)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Classement</Text>
            <ScrollView horizontal={true} contentContainerStyle={styles.carouselContainer}
                        showsHorizontalScrollIndicator={false}>
                {getCarousel()}
            </ScrollView>
        </View>
    );
}
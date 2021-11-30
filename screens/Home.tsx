import React from 'react';
import { styles } from '../styles/screens/Home.style';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import RecipeCarouselThumbnail from '../components/RecipeCarouselThumbnail';
import { useEffect, useState } from 'react';
import useGame from '../hooks/GameProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RANDOM_RECIPES = [
    {
        title: 'Recette 1',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 2',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 3',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 4',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 5',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 6',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 7',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 8',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 9',
        imageUrl: 'https://source.unsplash.com/random',
    },
    {
        title: 'Recette 10',
        imageUrl: 'https://source.unsplash.com/random',
    },
];

export default function Home() {
    const { resetGame } = useGame();
    const [recipes, setRecipes] = useState<any[]>([]);
    useEffect(() => {
        setRecipes(RANDOM_RECIPES);
    }, []);

    function getCarousel() {
        return recipes.map((recipe, index) => (
            <RecipeCarouselThumbnail recipe={recipe} key={index} />
        ));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Classement</Text>
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.carouselContainer}
                showsHorizontalScrollIndicator={false}
            >
                {getCarousel()}
            </ScrollView>
            <TouchableOpacity
                onPress={resetGame}
                style={{ backgroundColor: 'red' }}
            >
                <Text>Remettre à 0 le jeu</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: 'red' }}
                onPress={() => AsyncStorage.clear()}
            >
                <Text>Clear</Text>
            </TouchableOpacity>
        </View>
    );
}

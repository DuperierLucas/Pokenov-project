import React from 'react';
import { styles } from '../styles/screens/Home.style';
import { ScrollView, View, Text, Image, ImageBackground } from 'react-native';
import RecipeCarouselThumbnail from '../components/RecipeCarouselThumbnail';
import { useEffect, useState } from 'react';

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
            <ImageBackground
                source={require('../assets/images/home-background.jpg')}
                style={styles.background}
            >
                <Text style={styles.title}>Classement</Text>

                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.carouselContainer}
                    showsHorizontalScrollIndicator={false}
                >
                    {getCarousel()}
                </ScrollView>

                <Image
                    source={require('../assets/gif/cat-front.gif')}
                    style={styles.pokemonFront}
                />
                <Image
                    source={require('../assets/gif/drake-back.gif')}
                    style={styles.pokemonBack}
                />
                <View style={styles.innerButton}>
                    <View style={styles.battleButton}>
                        <Image
                            source={require('../assets/images/battle-icon.png')}
                            style={{ width: 60, height: 60 }}
                        />

                        <Text style={styles.battleButtonText}>Fight</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

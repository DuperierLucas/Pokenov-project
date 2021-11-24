import * as React from 'react';
import { Text, View } from '../components/Themed';
import {styles} from "../styles/screens/Home.style";
import {ScrollView} from "react-native";
import RecipeCarouselThumbnail from "../components/RecipeCarouselThumbnail";
import {useEffect, useState} from "react";
import {Recipe} from "../types";
import SearchBar from "../components/SearchBar";
import CategoryThumbnail from "../components/CategoryThumbnail";

const RANDOM_RECIPES = [
    {
        title: 'Recette 1',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 2',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 3',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 4',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 5',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 6',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 7',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 8',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 9',
        imageUrl: 'https://source.unsplash.com/random'
    },{
        title: 'Recette 10',
        imageUrl: 'https://source.unsplash.com/random'
    },
]

const RANDOM_CATEGORIES = [
    {
        id: 'desserts',
        name: 'Desserts',
        thumbnailUrl: 'https://img.cuisineaz.com/680x357/2016/03/21/i47098-recettes-de-desserts-legers-et-printaniers.jpg'
    },
    {
        id: 'entrees',
        name: 'Entrées',
        thumbnailUrl: 'https://recettes.de/images/blogs/kamika/salade-aux-pois-chiches-et-aux-sardines-entree-ou-plat-kamika.320x240.jpg'
    },
    {
        id: 'carnivores',
        name: 'Carnivores',
        thumbnailUrl: 'https://static.actu.fr/uploads/2021/11/table-du-boucher.jpeg'
    },
    {
        id: 'vegetarien',
        name: 'Végétariens',
        thumbnailUrl: 'http://www.pourquoidocteur.fr/media/article/ggl1200_istock-802266868-plateresca-bol-brocolis-1582556122.jpg'
    },
    {
        id: 'vegetarien',
        name: 'Végétariens',
        thumbnailUrl: 'http://www.pourquoidocteur.fr/media/article/ggl1200_istock-802266868-plateresca-bol-brocolis-1582556122.jpg'
    },
    {
        id: 'vegetarien',
        name: 'Végétariens',
        thumbnailUrl: 'http://www.pourquoidocteur.fr/media/article/ggl1200_istock-802266868-plateresca-bol-brocolis-1582556122.jpg'
    }
]

export default function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [categories, setCategories] = useState<[]>([]);

    useEffect(()=> {
        setRecipes(RANDOM_RECIPES)
        setCategories(RANDOM_CATEGORIES)
    }, [])

    function getCarousel() {
        return recipes.map(recipe => <RecipeCarouselThumbnail recipe={recipe} />)
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>À la une</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.carouselContainer} showsHorizontalScrollIndicator={false}>
            {getCarousel()}
        </ScrollView>
        <ScrollView contentContainerStyle={styles.innerContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Rechercher une recette</Text>
        <SearchBar />
        <Text style={styles.title}>Catégories</Text>
        <View style={styles.categoriesContainer}>
        {categories.map((category) => <CategoryThumbnail category={category} />)}
        </View>
        </ScrollView>
    </View>
  );
}

import React from 'react';
import {
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    View,
    Modal,
} from 'react-native';
import { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import PokedexPokemonDetails from '../modals/PokedexPokemonDetails';

import { styles } from '../styles/screens/Pokedex.style';

import usePokemonAPI from '../hooks/usePokemonApi';
import { NamedAPIResourceList, Pokemon } from 'pokenode-ts';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function Pokedex(): JSX.Element {
    const { getPokemons, getFromUrl } = usePokemonAPI();

    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [currentDetailPokemon, setCurrentDetailPokemon] = useState<Pokemon>();
    const [pokemons, setPokemons] = useState<NamedAPIResourceList>();
    const tabBarHeight = useBottomTabBarHeight();

    useEffect(() => {
        fetchPokemons();
    }, []);

    async function fetchPokemons(url = '') {
        try {
            let allPokemons;
            url === ''
                ? (allPokemons = await getPokemons())
                : (allPokemons = await getFromUrl(url));

            setPokemons(allPokemons);
        } catch (err) {
            console.log(err);
        }
    }

    function openModal(pokemon: Pokemon) {
        setModalVisible(!modalVisible);
        setCurrentDetailPokemon(pokemon);
    }

    function getPokemonList() {
        if (pokemons)
            return pokemons.results.length > 0 ? (
                pokemons.results.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        pokemon={pokemon}
                        openModal={openModal}
                    />
                ))
            ) : (
                <Text style={styles.title}>No pokemons founds</Text>
            );
    }

    const previousButton = () => {
        return pokemons?.previous ? (
            <TouchableOpacity
                onPress={() => {
                    fetchPokemons(pokemons.previous);
                }}
            >
                <Image
                    style={[styles.image, styles.arrowLeft]}
                    source={require('../assets/images/arrow-down.png')}
                />
            </TouchableOpacity>
        ) : (
            <View></View>
        );
    };

    const nextButton = () => {
        return pokemons?.next ? (
            <TouchableOpacity
                onPress={() => {
                    fetchPokemons(pokemons.next);
                }}
            >
                <Image
                    style={[styles.image, styles.arrowRight]}
                    source={require('../assets/images/arrow-down.png')}
                />
            </TouchableOpacity>
        ) : (
            <View></View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pokédex</Text>

            <ScrollView
                contentContainerStyle={styles.innerContainer}
                showsVerticalScrollIndicator={false}
            >
                {getPokemonList()}
            </ScrollView>
            <View style={[styles.footer, { paddingBottom: tabBarHeight + 10 }]}>
                {previousButton()}
                {nextButton()}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <PokedexPokemonDetails
                    pokemon={currentDetailPokemon}
                    close={() => setModalVisible(false)}
                />
            </Modal>
        </View>
    );
}

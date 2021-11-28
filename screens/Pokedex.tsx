import React from 'react';
import {
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    View,
    Modal,
    Button,
} from 'react-native';
import { useEffect, useState } from 'react';
import MarmitonPokemon from '../components/MarmitonPokemon';

import { styles } from '../styles/screens/Favorites.style';
import usePokemonAPI from '../hooks/usePokemonApi';
import { NamedAPIResourceList, Pokemon } from 'pokenode-ts';

export default function Pokedex(): JSX.Element {
    const { getPokemons, getFromUrl } = usePokemonAPI();

    const [modalVisible, setModalVisible] = useState<Boolean>(false);
    const [currentDetailPokemon, setCurrentDetailPokemon] = useState<Pokemon>();
    const [pokemons, setPokemons] = useState<NamedAPIResourceList>();

    useEffect(() => {
        fetchPokemons();
    }, []);

    async function fetchPokemons(url = '') {
        try {
            console.log('all');
            let allPokemons;
            url === ''
                ? (allPokemons = await getPokemons())
                : (allPokemons = await getFromUrl(url));

            console.log(allPokemons);
            setPokemons(allPokemons);
        } catch (err) {
            console.log(err);
        }
    }

    function openModal(pokemon: Pokemon) {
        console.log(pokemon.types);
        setModalVisible(!modalVisible);
        setCurrentDetailPokemon(pokemon);

        console.log(pokemon.types);
    }

    function getCurrentPokemonTypes() {
        return currentDetailPokemon?.types?.map((type) => (
            <Text style={styles.currentPokemonTypes}>{type.type.name}</Text>
        ));
    }

    function getPokemonList() {
        if (pokemons)
            return pokemons.results.length > 0 ? (
                pokemons.results.map((pokemon) => (
                    <MarmitonPokemon
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
            <View style={styles.footer}>
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
                <View style={styles.modalView}>
                    <View style={styles.containerModalView}>
                        <Image
                            style={styles.currentPokemonImg}
                            source={{
                                uri: currentDetailPokemon?.sprites
                                    .front_default,
                            }}
                        />
                        <Text>{currentDetailPokemon?.name}</Text>
                        <View style={styles.containerCurrentPokemonTypes}>
                            {getCurrentPokemonTypes()}
                        </View>
                        <Button
                            onPress={() => setModalVisible(!modalVisible)}
                            title="Close details"
                            accessibilityLabel="Close the pokemon modal"
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import useGame from '../hooks/GameProvider';
import { styles } from '../styles/modals/AddToTeam.style';
import CloseIcon from '../assets/images/close.svg';

type Props = {
    index: number;
    close: () => void;
};

const AddToTeam = ({ index, close }: Props): JSX.Element => {
    const { addPokemonToTeam, capturedPokemons, pokemonTeam } = useGame();

    function onPress(pokemon) {
        addPokemonToTeam(pokemon, index);
        close();
    }
    function renderPokemon(pokemon, i) {
        return (
            <TouchableOpacity onPress={() => onPress(pokemon)} key={i}>
                <Image
                    style={styles.thumbnail}
                    source={{ uri: pokemon.sprites.front_default }}
                />
                <Text style={styles.title}>{pokemon.name}</Text>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Selectionnez un pokemon</Text>
                <TouchableOpacity onPress={close}>
                    <View style={styles.closeIconContainer}>
                        <CloseIcon width={20} height={20} fill={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
            {capturedPokemons
                .filter((poke) => !pokemonTeam.find((p) => p?.id === poke.id))
                .map(renderPokemon)}
        </View>
    );
};

export default AddToTeam;

import React from 'react';
import {View, Text, TextInput} from "react-native";
import {styles} from "../styles/components/SearchBar.style";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder={'ex: Pâtes aux lardons'}
                textAlign={"center"}
                placeholderTextColor={'#FFFFFFAA'}
            />
        </View>
    );
};

export default SearchBar;
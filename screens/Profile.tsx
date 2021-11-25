import * as React from 'react';
import { Text, View } from '../components/Themed';
import {styles} from "../styles/screens/Profile.style";
import {RootTabScreenProps} from "../types";
import {Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function Profile() {
const navigation = useNavigation();
    function goToLogin() {
        navigation.navigate('Login')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
        <Button title={'Se connecter'} onPress={goToLogin} />
    </View>
  );
}



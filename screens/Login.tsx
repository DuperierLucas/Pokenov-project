import * as React from 'react';

import { Text, View } from '../components/Themed';
import {styles} from "../styles/screens/Login.style";
import {Button, TextInput} from "react-native";
import useLogin from "../hooks/useLogin";

export default function Login() {
    const { connectWithGoogle, logout }= useLogin()

  return (
    <View style={styles.container}>
        <View style={styles.withEmailContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput placeholder={'email'}/>
            <Text style={styles.label}>Mot de passe</Text>
            <TextInput placeholder={'mot de passe'}/>
        </View>
        <Button onPress={connectWithGoogle} title={'Connexion avec google'}/>
        <Button onPress={logout} title={'Déconnexion'}/>
    </View>
  );
}

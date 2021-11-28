import React from 'react';

import { Text, View } from 'react-native';
import { styles } from '../styles/screens/Login.style';
import { Button, TextInput } from 'react-native';
import useLogin from '../hooks/useLogin';
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { connectWithGoogle, connectWithEmail, logout } = useLogin();

    return (
        <View style={styles.container}>
            <View style={styles.withEmailContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder={'email'}
                    onChangeText={(val) => setEmail(val)}
                />
                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                    secureTextEntry={true}
                    textContentType={'password'}
                    placeholder={'mot de passe'}
                    autoCapitalize={'none'}
                    onChangeText={(val) => setPassword(val)}
                />
                <Button
                    onPress={() => connectWithEmail(email, password)}
                    title={'Connexion'}
                />
            </View>
            <Button
                onPress={connectWithGoogle}
                title={'Connexion avec google'}
            />
            <Button onPress={logout} title={'Déconnexion'} />
        </View>
    );
}

import * as React from 'react';
import { Text, View } from '../components/Themed';
import {styles} from "../styles/screens/Profile.style";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
    </View>
  );
}



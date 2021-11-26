import * as React from 'react';
import { Text, View } from '../components/Themed';
import {styles} from "../styles/screens/Team.style";
import {useNavigation} from "@react-navigation/native";

export default function Team() {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon équipe</Text>
    </View>
  );
}



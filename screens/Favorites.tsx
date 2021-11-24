import * as React from 'react';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {styles} from "../styles/screens/Favorites.style";

export default function Favorites({ navigation }: RootTabScreenProps<'Favorites'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes favoris</Text>
    </View>
  );
}

import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/screens/Team.style';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const GRASS_ICON = require('../assets/images/grass.png');

const TeamHeader = (): JSX.Element => {
    const navigation = useNavigation<any>();

    function onPressCatch() {
        navigation.navigate('Catch');
    }

    function onPressSettings() {
        navigation.navigate('Settings');
    }

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={onPressSettings}
                    style={styles.settingsIconContainer}
                    activeOpacity={0.7}
                >
                    <Icon
                        name={'settings'}
                        style={styles.icon}
                        size={25}
                        color="white"
                        type="ionicon"
                        tvParallaxProperties
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Team</Text>
                <TouchableOpacity
                    onPress={onPressCatch}
                    style={styles.iconContainer}
                    activeOpacity={0.7}
                >
                    <Image source={GRASS_ICON} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default TeamHeader;

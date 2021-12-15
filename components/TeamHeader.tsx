import React, { useEffect, useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/screens/Team.style';
import CatchModal from './modals/CatchModal';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const GRASS_ICON = require('../assets/images/grass.png');
interface Props {
    modaleVisible?: boolean;
}

const TeamHeader = (props: Props): JSX.Element => {
    const { modaleVisible } = props;
    const [catchVisible, setCatchVisible] = useState(
        modaleVisible ? modaleVisible : false,
    );
    const navigation = useNavigation();

    useEffect(() => {
        setCatchVisible(modaleVisible);
    }, [modaleVisible]);

    function onPressCatch() {
        setCatchVisible(true);
    }

    function onPressSettings() {
        navigation.navigate('Settings' as any);
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
            {catchVisible && (
                <Modal animationType="fade" visible={catchVisible}>
                    <CatchModal close={() => setCatchVisible(false)} />
                </Modal>
            )}
        </>
    );
};

export default TeamHeader;

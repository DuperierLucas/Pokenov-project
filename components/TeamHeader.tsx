import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/screens/Team.style';
import CatchModal from './modals/CatchModal';

const GRASS_ICON = require('../assets/images/grass.png');

const TeamHeader = (): JSX.Element => {
    const [catchVisible, setCatchVisible] = useState(false);

    function onPressCatch() {
        setCatchVisible(true);
    }

    return (
        <>
            <View style={styles.header}>
                <View />
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

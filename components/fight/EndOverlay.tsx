import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import raclette from '../../styles/components/fight/EndOverlay.style';
import { useNavigation } from '@react-navigation/native';

type Props = {
    message: string;
};

const StartOverlay = ({ message }: Props): JSX.Element => {
    const navigation = useNavigation();
    const [endLoaded, setEndLoaded] = useState(false);

    useEffect(() => {
        setTimeout(loadEnd, 1500);
    }, []);

    function loadEnd() {
        setEndLoaded(true);
    }

    return (
        <View style={raclette.container}>
            <Text style={raclette.message}>{message}</Text>
            <TouchableOpacity
                disabled={!endLoaded}
                style={raclette.backButton}
                onPress={navigation.goBack}
            >
                <Text style={raclette.backButtonLabel}>Retour</Text>
            </TouchableOpacity>
        </View>
    );
};

export default StartOverlay;

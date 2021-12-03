import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

type Props = {
    close: () => void;
};

export default function DisplayStats({ close }: Props): JSX.Element {
    return (
        <View>
            <TouchableOpacity onPress={close}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

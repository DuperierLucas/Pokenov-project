import React from 'react';
import { Text, View } from 'react-native';
import { Pokemon } from 'pokenode-ts';

type Props = {
    pokemon?: Pokemon;
    type?: 'disabled' | 'empty' | 'occupied';
};

const TeamSlot = (props: Props): JSX.Element => {
    const { type } = props;
    let content;

    if (type === 'disabled') {
        content = (
            <View>
                <Text>disabled</Text>
            </View>
        );
    } else if (type === 'empty') {
        content = (
            <View>
                <Text>empty</Text>
            </View>
        );
    } else {
        content = (
            <View>
                <Text>pokemon</Text>
            </View>
        );
    }
    return <View>{content}</View>;
};

export default TeamSlot;

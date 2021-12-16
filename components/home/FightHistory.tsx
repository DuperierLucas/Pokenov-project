import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../../styles/screens/Home.style';
import useGame from '../../hooks/GameProvider';

const FightHistory = (): JSX.Element => {
    const { fightHistory } = useGame();

    if (!fightHistory) {
        return null;
    }

    function renderHistoryEntry(result: 'win' | 'loose', key) {
        return (
            <View key={key}>
                <Text style={styles[result]}>
                    {result === 'win' ? 'Victoire' : 'Défaite'}
                </Text>
            </View>
        );
    }

    function getCarousel() {
        return fightHistory.map((fightHistoryEntry, index) =>
            renderHistoryEntry(fightHistoryEntry.result, index),
        );
    }

    return (
        <ScrollView
            horizontal={true}
            contentContainerStyle={styles.carouselContainer}
            showsHorizontalScrollIndicator={false}
        >
            {getCarousel()}
        </ScrollView>
    );
};

export default FightHistory;

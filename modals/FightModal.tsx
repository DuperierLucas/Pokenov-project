import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import FightHeader from '../components/fight/FightHeader';
import TeamRecap from '../components/fight/TeamRecap';
import useGame from '../hooks/GameProvider';
import styles from '../styles/modals/FightModal.style';
import { viewportHeight } from '../styles/metrics.style';

const FightModal = (): JSX.Element => {
    const { pokemonTeam } = useGame();
    const [ennemyTeam, setEnnemyTeam] = useState([]);
    const [myTeam, setMyTeam] = useState([]);

    useEffect(() => {
        setupMyTeam();
        setupEnnemyTeam();
    }, []);

    function setupMyTeam(): void {
        const mt = [];
        pokemonTeam.forEach((p) => {
            if (p) {
                mt.push({
                    isAlive: true,
                    imageUrl: p.sprites.front_default,
                });
            }
        });
        while (mt.length < 6) {
            mt.push(null);
        }
        setMyTeam(mt);
    }

    function setupEnnemyTeam(): void {
        const et = [];
        pokemonTeam.forEach((p) => {
            if (p) {
                et.push({
                    isAlive: false,
                    imageUrl: p.sprites.front_default,
                });
            }
        });
        while (et.length < 6) {
            et.push(null);
        }
        setEnnemyTeam(et);
    }

    return (
        <ImageBackground
            source={require('../assets/images/home-background.jpg')}
            style={{}}
            resizeMode={'cover'}
        >
            <View style={{ height: viewportHeight }}>
                <FightHeader />
                <View style={styles.fightContainer}>
                    <TeamRecap team={ennemyTeam} align={'left'} />
                    <TeamRecap team={myTeam} align={'right'} />
                </View>
            </View>
        </ImageBackground>
    );
};

export default FightModal;

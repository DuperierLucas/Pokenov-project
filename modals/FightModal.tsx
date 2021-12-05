import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import FightHeader from '../components/fight/FightHeader';
import TeamRecap from '../components/fight/TeamRecap';
import useGame from '../hooks/GameProvider';
import styles from '../styles/modals/FightModal.style';
import { viewportHeight } from '../styles/metrics.style';
import FightDuel from '../components/fight/FightDuel';

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
                    ...p,
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
                    isAlive: true,
                    ...p,
                });
            }
        });
        while (et.length < 6) {
            et.push(null);
        }
        setEnnemyTeam(et);
    }

    function getMyPokemon() {
        return myTeam.filter((pokemon) => pokemon?.isAlive)[0];
    }

    function getEnnemyPokemon() {
        return ennemyTeam.filter((pokemon) => pokemon?.isAlive)[0];
    }

    function getFightDuel() {
        const ennemyPokemon = getEnnemyPokemon();
        const myPokemon = getMyPokemon();

        if (!ennemyPokemon) {
            return <Text>Vous avez gagné !</Text>;
        }
        if (!myPokemon) {
            return <Text>Vous avez perdu !</Text>;
        }

        return (
            <FightDuel ennemyPokemon={ennemyPokemon} myPokemon={myPokemon} />
        );
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
                    {getFightDuel()}
                    <TeamRecap team={myTeam} align={'right'} />
                </View>
            </View>
        </ImageBackground>
    );
};

export default FightModal;

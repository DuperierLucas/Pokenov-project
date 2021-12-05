import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import FightHeader from '../components/fight/FightHeader';
import TeamRecap from '../components/fight/TeamRecap';
import useGame from '../hooks/GameProvider';
import styles from '../styles/modals/FightModal.style';
import { viewportHeight } from '../styles/metrics.style';
import FightDuel from '../components/fight/FightDuel';
import StartOverlay from '../components/fight/StartOverlay';
import { sleep } from '../utils/timer';

const PLACEHOLDER_TEAM = [null, null, null, null, null, null];

const FightModal = (): JSX.Element => {
    const { pokemonTeam, getRandomEnnemyTeam } = useGame();
    const [ennemyTeam, setEnnemyTeam] = useState(PLACEHOLDER_TEAM);
    const [myTeam, setMyTeam] = useState(PLACEHOLDER_TEAM);
    const [fightEngaged, setFightEngaged] = useState(false);

    useEffect(() => {
        setupMyTeam();
        setupEnnemyTeam();
    }, []);

    useEffect(() => {
        if (fightEngaged) {
            startFight();
        }
    }, [fightEngaged]);

    async function startFight() {
        const availableTeamPokemon = myTeam.filter((p) => p?.isAlive);
        const availableEnnemyPokemon = ennemyTeam.filter((p) => p?.isAlive);
        while (
            availableEnnemyPokemon?.length > 0 &&
            availableTeamPokemon?.length > 0
        ) {
            await sleep(2000);
            //one round of fight
            const myTeamWin = Math.floor(Math.random() * 2) === 0;
            if (myTeamWin) {
                const eliminatedPokemon = availableEnnemyPokemon.shift();
                const koIndex = ennemyTeam.findIndex(
                    (pokemon) => pokemon.id === eliminatedPokemon.id,
                );
                const newEnnemyTeam = [...ennemyTeam];
                newEnnemyTeam[koIndex].isAlive = false;
                setEnnemyTeam(newEnnemyTeam);
            } else {
                const eliminatedPokemon = availableTeamPokemon.shift();
                const koIndex = myTeam.findIndex(
                    (pokemon) => pokemon.id === eliminatedPokemon.id,
                );
                const newTeam = [...myTeam];
                newTeam[koIndex].isAlive = false;
                setMyTeam(newTeam);
            }
        }
    }

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

    async function setupEnnemyTeam(): Promise<void> {
        const et = await getRandomEnnemyTeam();
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
                {!fightEngaged && (
                    <StartOverlay
                        ready={!!ennemyTeam[0]}
                        onPressFight={() => setFightEngaged(true)}
                    />
                )}
            </View>
        </ImageBackground>
    );
};

export default FightModal;

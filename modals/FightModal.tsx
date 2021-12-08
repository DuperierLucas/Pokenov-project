import React, { useEffect, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import FightHeader from '../components/fight/FightHeader';
import TeamRecap from '../components/fight/TeamRecap';
import useGame from '../hooks/GameProvider';
import styles from '../styles/modals/FightModal.style';
import { viewportHeight } from '../styles/metrics.style';
import FightDuel from '../components/fight/FightDuel';
import StartOverlay from '../components/fight/StartOverlay';
import EndOverlay from '../components/fight/EndOverlay';
const PLACEHOLDER_TEAM = [null, null, null, null, null, null];

const FightModal = (): JSX.Element => {
    const { pokemonTeam, getRandomEnnemyTeam } = useGame();
    const [ennemyTeam, setEnnemyTeam] = useState(PLACEHOLDER_TEAM);
    const [myTeam, setMyTeam] = useState(PLACEHOLDER_TEAM);
    const [fightEngaged, setFightEngaged] = useState(false);
    const [myPokemon, setMyPokemon] = useState(undefined);
    const [ennemyPokemon, setEnnemyPokemon] = useState(undefined);
    const [round, setRound] = useState(0);

    useEffect(() => {
        setupMyTeam();
        setupEnnemyTeam();
    }, []);

    useEffect(() => {
        if (fightEngaged) {
            setTimeout(launchFightRound, 1000);
        }
    }, [fightEngaged]);

    useEffect(() => {
        launchFightRound();
    }, [round]);

    async function launchFightRound() {
        const availableTeamPokemon = myTeam.filter((p) => p?.isAlive);
        const availableEnnemyPokemon = ennemyTeam.filter((p) => p?.isAlive);
        if (
            availableTeamPokemon?.length < 1 ||
            availableEnnemyPokemon?.length < 1
        ) {
            return;
        }
        //one round of fight
        const fightResult = Math.floor(
            Math.random() *
                (availableTeamPokemon[0].lvl + availableEnnemyPokemon[0].lvl),
        );
        const myTeamWin = fightResult <= availableTeamPokemon[0].lvl + 1;
        if (myTeamWin) {
            const eliminatedPokemon = availableEnnemyPokemon.shift();
            const koIndex = ennemyTeam.findIndex(
                (pokemon) => pokemon.id === eliminatedPokemon.id,
            );
            const newEnnemyTeam = [...ennemyTeam];
            newEnnemyTeam[koIndex].isAlive = false;
            setEnnemyTeam(newEnnemyTeam);
            setEnnemyPokemon({ ...ennemyPokemon, isAlive: false });
        } else {
            const eliminatedPokemon = availableTeamPokemon.shift();
            const koIndex = myTeam.findIndex(
                (pokemon) => pokemon.id === eliminatedPokemon.id,
            );
            const newTeam = [...myTeam];
            newTeam[koIndex].isAlive = false;
            setMyTeam(newTeam);
            setMyPokemon({ ...myPokemon, isAlive: false });
        }
        setTimeout(() => setEnnemyPokemon(availableEnnemyPokemon[0]), 300);
        setTimeout(() => {
            setMyPokemon(availableTeamPokemon[0]);
        }, 300);
        setTimeout(() => setRound((r) => r + 1), 1500);
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
        setMyPokemon(mt.filter((pokemon) => pokemon?.isAlive)[0]);
    }

    async function setupEnnemyTeam(): Promise<void> {
        const et = await getRandomEnnemyTeam();
        setEnnemyTeam(et);
        setEnnemyPokemon(et.filter((pokemon) => pokemon?.isAlive)[0]);
    }

    return (
        <ImageBackground
            source={require('../assets/images/home-background.jpg')}
            style={{}}
            resizeMode={'cover'}
        >
            <View style={{ height: viewportHeight }}>
                {fightEngaged ? (
                    <View style={styles.fightContainer}>
                        <TeamRecap team={ennemyTeam} align={'left'} />
                        <FightDuel
                            ennemyPokemon={ennemyPokemon}
                            myPokemon={myPokemon}
                        />
                        <TeamRecap team={myTeam} align={'right'} />
                        {!myPokemon && (
                            <EndOverlay message={'Vous avez perdu !'} />
                        )}
                        {!ennemyPokemon && (
                            <EndOverlay message={'Vous avez gagné !'} />
                        )}
                    </View>
                ) : (
                    <StartOverlay
                        ready={!!ennemyTeam[0]}
                        onPressFight={() => setFightEngaged(true)}
                    />
                )}
                <FightHeader />
            </View>
        </ImageBackground>
    );
};

export default FightModal;

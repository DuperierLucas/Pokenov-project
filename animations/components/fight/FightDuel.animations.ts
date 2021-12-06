import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import styles from '../../../styles/components/fight/FightDuel.style';
import { TeamRecapPokemon } from '../../../types';

const useAnimation = (
    ennemyPokemon: TeamRecapPokemon,
    myPokemon: TeamRecapPokemon,
): any => {
    const animTransformEnnemy = useRef(new Animated.Value(0)).current;
    const animOpacityEnnemy = useRef(new Animated.Value(0)).current;
    const animTransformPokemon = useRef(new Animated.Value(0)).current;
    const animOpacityPokemon = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (ennemyPokemon?.isAlive) {
            animateEnnemy();
        } else {
            animateEnnemy(true);
        }
    }, [ennemyPokemon]);

    useEffect(() => {
        if (myPokemon?.isAlive) {
            animatePokemon();
        } else {
            animatePokemon(true);
        }
    }, [myPokemon]);

    function animateEnnemy(out = false) {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(animOpacityEnnemy, {
                    toValue: out ? 0 : 1,
                    duration: 200,
                    easing: Easing.linear,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
                Animated.spring(animTransformEnnemy, {
                    toValue: out ? 0 : 1,
                    speed: out ? 2 : 5,
                    bounciness: 5,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }

    function animatePokemon(out = false) {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(animOpacityPokemon, {
                    toValue: out ? 0 : 1,
                    duration: 200,
                    easing: Easing.linear,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
                Animated.spring(animTransformPokemon, {
                    toValue: out ? 0 : 1,
                    speed: out ? 2 : 5,
                    bounciness: 5,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }

    const animatedEnnemyStyle = [
        styles.ennemyPokemonContainer,
        {
            opacity: animOpacityEnnemy,
            transform: [
                {
                    scale: animTransformEnnemy.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                    }),
                },
            ],
        },
    ];

    const animatedPokemonStyle = [
        styles.myPokemonContainer,
        {
            opacity: animOpacityPokemon,
            transform: [
                {
                    scale: animTransformPokemon.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                    }),
                },
            ],
        },
    ];

    return {
        animatedEnnemyStyle,
        animatedPokemonStyle,
    };
};
export default useAnimation;

import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimation = (align: 'left' | 'right'): any => {
    const animTransform = useRef(new Animated.Value(0)).current;
    const animOpacity = useRef(new Animated.Value(0)).current;
    const isLeft = align === 'left';

    useEffect(() => {
        animateContainer();
    }, []);

    function animateContainer() {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(animOpacity, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.linear,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
                Animated.spring(animTransform, {
                    toValue: isLeft ? 0 : 1,
                    speed: 2,
                    bounciness: 7,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }

    const animatedStyle = {
        opacity: animOpacity,
        transform: [
            {
                translateX: animOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [isLeft ? -400 : 400, 0],
                }),
            },
        ],
    };

    return {
        animatedStyle,
    };
};
export default useAnimation;

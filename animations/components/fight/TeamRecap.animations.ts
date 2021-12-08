import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimation = (align: 'left' | 'right' | 'center'): any => {
    const animTransform = useRef(new Animated.Value(0)).current;
    const animOpacity = useRef(new Animated.Value(0)).current;
    const isLeft = align === 'left';
    const isCenter = align === 'center';

    useEffect(() => {
        animateContainer();
    }, []);

    function animateContainer() {
        Animated.sequence([
            isCenter && Animated.delay(200),
            Animated.parallel([
                Animated.timing(animOpacity, {
                    toValue: 1,
                    duration: isCenter ? 150 : 500,
                    easing: Easing.linear,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
                Animated.spring(animTransform, {
                    toValue: isLeft ? 0 : 1,
                    speed: isCenter ? 8 : 2,
                    bounciness: 15,
                    isInteraction: false,
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
    }

    const animatedStyle = {
        opacity: animOpacity,
        transform: [
            isCenter
                ? {
                      translateY: animOpacity.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-100, 0],
                      }),
                  }
                : {
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

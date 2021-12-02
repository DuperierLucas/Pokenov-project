import { Dimensions, StatusBar } from 'react-native';
import { isAndroid, isIOS } from '../utils/os';

const { width, height } = Dimensions.get('window');

export const viewportWidth = Math.min(width, height);
export const viewportHeight = Math.max(width, height);

export const hasNotch = true;
export const isIOSNotch = isIOS && hasNotch;
export const isAndroidNotch = isAndroid && hasNotch;

const androidDefaultStatusBarHeight = 24;
const androidStatusBarOffset = isAndroidNotch
    ? StatusBar.currentHeight + 20
    : androidDefaultStatusBarHeight;
export const notchOffset = isIOSNotch
    ? 33
    : isAndroidNotch
        ? androidStatusBarOffset - androidDefaultStatusBarHeight
        : 0;


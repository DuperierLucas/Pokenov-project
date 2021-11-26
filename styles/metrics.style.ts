import {Dimensions} from "react-native";

const {width, height} = Dimensions.get('window');

export const viewportWidth = Math.min(width, height);
export const viewportHeight = Math.max(width, height);

declare module '*.svg' {
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps & { style?: StyleProp<ViewStyle> }>;
    export default content;
}

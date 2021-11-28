const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts, dirname },
    } = await getDefaultConfig(__dirname);
    return {
        transformer: {
            babelTransformerPath: require.resolve(
                'react-native-svg-transformer',
            ),
        },
        resolver: {
            assetExts: assetExts.filter((ext) => ext !== 'svg'),
            sourceExts: [...sourceExts, 'svg'],
        },
    };
})();

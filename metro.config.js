/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

module.exports = {
    resolver: {
        extraNodeModules: {
            api: path.resolve(__dirname, 'src/api'),
            assets: path.resolve(__dirname, 'src/assets'),
            components: path.resolve(__dirname, 'src/components'),
            constants: path.resolve(__dirname, 'src/constants'),
            containers: path.resolve(__dirname, 'src/containers'),
            config: path.resolve(__dirname, 'src/config'),
            helpers: path.resolve(__dirname, 'src/helpers'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            locales: path.resolve(__dirname, 'src/locales'),
            modules: path.resolve(__dirname, 'src/modules'),
            navigation: path.resolve(__dirname, 'src/navigation'),
            context: path.resolve(__dirname, 'src/context'),
            screens: path.resolve(__dirname, 'src/screens'),
            styles: path.resolve(__dirname, 'src/styles'),
            types: path.resolve(__dirname, 'src/types'),
            utils: path.resolve(__dirname, 'src/utils'),
            globals: path.resolve(__dirname, 'src/globals'),
        },
    },
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: true,
            },
        }),
    },
};

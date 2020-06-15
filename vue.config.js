const path = require('path');
// const styleResourcesLoader = require('style-resources-loader');

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'scss',
            'patterns': [
                path.resolve(__dirname, './src/assets/scss/variables.scss'),
                // path.resolve(__dirname, 'node_modules/bootstrap/scss/bootstrap')
                // path.resolve(__dirname, 'node_modules/bootstrap-vue/src/index.scss'),
            ]
        }
    }
}

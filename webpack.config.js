var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        build: './src/main.js',
        vendor: ['vue']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },
    devServer: {
        historyApiFallback: true,
        overlay: true
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[name].js'
        })
    ]
};
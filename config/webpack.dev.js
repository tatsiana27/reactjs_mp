const constants = require('../constants/default');
const webpack = require('webpack');
const port = process.env.PORT || constants.PORT;
const config = {
    mode: constants.DEV_MODE,
    entry: {
        app: `${constants.APP_ENTRY}/index.js`
    },
    output: {
        filename: '[name].[hash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: constants.LOCALHOST,
        port: port,
        historyApiFallback: true,
        hot: true,
        open: true
    }
};
module.exports = config;
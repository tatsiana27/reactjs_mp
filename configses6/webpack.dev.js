import { PORT, APP_ENTRY, DEV_MODE, LOCALHOST } from '../constants/default';
var webpack = require('webpack');
var port = process.env.PORT || PORT;
var config = {
    mode: DEV_MODE,
    entry: {
        app: APP_ENTRY + '/index.js'
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
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        host: LOCALHOST,
        port: port,
        historyApiFallback: true,
        hot: true,
        open: true
    }
};
module.exports = config;
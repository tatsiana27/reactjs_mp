import { OUTPUT_PATH } from '../constants/default';
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: {
        vendor: ['semantic-ui-react']
    },
    output: {
        path: OUTPUT_PATH,
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: [{loader:'babel-loader'}]
        }, {
            test: /\.(png|jpg|svg)$/,
            use: [{
                loader: 'file-loader'
            }]
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true
                }
            }
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'public/index.html'
    })]
};
module.exports = config;
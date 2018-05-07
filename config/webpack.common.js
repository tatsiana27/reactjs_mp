const constants = require('../constants/default');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: {
        vendor: ['semantic-ui-react']
    },
    output: {
        path: constants.OUTPUT_PATH,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
              test: /\.(png|jpg|svg)$/,
              use: [
                {
                  loader: 'file-loader'
                }
              ]
            }
        ]
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
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
};
module.exports = config;

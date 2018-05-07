const constants = require('../constants/default');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
    mode: constants.PROD_MODE,
    entry: {
        app: [`${constants.APP_ENTRY}/index.js`]
    },
    output: {
        filename: 'static/[name].[hash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        camelCase: true,
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader"
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            ctx: {
                                autoprefixer: {
                                    browsers: 'last 2 versions'
                                }
                            }
                        }
                    }
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/styles.[hash].css',
            allChunks: true
        })
    ]
};
module.exports = config;
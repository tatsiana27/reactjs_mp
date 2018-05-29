'use strict';

var _default = require('../constants/default');

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
    mode: _default.PROD_MODE,
    entry: {
        app: [_default.APP_ENTRY + '/index.js']
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
                }, {
                    loader: "sass-loader"
                }, {
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
    plugins: [new ExtractTextPlugin({
        filename: 'styles/styles.[hash].css',
        allChunks: true
    })]
};
module.exports = config;
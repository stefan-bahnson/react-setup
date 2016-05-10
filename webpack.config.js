var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
    entry: "./src/js/main",
    output: {
        path: './dist',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 3000,
        contentBase: './dist'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
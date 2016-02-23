var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var sassLoaders = [
    "css-loader?sourceMap",
    "sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./src/stylesheets")
];

module.exports = {
    entry: "./src/js/main",
    output: {
        path: './dist',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 3333,
        contentBase: './dist'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};
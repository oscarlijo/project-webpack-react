var webpack = require("webpack");
var BowerWebpackPlugin = require('bower-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        port: 8808
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                  loader: ExtractTextPlugin.extract("style", "css!sass")
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader : 'file-loader'
            }
        ]
    },
    plugins: [
        new BowerWebpackPlugin({
          excludes: /.*\.less/
        }),
        new webpack.ProvidePlugin({
          $:      "jquery",
          jQuery: "jquery"
        }),
        new ExtractTextPlugin("estilos.css"),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
    ]
};

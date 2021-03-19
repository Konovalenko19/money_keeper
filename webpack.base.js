const path = require('path');
const _ = require('lodash');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const ManifestGeneratorWebpackPlugin = require('./webpack/ManifestGeneratorWebpackPlugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: path.resolve('src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'src')],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
        ],
    },
    // externals: ["react", "react-dom", "styled-components"],
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Money Keeper',
            template: './src/index.html',
            inject: 'body',
            minify: false,
        }),
    ],
};

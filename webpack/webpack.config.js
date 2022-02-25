const path = require('path');
const SmartBannerPlugin = require('smart-banner-webpack-plugin');
const banner = require('../build_helper/licence');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = [{
    name: "mahal-test-utils",
    mode: process.env.NODE_ENV || 'development',
    target: "node",
    entry: "./src/index.ts",
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "./../dist"),
        filename: "mahal-test-utils.js",
        library: 'mahal-test-utils',
        libraryTarget: "commonjs2"
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false,
        nodeEnv: false
    },
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false,
        NODE_ENV: false
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: {
                loader: 'ts-loader'
            }
        }]
    },
    resolve: {
        extensions: ['.ts'] // '' is needed to find modules like "jquery"
    },
    plugins: [
        new SmartBannerPlugin(banner),
        new CopyPlugin({
            patterns: [
                { from: 'build_helper', to: '' },
            ],
        }),
    ],
    externals: [nodeExternals()]
}];
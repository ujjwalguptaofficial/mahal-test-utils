const path = require('path');
const baseConfig = require('./webpack.base.config');
const { merge } = require('webpack-merge');

const libraryTarget = [{
    type: "var",
    name: `${baseConfig[0].name}.js`
}, {
    type: "commonjs2",
    name: `${baseConfig[0].name}.commonjs2.js`
}];

function getConfigForTaget(target) {
    return {
        devtool: 'source-map',
        output: {
            path: path.join(__dirname, "../build"),
            filename: target.name,
            library: 'tajStore',
            libraryTarget: target.type
        }
    }
}

function createConfigsForAllLibraryTarget() {
    var configs = [];
    libraryTarget.forEach(function (target) {
        configs.push(merge(baseConfig[0], getConfigForTaget(target)));
    })
    return configs;
}

module.exports = [...createConfigsForAllLibraryTarget()]
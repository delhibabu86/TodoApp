/**
 * Created by Arnab Karmakar on 6/16/16.
 */
var path                = require('path');
var webpack             = require('webpack');
var pluginConfGenerator = require('./webpack.common.js').pluginConfGenerator;

var distFolder = path.join(__dirname, 'dist');
console.log('Compiling to [' + distFolder +']');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: ['babel-polyfill', path.join(__dirname, 'src', 'index.js')]
    },
    output: {
        path: distFolder,
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.(js$|jsx$)/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
                query: {
                    plugins: [
                        "transform-runtime",
                        "typecheck",
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        "add-module-exports",
                        "import-asserts",
                        "syntax-async-functions",
                        "transform-regenerator",
                    ],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
               test: /(\.js$|\.jsx$)/,
               loaders: ["eslint-loader"],
               include: path.resolve(__dirname, 'src')
            },
            { test: /\.(css$|scss$)/, loaders: ["style-loader", "css-loader", "sass-loader"]},
            { test: /\.(png$|gif$)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'},
            { test: /\.(json$)/, loader: 'json-loader' },
            { test: /\.(html$)/, loader: 'html-loader' },
        ],
        noParse: [/localforage.js/] //Ignore warnings from this dependency
    },
    plugins: pluginConfGenerator(distFolder),
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    node: {
        child_process: 'empty',
        fs: "empty",
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.js', '.html', '.scss']
    }
};

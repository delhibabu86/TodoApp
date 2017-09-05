var path                = require('path');
var webpack             = require('webpack');
var CleanWebpackPlugin  = require('clean-webpack-plugin');
var CopyWebpackPlugin   = require('copy-webpack-plugin');

module.exports = {

    pluginConfGenerator: function(destination) {
        return [
            new CopyWebpackPlugin([
                { from: path.join(__dirname, 'src', 'index.html'), to: destination },
            ]),
            new CleanWebpackPlugin(['./**'], {
                root: destination,
                verbose: true,
                dry: false
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
            new webpack.NoEmitOnErrorsPlugin(),
        ];
    }

};

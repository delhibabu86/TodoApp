/**
 * Created by WYK46451 on 8/15/16.
 */
var path                = require('path');
var conf                = require('./webpack.core');
var pluginConfGenerator = require('./webpack.common.js').pluginConfGenerator;

var destination = path.join(__dirname, "dist");

conf.output.path = destination;

conf.plugins = pluginConfGenerator(destination);

module.exports = conf;

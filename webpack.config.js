var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var CLIENT_DIR = path.resolve(SRC_DIR, 'client');
var APP_DIR = path.resolve(CLIENT_DIR, 'app');
var HOST = process.env.IP + ':' + process.env.PORT;

var config = {
    entry: APP_DIR + '/index.js',
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    output: {
        path: CLIENT_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [{
              test: /\.json$/,
              loader: 'json-loader'
            }, {
                test: /\.jsx$|\.js$/,
                include: APP_DIR,
                loaders: ['babel-loader']//, "eslint-loader"
            }, {
              test: /\.(graphql|gql)$/,
              loader: 'graphql-tag/loader'
            }
        ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: CLIENT_DIR
    }
};

module.exports = config;

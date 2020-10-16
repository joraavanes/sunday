const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.join(__dirname, '../server/public/js'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                use: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin({cleanAfterEveryBuildPatterns:true}),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/assets/index.html',
        })
    ],
    devServer: {
        contentBase: 'public',
        port: 3000,
        open: true,
        hot: true
    }
};
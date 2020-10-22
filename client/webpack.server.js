const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.join(__dirname, './public/js'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                use: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/
            },
            {
                use: [
                    {
                        loader:'style-loader'
                    },{
                        loader: 'css-loader',
                        options:{
                            modules: {
                                compileType: 'module',
                                localIdentName: "[name]-[local]___[hash:base64]",
                                getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                                    if(loaderContext.resourcePath.includes('node_modules') || loaderContext.resourcePath.includes('custom'))
                                        return localName;
                                }
                            },														
                            sourceMap: true
                        }
                    }
                ],
                exclude: /node_modules/,
                test: /\.css$/
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin({cleanAfterEveryBuildPatterns:true}),
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: 'src/assets/index.html',
        })
    ],
    devServer: {
        contentBase: 'public',
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true
    }
};
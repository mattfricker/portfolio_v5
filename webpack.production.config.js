var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    
    devtool: 'cheap-module-source-map',
    
    entry: './src/client/main.js',
    
    output: {
        path: __dirname + '/build',
        filename: "[name]-[hash].js"
    },
    
    module: {
        loaders: [
            { 
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json" 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                exclude: /node_modules/,
                loader: 'file!img?minimize&progressive=true'
            },
            {
                test: /\.(ttf|eod)$/,
                exclude: /node_modules/,
                loader: 'file'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style', 'css?modules!postcss!cssnext')
            }
        ]
    },
    
    postcss: [
        require('autoprefixer')
    ],
    
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/client/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css"),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            }
        })
    ]
}
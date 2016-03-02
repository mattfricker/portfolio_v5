var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    
    entry: './src/client/main.js',
    
    output: {
        path: __dirname + '/build',
        filename: "[name]-[hash].js"
    },
    
    module: {
        loaders: [
            { 
                test: /\.json$/, 
                loader: "json" 
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.png$/,
                loader: 'file'
            },            
            {
                test: /\.jpg$/,
                loader: 'file'
            },            
            {
                test: /\.svg$/,
                loader: 'file'
            },
            {
                test: /\.css$/,
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
        new ExtractTextPlugin("[name]-[hash].css")
    ]
}
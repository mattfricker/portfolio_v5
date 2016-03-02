var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    devtool: 'eval-source-map',
    
    entry: './src/client/main.js',
    
    output: {
        path: __dirname + '/build',
        filename: 'index.js'
    },
    
    module: {
        loaders: [
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
                loader: "style!css?modules!postcss!cssnext"
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
        new webpack.HotModuleReplacementPlugin()
    ],
    
    devServer: {
        inline: true,
        historyApiFallback: true,
        port: 3001,
        hot: true
    }
}
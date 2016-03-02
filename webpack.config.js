module.exports = {
    devtool: 'eval-source-map',
    entry: './src/client/main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3001
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
    ]
}
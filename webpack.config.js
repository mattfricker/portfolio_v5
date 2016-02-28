module.exports = {
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
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
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
                test: /\.css$/,
                loader: "style-loader!css-loader?modules!cssnext-loader"
            }
        ]
    }
}
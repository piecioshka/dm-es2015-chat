module.exports = {
    entry: './app/scripts/main.es6.js',
    output: {
        filename: './app/dist/main.js'
    },
    module: {
        loaders: [
            { test: /\.es6.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.handlebars$/, loader: 'handlebars-loader' },
            { test: /\.scss/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    },
    devtool: '#cheap-module-source-map'
};

// path is the library allows you to access folders of your project
const path = require("path");

module.exports = {
    entry : path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
    resolve : {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    }
}
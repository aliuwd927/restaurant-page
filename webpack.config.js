const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin';)

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },

};

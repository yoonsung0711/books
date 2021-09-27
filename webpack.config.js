const path = require('path');

module.exports = {
    mode: 'none',
    devServer: {
        contentBase: __dirname + '/dist/',
        inline: true,
        hot: true,
        port: 4000,
    }
}
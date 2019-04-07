const path = require('path');
console.log(__dirname)
module.exports = {
    entry: {
        main: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, '../back/public'),
        filename: 'bundle.js'
    },
    
};
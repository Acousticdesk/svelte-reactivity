const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public', 'build'),
    },
    module: {
        rules: [
            {
                test: /.svelte$/,
                use: 'svelte-loader',
            },
        ],
    },
}

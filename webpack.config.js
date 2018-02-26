const webpack = require("webpack");
const path = require('path');

console.info('process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV));

module.exports = {
    devtool: "source-map",
    entry: {
        main: [
            "./src/main.tsx?"
        ]
    },
    output: {
        path       : path.join(__dirname, 'dist/js/'),
        filename   : '[name].js',
        publicPath : './dist/js/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ],
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
        ]
    },
    externals: {}
};
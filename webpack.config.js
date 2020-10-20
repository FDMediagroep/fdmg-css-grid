const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssNormalize = require('postcss-normalize');

const NODE_ENV = JSON.stringify(
    process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
);
const devtool = NODE_ENV == '"development"' ? 'source-map' : undefined;
const isDev = NODE_ENV == '"development"';

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
        },
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            // Options for PostCSS as we reference these options twice
            // Adds vendor prefixing based on your specified browser support in
            // package.json
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                postcssOptions: {
                    ident: 'postcss',
                    plugins: () => [
                        require('postcss-flexbugs-fixes'),
                        require('postcss-preset-env')({
                            autoprefixer: {
                                flexbox: 'no-2009',
                            },
                            stage: 3,
                        }),
                        // Adds PostCSS Normalize as the reset css with default options,
                        // so that it honors browserslist config in package.json
                        // which in turn let's users customize the target behavior as per their needs.
                        postcssNormalize(),
                    ],
                },
                sourceMap: isDev,
            },
        },
    ];
    if (preProcessor) {
        loaders.push({
            loader: require.resolve(preProcessor),
            options: {
                sourceMap: isDev,
            },
        });
    }
    return loaders;
};

module.exports = {
    devtool,
    optimization: {
        minimize: true,
    },
    entry: {
        GridContainer: ['./src/components/GridContainer'],
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        libraryTarget: 'commonjs2',
        publicPath: '',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './README.md',
                    to: './README.md',
                },
                {
                    from: './package.json',
                    to: './package.json',
                    transform(content, path) {
                        // Transform the content of package.json
                        const packageJson = JSON.parse(content);
                        return JSON.stringify(
                            {
                                ...packageJson,
                                version: process.env.RELEASE_VERSION
                                    ? process.env.RELEASE_VERSION.replace(
                                          'v',
                                          ''
                                      )
                                    : packageJson.version,
                            },
                            null,
                            2
                        );
                    },
                },
                {
                    from: './package.json',
                    to: './package.github.json',
                    transform(content, path) {
                        // Transform the content of package.json for GitHub Packages
                        const packageJson = JSON.parse(content);
                        return JSON.stringify(
                            {
                                ...packageJson,
                                name: '@fdmediagroep/css-grid',
                                version: process.env.RELEASE_VERSION
                                    ? process.env.RELEASE_VERSION.replace(
                                          'v',
                                          ''
                                      )
                                    : packageJson.version,
                            },
                            null,
                            2
                        );
                    },
                },
            ],
        }),
    ],
    module: {
        strictExportPresence: true,
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by a TypeScript loader
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.npm.json',
                        },
                    },
                ],
            },
            {
                oneOf: [
                    // "postcss" loader applies autoprefixer to our CSS.
                    // "css" loader resolves paths in CSS and adds assets as dependencies.
                    // "style" loader turns CSS into JS modules that inject <style> tags.
                    // In production, we use MiniCSSExtractPlugin to extract that CSS
                    // to a file, but in development "style" loader enables hot editing
                    // of CSS.
                    // By default we support CSS Modules with the extension .module.css
                    {
                        test: cssRegex,
                        exclude: cssModuleRegex,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: isDev,
                        }),
                        // Don't consider CSS imports dead code even if the
                        // containing package claims to have no side effects.
                        // Remove this when webpack adds a warning or an error for this.
                        // See https://github.com/webpack/webpack/issues/6571
                        sideEffects: true,
                    },
                    // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
                    // using the extension .module.css
                    {
                        test: cssModuleRegex,
                        use: getStyleLoaders({
                            importLoaders: 1,
                            sourceMap: isDev,
                            modules: true,
                        }),
                    },
                    // Opt-in support for SASS (using .scss or .sass extensions).
                    // By default we support SASS Modules with the
                    // extensions .scss or .sass
                    {
                        test: sassRegex,
                        exclude: sassModuleRegex,
                        use: getStyleLoaders(
                            {
                                importLoaders: 3,
                                sourceMap: isDev,
                            },
                            'sass-loader'
                        ),
                        // Don't consider CSS imports dead code even if the
                        // containing package claims to have no side effects.
                        // Remove this when webpack adds a warning or an error for this.
                        // See https://github.com/webpack/webpack/issues/6571
                        sideEffects: true,
                    },
                    // Adds support for CSS Modules, but using SASS
                    // using the extension .module.scss or .module.sass
                    {
                        test: sassModuleRegex,
                        use: getStyleLoaders(
                            {
                                importLoaders: 3,
                                sourceMap: isDev,
                                modules: true,
                            },
                            'sass-loader'
                        ),
                    },
                ],
            },
        ],
    },
};

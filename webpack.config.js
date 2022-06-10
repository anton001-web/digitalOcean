const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        sliderMain: './script/slider/sliderMain.js',
        slider: './script/slider/plugins/slider.js',
        animMain: './script/animation/animMain.js',
        modalMain: './script/modal/modalMain.js',
        feedback: './script/feedback/feedback.js',
        main: './script/index.js'
    },
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './pages/about.html',
            filename: 'about.html',
            chunks: ['feedback']
        }),
        new CleanWebpackPlugin({}),
        new MiniCssExtractPlugin({
            filename: `./styles/${filename('css')}`
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist/public')
                },
                {
                    from: path.resolve(__dirname, './src/assets/images'),
                    to: path.resolve(__dirname, 'dist/assets/images')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `assets/fonts/${filename('[ext]')}`
                    }
                }]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `assets/images/${filename('[ext]')}`
                    }
                }]
            },
        ]
    }
}
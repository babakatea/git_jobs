const webpack = require("webpack");

const path = require("path");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const buildStubServer = require('./stub/server');
const outputDirectory = path.join(__dirname, 'dist');
const port = process.env.PORT || 9000;

function srcPath(subdir) {
    return path.join(__dirname, "src", subdir);
}

module.exports = {
    mode: "development",
    entry: {
        root: ['babel-polyfill', './src/index.js'],
    },
    output: {
        path: path.join(__dirname, outputDirectory),
        publicPath: '/',
        filename: "[name].js"
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                loader: require.resolve('css-loader'),
                options: {
                    modules: true,
                },
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: outputDirectory,
        compress: true,
        port: port,
        before: buildStubServer
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "GitJobs App",
            hash: true,
            template: "./stub/index.html"
        }),

        new webpack.DefinePlugin({
            BACKEND_URL: `"${process.env.BACKEND_URL || "https://cors-anywhere.herokuapp.com/https://jobs.github.com/api"}"`
        }),
    ]
};

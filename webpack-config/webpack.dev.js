const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin')

module.exports = (env) => {
    const base = merge(common(env), {
        mode: "development",
        devtool: "inline-source-map",
        devServer: {
            contentBase: path.resolve(process.cwd(), "dist"),
            historyApiFallback: true,
            lazy: true,
            stats: {
                colors: true,
                hash: false,
                version: false,
                timings: false,
                assets: false,
                chunks: false,
                modules: false,
                reasons: false,
                children: false,
                source: false,
                errors: false,
                errorDetails: false,
                warnings: false,
                publicPath: false
            }
        },
        plugins: []
    });

    base.output.chunkFilename = "[name].bundle.js"
    if (process.env.platform === "server") {
        // base.plugins.push(new CleanWebpackPlugin(["dist"], { root: process.cwd() }));
        base.plugins.push(new NodemonPlugin({
            script: path.resolve(process.cwd(), "dist/index.js"),
            watch: path.resolve(process.cwd(), "dist"),
        }))
    }
    return base;
}

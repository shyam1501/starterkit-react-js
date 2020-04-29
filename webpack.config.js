/* eslint-disable global-require */
const { resolve } = require("path");
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { config } = require("dotenv");

// eslint-disable-next-line import/no-dynamic-require
const modeConfiguration = env => require(`./webpack/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);
    const env = config().parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});


    return webpackMerge({
        mode,
        entry: "./src/index.js",
        devServer: {
            open: true,
            hot: true,
            historyApiFallback: true,
        },
        output: {
            publicPath: "/",
            path: resolve(__dirname, "build"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    loader: ["url-loader", "file-loader"]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new HotModuleReplacementPlugin(),
            new DefinePlugin(envKeys)
        ]
    }, modeConfiguration(mode));
};
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
    entry: "./src/index.js",
    mode: 'development', 
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
                'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i,
                type: 'asset/resource', // Utilisation du module asset/resource dans Webpack 5
                generator: {
                    filename: 'assets/images/[name].[hash][ext]', // Répertoire où stocker les images
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "styles.css" }),
    ],
    devServer: {
        static: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        open: true,
        hot: true,
        port: 9090
    },
    devtool: "hidden-source-map"
}
module.exports = config;
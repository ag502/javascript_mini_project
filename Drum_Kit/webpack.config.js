const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules",
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: ["@babel/plugin-proposal-class-properties"],
                        presets: ["@babel/preset-env"]
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
    ],
    devServer: {
        port: 9000,
    }
}
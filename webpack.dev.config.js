const { merge } = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");

module.exports = merge(baseWebpackConfig, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: '8000',
        hot: true
    }
});
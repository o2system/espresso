/**
 * This file is part of the O2System Venus UI Framework package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	entry: {
		"espresso.min": "./src/main.docs.js"
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "../docs"),
		publicPath: "/espresso/"
	},
	module: {
		rules: [
		{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'style-loader',
                'css-loader',

            ],
        },
		{
			test: /\.html$/,
			use: [{
				loader: "html-loader",
				options: { minimize: true }
			}]
		}
		]
	},

	plugins: [
	new HTMLWebpackPlugin({
			title: "O2System Espresso",
			template: "./src/index.html",
        }), // Generates default index.html
	new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
	],
	optimization: {
		minimize: true,
		minimizer: [
		new UglifyJsPlugin({
			include: /\.min\.js$/
		}),
		new OptimizeCSSAssetsPlugin({
			include: /\.min\.css$/
		})
		]
	}
});
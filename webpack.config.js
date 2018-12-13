const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const appHtmlTitle = 'Webpack Boilerplate';

const config = {
	entry: { main: './src/script.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.html$/,
			use: [
			{
				loader: "html-loader",
				options: { minimize: true }
			}
			]
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract(
			{
				fallback: 'style-loader',
				use: ['css-loader']
			})
		}
		]
	},
	plugins: [
	new ExtractTextPlugin({filename: 'style.css'}),
	new CleanWebpackPlugin('dist', {} ),
	new HtmlWebpackPlugin({template: './src/index.html'})
	]
};

module.exports = config;
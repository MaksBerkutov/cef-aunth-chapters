const webpack = require("webpack");

module.exports = {
	entry: {
		browser: './src/index.js',
		client: './src/App.js',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react'],
						},
					},
				],
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: ['source-map-loader'],
			},
			{
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader',
				options: {
					limit: 100000,
				},
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
	},
	output: {
		path: __dirname + '/client_packages/aunth',
		publicPath: '/',
		filename: '[name].js',
	},
	plugins: [],
	devServer: {
		contentBase: './client_packages/aunth',
	},
}

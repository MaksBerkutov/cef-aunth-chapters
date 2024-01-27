const path = require('path')
const webpack = require('webpack') // Добавьте эту строку

module.exports = {
	entry: './src/index.js', // Ваш главный файл React
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'), // Папка, куда будет сохранен собранный код
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
		}),
	],
}

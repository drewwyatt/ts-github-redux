var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.resolve('./src/index'),	
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html' })
	],
	module: {
        loaders: [
            { 	test: /\.tsx?$/, 
				loaders: [
					'react-hot',
					'babel?presets[]=es2015',                  
					'ts-loader'
				] }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.json']
    },
}
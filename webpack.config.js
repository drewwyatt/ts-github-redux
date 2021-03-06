var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		path.resolve('./src/index')	
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new HtmlWebpackPlugin({ template: './index.html' })
	],
	module: {
        loaders: [
            { 	test: /\.tsx?$/, 
				loaders: [
					'babel?presets[]=es2015',                  
					'ts-loader'
				] }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.json']
    },
}
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: 'cheap-module-eval-source-map',
	entry: {
		'vendor': [
            'react',
            'react-dom',
            'redux',
            'react-redux'
        ],
		'middleware': [
			'webpack-hot-middleware/client'	
		],
		'app': './src/index.tsx'	
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js", Infinity),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ template: './index.html' })
	],
	module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.json']
    },
}


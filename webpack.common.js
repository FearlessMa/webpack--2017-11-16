const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');
module.exports={
	entry:{
		main:path.join(__dirname,'index.js')
	},
	output:{
		filename:'[name].[hash].js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude: /(node_modules|bower_components)/,
				use:[
					{
						loader:'babel-loader',
						options:{
							presets:[['es2015'],['react'],['stage-0']],
							plugins:[["import", { libraryName: "antd", style: "css" }] ]
						}
					}
				]
			},
			{
				test:/\.(scss|css)$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.(woff|eot|ttf|woff2)$/,
				use:['file-loader']
			}

		]
	},
	resolve:{
		extensions:['*','.js','.css','.scss'],
		alias:{
			js:path.resolve(__dirname,'js'),
			css:path.resolve(__dirname,'css')
		}

	},

	plugins:[
		new HtmlWebpackPlugin({
			title:'auto build html'
			//filename: 'index.html',
			//template: 'index.html',
			//trunks:['main']
		}),
		new CleanWebpackPlugin(['dist'])
	]
}
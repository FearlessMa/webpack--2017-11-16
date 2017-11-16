const merge = require('webpack-merge');
//用于生产环境压缩代码
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
module.exports=merge(common,{
	//压缩代码插件
	plugins:[
		new UglifyJSPlugin()
	]
});
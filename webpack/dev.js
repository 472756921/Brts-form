const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const apiMocker = require('mocker-api');
const path = require('path');

module.exports = (env, argv) => {
	return webpackMerge.merge(baseConfig(env, argv), {
		mode: 'development',
		entry: {
			main: './src/app.tsx'
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Benson',
				template: './index.html',
				filename: 'index.html'
			})
		],
		devtool: 'cheap-module-eval-source-map',
		devServer: {
			before(app) {
				apiMocker(app, path.resolve('./mocks/index.js'));
			},
			host: 'localhost',
			port: '9000',
			open: false,
			compress: true, // 开起 gzip 压缩
			inline: true,
			hot: true,
			historyApiFallback: true, // browserHistory路由
			proxy: {
				'/api': {
					target: '',
					pathRewrite: { '^/api': '' }
				}
			}
		}
	});
};

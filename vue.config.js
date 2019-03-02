/* const path = require('path'); */

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: `
			@import "@/scss/_variables.scss";
		  `
			}
		}
	},
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:80',
			},
		}
	},
	publicPath: 'dziennik_php'

	/* ,
	build: {
		// Template for index.html
		index: path.resolve(__dirname, '../dist/index.html'),

		// Paths
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',

		productionSourceMap: true,

		// skipping the rest ...
	}, */
};
module.exports = function(config){
	config.set({
		basePath: '../',
		files: [
			'src/bower/angular/angularjs',
			'src/bower/anuglar-mocks.js',
			'src/js/**/*.js',
			'text/unit/**/*.js'
		],
		autoWatch: true,
		frameworks: ['jasmine'],
		browsers: ['Chrome', 'Firefox'],
		plugins: ['karma-chrome-launcher', 'karma-firefox-launcher', 'karma-jasmine']
	})
};
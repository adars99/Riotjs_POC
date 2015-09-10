(function () {
	'use strict';
	module.exports = function (config) {
		config.set({
			basePath: 'app/client',
			frameworks: ['jasmine'],
			files: [
				'scripts/*.js','scripts/tests/*.js'
			],
			preprocessors: {
				'scripts/*.js': ['coverage']
			},
			exclude: [],
			reporters: ['progress', 'html', 'coverage'],
			coverageReporter: {
				dir: 'report/coverage',
				reporters: [{
				type: 'html',
				subdir: 'report-html'
				}, {
				type: 'text-summary'
				}]
			},
			htmlReporter: {
				outputDir: 'report/' + 'html'
			},
			port: 9876,
			colors: true,
			logLevel: config.LOG_INFO,
			autoWatch: true,
			browsers: ['PhantomJS'],
			captureTimeout: 60000,
			singleRun: false
		});
	};
})();
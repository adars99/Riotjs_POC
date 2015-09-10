define({
	proxyPort: 9000,
	proxyUrl: 'http://localhost:9000/',
	 capabilities: {
	 	'selenium-version': '2.47.1',
	 	'idle-timeout': 30,
		 "phantomjs.binary.path": 'node_modules/phantomjs/lib/phantom/phantomjs.exe'
	 },
	environments: [
		{ browserName: 'phantomjs' }
	],
	tunnel: 'NullTunnel',
	maxConcurrency: 3,
	useSauceConnect: false,
	webdriver: {
		host: 'localhost',
		port: 4444
	},
	loaderOptions: {
		packages: [ { name: 'myPackage', location: '.' } ]
	},
	loaders: { 'host-node': 'requirejs','host-browser': 'node_modules/requirejs/require.js'},
	loader: {
    // Aliased paths
		paths: {
				'riot': '../../../node_modules/riot/riot',
				'text': '../../../node_modules/requirejs-text/text',
				'tags':  '../../../emCtrl/js/controls/tags',
				'kendo': 'http://cdn.kendostatic.com/2012.2.710/js/kendo.all.min',
				'bootstrap': '../../../node_modules/bootstrap/dist/js/bootstrap.min',
				//Ctrl//
				'EM.Init': '../../../emCtrl/js/controls/emInit',
				'EM.List': '../../../emCtrl/js/controls/emList',
				'EM.TestList': '../../../emCtrl/js/controls/emTestList',
				'EM.KGrid': '../../../emCtrl/js/controls/emKGrid',
				'EM.BTab': '../../../emCtrl/js/controls/emBTab'
		}},
	reporters: [ 'Console', 'Lcov', {"id":"LcovHtml","directory":"html-report"} ],
	suites: [ 'emCtrl/js/tests/emCtrl.intern'/* 'myPackage/tests/foo', 'myPackage/tests/bar' */ ],
	functionalSuites: ['emCtrl/js/tests/index' /* 'myPackage/tests/functional' */ ],
	excludeInstrumentation: /^(?:tests|node_modules)\//
});
	
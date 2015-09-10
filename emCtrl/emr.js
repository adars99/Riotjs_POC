require.config({
	baseUrl: "emCtrl",
    paths: {
		//lib//
		'react': '../node_modules/react/dist/react-with-addons',
		'JSXTransformer': '../node_modules/react/dist/JSXTransformer',
		'jsx': '../node_modules/requirejs-react-jsx/jsx',
		'riot': '../node_modules/riot/riot',
		'text': '../node_modules/requirejs-text/text',
		'tags':  'js/controls/tags',
		'kendo': 'http://cdn.kendostatic.com/2012.2.710/js/kendo.all.min',
		'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min',
		//Ctrl//
        'EM.Init': 'js/controls/emInit',
		'EM.List': 'js/controls/emList',
		'EM.TestList': 'js/controls/emTestList',
		'EM.KGrid': 'js/controls/emKGrid',
		'EM.BTab': 'js/controls/emBTab',
		'EM.React': 'emReact',
		'EM.Extend': ''
    },
	shim : {
	    "react": {
	      "exports": "React"
	    },
	    "JSXTransformer": "JSXTransformer"
  	},
	config: {
	    jsx: {
	      fileExtension: ".jsx",
	      transformOptions: {
	        harmony: true,
	        stripTypes: false,
	        inlineSourceMap: true
	      },
	      usePragma: false
	    }
	  }
});
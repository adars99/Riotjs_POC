define(['riot'
], function(riot) {
	'use strict';
	function init() {
	 	riot.tag('em-testlist', '<ul ><li  each="{item in opts.list}">{item}</li></ul>', function(opts){
			 this.mixin('emCtrlMixins');
		});
	}
	init();
});
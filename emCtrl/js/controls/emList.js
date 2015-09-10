define(['riot',
	'text!js/views/list.html'
], function(riot,tpl) {
	'use strict';
	function init() {
	 	riot.tag('em-list', tpl, function(opts){
			 this.mixin('emCtrlMixins');
			  if(window.angular != undefined){
			      if(this.opts.list != undefined && angular.element(this.root).scope() != undefined)
			      this.setOpts({list:angular.element(this.root).scope()[this.opts.list]},true);
			  }
			 this.removeItem = function(e){
			    this.parent.opts.list.splice(this.opts.val,1);
			    this.parent.update();
				 if(window.angular != undefined){
					 this.updateScope(angular.element(this.parent.root));
				 }
				return false;	
			  };
		});
		em['em-list'] = riot.mount('em-list');
	}
	init();
});
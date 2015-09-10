define(['riot','kendo'
], function(riot,kendo) {
	'use strict';
	function init() {
	 	riot.tag('em-kgrid', '<div></div>', function(opts){
			  this.mixin('emCtrlMixins');
			  this.on('mount', function(){	
				});
			  this.on('update', function(){
					if(this.opts && ($('#'+this.root.id).html() != ''))
						if($('#'+this.root.id).data('kendoGrid')== undefined)
					 		$('#'+this.root.id).kendoGrid(this.opts).data('kendoGrid');
							 
				});
		});
		em['em-kgrid'] = riot.mount('em-kgrid');
	}
	init();
});
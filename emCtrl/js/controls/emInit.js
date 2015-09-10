(function(root, factory) {
	if (typeof(define) === 'function' && define.amd) {
		define(['riot','tags'], function(riot,tags) {
			factory(riot,tags);
		});
	}
	else if (typeof(module) !== 'undefined' && typeof module.exports !== 'undefined') {
		var riot = require('riot');
		var tags = require('tags');
		factory(riot,tags);
	}
	else {
		factory(root.riot,root.tags);
	}
})(this, function(riot,tags) {
	'use strict';
		var emCtrlMixins = {
				    init: function() {
				    },
				
				    getOpts: function() {
				        return this.opts;
				    },
				
				    setOpts: function(options, update) {
						this.opts = this.margeTo(this.opts,options,true);
				        if(update) {
				            this.update();
				        }
				
				        return this;
				    },
					getScopeOf: function(element){
						element = (element === undefined) ? this.currentElement : element;
						if(angular)
							return element.scope();
						else 
							console.log('Not an Angular app');
					},
					setScopeValue: function(){
						for(var i in this.getScopeOf(this.currentElement)){
							this.getScopeOf(this.currentElement)[i]=(this.opts[i]||this.getScopeOf(this.currentElement)[i]);
						}
					},
					updateScope : function(element){
						if(!angular){
							console.log('Not an Angular app');
							return;
						}
						this.currentElement = element;
						this.getScopeOf(element).$apply(this.setScopeValue);
					},
					margeTo: function(to, frm, all){
						var newOpts ={};
						for(var i in to){
							newOpts[i]=(frm[i]||to[i]);
							delete frm[i];
						}
						if(all)
						for (var i in frm)
						{
							newOpts[i] = frm[i];
						}
						return newOpts;
					},
					currentElement:''
					
			}; 
			riot.mixin('emCtrlMixins',emCtrlMixins);
			em['em-panel']=riot.mount('em-panel');
			em['em-btn']=riot.mount('em-btn');
			em['em-text']=riot.mount('em-text');

});
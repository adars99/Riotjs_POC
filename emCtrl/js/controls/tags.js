(function(root, factory) {
	if (typeof(define) === 'function' && define.amd) {
		define(['riot'], function(riot) {
			factory(riot);
		});
	}
	else if (typeof(module) !== 'undefined' && typeof module.exports !== 'undefined') {
		var riot = require('riot');

		factory(riot);
	}
	else {
		factory(root.riot);
	}
})(this, function(riot) {
	//--panel--//
	riot.tag('em-bpanel', '<h3>{opts.title}</h3><p>{opts.content}</p>', function(opts) {
			this.mixin('emCtrlMixins')
		
	});
	//--panel--//
	riot.tag('em-bfrom', '<h3>{opts.title}</h3><em-text title="Enter value" placeholder="Enter value"></em-text><em-btn text="click it"></em-btn>', function(opts) {
			this.mixin('emCtrlMixins')
		
	});
	//--item--//
	riot.tag('em-blist', '<ul class="{opts.cssclassul}"><li class="{active: active}{opts.cssclassli}" each="{opts.list}"><a data-toggle="tab" href="#{id}">{title}</a></li></ul>', function(opts) {
			this.mixin('emCtrlMixins')
		
	});
	//--tab--/
	riot.tag('em-btab', '<em-blist cssclassul="nav nav-tabs" toggle="tab" list="{opts.list}" ></em-blist><div class="tab-content"><div id="{id}" class="tab-pane fade {active in: active}" each="{opts.list}"><span if="{contentType==\'em-bpanel\'}"><div riot-tag="em-bpanel" title="{title}" content="{content}"></div></span><span if="{contentType==\'em-bfrom\'}"><div riot-tag="em-bfrom" title="{title}" ></div></span></div></div>', function(opts) {
			this.mixin('emCtrlMixins')
		
	});
	riot.tag('em-panel', '<div class="panel panel-default"><div class="panel-body"><yield></yield></div></div>', function(opts) {
	    this.mixin('emCtrlMixins')
	  
	});
	riot.tag('em-btn', '<a class="btn btn-info" onclick="{opts.onclick}" >{opts.text}</a>', function(opts) {
	  this.mixin('emCtrlMixins')
	   if(window.angular != undefined){
	      if(this.opts.onclick != undefined && angular.element(this.root).scope() != undefined)
	      this.setOpts({onclick:angular.element(this.root).scope()[this.opts.onclick]},true);
	  }
	  
	});
	riot.tag('em-text', '<label>{opts.title}</label><input class="form-control" type="text" value="{opts.text}" onchange="{edit}" placeholder="{opts.placeholder}">', function(opts) {
	  this.mixin('emCtrlMixins')
	  this.edit = function(e) {
	      var updateVal = {text:(e.target || e.srcElement).value}
	      this.setOpts( updateVal,true);
	     if(window.angular != undefined){
	        this.updateScope(angular.element((e.target || e.srcElement)));
	       }
	    }
	    
	});
	riot.tag('em-del', '<a class="glyphicon glyphicon-remove pull-right" onclick="{parent.removeItem}" value="{opts.val}" ></a>', function(opts) {
	  this.mixin('emCtrlMixins')
	  
	});
	

});
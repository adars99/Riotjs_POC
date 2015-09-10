var em = {
	init: function(fn){
		
		if(fn)
			require(['EM.Init'],fn);
		else
			require(['EM.Init']);
		
		$.fn.extend({
		  appendEMControl: function(el) {
		     this.append(el);
			 riot.mount($(el).prop("tagName"));
		  }
		});
	},
	required: function(ext,fn){
		if(fn)
			require([ext],fn);
		else
			require([ext]);
	},
	getElement: function(id){ // todo:need to refactor..any btr way?
		var child;
		for (var item in em){
			child = em[item];
		     if (Array.isArray(child)) {
		     	child = child.filter(function(tmpChild){
		           return tmpChild.getOpts().id == id;
		        });
				if(child.length>0)
					break;
		     }
		}
	    return child.length ? child[0] : child	;
	},
	setElementTo: function(elId, tag, opts){
		if(em[tag]==undefined)
			em[tag] = [];
		em[tag].push( riot.mount(elId,tag,opts));
	},
	
	
};
if(window.angular != undefined){
			angular.module('angularem', [])
			  .factory('emf', ['$window', '$log',
			    function ($window, $log) {
			      //Check dependency
			      if (!$window.em) {
			        return $log.error('EM control not installed.');
			      }
			      return $window.em;
			}]);
			angular.module('angularem').directive('emc' , function(){
				return {
			    restrict: 'E',
			     replace: true,
			        link: function(scope, elem, attrs) {
						var renderMyComponent = function() {
							em.setElementTo('#'+elem[0].id,attrs.emtag,{});
						};
						renderMyComponent();
					   //if required--?
					   //watchProps(attrs.watchdepth, scope,elem[0].attributes,function(){ renderMyComponent();});
					   scope.$on('$destroy', function() {
			             riot.unmount('#'+attrs.emid);
			          });
			        }
			  };
			});
			 function watchProps (watchDepth, scope, watchExpressions, listener){
			    if (watchDepth === 'collection' && angular.isFunction(scope.$watchCollection)) {
			      watchExpressions.forEach(function(expr){
			        scope.$watchCollection(expr,  listener);
			      });
			    }
			    else if (watchDepth === 'reference') {
			      if (angular.isFunction(scope.$watchGroup)) {
			        scope.$watchGroup(watchExpressions,  listener);
			      }
			      else {
			        watchExpressions.forEach(function(expr){
			          scope.$watch(expr,  listener);
			        });
			      }
			    }
			    else {
			      //default watchDepth to value if not reference or collection
			      watchExpressions.forEach(function(expr){
			        scope.$watch(expr,  listener, true);
			      });
			    }
			  }
		
}

//for new version of jquery to work with kendo
$.browser = {};
(function () {
	if($.Number != undefined)
    	$.Number.msie = false;
    $.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        $.browser.msie = true;
        $.browser.version = RegExp.$1;
    }
})();
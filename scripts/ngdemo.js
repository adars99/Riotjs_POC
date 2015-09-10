	angular.module('emCtrlDemo', ['angularem','ngRoute']);
	angular.module('emCtrlDemo').config(['$routeProvider',config ]);
	function config($routeProvider) {
				$routeProvider.
	                when('/home', {templateUrl: 'views/home.html',   controller: HomeCtrl}).
	                when('/list', {templateUrl: 'views/list.html',   controller: ListCtrl}).
	                when('/details/:itemId', {templateUrl: 'views/details.html',   controller: DetailsCtrl}).
	                otherwise({redirectTo: '/home'});
	}
	angular.module('emCtrlDemo').controller('MainCtrl',MainCtrl);
	function MainCtrl($scope) {}
	
	function HomeCtrl($scope) {
	     console.log('home');
		 $scope.text='ok';
		 $scope.btnTxt="Add";
		 $scope.list = [{title:'ok1'},{title:'ok2'}];
		 $scope.gridHead = "ng list";
		 $scope.onclick=function(){
			 $scope.list.push({title:$scope.text});
			 em.getElement('list1').setOpts({},true);
			 em.getElement('txt1').setOpts({text:'\n'},true);
		 };
		  $scope.onRemoveClick=function(){
			 $scope.list.length = 0;
			 em.getElement('list1').setOpts({},true);
		 };
		 em.init(function(){
			  em.getElement('btn2').setOpts({onclick:$scope.onRemoveClick},true);
		 });
		 em.required('EM.List');
	}
	
	function ListCtrl($scope) {
		console.log('list');
	}
	
	function DetailsCtrl($scope) {
	    console.log('details');
	}

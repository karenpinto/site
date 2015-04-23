;(function(namespace, undefined) {
	var Morfn = angular.module('Morfn',['ui.router']);

	Morfn.config(function ($stateProvider){
		
		$stateProvider.state('routines',{
			url:'/routines',
			views:{
				'body':{template:'<routines-sidebar></routines-sidebar>'+
				'<routines-container></routines-container>'+
				'<boost-modal ng-if="boost.showModal"></boost-modal>'+
				'<social-modal ng-if="social.showModal"></social-modal>',controller:'routines'}
			}
		});

	});

}(this));
;(function(namespace, undefined) {
	angular.module('Morfn').controller('routines',['$scope',function ($scope) {
		$scope.boost = {
			showModal:false,
			selected:'',
			keywords:''
		};

		$scope.social = {
			showModal:false,
			channel:''
		};		

	}]);
}(this));
;(function(namespace, undefined) {

	angular.module('Morfn').directive('boostChannel',[function(){
		return {
			restrict:'AE',
			templateUrl:'views/boost.channel.html',
			scope:{
				channel:'=channel'
			},
			replace:true,			
			link:function (scope,element,attrs) {
				scope.showModal = function (type) {
					scope[type].showModal = true;
				};
			}
		};
	}]);

}(this));
;(function(namespace, undefined) {

	angular.module('Morfn').directive('boostModal',[function(){
		return {
			restrict:'AE',
			templateUrl:'views/boost.modal.html',
			replace:true,			
			scope:false,
			link:function (scope,element,attrs) {
				scope.modal = {
					keywords:scope.boost.keywords,
					selected:''
				};

				scope.hideModal = function () {
					scope.boost.showModal = false;
					$('body').addClass('modal');
				};

				scope.extendBoost = function () {
					
				};

				scope.setBoost = function (selected) {
					scope.modal.selected = selected;
					scope.boost.keywords = scope.modal.keywords;
					scope.boost.selected = scope.modal.selected;
					scope.hideModal();
				};
			}
		};
	}]);

}(this));
;(function(namespace, undefined) {

	angular.module('Morfn').directive('routinesContainer',[function(){
		return {
			restrict:'AE',
			templateUrl:'views/routines.container.html',
			replace:true,			
			scope:false,
			link:function (scope,element,attrs) {
				scope.showModal = function (type) {
					scope[type].showModal = true;
					$('body').addClass('modal');
				};
			}
		};
	}]);

}(this));
;(function(namespace, undefined) {

	angular.module('Morfn').directive('routinesSidebar',[function(){
		return {
			restrict:'AE',
			templateUrl:'views/routines.sidebar.html',
			replace:true,
			link:function (scope,element,attrs) {
				
			}
		};
	}]);

}(this));
;(function(namespace, undefined) {

	angular.module('Morfn').directive('socialModal',[function(){
		return {
			restrict:'AE',
			templateUrl:'views/social.modal.html',
			replace:true,			
			scope:false,
			link:function (scope,element,attrs) {
				scope.social.modal = {
					channel:scope.social.channel
				};

				scope.hideModal = function () {
					scope.social.showModal = false;
					$('body').addClass('modal');
				};

				scope.extendBoost = function () {
					
				};

				scope.setBoostChannel = function (channel) {
					scope.social.channel = channel;
					scope.social.modal.channel = channel;
					scope.hideModal();

				};
			}
		};
	}]);

}(this));
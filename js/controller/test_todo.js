'use strict';

module.exports = function($scope, TodoService , ToastService) {
	
	// TodoService.getSomething().then(function(data) {
	// 	console.log(data)
	// })
	$scope.printInput = function() {
		console.log($scope.inputFieldInput);
	}
	ToastService.show();
	ToastService.warn();
	ToastService.error();
};
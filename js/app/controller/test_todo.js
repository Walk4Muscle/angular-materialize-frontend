'use strict';

module.exports = function($scope, TodoService, ToastService, BaseAPIService, UserService, $timeout,DTOptionsBuilder, DTColumnBuilder,DT_OPTIONS) {

	// TodoService.getSomething().then(function(data) {
	// 	console.log(data)
	// })

	ToastService.show();
	ToastService.warn();
	ToastService.error();
	console.log(BaseAPIService.init('user'))
		// UserService.get(1).then(function(data) {
		// 	console.log(data)
		// }, function(reason) {
		// 	console.log(reason)
		// });
};
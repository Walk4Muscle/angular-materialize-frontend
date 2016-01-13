'use strict';

module.exports = function($scope, TodoService, ToastService, BaseAPIService, UserService, $timeout,DTOptionsBuilder, DTColumnBuilder,DT_OPTIONS) {

	// TodoService.getSomething().then(function(data) {
	// 	console.log(data)
	// })
	$scope.printInput = function() {
		console.log($scope.inputFieldInput);
	}
	ToastService.show();
	ToastService.warn();
	ToastService.error();
	console.log(BaseAPIService.init('user'))
		// UserService.get(1).then(function(data) {
		// 	console.log(data)
		// }, function(reason) {
		// 	console.log(reason)
		// });

	$scope.getList = function() {
		UserService.list().then(function(data) {
			// console.log(data)
		}, function(reason) {
			console.log(reason)
		});
	};

	$scope.getList();


	var dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        return UserService.list();
    }).withBootstrap();
    $scope.dtOptions = angular.extend(dtOptions,DT_OPTIONS);
	console.log($scope.dtOptions);
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('username').withTitle('User name'),
        DTColumnBuilder.newColumn('email').withTitle('Email')
    ];

};
'use strict';

module.exports = function($scope, $location, $routeParams, ToastService, UserService ,DTOptionsBuilder, DTColumnBuilder,DT_OPTIONS) {

	console.log($location)

	$scope.printInput = function() {
		console.log($scope.inputFieldInput);
	}
	ToastService.show("fuck");
	ToastService.warn("the");
	ToastService.error("world");

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
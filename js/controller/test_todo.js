'use strict';

module.exports = function($scope, TodoService, ToastService, BaseAPIService, UserService, GRID_DEFAULT_OPTIONS, $timeout) {

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


	var girdOptions = {
		columnDefs: [{
			name: 'username',
			field:'username',
			minWidth: 200,
			enableHiding: false,
			enableSorting: false,
		}, {
			name: 'email',
			minWidth: 200,
			enableHiding: false,
			enableSorting: false,
		}],
		onRegisterApi: function(gridApi) {
			$scope.gridApi = gridApi;
			console.log(gridApi);
			$timeout(function() {
				$scope.gridApi.core.handleWindowResize();
			});
			$scope.gridApi.core.on.sortChanged($scope, function(grid, sortColumns) {
				// if (sortColumns.length == 0) {
				//     paginationOptions.sort = null;
				// } else {
				//     paginationOptions.sort = sortColumns[0].sort.direction;
				// }
				// getList();
			});
			gridApi.pagination.on.paginationChanged($scope, function(newPage, pageSize) {
				GRID_DEFAULT_OPTIONS.paginationOptions.pageNumber = newPage;
				GRID_DEFAULT_OPTIONS.paginationOptions.pageSize = pageSize;
				getList();
			});
		}
	};
	$scope.gridOptions = angular.extend(girdOptions, GRID_DEFAULT_OPTIONS);
	console.log($scope.gridOptions);

	$scope.getList = function() {
		UserService.list().then(function(data) {
			// console.log(data)
			$scope.gridOptions.data = data.data;
			$scope.gridOptions.totalItems = data.data.length;
		}, function(reason) {
			console.log(reason)
		});
	};

	$scope.getTableHeight = function() {
		var rowHeight = $scope.gridOptions.rowHeight; // your row height
		var headerHeight = 30; // your header height
		var footerHeight = 55; // your footer height
		return {
			height: ($scope.gridOptions.data.length * rowHeight + headerHeight + footerHeight) + "px"
		};
	};
	$scope.getList();

	$scope.edit = function(id) {
		console.log($scope.tp);
	}
};
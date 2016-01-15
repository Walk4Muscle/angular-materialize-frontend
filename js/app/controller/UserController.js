'use strict';

module.exports = function($scope, $location, $compile, $routeParams, ToastService, UserService, DTOptionsBuilder, DTColumnBuilder, DT_OPTIONS) {

	// ToastService.show("fuck");
	// ToastService.warn("the");
	// ToastService.error("world");
	$scope.users = {};
	$scope.formdata = {};
	$scope.edit = edit;
	$scope.deleteUser = deleteUser;
	$scope.submitForm = submitForm;
	$scope.resetForm = resetForm;
	$scope.dtInstance = {};


	var dtOptions = DTOptionsBuilder.fromFnPromise(function() {
		return UserService.list();
	}).withBootstrap().withOption('createdRow', createdRow);;
	$scope.dtOptions = angular.extend(dtOptions, DT_OPTIONS);
	$scope.dtColumns = [
		DTColumnBuilder.newColumn('id').withTitle('ID'),
		DTColumnBuilder.newColumn('username').withTitle('User name'),
		DTColumnBuilder.newColumn('email').withTitle('Email'),
		DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable()
		.renderWith(actionsHtml)
	];

	function actionsHtml(data, type, full, meta) {
		$scope.users[data.id] = data;
		return '<button class="btn-floating cyan waves-effect waves-light" ng-click="edit(users[' + data.id + '])">' +
			'   <i class="mdi-image-edit"></i>' +
			'</button>&nbsp;' +
			'<button class="btn-floating red waves-effect waves-light" ng-click="deleteUser(users[' + data.id + '])" )"="">' +
			'   <i class="mdi-content-remove-circle-outline"></i>' +
			'</button>';
	}

	function createdRow(row, data, dataIndex) {
		// Recompiling so we can bind Angular directive to the DT
		$compile(angular.element(row).contents())($scope);
	}

	function edit(user) {
		$scope.formdata = angular.copy(user);
		console.log(user)
	}

	function deleteUser(user) {
		console.log('delete: ' + user)
		UserService.delete(user).then(function(data){
			if(data.status){
				ToastService.show("Delete item success");
				reloadData()
			}else{
				console.log(data);
				ToastService.error("faild. "+data.error);
			}
		})

	}

	function submitForm(){
		if($scope.formdata.id){
			UserService.update($scope.formdata).then(function(data){
				if(data.status){
					ToastService.show("Update success");
					reloadData()
					resetForm();
				}else{
					console.log(data);
					ToastService.error("faild. "+data.error);
				}
			})
		}else{
			// console.log($scope.formdata);return;
			UserService.add($scope.formdata).then(function(data){
				if(data.status){
					ToastService.show("Insert success");
					reloadData()
					resetForm();
				}else{
					console.log(data);
					ToastService.error("faild. "+data.error);
				}
			})
		}
	}

	function resetForm(){
		$scope.formdata = {};
	}

	function reloadData() {
        var resetPaging = false;
        $scope.dtInstance.reloadData(); //callback, resetPaging
    }
};
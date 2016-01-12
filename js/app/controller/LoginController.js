'use strict';

module.exports = function($scope, ToastService) {
	
	ToastService.show();
	ToastService.warn();
	ToastService.error();
	
};
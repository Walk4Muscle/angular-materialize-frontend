'use strict';

var app = require('angular').module('myApp.Ctrl', ['ui.grid', 'ui.grid.pagination','ui.grid.autoResize']);
app.constant('GRID_DEFAULT_OPTIONS', {
	paginationPageSizes: [10, 25, 50],
	paginationPageSize: 10,
	useExternalPagination: false,
	enableVerticalScrollbar: 0,
	enableGridMenu: true,
	// enableGridMenu:false,
	// rowHeight: 35,
	paginationOptions: {
		pageNumber: 1,
		pageSize: 10,
		sort: null
	}
});


app.controller('TestCtrl', require('./test_todo'));
app.controller('LoginCtrl', require('./LoginController'));

app.directive('autoGridHeight', function($timeout, $window) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// console.log(scope.gridOptions.totalItems);
			// console.log(scope.gridOptions);
			console.log(element);
			console.log($(element).find('.ui-grid-viewport'));
			var setGridHeight = function() {
				var dataCount = scope.gridOptions.totalItems;
				var rowHeight = scope.gridOptions.rowHeight;
				var headerHeight = scope.gridOptions.headerRowHeight; // your header height
				var footerHeight = scope.gridOptions.gridFooterHeight; // your footer height
				var dataContentHeight = dataCount * rowHeight;
				// console.log()
				$(element).find('.ui-grid-viewport').height(dataContentHeight + footerHeight);
				$(element).height(dataContentHeight  + headerHeight + footerHeight + 59);
			};
			//setGridHeight();          // does not resize the grid
			$timeout(setGridHeight); // resizes the grid but not the render-container
			angular.element($window).bind('resize', setGridHeight);
		}
	}
})

module.exports = 'myApp.Ctrl';
'use strict';

var app = require('angular').module('myApp.directive',[]);

app.directive('autoGridHeight', function($timeout, $window) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// console.log(scope.gridOptions.totalItems);
			// console.log(scope.gridOptions);
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
.directive('autoGridWidth', function($timeout, $window) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			// console.log(scope.gridOptions.totalItems);
			// console.log(scope.gridOptions);
			var setGridHeight = function() {
				// console.log()
				$(element).width($(element).parent("div").width());
			};
			//setGridHeight();          // does not resize the grid
			$timeout(setGridHeight); // resizes the grid but not the render-container
			angular.element($window).bind('resize', setGridHeight);
		}
	}
})

module.exports = 'myApp.directive';

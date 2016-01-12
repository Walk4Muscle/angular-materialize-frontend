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


module.exports = 'myApp.Ctrl';
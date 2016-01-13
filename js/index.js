'use strict';

var angular = require('angular');
var app = angular.module('myApp', [
		require('./app/controller'),
		require('./app/service'),
		require('./app/directive'),
		require('./angular-materialize'),
		require('./angular-route'),
		require('./angular-sanitize'),
		require('./angular-datatables'),
	])
	.run(function($rootScope,DTDefaultOptions) {
		window.Ps = require('./perfect-scrollbar/jquery');
		require('./perfect-scrollbar');
		var leftNav = $('#slide-out');
		var leftnav = $(".navbar-fixed").height();
		var leftnavHeight = window.innerHeight - leftnav;
		leftNav.height(leftnavHeight);
		leftNav.perfectScrollbar();
		$(window).on("resize.doResize", function() {
			var leftnavHeight = window.innerHeight - leftnav;
			leftNav.height(leftnavHeight);
			leftNav.perfectScrollbar();

			$rootScope.$apply(function() {
				//do something to update current scope based on the new innerWidth and let angular update the view.
			});
		});

		$rootScope.$on("$destroy", function() {
			$(window).off("resize.doResize"); //remove the handler added earlier
		});

		DTDefaultOptions.setLoadingTemplate('<div class="loader">Loading...</div>');
	});

app.constant('DT_OPTIONS', {
	paginationType: 'full_numbers',
	displayLength: 1,
	language: {
		"sEmptyTable"     : "No data available in table",
		"sInfo"           : "Showing _START_ to _END_ of _TOTAL_ entries",
		"sInfoEmpty"      : "Showing 0 to 0 of 0 entries",
		"sInfoFiltered"   : "(filtered from _MAX_ total entries)",
		"sInfoPostFix"    : "",
		"sInfoThousands"  : ",",
		"sLengthMenu"     : "Show _MENU_ entries",
		"sLoadingRecords" : "Loading...",
		"sProcessing"     : "Processing...",
		"sSearch"         : "Search:",
		"sZeroRecords"    : "No matching records found",
		"oPaginate": {
			"sFirst"    : "<<",
			"sLast"     : ">>",
			"sNext"     : ">",
			"sPrevious" : "<"
		},
		"oAria": {
			"sSortAscending"  : ": activate to sort column ascending",
			"sSortDescending" : ": activate to sort column descending"
		}
	}
});


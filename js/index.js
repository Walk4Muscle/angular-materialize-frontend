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
	})


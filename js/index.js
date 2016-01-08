'use strict';

var angular = require('angular');
var app = angular.module('myApp', [require('./controller'),require('./service'),require('./angular-materialize'),require('./angular-route'),require('./angular-sanitize'),'ui.grid'])
	.run(function($rootScope) {
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
	})


'use strict';

var angular = require('angular');
var app = angular.module('myApp', [
		require('./app/controller'),
		require('./app/service'),
		require('./app/directive'),
		require('./app/settings'),
		require('./angular-materialize'),
		require('./angular-route'),
		require('./angular-sanitize'),
		require('./angular-datatables'),
	])
	.run(function($rootScope, $location,$routeParams, DTDefaultOptions) {
		$rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
			$rootScope.currentPath = $location.path();
			console.log('Current route name: ' + $location.path());
			// Get all URL parameter
			console.log($routeParams);
		});
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
	.config(function($routeProvider, $locationProvider) {
		// when functional models finished, change the route to dynamic
		$routeProvider
			.when('/user', {
				templateUrl: 'views/user-list.html',
				controller: 'UserCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})
			// $locationProvider.html5Mode({enabled: true});	
	})
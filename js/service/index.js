'use strict';

var app = require('angular').module('myApp');
app.constant('APP_SETTINGS',{
	'server' : 'http://localhost'
});
app.service('TodoService', require('./test_todo'));
app.service('ToastService', require('./toastService'));
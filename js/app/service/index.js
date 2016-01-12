'use strict';

var app = require('angular').module('myApp.Srv',[]);
app.constant('APP_SETTINGS',{
	'server' : 'http://localhost:8081'
});
app.service('BaseAPIService',function(APP_SETTINGS,$http){
	var URL;
	return {
		init:function(path){
			URL = APP_SETTINGS.server + "/" + path;
			this.URL = URL;
			return this;
		},
		get:function(id){
			return $http.get(URL+"/"+id);
		},
		list:function(params){
			return $http.get(URL+"/"+"list");
		}
	}
});
app.service('TodoService', require('./test_todo'));
app.service('ToastService', require('./toastService'));
app.service('UserService', require('./userService'));




module.exports = 'myApp.Srv';

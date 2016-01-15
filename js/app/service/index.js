'use strict';

var app = require('angular').module('myApp.Srv',[]);

app.service('BaseAPIService',function(APP_SETTINGS,$http,$q){
	var URL;
	return {
		init:function(path){
			URL = APP_SETTINGS.server + "/" + path;
			this.URL = URL;
			return this;
		},
		get:function(id){
			// return $http.get(URL+"/"+id);
			var deferred = $q.defer();
			$http.get(URL+"/"+id).then(function(data){
				// console.log(data);
				deferred.resolve(data.data);
			},function(reason){
				deferred.reject(reason);
			});
			return deferred.promise;
		},
		list:function(params){
			// return $http.get(URL+"/"+"list");
			var deferred = $q.defer();
			$http.get(URL+"/"+"list").then(function(data){
				// console.log(data);
				deferred.resolve(data.data);
			},function(reason){
				deferred.reject(reason);
			});
			return deferred.promise;
		},
		add:function(data){
			var deferred = $q.defer();
			$http.put(URL+"/",data).then(function(data){
				// console.log(data);
				deferred.resolve(data.data);
			},function(reason){
				deferred.reject(reason);
			});
			return deferred.promise;
		},
		update:function(data){
			// return $http.post(URL+"/"+data.id,data)
			var deferred = $q.defer();
			$http.post(URL+"/"+data.id,data).then(function(data){
				// console.log(data);
				deferred.resolve(data.data);
			},function(reason){
				deferred.reject(reason);
			});
			return deferred.promise;
		},
		delete:function(id){
			// return $http.post(URL+"/"+data.id,data)
			var deferred = $q.defer();
			$http.delete(URL+"/"+id).then(function(data){
				// console.log(data);
				deferred.resolve(data.data);
			},function(reason){
				deferred.reject(reason);
			});
			return deferred.promise;
		},
	}
});
app.service('TodoService', require('./test_todo'));
app.service('ToastService', require('./toastService'));
app.service('UserService', require('./userService'));




module.exports = 'myApp.Srv';

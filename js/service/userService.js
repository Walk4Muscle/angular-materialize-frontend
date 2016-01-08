'use strict';

module.exports = function(BaseAPIService,$q) {
	var path = 'user',
		adapter = BaseAPIService.init(path),
		callback = function(){};
	return {
		get:function(id){
			var deferred = $q.defer();
			adapter.get(id).then(function(data){
				// console.log(data);
				deferred.resolve(data);
			},function(reason){
				deferred.reject(reason);
			});
			return deferred.promise;
		},
		list:function(params){
			console.log(params);
			var deferred = $q.defer();
			adapter.list(params).then(function(data){
				// console.log(data);
				deferred.resolve(data);
			},function(reason){
				deferred.reject(reason);
			});
			return deferred.promise;
		}
	}
};
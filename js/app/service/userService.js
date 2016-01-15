'use strict';

module.exports = function(BaseAPIService) {
	var path = 'user',
		adapter = BaseAPIService.init(path),
		callback = function(){};
	return {
		get:function(id){
			// var deferred = $q.defer();
			// adapter.get(id).then(function(data){
			// 	// console.log(data);
			// 	deferred.resolve(data);
			// },function(reason){
			// 	deferred.reject(reason);
			// });
			// return deferred.promise;
			return adapter.get(id);
		},
		list:function(params){
			return adapter.list(params);
		},
		update:function(data){
			return adapter.update(data);
		},
		add:function(data){
			return adapter.add(data);
		},
		delete:function(data){
			return adapter.delete(data.id);
		},
	}
};
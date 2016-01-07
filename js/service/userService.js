'use strict';

module.exports = function(BaseAPIService) {
	var path = 'user',
		adapter = BaseAPIService.init(path),
		callback = function(){};
	return {
		get:function(id){
			console.log(adapter.get(id))
		},
		list:function(){

		}
	}
};
'use strict';
 
module.exports = function($http,$q) {
  return {
  	getSomething : function(){
  		var deferred = $q.defer();
  		$http.get("https://api.github.com/users/mralexgray/repos").then(function(res){
  			deferred.resolve(res);
  		})
  		return deferred.promise; 
  	}
  }
};
'use strict';

module.exports = function() {
	var duration = 3000,
		callback = function(){},
		toastclass = {
			'info' : 'light-blue lighten-1',
			'warn' : 'orange darken-1',
			'error' : 'red darken-1'
		}
	return {
		show: function(msg) {
			Materialize.toast((msg?msg:'test message'), duration, toastclass['info'], callback);
		},

		warn : function(msg){
			Materialize.toast((msg?msg:'test message'), duration, toastclass['warn'], callback);

		},
		error:function(msg){
			Materialize.toast((msg?msg:'test message'), duration, toastclass['error'], callback);
			
		}
	}
};
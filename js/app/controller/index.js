'use strict';

var app = require('angular').module('myApp.Ctrl', ['datatables','datatables.bootstrap']);


app.controller('TestCtrl', require('./test_todo'));
app.controller('LoginCtrl', require('./LoginController'));
app.controller('UserCtrl', require('./UserController'));


module.exports = 'myApp.Ctrl';
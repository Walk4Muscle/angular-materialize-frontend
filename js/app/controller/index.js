'use strict';

var app = require('angular').module('myApp.Ctrl', ['datatables','datatables.bootstrap']);


app.controller('TestCtrl', require('./test_todo'));
app.controller('LoginCtrl', require('./LoginController'));


module.exports = 'myApp.Ctrl';
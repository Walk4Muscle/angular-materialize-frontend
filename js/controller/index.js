'use strict';

var app = require('angular').module('myApp');

app.controller('TestCtrl', require('./test_todo'));
app.controller('LoginCtrl', require('./LoginController'));
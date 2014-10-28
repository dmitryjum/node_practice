#!/usr/bin/env node
// I should run "npm link" in terminal to make sure changes in
// package.json allow to start this server from anywhere in terminal
// "name": "airline",
// and this right before dependencies
// "bin": "./server.js",
var http = require('http'),
	flights = require('./data'),
	db = require('./db'),
	app = require('./app')(flights, db);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
'use strict';
var express = require('express'),
	logger = require('morgan'),
	env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev',
	app = express(),
	port = 3031;

var indexFile = __dirname + '/build/index.html';
console.log(indexFile)
app.get('/', function(req, res){
	res.sendFile(indexFile);
});


//Final config
app.use(express.static(__dirname + '/build'));

app.listen(port);
console.log('Listening on port ' + port + '...');
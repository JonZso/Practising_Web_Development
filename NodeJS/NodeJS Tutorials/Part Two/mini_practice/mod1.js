// var _ = require ('underscore');
// var m2 = require('./mod2');
var http = require('http');

var server = http.createServer(function (request, response) {
console.log('somebobdy is requesting');
response.write('helo');
response.end();
	// body...
});

server.listen(3000);
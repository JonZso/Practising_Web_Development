var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) { //creating server that takes request and has response.
    //response headers -> Content-type or Status
    console.log('Somebody has connected: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else if(req.url === '/api/ninjas'){
        var ninjas = [{name: 'jon', age: 23}, {name: 'jessie', age: 22}];
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(404, {'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

});

//TODO: adding port
server.listen(3001, '127.0.0.1');
console.log("Server Running...");

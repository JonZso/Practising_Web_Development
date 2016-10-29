/**
 * Created by Jon on 19/10/2016.
 */
var http = require('http');
var fs = require('fs');

//Creating a readable stream.

// myReadStream.on('data', function (chunk) {
//     console.log('new chunk recieved: ');
//     myWriteStream.write(chunk);
// });



 var server = http.createServer(function (req, res) { //creating server that takes request and has response.
 //response headers -> Content-type or Status
 console.log('Somebody has connected / made request ');

 res.writeHead(200,{'Content-Type': 'text/html'});
     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
     myReadStream.pipe(res)

 //Won't work because no port number has been set

 });

 //TODO: adding port
 server.listen(3000, '192.168.0.4');
 console.log("Server Running...")


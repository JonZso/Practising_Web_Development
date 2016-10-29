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
    res.writeHead(200,{'Content-Type': 'application/json'});
    var myObj ={
        name: 'Jon',
        job: 'superhero',
        age: 27
    };
    res.end(JSON.stringify(myObj));

});

//TODO: adding port
server.listen(3000, '127.0.0.1');
console.log("Server Running...")


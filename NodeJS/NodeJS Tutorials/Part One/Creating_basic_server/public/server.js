/**
 * Created by Oxygen on 13/10/2016.
 */

var http = require('http');
var fs = require('fs');



// function onRequest(request, response) {
//     //This was used for testing..
//     console.log("A User has made a request." + request.url);
//     response.writeHead(200,{"Context-Type": "text/plain"});
//     response.write ("Data would be here... if i had any!");
//     response.end();
// }

//404 response.
function send404Response(response) {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("Error 404: Page not found!");
    response.end();


}

//Handle user request
function onRequest(request, response) {
    if (request.method == 'GET' && request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(response);
    }else{
        send404Response(response);
    }


}

http.createServer(onRequest).listen(8888);
console.log("Server is now running...");
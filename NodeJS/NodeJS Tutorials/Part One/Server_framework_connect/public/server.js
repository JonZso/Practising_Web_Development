/**
 * Created by Oxygen on 13/10/2016.
 */

var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, reponse, next) {
    console.log("This is my first function")
    next(); //moves to the next function.
}

function doSecond(request, reponse, next) {
    console.log("This is my second function")
    next();
}

function profile(request, response){
    console.log('User Requested the profile page.')

}
function forum(request, response){
    console.log('user Requested the forum page')

}

//
// app.use(doFirst);
// app.use(doSecond);

app.use('/profile', profile); //when ever user makes a request for profile page... call profile.
app.use('/forum', forum); //when ever user makes a request for profile page... call profile.

http.createServer(app).listen(8888);
console.log("Server is running..");
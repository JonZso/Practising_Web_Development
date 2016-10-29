var express = require('express');
var todoController = require('./controllers/todoController')
//setting up app.js
var app = express();


//setup template engine
app.set('view engine', 'ejs');

//static files.
app.use(express.static('./public'));


//fire Controllers.
todoController(app);


//listen to port
app.listen(3000,'192.168.0.13');
console.log('You are listening to port 3000');
/**
 * Created by Oxygen on 19/10/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false }); //pasted from their website npm body-parser (google)


app.set('view engine','ejs'); //use EJS as view engine.
// app.use('/stuff', express.static('stuff'));
app.use('/stuff', express.static('../stuff'));




app.get('/', function (req, res) {
    console.log('user is at index');
    // res.sendfile(__dirname + '/index.html')
    res.render('index')
});

app.get('/contact', function (req, res) {
    console.log(req.query);
    // res.sendfile(__dirname + '/contact.html')
    res.render('contact',{qs: req.query});
});

//noinspection JSUnresolvedFunction
app.post('/contact',urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success',{data: req.body});
});

app.get('/profile/:name', function (req, res) { // :id represents an id could also have :name or whatever.
    var data = {ext: 334, status: 'in a meeting.', fav_food: ['Nachos','Pizza','Chicken','Tacos']};
    res.render('profile',{person: req.params.name, data: data});
});

console.log('running..');
app.listen(3000);



// res.send('You have requested to see id: ' + req.params.id); // parameter of id


//TODO: Inject Template.
// VIDEO 29

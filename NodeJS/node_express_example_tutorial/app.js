var express = require('express');
var path = require('path'); //file path
var logger = require('morgan'); //Module for logging stuff into terminal.
var cookieParser = require('cookie-parser'); //Handling cookies
var bodyParser = require('body-parser'); //Parsing body or JSON parsing.

var routes = require('./routes/index');  //Brains behind everything.
var about = require('./routes/about');  //Brains behind everything.

var app = express(); //Initializng everything to use express.

//Local Variable
app.locals.points = "6,424";
app.locals.nickname = "Mr Jon";
// app.locals.videodata = require('./videodata.json');


// view engine setup
app.set('views', path.join(__dirname, 'views'));   // this is setting up how views are handled.
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//Note: This is setting up how data is logged.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/about', about);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

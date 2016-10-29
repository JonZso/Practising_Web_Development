var bodyParser = require('body-parser');
var mongoose = require('mongoose'); // required for mongoDatervase (mLab)


//Connect to datbase
mongoose.connect("mongodb://test:test@ds047075.mlab.com:47075/todo"); //<username>:<password>

//Creating a scheme = this will be like a blueprint
var todoScheme = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoScheme);


// var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'eat toast'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {

    app.get('/todo', function (req, res) {
        //get data from mongodb and pass it to view..
        Todo.find({}, function (err, data) {
            if (err) throw err;
            res.render('todo', {todos: data})

        });
    });

    //noinspection JSUnresolvedFunction
    app.post('/todo', urlencodedParser, function (req, res) {

        //get data from the view and add it to the mongoDB.
        var newTodo = Todo(req.body).save(function (err, data) {
            if (err) throw err;
            res.json(data);
        });
    });

    //noinspection JSUnresolvedFunction
    app.delete('/todo/:item', function (req, res) {
        //delete requested item from mongoDB.

        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
            if (err) throw err;
            res.json(data);
        });

    });

};
//TODO: Can't seem to delete.. 11:45 #34 Video.
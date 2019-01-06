var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

// save new something


// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log(e);
// });

// var otherTodo = new Todo({
//     text: 'Feed the cat',
//     completed: false,
//     completedAt: 2019010615231000
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved', doc);
// }, (e) => {
//     console.log(e);
// });



// var user = new User({
//     email: 'anuruddha@gmail.com'
// });

// user.save().then((doc) => {
//     console.log('Saved', doc);
// }, (e) => {
//     console.log('error', e);
// });
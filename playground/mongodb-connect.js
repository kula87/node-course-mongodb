//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    var db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log('Inserted todo', JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Anuruddha Kulatunga',
    //     age: 50,
    //     location: 'Tokyo'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert to Users', err);
    //     }
    //     console.log('Inserted to Users', JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
    // });

    // //db.close();
    client.close();

});
console.log('Finished');
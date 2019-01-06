//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    var db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c315818d338906aa60960e4'), completed:true
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to insert todo', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count ${count}`);
    // }, (err) => {
    //     console.log('Unable to insert todo', err);
    // });
    db.collection('Users').find({
        name:'Anuruddha Kulatunga'
    }).toArray().then((docs) => {
        console.log('My docs', JSON.stringify(docs,undefined,2));
    }, (err)=>{
        console.log('Unable to find any docs');
    });

    client.close();

});
console.log('Finished');
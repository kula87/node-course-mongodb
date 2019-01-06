//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    var db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c315818d338906aa60960e4')
    }, {
            $set: {
                completed: true
            }
        }, { returnOriginal: false }).then((result) => {
            console.log(result);
        });

    client.close();

});
console.log('Finished');
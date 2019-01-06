//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    var db = client.db('TodoApp');

    // db.collection('Users').find({
    //     name:'Anuruddha Kulatunga'
    // }).toArray().then((docs) => {
    //     console.log('My docs', JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log('Unable to find any docs');
    // });

    // delete Many
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // });

    // delete One
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) =>{
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'Anuruddha Kulatunga'}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c318c9dd338906aa609694f') }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    client.close();

});
console.log('Finished');
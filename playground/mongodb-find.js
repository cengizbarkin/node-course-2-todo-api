//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server ${err}`);
  }
  console.log(`Connected to MongoDB server`);

/*
  db.collection('Todos').find({_id: new ObjectID('5859080f30e44b35169e75b3')}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todo(s)', err);
  });



db.collection('Todos').find().count().then((count) => {
  console.log(`Todos: ${count}`);
}, (err) => {
  console.log('Unable to fetch todo(s)', err);
});

*/


db.collection('Users').find({name: 'Cengiz'}).toArray().then((docs) => {
  console.log(docs);
}, (err) => {
  console.log(err);
});

  db.close();

});

//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server ${err}`);
  }
  console.log(`Connected to MongoDB server`);

/*
  db.collection('Todos').findOneAndUpdate({_id: new ObjectID('58597640142ff5644e2a1e10')
}, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }). then((result) => {
    console.log(result);
  });
  //db.close();
*/

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58590a141768e33592a764cb')
}, {
  $set: {
    name: 'Cengiz'
    },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
  });


});

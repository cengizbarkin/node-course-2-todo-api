//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log(`Unable to connect to MongoDB server ${err}`);
  }
  console.log(`Connected to MongoDB server`);

  //deleteMany
  /*

  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    console.log(result);
  }, (err) => {

  });


  //deleteOne

  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });



  //findOneAndDelete

db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  console.log(result);
});

*/


db.collection('Users').deleteOne({_id: new ObjectID('5859317d0cb20b08d06ff99a')}).then((result)=> {
  console.log(result);
});
  //db.close();

});

const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



let id = '585bd13ed3801f05ee3d582734';

let userID = '58599f91b9bece1f89eb39be';

if(!ObjectID.isValid(id)) {
  console.log('ID is not Valid');
}

/*
Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('Todo', todo);
});


Todo.findById(id).then((todo)=> {
  if(!todo) {
    return console.log('Id not found');
  }
  console.log('Todo by ID', todo);
}).catch((err) => {
  console.log(err);
});
*/


User.findById(userID).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
});

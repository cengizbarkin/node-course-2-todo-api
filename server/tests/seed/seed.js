
const todos = [{
  _id: new ObjectID(),
  text: 'First test to do'
}, {
  _id: new ObjectID(),
  text: 'Second test to do'
}];


beforeEach((done)=> {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

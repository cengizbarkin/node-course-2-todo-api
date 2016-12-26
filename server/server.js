require('./config/config');

const _ = require('lodash');
const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');
let {Todo} = require('./models/todo.js');
let {User} = require('./models/user.js');


let app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });


  todo.save().then((doc)=> {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.get('/todos', (req, res) => {
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (err)=>{
    res.status(400).send(e);
  });
});


app.delete('/todos/:id', (req, res) => {
  console.log('selam');
});


app.get('/todos/:id', (req, res) => {
  let id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  };
  Todo.findById(id).then((data)=> {
    res.send({data});
    console.log(JSON.stringify(data));
  }, (err) => {
    return res.status(404);
  });

});


app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
});


app.listen(port, ()=> {
  console.log(`Started on port ${port}`);
});



module.exports = {
  app
}

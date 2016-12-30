const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


let password = '123abc!';


bcrypt.genSalt(10, (err, salt)=>{
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });
});


let hashedPassword = '$2a$10$FD.O30wk90tiD89L5PtkfOMkI.e7avM88aDkWzRiwPIvKAW99j7Ny';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});




/*
let data = {
  id: 16
}

let token = jwt.sign(data, '123abc');

console.log(token);

let decoded = jwt.verify(token, '123abc');
console.log(decoded);


let message = 'cengiz';
let hash = SHA256(message).toString();
console.log(`message: ${message} hash: ${hash}`);
let data = {
  id: 4
};
let token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)).toString();
let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if(resultHash === token.hash) {
  console.log('Data was not changed');
} else {
  console.log('Data was changed Dont trust');
}
*/
